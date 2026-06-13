import { AlertTriangle, CircleCheck, CircleX } from "lucide-react";

export type FlagSeverity = "red" | "amber" | "green";

const config = {
  red: { bg: "#fef2f2", border: "var(--danger)", icon: CircleX, color: "var(--danger)" },
  amber: { bg: "#fffbeb", border: "var(--warning)", icon: AlertTriangle, color: "var(--warning)" },
  green: { bg: "#f0fdf4", border: "var(--success)", icon: CircleCheck, color: "var(--success)" },
} as const;

export function FlagCard({
  severity,
  title,
  description,
}: {
  severity: FlagSeverity;
  title: string;
  description: string;
}) {
  const c = config[severity];
  const Icon = c.icon;
  return (
    <div
      className="flex gap-3 px-4 py-3.5"
      style={{
        background: c.bg,
        borderLeft: `3px solid ${c.border}`,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Icon size={18} color={c.color} className="mt-0.5 shrink-0" strokeWidth={2} />
      <div className="flex-1">
        <div className="text-[14px] font-medium text-text-primary">{title}</div>
        <div className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">{description}</div>
      </div>
    </div>
  );
}