import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { Bolt, Check, Lock, GitCompare } from "lucide-react";

import { Navbar } from "@/components/plainly/Navbar";
import { UploadZone, type UploadPayload } from "@/components/plainly/UploadZone";
import { LoadingState } from "@/components/plainly/LoadingState";
import { ResultCard } from "@/components/plainly/ResultCard";
import { ExportBar } from "@/components/plainly/ExportBar";
import { ExampleResult } from "@/components/plainly/ExampleResult";
import { CompareDocuments } from "@/components/plainly/CompareDocuments";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { analyseDocument, type AnalyseResult } from "@/lib/analyse.functions";
import { extractPdfText } from "@/lib/pdf-text";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plainly — Finally, plain English." },
      {
        name: "description",
        content:
          "Upload any confusing document — medical reports, lab results, bills, contracts, or letters — and get a clear, honest explanation in seconds.",
      },
      { property: "og:title", content: "Plainly — Finally, plain English." },
      {
        property: "og:description",
        content: "AI-powered plain English explanations for any confusing document.",
      },
    ],
  }),
  component: Index,
});

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const result = r.result as string;
      resolve(result.split(",")[1] ?? "");
    };
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

type State =
  | { step: "idle"; error?: string }
  | { step: "loading" }
  | { step: "compare" }
  | { step: "result"; result: AnalyseResult; fileName: string; sourceText?: string; sourceFile?: { base64: string; mime: string; name: string } };

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Something went wrong while analysing the document.";
}

function Index() {
  const [state, setState] = useState<State>({ step: "idle" });
  const [language, setLanguage] = useState("English");
  const analyse = useServerFn(analyseDocument);

  async function handleSubmit(payload: UploadPayload) {
    setState({ step: "loading" });
    try {
      if (payload.kind === "text") {
        const result = await analyse({ data: { text: payload.text, language } });
        setState({ step: "result", result, fileName: "Pasted text", sourceText: payload.text });
      } else {
        const mime = payload.file.type || "application/octet-stream";
        let extractedText = "";
        if (mime === "application/pdf") {
          try { extractedText = await extractPdfText(payload.file); } catch { extractedText = ""; }
        }
        const base64 = extractedText ? null : await fileToBase64(payload.file);
        const result = await analyse({
          data: extractedText
            ? { text: extractedText, fileName: payload.file.name, language }
            : { fileBase64: base64!, fileMime: mime, fileName: payload.file.name, language },
        });
        setState({
          step: "result",
          result,
          fileName: payload.file.name,
          sourceText: extractedText || undefined,
          sourceFile: extractedText ? undefined : { base64: base64!, mime, name: payload.file.name },
        });
      }
    } catch (e) {
      const message = getErrorMessage(e);
      toast.error(message);
      setState({ step: "idle", error: message });
    }
  }

  async function handleLanguageChange(next: string) {
    setLanguage(next);
    if (state.step !== "result") return;
    setState({ step: "loading" });
    try {
      const result = await analyse({
        data: state.sourceText
          ? { text: state.sourceText, language: next }
          : { fileBase64: state.sourceFile!.base64, fileMime: state.sourceFile!.mime, fileName: state.sourceFile!.name, language: next },
      });
      setState((prev) =>
        prev.step === "loading"
          ? { step: "result", result, fileName: state.fileName, sourceText: state.sourceText, sourceFile: state.sourceFile }
          : prev,
      );
    } catch (e) {
      const message = getErrorMessage(e);
      toast.error(message || "Couldn't re-translate.");
      setState((prev) =>
        prev.step === "loading"
          ? { step: "result", result: (state as Extract<State, { step: "result" }>).result, fileName: state.fileName, sourceText: state.sourceText, sourceFile: state.sourceFile }
          : prev,
      );
    }
  }

  if (state.step === "result") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <ResultCard
          result={state.result}
          fileName={state.fileName}
          language={language}
          onLanguageChange={handleLanguageChange}
          onReset={() => setState({ step: "idle" })}
        />
        <ExportBar
          getText={() => {
            const r = state.result;
            return [
              `${r.docType} — ${r.company}`,
              "",
              r.summary,
              "",
              "Lines to check:",
              ...(r.highlights.length
                ? r.highlights.map((h) => `[${h.severity.toUpperCase()}] ${h.label}: "${h.quote}" - ${h.explanation}`)
                : ["None found."]),
              "",
              "Things to know:",
              ...r.flags.map((f) => `• [${f.severity.toUpperCase()}] ${f.title} — ${f.description}`),
              "",
              "What to do next:",
              ...r.actions.map((a, i) => `${i + 1}. ${a}`),
              ...(r.labValues?.length ? ["", "Lab Values:", ...r.labValues.map((v) => `${v.name}: ${v.value} ${v.unit || ""} — ${v.status}`)] : []),
            ].join("\n");
          }}
        />
      </div>
    );
  }

  if (state.step === "compare") {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <CompareDocuments onBack={() => setState({ step: "idle" })} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {state.step === "loading" ? (
        <LoadingState />
      ) : (
        <>
          {/* Hero */}
          <section className="px-6 pb-16 pt-20">
            <div className="mx-auto max-w-[600px] text-center">
              <span
                className="inline-block rounded-full px-3 py-1 text-[11px] font-medium"
                style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
              >
                Free to try · No signup required
              </span>
              <h1
                className="mt-5 text-[44px] leading-[1.05] text-text-primary sm:text-[52px]"
                style={{ letterSpacing: "-0.03em", fontWeight: 500 }}
              >
                Finally, plain English.
              </h1>
              <p className="mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.6] text-text-secondary sm:text-[18px]">
                Upload any confusing document and get a clear, honest explanation in seconds.
                Medical reports, lab results, bills, contracts, insurance letters — anything.
              </p>

              <div className="mt-12">
                <UploadZone onSubmit={handleSubmit} />
              </div>

              {state.step === "idle" && state.error && (
                <Alert variant="destructive" className="mt-5 text-left">
                  <AlertTitle>Couldn&apos;t explain this document</AlertTitle>
                  <AlertDescription>{state.error}</AlertDescription>
                </Alert>
              )}

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-text-tertiary">
                <span className="inline-flex items-center gap-1.5">
                  <Lock size={12} /> Private &amp; secure
                </span>
                <span className="text-text-tertiary">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Bolt size={12} /> Results in seconds
                </span>
                <span className="text-text-tertiary">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <Check size={12} /> No signup to try
                </span>
              </div>

              {/* Compare button */}
              <button
                onClick={() => setState({ step: "compare" })}
                className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium transition-colors hover:opacity-80"
                style={{ background: "var(--surface)", border: "0.5px solid var(--hairline)", color: "var(--text-secondary)" }}
              >
                <GitCompare size={13} />
                Compare two documents
              </button>
            </div>
          </section>

          {/* Example */}
          <section id="how" className="px-6 pb-24 pt-8">
            <div className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-text-tertiary">
              See an example
            </div>
            <ExampleResult />
          </section>

          <footer className="px-6 pb-12 text-center text-[12px] text-text-tertiary">
            Plainly · Finally, plain English.
          </footer>
        </>
      )}
    </div>
  );
}