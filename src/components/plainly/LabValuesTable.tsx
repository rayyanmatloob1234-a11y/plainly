type LabValue = {
  name: string;
  value: string;
  unit: string | null;
  referenceRange: string | null;
  status: "normal" | "low" | "high" | "ask_doctor";
};

const STATUS = {
  normal:     { label: "Normal",     bg: "#F0FDF4", border: "#1D9E75", text: "#166534", dot: "#1D9E75" },
  low:        { label: "Low",        bg: "#EFF6FF", border: "#3B82F6", text: "#1E40AF", dot: "#3B82F6" },
  high:       { label: "High",       bg: "#FEF2F2", border: "#E24B4A", text: "#991B1B", dot: "#E24B4A" },
  ask_doctor: { label: "Ask Doctor", bg: "#FFFBEB", border: "#EF9F27", text: "#92400E", dot: "#EF9F27" },
};

export function LabValuesTable({ values }: { values: LabValue[] }) {
  if (!values || values.length === 0) return null;

  return (
    <div>
      {/* Medical disclaimer */}
      <div
        className="mb-4 flex items-start gap-3 rounded-xl p-4"
        style={{ background: "#FFFBEB", border: "0.5px solid #EF9F27" }}
      >
        <span className="shrink-0 text-lg">⚕️</span>
        <p className="text-[13px] font-medium leading-relaxed" style={{ color: "#92400E" }}>
          Plainly is not diagnosing you. These are the values from your report to discuss with your doctor.
        </p>
      </div>

      <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
        Lab Values
      </div>

      <div className="overflow-hidden rounded-xl" style={{ border: "0.5px solid var(--hairline)" }}>
        {/* Table header */}
        <div
          className="grid text-[11px] font-medium uppercase tracking-[0.05em] text-text-secondary"
          style={{
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            padding: "8px 14px",
            background: "var(--surface)",
            borderBottom: "0.5px solid var(--hairline)",
          }}
        >
          <span>Test</span>
          <span>Result</span>
          <span>Reference</span>
          <span>Status</span>
        </div>

        {/* Rows */}
        {values.map((v, i) => {
          const c = STATUS[v.status];
          const isLast = i === values.length - 1;
          return (
            <div
              key={i}
              className="grid items-center"
              style={{
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                padding: "10px 14px",
                borderBottom: isLast ? "none" : "0.5px solid var(--hairline)",
                background: v.status !== "normal" ? c.bg : "#ffffff",
              }}
            >
              <span className="text-[13px] text-text-primary">{v.name}</span>
              <span
                className="text-[13px]"
                style={{ color: v.status !== "normal" ? c.text : "var(--text-primary)", fontWeight: v.status !== "normal" ? 500 : 400 }}
              >
                {v.value}
                {v.unit && <span className="ml-1 text-[11px] text-text-tertiary">{v.unit}</span>}
              </span>
              <span className="text-[12px] text-text-secondary">{v.referenceRange || "—"}</span>
              <span
                className="inline-flex w-fit items-center gap-1.5 rounded-full px-2 py-[3px]"
                style={{ background: c.bg, border: `0.5px solid ${c.border}` }}
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: c.dot }} />
                <span className="text-[11px] font-medium" style={{ color: c.text }}>{c.label}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}