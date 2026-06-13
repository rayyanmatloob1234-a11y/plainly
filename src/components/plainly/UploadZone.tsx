import { useRef, useState, type DragEvent } from "react";
import { UploadCloud } from "lucide-react";

const docTypes = ["Medical reports", "Lab results", "Medical bills", "Utility bills", "Bank statements", "Legal contracts"];

export type UploadPayload =
  | { kind: "text"; text: string }
  | { kind: "file"; file: File };

export function UploadZone({ onSubmit, disabled }: { onSubmit: (p: UploadPayload) => void; disabled?: boolean }) {
  const [dragging, setDragging] = useState(false);
  const [pasteMode, setPasteMode] = useState(false);
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onSubmit({ kind: "file", file });
  }

  return (
    <div className="mx-auto w-full max-w-[560px]">
      {!pasteMode ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="cursor-pointer rounded-[20px] bg-white px-10 py-14 text-center transition-all"
          style={{
            border: `1px dashed ${dragging ? "var(--teal)" : "rgba(0,0,0,0.15)"}`,
            background: dragging ? "#f0faf6" : "#fff",
            transform: dragging ? "scale(1.01)" : "scale(1)",
          }}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept="application/pdf,image/*,.txt"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) onSubmit({ kind: "file", file });
            }}
          />
          <UploadCloud size={40} color="var(--text-tertiary)" strokeWidth={1.5} className="mx-auto" />
          <div className="mt-5 text-[15px] font-medium text-text-primary">Drop your document here</div>
          <div className="mt-1 text-[13px] text-text-tertiary">
            PDF, image, report, bill, or photo — we'll figure out the rest
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-1.5">
            {docTypes.map((t) => (
              <span
                key={t}
                className="rounded-full px-2.5 py-[3px] text-[11px] font-medium"
                style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-center gap-2.5">
            <span className="text-[12px] text-text-tertiary">or</span>
            <button
              type="button"
              disabled={disabled}
              onClick={(e) => {
                e.stopPropagation();
                setPasteMode(true);
              }}
              className="rounded-full border px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-surface"
              style={{ borderColor: "var(--hairline)" }}
            >
              Paste text instead
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-[20px] bg-white p-6" style={{ border: "1px solid var(--hairline)" }}>
          <textarea
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={10}
            placeholder="Paste the document text here…"
            className="w-full resize-none rounded-lg bg-surface p-4 text-[14px] leading-relaxed text-text-primary outline-none"
            style={{ border: "0.5px solid var(--hairline)" }}
          />
          <div className="mt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setPasteMode(false)}
              className="text-[13px] text-text-secondary hover:text-text-primary"
            >
              ← Upload a file instead
            </button>
            <button
              type="button"
              disabled={!text.trim() || disabled}
              onClick={() => onSubmit({ kind: "text", text })}
              className="rounded-full px-5 py-2 text-[13px] font-medium text-white transition-opacity disabled:opacity-40"
              style={{ background: "var(--teal)" }}
            >
              Explain this
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
