import { useEffect, useState } from "react";
import { Lock } from "lucide-react";

export function PrivacyBanner({ hasAccount = false, onDelete }: { hasAccount?: boolean; onDelete?: () => void }) {
  const [timeLeft, setTimeLeft] = useState("");
  const [start] = useState(Date.now());

  useEffect(() => {
    const DURATION = 30 * 60 * 1000;
    const tick = () => {
      const remaining = DURATION - (Date.now() - start);
      if (remaining <= 0) { setTimeLeft("cleared"); return; }
      const m = Math.floor(remaining / 60000);
      const s = Math.floor((remaining % 60000) / 1000);
      setTimeLeft(`${m}:${s.toString().padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [start]);

  return (
    <div
      className="mb-6 flex items-start gap-3 rounded-xl p-3"
      style={{ background: "var(--surface)", border: "0.5px solid var(--hairline)" }}
    >
      <div
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
        style={{ background: "var(--teal-soft)" }}
      >
        <Lock size={13} color="var(--teal-deep)" />
      </div>
      <div className="flex-1">
        <p className="text-[12px] font-medium text-text-primary">Your document stays private</p>
        {hasAccount ? (
          <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
            Saved to your vault so you can revisit this.{" "}
            <button
              onClick={onDelete}
              className="font-medium"
              style={{ color: "var(--teal)" }}
            >
              Delete it now →
            </button>
          </p>
        ) : (
          <p className="mt-0.5 text-[12px] leading-relaxed text-text-secondary">
            We don't store your document after analysis. Cleared from memory when you close this tab
            {timeLeft && timeLeft !== "cleared" && (
              <span className="font-medium" style={{ color: "var(--teal)" }}> (or in {timeLeft})</span>
            )}
            {timeLeft === "cleared" && (
              <span className="text-text-tertiary"> — memory cleared</span>
            )}
            .
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-1 pt-0.5">
        <div className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--success)" }} />
        <span className="text-[10px] font-medium" style={{ color: "var(--success)" }}>Private</span>
      </div>
    </div>
  );
}