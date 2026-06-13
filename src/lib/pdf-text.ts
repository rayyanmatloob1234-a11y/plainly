const MAX_PDF_PAGES = 12;
const MAX_EXTRACTED_CHARS = 18_000;

type PdfTextItem = {
  str?: string;
};

function normalizeExtractedText(text: string) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function clampExtractedText(text: string, maxChars = MAX_EXTRACTED_CHARS) {
  const normalized = normalizeExtractedText(text);
  if (normalized.length <= maxChars) return normalized;

  const head = Math.floor(maxChars * 0.7);
  const tail = maxChars - head - 48;

  return `${normalized.slice(0, head)}\n\n[...document truncated...]\n\n${normalized.slice(-tail)}`;
}

export async function extractPdfText(file: File): Promise<string> {
  const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const bytes = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({
    data: bytes,
    disableWorker: true,
  } as Parameters<typeof pdfjs.getDocument>[0]);
  const pdf = await loadingTask.promise;

  const pages: string[] = [];
  for (let pageNumber = 1; pageNumber <= Math.min(pdf.numPages, MAX_PDF_PAGES); pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = (textContent.items as PdfTextItem[])
      .map((item) => item.str ?? "")
      .join(" ")
      .trim();

    if (pageText) {
      pages.push(`Page ${pageNumber}\n${pageText}`);
    }

    if (pages.join("\n\n").length >= MAX_EXTRACTED_CHARS) {
      break;
    }
  }

  return clampExtractedText(pages.join("\n\n"));
}