import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Gift, Zap, Layers, Calendar, ShieldCheck } from "lucide-react";

import { Navbar } from "@/components/plainly/Navbar";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Plainly" },
      { name: "description", content: "No subscription. No monthly fees. Buy a bundle of analyses, use them whenever you want. Credits never expire." },
      { property: "og:title", content: "Pricing — Plainly" },
      { property: "og:description", content: "Pay once. Use whenever. No subscription, no monthly fees." },
    ],
  }),
  component: PricingPage,
});

const BUNDLES = [
  {
    name: "Starter",
    price: "$1.99",
    analyses: 10,
    perAnalysis: "$0.20",
    icon: Zap,
    iconBg: "#FEF3C7",
    iconColor: "#92400E",
    featured: false,
    badge: null,
    perks: [
      "All document types",
      "All languages",
      "Credits never expire",
    ],
    cta: "Get Starter",
  },
  {
    name: "Stack",
    price: "$3.99",
    analyses: 25,
    perAnalysis: "$0.16",
    icon: Layers,
    iconBg: "#E1F5EE",
    iconColor: "#0F6E56",
    featured: true,
    badge: "Best value",
    perks: [
      "All document types",
      "All languages",
      "Credits never expire",
      "Save & revisit results",
    ],
    cta: "Get Stack",
  },
  {
    name: "Year's worth",
    price: "$6.99",
    analyses: 100,
    perAnalysis: "$0.07",
    icon: Calendar,
    iconBg: "#EFF6FF",
    iconColor: "#1E40AF",
    featured: false,
    badge: null,
    perks: [
      "All document types",
      "All languages",
      "Credits never expire",
      "Save & revisit results",
      "Priority support",
    ],
    cta: "Get Year's worth",
  },
];

const FAQS = [
  {
    q: "What counts as one analysis?",
    a: "Each document you upload or paste uses one credit. Follow-up questions on the same document are completely free — only the initial analysis counts.",
  },
  {
    q: "Do credits expire?",
    a: "Never. Buy once, use whenever. Your credits stay in your account forever — no pressure, no deadlines, no surprises.",
  },
  {
    q: "What if Plainly saves me money?",
    a: "That's the idea. One disputed bill or spotted overcharge typically saves far more than the cost of a whole bundle. We only win when you win.",
  },
  {
    q: "Can I try before buying?",
    a: "Yes — you get 3 free analyses with no card required. No signup either. Just upload a document and see what happens.",
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="px-6 pb-8 pt-20">
        <div className="mx-auto max-w-[560px] text-center">
          <span
            className="inline-block rounded-full px-3 py-1 text-[11px] font-medium"
            style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
          >
            No subscription. Ever.
          </span>
          <h1
            className="mt-4 text-[40px] leading-[1.1] text-text-primary"
            style={{ letterSpacing: "-0.03em", fontWeight: 500 }}
          >
            Pay once.<br />Use whenever.
          </h1>
          <p className="mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.6] text-text-secondary">
            Top up when you need to. Your credits never expire. No monthly guilt, no cancellation anxiety.
          </p>
        </div>
      </section>

      {/* Free strip */}
      <section className="px-6 pb-8">
        <div
          className="mx-auto flex max-w-[560px] items-center justify-between rounded-2xl p-4"
          style={{ background: "var(--surface)", border: "0.5px solid var(--hairline)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: "var(--teal-soft)" }}
            >
              <Gift size={16} color="var(--teal-deep)" />
            </div>
            <div>
              <div className="text-[13px] font-medium text-text-primary">Start for free</div>
              <div className="text-[12px] text-text-tertiary">3 free analyses — no signup, no card</div>
            </div>
          </div>
          <Link
            to="/"
            className="rounded-full px-4 py-2 text-[12px] font-medium"
            style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
          >
            Try free →
          </Link>
        </div>
      </section>

      {/* Bundle cards */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-[560px] grid-cols-3 gap-3">
          {BUNDLES.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.name}
                className="relative flex flex-col rounded-2xl bg-white p-5"
                style={{ border: b.featured ? "2px solid var(--teal)" : "0.5px solid var(--hairline)" }}
              >
                {b.badge && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-[3px] text-[10px] font-medium text-white"
                    style={{ background: "var(--teal)" }}
                  >
                    {b.badge}
                  </span>
                )}

                <div
                  className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: b.iconBg }}
                >
                  <Icon size={16} color={b.iconColor} />
                </div>

                <div className="text-[13px] font-medium text-text-primary">{b.name}</div>
                <div
                  className="mt-1 text-[26px] font-medium leading-none text-text-primary"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {b.price}
                </div>
                <div className="mt-0.5 text-[12px] text-text-tertiary">one-time</div>

                <div
                  className="my-3 h-px w-full"
                  style={{ background: "var(--hairline)" }}
                />

                <div className="mb-1 text-[13px] font-medium text-text-primary">
                  {b.analyses} analyses
                </div>

                <ul className="mb-4 space-y-1.5">
                  {b.perks.map((p) => (
                    <li key={p} className="flex items-start gap-1.5 text-[11.5px] text-text-secondary">
                      <Check size={12} color="var(--teal)" className="mt-0.5 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>

                <button
                  className="mt-auto w-full rounded-full py-2.5 text-[12px] font-medium transition-opacity hover:opacity-90"
                  style={
                    b.featured
                      ? { background: "var(--teal)", color: "#fff" }
                      : { border: "0.5px solid var(--hairline)", color: "var(--text-primary)", background: "transparent" }
                  }
                >
                  {b.cta}
                </button>

                <div className="mt-2 text-center text-[11px] text-text-tertiary">
                  {b.perAnalysis} per analysis
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 pb-12">
        <div className="mx-auto flex max-w-[560px] flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {[
            "No subscription",
            "Credits never expire",
            "Cancel anytime",
            "Secure payments via Stripe",
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-[12px] text-text-tertiary">
              <ShieldCheck size={12} color="var(--teal)" />
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-[560px]">
          <div className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-text-tertiary">
            Questions
          </div>
          <div className="space-y-3">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="rounded-xl bg-white p-5"
                style={{ border: "0.5px solid var(--hairline)" }}
              >
                <div className="text-[13px] font-medium text-text-primary">{f.q}</div>
                <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-[400px] text-center">
          <p className="text-[13px] leading-relaxed text-text-tertiary">
            One disputed charge or spotted overcharge typically saves far more than the cost of a whole bundle.
          </p>
          <Link
            to="/"
            className="mt-5 inline-block rounded-full px-6 py-3 text-[13px] font-medium text-white"
            style={{ background: "var(--teal)" }}
          >
            Try free — no card needed
          </Link>
        </div>
      </section>

      <footer className="px-6 pb-12 text-center text-[12px] text-text-tertiary">
        Plainly · Finally, plain English.
      </footer>
    </div>
  );
}