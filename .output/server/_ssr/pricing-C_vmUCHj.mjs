import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { N as Navbar } from "./Navbar-DG_erq4G.mjs";
import { G as Gift, Z as Zap, L as Layers, C as Calendar, a as Check, S as ShieldCheck } from "../_libs/lucide-react.mjs";

import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/unenv.mjs";


import "../_libs/seroval-plugins.mjs";


import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
const BUNDLES = [{
  name: "Starter",
  price: "$1.99",
  analyses: 10,
  perAnalysis: "$0.20",
  icon: Zap,
  iconBg: "#FEF3C7",
  iconColor: "#92400E",
  featured: false,
  badge: null,
  perks: ["All document types", "All languages", "Credits never expire"],
  cta: "Get Starter"
}, {
  name: "Stack",
  price: "$3.99",
  analyses: 25,
  perAnalysis: "$0.16",
  icon: Layers,
  iconBg: "#E1F5EE",
  iconColor: "#0F6E56",
  featured: true,
  badge: "Best value",
  perks: ["All document types", "All languages", "Credits never expire", "Save & revisit results"],
  cta: "Get Stack"
}, {
  name: "Year's worth",
  price: "$6.99",
  analyses: 100,
  perAnalysis: "$0.07",
  icon: Calendar,
  iconBg: "#EFF6FF",
  iconColor: "#1E40AF",
  featured: false,
  badge: null,
  perks: ["All document types", "All languages", "Credits never expire", "Save & revisit results", "Priority support"],
  cta: "Get Year's worth"
}];
const FAQS = [{
  q: "What counts as one analysis?",
  a: "Each document you upload or paste uses one credit. Follow-up questions on the same document are completely free — only the initial analysis counts."
}, {
  q: "Do credits expire?",
  a: "Never. Buy once, use whenever. Your credits stay in your account forever — no pressure, no deadlines, no surprises."
}, {
  q: "What if Plainly saves me money?",
  a: "That's the idea. One disputed bill or spotted overcharge typically saves far more than the cost of a whole bundle. We only win when you win."
}, {
  q: "Can I try before buying?",
  a: "Yes — you get 3 free analyses with no card required. No signup either. Just upload a document and see what happens."
}];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-8 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[560px] text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full px-3 py-1 text-[11px] font-medium", style: {
        background: "var(--teal-soft)",
        color: "var(--teal-deep)"
      }, children: "No subscription. Ever." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-[40px] leading-[1.1] text-text-primary", style: {
        letterSpacing: "-0.03em",
        fontWeight: 500
      }, children: [
        "Pay once.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Use whenever."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-[420px] text-[16px] leading-[1.6] text-text-secondary", children: "Top up when you need to. Your credits never expire. No monthly guilt, no cancellation anxiety." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[560px] items-center justify-between rounded-2xl p-4", style: {
      background: "var(--surface)",
      border: "0.5px solid var(--hairline)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-xl", style: {
          background: "var(--teal-soft)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { size: 16, color: "var(--teal-deep)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-text-primary", children: "Start for free" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-text-tertiary", children: "3 free analyses — no signup, no card" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "rounded-full px-4 py-2 text-[12px] font-medium", style: {
        background: "var(--teal-soft)",
        color: "var(--teal-deep)"
      }, children: "Try free →" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-[560px] grid-cols-3 gap-3", children: BUNDLES.map((b) => {
      const Icon = b.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col rounded-2xl bg-white p-5", style: {
        border: b.featured ? "2px solid var(--teal)" : "0.5px solid var(--hairline)"
      }, children: [
        b.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-[3px] text-[10px] font-medium text-white", style: {
          background: "var(--teal)"
        }, children: b.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 flex h-9 w-9 items-center justify-center rounded-xl", style: {
          background: b.iconBg
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 16, color: b.iconColor }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-text-primary", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[26px] font-medium leading-none text-text-primary", style: {
          letterSpacing: "-0.02em"
        }, children: b.price }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[12px] text-text-tertiary", children: "one-time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 h-px w-full", style: {
          background: "var(--hairline)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 text-[13px] font-medium text-text-primary", children: [
          b.analyses,
          " analyses"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mb-4 space-y-1.5", children: b.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-1.5 text-[11.5px] text-text-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12, color: "var(--teal)", className: "mt-0.5 shrink-0" }),
          p
        ] }, p)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-auto w-full rounded-full py-2.5 text-[12px] font-medium transition-opacity hover:opacity-90", style: b.featured ? {
          background: "var(--teal)",
          color: "#fff"
        } : {
          border: "0.5px solid var(--hairline)",
          color: "var(--text-primary)",
          background: "transparent"
        }, children: b.cta }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-center text-[11px] text-text-tertiary", children: [
          b.perAnalysis,
          " per analysis"
        ] })
      ] }, b.name);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-[560px] flex-wrap items-center justify-center gap-x-6 gap-y-3", children: ["No subscription", "Credits never expire", "Cancel anytime", "Secure payments via Stripe"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[12px] text-text-tertiary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 12, color: "var(--teal)" }),
      t
    ] }, t)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[560px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-center text-[11px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Questions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FAQS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white p-5", style: {
        border: "0.5px solid var(--hairline)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-text-primary", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13px] leading-relaxed text-text-secondary", children: f.a })
      ] }, f.q)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[400px] text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed text-text-tertiary", children: "One disputed charge or spotted overcharge typically saves far more than the cost of a whole bundle." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-5 inline-block rounded-full px-6 py-3 text-[13px] font-medium text-white", style: {
        background: "var(--teal)"
      }, children: "Try free — no card needed" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-6 pb-12 text-center text-[12px] text-text-tertiary", children: "Plainly · Finally, plain English." })
  ] });
}
export {
  PricingPage as component
};
