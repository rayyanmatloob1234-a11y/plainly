import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { findCompany } from "@/lib/companies";

// Color map per company type
const TYPE_COLORS: Record<string, { bg: string; text: string }> = {
  utility:    { bg: "#FEF3C7", text: "#92400E" },
  bank:       { bg: "#EFF6FF", text: "#1E40AF" },
  insurance:  { bg: "#F0FDF4", text: "#166534" },
  telecom:    { bg: "#F5F3FF", text: "#5B21B6" },
  medical:    { bg: "#FFF1F2", text: "#9F1239" },
  government: { bg: "#F1F5F9", text: "#334155" },
  other:      { bg: "#F9F9F7", text: "#374151" },
};

function InitialsBadge({ name, type }: { name: string; type: string }) {
  const colors = TYPE_COLORS[type] || TYPE_COLORS.other;
  const initials = name
    .split(/[\s-]/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[12px] font-semibold"
      style={{ background: colors.bg, color: colors.text, border: "0.5px solid var(--hairline)" }}
    >
      {initials}
    </div>
  );
}

export function CompanyBadge({ companyName }: { companyName: string }) {
  const company = findCompany(companyName);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  if (!company) return null;

  // Try Google's favicon service — works for almost every domain worldwide
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${company.domain}&sz=64`;

  return (
    <div
      className="mt-4 flex items-center gap-3 rounded-xl p-3"
      style={{ background: "var(--surface)", border: "0.5px solid var(--hairline)" }}
    >
      {/* Logo — tries Google favicon, falls back to initials */}
      <div className="relative h-9 w-9 shrink-0">
        {!imgError && (
          <img
            src={faviconUrl}
            alt={company.name}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className="h-9 w-9 rounded-xl object-contain"
            style={{
              border: "0.5px solid var(--hairline)",
              padding: 4,
              background: "white",
              display: imgLoaded ? "block" : "none",
            }}
          />
        )}
        {(!imgLoaded || imgError) && (
          <InitialsBadge name={company.name} type={company.type} />
        )}
      </div>

      {/* Company info */}
      <div className="flex-1 min-w-0">
        <div className="text-[13px] font-medium text-text-primary truncate">{company.name}</div>
        <div className="text-[11px] text-text-tertiary capitalize">{company.country} · {company.type}</div>
      </div>

      {/* Verified badge */}
      <div
        className="flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1"
        style={{ background: "var(--teal-soft)", border: "0.5px solid var(--teal)" }}
      >
        <ShieldCheck size={11} color="var(--teal-deep)" />
        <span className="text-[11px] font-medium" style={{ color: "var(--teal-deep)" }}>
          Verified Issuer
        </span>
      </div>
    </div>
  );
}