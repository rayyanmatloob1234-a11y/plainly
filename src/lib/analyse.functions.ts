import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const DEFAULT_ANALYSIS_MODEL = "gemini-3.5-flash";
const DEFAULT_CHAT_MODEL = "gemini-3.5-flash";
const MAX_DOCUMENT_CHARS = 18_000;
const GEMINI_URL = (model: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

const FlagSchema = z.object({
  severity: z.enum(["red", "amber", "green"]),
  title: z.string(),
  explanation: z.string(),
  action: z.string().nullable().optional(),
});

const HighlightSchema = z.object({
  label: z.string(),
  quote: z.string(),
  explanation: z.string(),
  severity: z.enum(["red", "amber", "green"]).optional(),
});

const LabValueSchema = z.object({
  name: z.string(),
  value: z.string(),
  unit: z.string().nullable().optional(),
  referenceRange: z.string().nullable().optional(),
  status: z.enum(["normal", "low", "high", "ask_doctor"]),
});

const GeminiResultSchema = z.object({
  docType: z.string(),
  company: z.string().nullable().optional(),
  country: z.string().nullable().optional(),
  language: z.string().nullable().optional(),
  riskLevel: z.enum(["normal", "attention", "urgent", "incorrect"]).optional(),
  summary: z.string(),
  highlights: z.array(HighlightSchema).optional().default([]),
  flags: z.array(FlagSchema),
  actions: z.array(z.string()),
  labValues: z.array(LabValueSchema).optional().default([]),
});

export type LabValue = {
  name: string;
  value: string;
  unit: string | null;
  referenceRange: string | null;
  status: "normal" | "low" | "high" | "ask_doctor";
};

export type AnalyseResult = {
  docType: string;
  company: string;
  country: string;
  riskLevel: "normal" | "attention" | "urgent" | "incorrect";
  summary: string;
  highlights: Array<{ label: string; quote: string; explanation: string; severity: "red" | "amber" | "green" }>;
  flags: Array<{ severity: "red" | "amber" | "green"; title: string; description: string }>;
  actions: string[];
  labValues: LabValue[];
};

const AnalyseInput = z.object({
  text: z.string().min(1).max(50000).optional(),
  fileBase64: z.string().optional(),
  fileMime: z.string().optional(),
  fileName: z.string().optional(),
  language: z.string().min(2).max(40).default("English"),
});

const PLAINLY_SYSTEM_PROMPT = `You are Plainly's document analyst. Your job is to read confusing documents and explain them like a brilliant, calm lawyer friend who genuinely wants to help — not scare, not impress, not overwhelm.

Your personality:
- Direct and honest. Say what's actually going on.
- Warm but not fluffy. Care about the person's money, rights, and time.
- Specific. Name the exact charge, clause, line, or amount.
- Empowering. Tell people what they can DO, not just what's wrong.
- Never alarmist. If something is fine, say so. Not everything is a scam.

You are never robotic, vague, overly cautious, preachy, or condescending. Never say "I'm just an AI" as a cop-out — your job is to explain documents clearly.

CRITICAL HONESTY RULES — these override everything else:
- riskLevel MUST reflect what is actually in THIS document. Never default to the same level every time.
- If the document has zero red or amber flags → riskLevel is "normal"
- If the document has amber flags only → riskLevel is "attention"
- If the document has even ONE red flag → riskLevel is "urgent"
- If values, charges, or clauses appear incorrect or inconsistent → riskLevel is "incorrect"
- NEVER assign "urgent" to a clean document. NEVER assign "normal" to a document with red flags.
- highlights must be direct exact quotes from THIS document. If there is nothing suspicious, return an empty array. Do not invent highlights.
- flags must be based on actual content found in THIS document. Every flag must reference a specific line, amount, date, clause, or value that actually appears in the document.
- If the document is completely clean and normal, say so honestly. Most documents are fine. Saying "this looks normal" is valuable and builds trust.
- If a charge, value, or clause is unusual, say exactly why it is unusual and what the normal expectation would be.

Always:
1) Identify the document first: type, issuer, country, currency, date format.
2) Apply local knowledge for utilities, medical bills, medical reports, lab results, prescriptions, discharge summaries, legal docs, insurance, government notices, employment, and rentals.
3) Structure exactly as: Summary (3-5 sentences), Highlights (exact quoted lines — empty if nothing suspicious), Flags (red/amber/green based on actual content, 3-6 total), Actions (2-4 specific steps today).
4) Never invent charges, clauses, diagnoses, symptoms, medicines, or test values. Only reference what actually appears in the document.
5) If the document is clean, say so clearly with green flags and riskLevel "normal."

For medical reports and lab results:
- ALWAYS start the summary with this exact sentence: "Plainly is not diagnosing you. These are the values from your report to discuss with your doctor."
- Explain what each visible test, value, range, medicine, or note means in plain language.
- Clearly separate "what the document says" from "what this could mean."
- Do not diagnose, prescribe, or tell the user to start/stop medicine. Use "ask your doctor about..." phrasing.
- Read the reference range DIRECTLY from the document. Use ONLY what the document itself states as normal range.
- Classify each lab value as: "normal" (within printed range), "low" (below printed range), "high" (above printed range), "ask_doctor" (no range printed or qualitative result like positive/detected/trace).
- Never say a value "indicates" a disease. Say "this value is above the range printed on your report — ask your doctor what this means for you."
- Populate the labValues array for every medical lab document. Leave it empty for non-medical documents.

Tone:
- BAD (generic): Same flags on every document regardless of content.
- BAD (alarmist): "WARNING: Potentially fraudulent charges detected!"
- GOOD: "Line 7 charges $340 for observation services. You were admitted as inpatient — this may be an error. Call billing and ask them to reclassify."
- GOOD (clean doc): "This bill looks correct. Nothing urgent here."

Apply company- and country-specific knowledge where relevant:
- K-Electric FPA in Pakistan is a government surcharge, not a company fee
- NHS treatment in the UK is free — any bill from NHS should be queried
- Observation vs inpatient status in US hospitals is a common billing error
- UK tenancy deposit limits are legally capped
- Insurance cooling-off periods exist in most countries (14-30 days)

Language: Write your ENTIRE response in the requested language. Do not mix languages. For RTL languages (Urdu, Arabic) write naturally for RTL reading.

Return ONLY a JSON object — no preamble, no markdown fences:
{
  "docType": "string",
  "company": "string or null",
  "country": "string or null",
  "language": "string",
  "riskLevel": "normal | attention | urgent | incorrect",
  "summary": "string (3-5 sentences, specific to THIS document)",
  "highlights": [
    { "label": "string (<=5 words)", "quote": "exact text from document", "explanation": "why this matters in 1 sentence", "severity": "red|amber|green" }
  ],
  "flags": [
    { "severity": "red|amber|green", "title": "string (<=5 words)", "explanation": "string (2-3 sentences, specific)", "action": "string or null" }
  ],
  "actions": ["string", "string"],
  "labValues": [
    { "name": "test name exactly as written", "value": "result exactly as written", "unit": "unit or null", "referenceRange": "range as printed or null", "status": "normal|low|high|ask_doctor" }
  ]
}`;

const COMPARE_SYSTEM_PROMPT = `You are Plainly's document comparison analyst. You receive two versions of the same document type — two bills, statements, or contracts from different periods.

Your job:
1. Find every meaningful difference — amounts, dates, charges, clauses, units, rates, fees
2. For each difference explain exactly WHY it changed if the documents give clues
3. Give a plain-English verdict on whether changes are normal, worth questioning, or a problem

RULES:
- Only report differences that actually exist. Never invent differences.
- Always calculate the exact difference ("increased by Rs 4,200" not just "increased")
- direction: "up" if newer value is higher, "down" if lower, "same" if unchanged
- severity: "red" = significant increase or problem, "amber" = moderate change worth knowing, "green" = decrease or positive change
- Be specific about which line items changed, not just totals

Return ONLY this JSON — no preamble, no markdown fences:
{
  "summary": "2-3 sentence plain English overview of what changed",
  "changes": [
    {
      "label": "what changed",
      "before": "value in older document",
      "after": "value in newer document",
      "difference": "exact difference e.g. +Rs 4,200 or -12 units",
      "direction": "up | down | same",
      "severity": "red | amber | green",
      "reason": "why this changed based on what the documents actually say — be specific"
    }
  ],
  "verdict": "1-2 sentence bottom line — normal, question it, or problem?"
}`;

function stripJsonFences(s: string): string {
  const t = s.trim();
  const fence = t.match(/^```(?:json)?\s*([\s\S]*?)\s*```$/i);
  return fence ? fence[1].trim() : t;
}

function parseGeminiJson(raw: string): unknown {
  try {
    return JSON.parse(stripJsonFences(raw));
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    throw new Error(`Gemini returned malformed JSON (${message}). Try again once; if it repeats, use a shorter or clearer document.`);
  }
}

function normalizeDocumentText(text: string) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function clampDocumentText(text: string, maxChars = MAX_DOCUMENT_CHARS) {
  const normalized = normalizeDocumentText(text);
  if (normalized.length <= maxChars) return normalized;
  const head = Math.floor(maxChars * 0.7);
  const tail = maxChars - head - 48;
  return `${normalized.slice(0, head)}\n\n[...document truncated...]\n\n${normalized.slice(-tail)}`;
}

async function callGemini(
  apiKey: string,
  model: string,
  parts: Array<Record<string, unknown>>,
  jsonOutput: boolean,
  systemPrompt?: string,
): Promise<string> {
  const body: Record<string, unknown> = {
    systemInstruction: { role: "system", parts: [{ text: systemPrompt ?? PLAINLY_SYSTEM_PROMPT }] },
    contents: [{ role: "user", parts }],
    generationConfig: jsonOutput
      ? { temperature: 0.25, responseMimeType: "application/json", maxOutputTokens: 4096 }
      : { temperature: 0.4, maxOutputTokens: 768 },
  };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 75_000);
  let res: Response;
  try {
    let attempt = 0;
    while (true) {
      res = await fetch(`${GEMINI_URL(model)}?key=${encodeURIComponent(apiKey)}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      if (![429, 503].includes(res.status) || attempt >= 3) break;
      await new Promise((r) => setTimeout(r, 1500 * (attempt + 1)));
      attempt++;
    }
  } catch (err) {
    if ((err as Error).name === "AbortError") {
      throw new Error("Gemini took too long. Try a shorter document or paste the text directly.");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
  if (!res.ok) {
    const errText = await res.text();
    let detail = errText.slice(0, 400);
    try {
      const parsed = JSON.parse(errText) as { error?: { message?: string } };
      detail = parsed.error?.message || detail;
    } catch { /* keep raw text */ }
    if (res.status === 429) throw new Error("Gemini's free tier is rate-limited right now. Wait ~30 seconds and try again, or paste the document text directly.");
    if (res.status === 503) throw new Error("Gemini is busy right now. Wait about a minute and try again.");
    if (res.status === 400 && detail.toLowerCase().includes("api key not valid")) throw new Error("Gemini API key is not valid. Create a new key in Google AI Studio and update GEMINI_API_KEY.");
    if (res.status === 403) throw new Error(`Gemini rejected this request. Check your API key is enabled. Details: ${detail}`);
    if (res.status === 404) throw new Error(`Gemini model "${model}" was not found. Try setting GEMINI_ANALYSIS_MODEL=gemini-1.5-flash. Details: ${detail}`);
    throw new Error(`Gemini API error (${res.status}): ${detail}`);
  }
  const json = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> }; finishReason?: string }>;
  };
  const candidate = json.candidates?.[0];
  if (candidate?.finishReason === "MAX_TOKENS") {
    throw new Error("Gemini's response was cut off. Try a shorter document or paste only the important pages.");
  }
  const text = candidate?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
  if (!text) throw new Error("Gemini returned an empty response.");
  return text;
}

export const analyseDocument = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => AnalyseInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("Missing GEMINI_API_KEY");
    const model = process.env.GEMINI_ANALYSIS_MODEL || DEFAULT_ANALYSIS_MODEL;
    if (!data.text && !data.fileBase64) throw new Error("Provide either text or a file.");

    const documentText = data.text ? clampDocumentText(data.text) : null;
    const parts: Array<Record<string, unknown>> = [];
    parts.push({
      text:
        `Explain this document in ${data.language}. Return ONLY the JSON object described in the system prompt.\n\n` +
        (documentText
          ? `${data.fileName ? `Document name: ${data.fileName}\n\n` : ""}Document text:\n\n${documentText}`
          : `The user uploaded a document${data.fileName ? ` named "${data.fileName}"` : ""}. Read it and explain it.`),
    });
    if (!documentText && data.fileBase64 && data.fileMime) {
      parts.push({ inlineData: { mimeType: data.fileMime, data: data.fileBase64 } });
    }

    try {
      const raw = await callGemini(key, model, parts, true);
      const parsed = GeminiResultSchema.parse(parseGeminiJson(raw));
      const result: AnalyseResult = {
        docType: parsed.docType,
        company: parsed.company || "Unknown",
        country: parsed.country || "Unknown",
        riskLevel: parsed.riskLevel || "normal",
        summary: parsed.summary,
        highlights: parsed.highlights.slice(0, 5).map((h) => ({
          label: h.label,
          quote: h.quote,
          explanation: h.explanation,
          severity: h.severity || "amber",
        })),
        flags: parsed.flags.map((f) => ({
          severity: f.severity,
          title: f.title,
          description: f.action ? `${f.explanation}\n\n→ ${f.action}` : f.explanation,
        })),
        actions: parsed.actions,
        labValues: (parsed.labValues || []).map((v) => ({
          name: v.name,
          value: v.value,
          unit: v.unit || null,
          referenceRange: v.referenceRange || null,
          status: v.status,
        })),
      };
      return result;
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`Couldn't analyse this document: ${msg}`);
    }
  });

const ChatInput = z.object({
  docContext: z.string().min(1).max(20000),
  history: z
    .array(z.object({ role: z.enum(["user", "assistant"]), content: z.string() }))
    .max(20)
    .default([]),
  message: z.string().min(1).max(2000),
  language: z.string().default("English"),
});

export const chatFollowUp = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ChatInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("Missing GEMINI_API_KEY");
    const model = process.env.GEMINI_CHAT_MODEL || DEFAULT_CHAT_MODEL;
    const url = `${GEMINI_URL(model)}?key=${encodeURIComponent(key)}`;
    const contents = [
      ...data.history.map((m) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })),
      { role: "user", parts: [{ text: data.message }] },
    ];
    const sys = `You are Plainly, helping a user understand a specific document. Respond in ${data.language}. Be warm, brief, specific. Reference the document. Never invent facts.\n\nDOCUMENT CONTEXT:\n${data.docContext}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { role: "system", parts: [{ text: sys }] },
        contents,
        generationConfig: { temperature: 0.5 },
      }),
    });
    if (!res.ok) {
      const t = await res.text();
      throw new Error(`Gemini error (${res.status}): ${t.slice(0, 300)}`);
    }
    const json = (await res.json()) as {
      candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
    };
    const reply = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
    return { reply };
  });

const CompareInput = z.object({
  doc1Text: z.string().min(1).max(25000),
  doc2Text: z.string().min(1).max(25000),
  language: z.string().default("English"),
});

export const compareDocuments = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => CompareInput.parse(input))
  .handler(async ({ data }) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("Missing GEMINI_API_KEY");
    const model = process.env.GEMINI_ANALYSIS_MODEL || DEFAULT_ANALYSIS_MODEL;
    const parts = [{
      text: `Compare these two documents and respond in ${data.language}. Return ONLY the JSON.\n\nOLDER DOCUMENT:\n${clampDocumentText(data.doc1Text, 9000)}\n\n---\n\nNEWER DOCUMENT:\n${clampDocumentText(data.doc2Text, 9000)}`,
    }];
    const res = await fetch(`${GEMINI_URL(model)}?key=${encodeURIComponent(key)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemInstruction: { role: "system", parts: [{ text: COMPARE_SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts }],
        generationConfig: { temperature: 0.2, responseMimeType: "application/json", maxOutputTokens: 2048 },
      }),
    });
    if (!res.ok) throw new Error(`Comparison failed (${res.status})`);
    const json = (await res.json()) as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
    const raw = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
    if (!raw) throw new Error("Empty response from Gemini.");
    return JSON.parse(stripJsonFences(raw));
  });