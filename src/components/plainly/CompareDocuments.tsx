import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { compareDocuments } from "@/lib/analyse.functions";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";

type Change = {
  label: string;
  before: string;
  after: string;
  difference: string;
  direction: "up" | "down" | "same";
  severity: "red" | "amber" | "green";
  reason: string;
};

type CompareResult = {
  summary: string;
  changes: Change[];
  verdict: string;
};

const SEV = {
  red:   { bg: "#FEF2F2", text: "#991B1B", border: "#E24B4A" },
  amber: { bg: "#FFFBEB", text: "#92400E", border: "#EF9F27" },
  green: { bg: "#F0FDF4", text: "#166534", border: "#1D9E75" },
};

export function CompareDocuments({ onBack }: { onBack: () => void }) {
  const [doc1, setDoc1] = useState("");
  const [doc2, setDoc2] = useState("");
  const [result, setResult] = useState<CompareResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const compare = useServerFn(compareDocuments);

  const handle = async () => {
    if (!doc1.trim() || !doc2.trim()) { setError("Paste both documents first."); return; }
    setLoading(true); setError(null);
    try {
      const res = await compare({ data: { doc1Text: doc1, doc2Text: doc2, language: "English" } });
      setResult(res as CompareResult);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Comparison failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const DirIcon = ({ d }: { d: "up" | "down" | "same" }) => {
    if (d === "up") return <ArrowUp size={13} />;
    if (d === "down") return <ArrowDown size={13} />;
    return <ArrowRight size={13} />;
  };

  return (
    <div className="mx-auto w-full max-w-[680px] px-6 py-10">
      <button onClick={onBack} className="mb-8 text-[13px] text-text-secondary hover:text-text-primary">
        ← Back
      </button>

      <div className="mb-6">
        <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
          Compare Documents
        </div>
        <h2 className="text-[22px] font-medium text-text-primary" style={{ letterSpacing: "-0.02em" }}>
          See exactly what changed
        </h2>
        <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
          Paste two bills, statements, or contracts. Plainly tells you what changed and why it matters.
        </p>
      </div>

      {/* Two paste areas */}
      <div className="mb-4 grid grid-cols-2 gap-3">
        {[
          { label: "Older document", val: doc1, set: setDoc1 },
          { label: "Newer document", val: doc2, set: setDoc2 },
        ].map(({ label, val, set }) => (
          <div key={label}>
            <div className="mb-2 text-[11px] font-medium uppercase tracking-[0.05em] text-text-secondary">
              {label}
            </div>
            <textarea
              value={val}
              onChange={(e) => set(e.target.value)}
              placeholder={`Paste ${label.toLowerCase()} here...`}
              className="w-full resize-none rounded-xl p-3 text-[12px] leading-relaxed text-text-primary outline-none"
              style={{
                height: 160,
                border: "0.5px solid var(--hairline)",
                background: "var(--surface)",
                fontFamily: "inherit",
              }}
            />
          </div>
        ))}
      </div>

      {error && <p className="mb-3 text-[13px]" style={{ color: "var(--danger)" }}>{error}</p>}

      <button
        onClick={handle}
        disabled={loading}
        className="mb-8 w-full rounded-xl py-3 text-[14px] font-medium text-white transition-opacity"
        style={{ background: loading ? "var(--text-tertiary)" : "var(--teal)", cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Comparing..." : "Compare documents →"}
      </button>

      {result && (
        <div className="space-y-4">
          {/* Summary */}
          <div className="rounded-xl p-4" style={{ background: "var(--surface)", border: "0.5px solid var(--hairline)" }}>
            <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">Summary</div>
            <p className="text-[14px] leading-[1.7] text-text-primary">{result.summary}</p>
          </div>

          {/* Changes */}
          <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
            What changed
          </div>
          <div className="space-y-2.5">
            {result.changes.map((c, i) => {
              const col = SEV[c.severity];
              return (
                <div key={i} className="rounded-xl p-4" style={{ background: col.bg, border: `0.5px solid ${col.border}` }}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[13px] font-medium text-text-primary">{c.label}</span>
                    <span className="flex items-center gap-1 text-[13px] font-medium" style={{ color: col.text }}>
                      <DirIcon d={c.direction} /> {c.difference}
                    </span>
                  </div>
                  <div className="mb-2 flex gap-4">
                    <span className="text-[12px] text-text-secondary">Before: <strong>{c.before}</strong></span>
                    <span className="text-[12px] text-text-secondary">After: <strong style={{ color: col.text }}>{c.after}</strong></span>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ color: col.text }}>{c.reason}</p>
                </div>
              );
            })}
          </div>

          {/* Verdict */}
          <div className="rounded-xl p-4" style={{ background: "#F0FDF4", border: "0.5px solid #1D9E75" }}>
            <p className="text-[13px] leading-relaxed" style={{ color: "#166534" }}>
              <strong>Bottom line: </strong>{result.verdict}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}