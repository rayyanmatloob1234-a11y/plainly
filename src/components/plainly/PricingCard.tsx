import { Check } from "lucide-react";

export function PricingCard({
  name,
  price,
  period = "month",
  features,
  featured,
  badge,
  cta,
}: {
  name: string;
  price: string;
  period?: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  cta: string;
}) {
  return (
    <div
      className="relative flex flex-col rounded-2xl bg-white p-7"
      style={{ border: featured ? "1px solid var(--teal)" : "0.5px solid var(--hairline)" }}
    >
      {badge && (
        <span
          className="absolute -top-2.5 left-7 rounded-full px-2.5 py-[3px] text-[10.5px] font-medium uppercase tracking-wider text-white"
          style={{ background: "var(--teal)" }}
        >
          {badge}
        </span>
      )}
      <div className="text-[14px] font-medium text-text-primary">{name}</div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-[34px] font-medium tracking-tight text-text-primary">{price}</span>
        <span className="text-[13px] text-text-tertiary">/ {period}</span>
      </div>
      <ul className="mt-6 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-text-secondary">
            <Check size={15} color="var(--teal)" className="mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button
        className="mt-7 rounded-full py-2.5 text-[13px] font-medium transition-colors"
        style={
          featured
            ? { background: "var(--teal)", color: "#fff" }
            : { border: "0.5px solid var(--hairline)", color: "var(--text-primary)" }
        }
      >
        {cta}
      </button>
    </div>
  );
}