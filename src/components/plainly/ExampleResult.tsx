import { FileText } from "lucide-react";
import { FlagCard } from "./FlagCard";

export function ExampleResult() {
  return (
    <div
      className="mx-auto w-full max-w-[560px] rounded-[20px] bg-white p-6"
      style={{ border: "0.5px solid var(--hairline)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ background: "var(--surface)" }}
        >
          <FileText size={16} color="var(--text-secondary)" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-medium text-text-primary">hospital_bill_march.pdf</div>
          <div className="text-[11.5px] text-text-tertiary">Medical bill · detected automatically</div>
        </div>
        <span
          className="rounded-full px-2.5 py-[3px] text-[11px] font-medium"
          style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
        >
          3 things to know
        </span>
      </div>
      <p className="mt-5 text-[14.5px] leading-[1.75] text-text-primary">
        This is a bill from Mercy General for an emergency room visit on March 14. The total is $1,847 after insurance.
        Most of it looks normal, but one line is worth pushing back on, and you have options to reduce what you actually pay.
      </p>
      <div className="mt-5 space-y-2">
        <FlagCard
          severity="red"
          title="Dispute the $340 'facility fee' on line 7"
          description="This was already billed under your ER visit. You're being charged twice for the same thing."
        />
        <FlagCard
          severity="amber"
          title="Ask about a payment plan"
          description="Mercy offers 0% interest plans up to 24 months — but you have to call within 30 days."
        />
        <FlagCard
          severity="green"
          title="Your insurance was billed correctly"
          description="The $1,200 insurance adjustment matches your plan. No action needed."
        />
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <button className="rounded-full px-4 py-1.5 text-[12.5px] font-medium text-white" style={{ background: "var(--teal)" }}>
          Copy explanation
        </button>
        <button className="rounded-full border px-4 py-1.5 text-[12.5px] text-text-primary" style={{ borderColor: "var(--hairline)" }}>
          Save as PDF
        </button>
        <button className="rounded-full border px-4 py-1.5 text-[12.5px] text-text-primary" style={{ borderColor: "var(--hairline)" }}>
          Ask a follow-up
        </button>
      </div>
    </div>
  );
}