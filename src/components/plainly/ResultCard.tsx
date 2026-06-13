import { useState } from "react";
import { AlertTriangle, CircleCheck, FileText, SearchCheck, Siren } from "lucide-react";

import type { AnalyseResult } from "@/lib/analyse.functions";
import { CompanyBadge } from "./CompanyBadge";
import { FlagCard } from "./FlagCard";
import { FollowUpChat } from "./FollowUpChat";
import { LanguageSelector } from "./LanguageSelector";
import { LabValuesTable } from "./LabValuesTable";
import { PrivacyBanner } from "./PrivacyBanner";

function getRiskSignal(result: AnalyseResult) {
  const level = result.riskLevel;

  if (level === "urgent" || result.flags.some((f) => f.severity === "red")) {
    const redCount = result.flags.filter((f) => f.severity === "red").length;
    return {
      label: "Urgent",
      description: redCount === 1 ? "One item needs prompt attention." : `${redCount} items need prompt attention.`,
      icon: Siren,
      color: "var(--danger)",
      bg: "var(--danger-bg)",
      position: "100%",
    };
  }

  if (level === "incorrect") {
    return {
      label: "Possibly incorrect",
      description: "Some values or charges appear inconsistent. Worth checking.",
      icon: AlertTriangle,
      color: "var(--danger)",
      bg: "var(--danger-bg)",
      position: "85%",
    };
  }

  if (level === "attention" || result.flags.some((f) => f.severity === "amber")) {
    const amberCount = result.flags.filter((f) => f.severity === "amber").length;
    return {
      label: "Needs attention",
      description: amberCount === 1 ? "One item is worth checking." : `${amberCount} items are worth checking.`,
      icon: AlertTriangle,
      color: "var(--warning)",
      bg: "var(--warning-bg)",
      position: "58%",
    };
  }

  return {
    label: "Looks normal",
    description: "No obvious red or amber flags found.",
    icon: CircleCheck,
    color: "var(--success)",
    bg: "var(--success-bg)",
    position: "12%",
  };
}

const highlightStyles = {
  red:   { bg: "#fef2f2", border: "var(--danger)",  color: "var(--danger)"  },
  amber: { bg: "#fffbeb", border: "var(--warning)", color: "var(--warning)" },
  green: { bg: "#f0fdf4", border: "var(--success)", color: "var(--success)" },
} as const;

export function ResultCard({
  result,
  fileName,
  language,
  onLanguageChange,
  onReset,
}: {
  result: AnalyseResult;
  fileName: string;
  language: string;
  onLanguageChange: (v: string) => void;
  onReset: () => void;
}) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const flagCount = result.flags.length;
  const risk = getRiskSignal(result);
  const RiskIcon = risk.icon;
  const issuer = result.company && result.company !== "Unknown" ? ` from ${result.company}` : "";
  const country = result.country && result.country !== "Unknown" ? ` in ${result.country}` : "";
  const isMedical = result.labValues && result.labValues.length > 0;

  return (
    <div className="mx-auto w-full max-w-[680px] px-6 py-10">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between gap-3">
        <button onClick={onReset} className="shrink-0 text-[13px] text-text-secondary hover:text-text-primary">
          ← New document
        </button>
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 px-4">
          <FileText size={14} color="var(--text-tertiary)" />
          <span className="truncate text-[13px] text-text-secondary">{fileName}</span>
        </div>
        <LanguageSelector value={language} onChange={onLanguageChange} />
      </div>

      {/* Privacy banner */}
      <PrivacyBanner />

      {/* Main card */}
      <div className="rounded-2xl bg-white p-6" style={{ border: "0.5px solid var(--hairline)" }}>

        {/* Doc type row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[13px] font-medium text-text-primary">{result.docType}</span>
          <span className="text-text-tertiary">·</span>
          <span className="text-[13px] text-text-secondary">{result.company}</span>
          <span
            className="ml-auto rounded-full px-2.5 py-[3px] text-[11px] font-medium"
            style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
          >
            {flagCount} {flagCount === 1 ? "thing" : "things"} to know
          </span>
        </div>

        {/* Verified company badge */}
        <CompanyBadge companyName={result.company} />

        {/* Auto-label */}
        <div className="mt-5 rounded-xl p-4" style={{ background: "var(--teal-soft)" }}>
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white">
              <SearchCheck size={18} color="var(--teal-deep)" strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
                Auto-label
              </div>
              <p className="mt-1 text-[15px] leading-relaxed text-text-primary">
                This looks like a <span className="font-medium">{result.docType}</span>
                {issuer}{country}.
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
          What this document is
        </div>
        <p className="mt-2 text-[15px] leading-[1.75] text-text-primary">{result.summary}</p>

        {/* Risk meter */}
        <div className="mt-6 rounded-xl p-4" style={{ background: "var(--surface)" }}>
          <div className="flex items-start gap-3">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
              style={{ background: risk.bg }}
            >
              <RiskIcon size={18} color={risk.color} strokeWidth={2.2} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
                  Risk meter
                </span>
                <span className="text-[13px] font-medium" style={{ color: risk.color }}>
                  {risk.label}
                </span>
              </div>
              <p className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">{risk.description}</p>
              <div className="mt-3 h-2 rounded-full bg-white" style={{ border: "0.5px solid var(--hairline)" }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: risk.position, background: risk.color }}
                />
              </div>
              <div className="mt-2 flex justify-between text-[11px] text-text-tertiary">
                <span>Normal</span>
                <span>Check</span>
                <span>Urgent</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lab values — medical documents only */}
      {isMedical && (
        <div className="mt-10">
          <LabValuesTable values={result.labValues} />
        </div>
      )}

      {/* Highlights */}
      {result.highlights.length > 0 && (
        <div className="mt-10">
          <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
            Lines to check
          </div>
          <div className="space-y-2.5">
            {result.highlights.map((h, i) => {
              const style = highlightStyles[h.severity];
              return (
                <div
                  key={i}
                  className="rounded-xl bg-white p-4"
                  style={{ border: "0.5px solid var(--hairline)", borderLeft: `3px solid ${style.border}` }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[13px] font-medium text-text-primary">{h.label}</span>
                    <span
                      className="rounded-full px-2 py-[2px] text-[10px] font-medium uppercase"
                      style={{ background: style.bg, color: style.color }}
                    >
                      {h.severity}
                    </span>
                  </div>
                  <blockquote
                    className="mt-2 rounded-lg px-3 py-2 text-[13.5px] leading-relaxed text-text-primary"
                    style={{ background: "var(--surface)" }}
                  >
                    {h.quote}
                  </blockquote>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-text-secondary">{h.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Flags */}
      <div className="mt-10">
        <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
          Things to know
        </div>
        <div className="space-y-2.5">
          {result.flags.map((f, i) => (
            <FlagCard key={i} severity={f.severity} title={f.title} description={f.description} />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="mt-10">
        <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
          What to do next
        </div>
        <ol className="space-y-2.5">
          {result.actions.map((a, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl bg-white p-4"
              style={{ border: "0.5px solid var(--hairline)" }}
            >
              <button
                onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
                aria-label="Mark done"
                className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors"
                style={{
                  border: `1.5px solid ${checked[i] ? "var(--teal)" : "var(--hairline)"}`,
                  background: checked[i] ? "var(--teal)" : "transparent",
                }}
              >
                {checked[i] && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <span
                className="text-[14px] leading-relaxed text-text-primary"
                style={{ textDecoration: checked[i] ? "line-through" : undefined, opacity: checked[i] ? 0.5 : 1 }}
              >
                {a}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Follow-up chat */}
      <div className="mt-10">
        <FollowUpChat
          language={language}
          docContext={`Type: ${result.docType}\nIssuer: ${result.company}\nCountry: ${result.country}\nSummary: ${result.summary}\nHighlights: ${result.highlights
            .map((h) => `[${h.severity}] ${h.label}: "${h.quote}" - ${h.explanation}`)
            .join("\n")}\nFlags: ${result.flags
            .map((f) => `[${f.severity}] ${f.title}: ${f.description}`)
            .join("\n")}\nActions: ${result.actions.join(" | ")}${result.labValues?.length ? `\nLab Values: ${result.labValues.map((v) => `${v.name}: ${v.value} ${v.unit || ""} (${v.status})`).join(", ")}` : ""}`}
        />
      </div>
    </div>
  );
}