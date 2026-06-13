import { useState } from "react";
import { Copy, Download, Link as LinkIcon, Check } from "lucide-react";
import { toast } from "sonner";

export function ExportBar({ getText }: { getText: () => string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(getText());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success("Copied to clipboard");
  }

  function download() {
    const blob = new Blob([getText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "plainly-explanation.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded");
  }

  async function share() {
    try {
      if (typeof navigator !== "undefined" && (navigator as Navigator & { share?: (d: ShareData) => Promise<void> }).share) {
        await (navigator as Navigator & { share: (d: ShareData) => Promise<void> }).share({
          title: "Plainly explanation",
          text: getText(),
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied");
      }
    } catch {
      // cancelled
    }
  }

  const btn = "flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition-colors";

  return (
    <div
      className="sticky bottom-0 z-30 bg-white/95 backdrop-blur"
      style={{ borderTop: "0.5px solid var(--hairline)" }}
    >
      <div className="mx-auto flex max-w-[680px] items-center justify-between gap-3 px-6 py-3">
        <button onClick={copy} className={btn + " text-white"} style={{ background: "var(--teal)" }}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy explanation"}
        </button>
        <button
          onClick={download}
          className={btn + " text-text-primary hover:bg-surface"}
          style={{ border: "0.5px solid var(--hairline)" }}
        >
          <Download size={14} /> Download
        </button>
        <button
          onClick={share}
          className={btn + " text-text-primary hover:bg-surface"}
          style={{ border: "0.5px solid var(--hairline)" }}
        >
          <LinkIcon size={14} /> Share
        </button>
      </div>
    </div>
  );
}