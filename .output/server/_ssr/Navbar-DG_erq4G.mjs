import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, M as Menu, F as FileText } from "../_libs/lucide-react.mjs";
function Logo({ size = 22 }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "flex items-center justify-center rounded-md",
        style: { width: size, height: size, backgroundColor: "var(--teal)" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: size * 0.6, color: "#fff", strokeWidth: 2 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] font-medium tracking-tight text-text-primary", children: "Plainly" })
  ] });
}
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: "sticky top-0 z-40 bg-background/90 backdrop-blur",
      style: { borderBottom: "0.5px solid rgba(0,0,0,0.08)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "outline-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden items-center gap-8 md:flex", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "how", className: "text-[13px] text-text-secondary transition-colors hover:text-text-primary", children: "How it works" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "text-[13px] text-text-secondary transition-colors hover:text-text-primary", children: "Pricing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "rounded-full border px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-surface",
                style: { borderColor: "var(--hairline)" },
                children: "Sign in"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              "aria-label": "Menu",
              className: "rounded-md p-1.5 md:hidden",
              onClick: () => setOpen((v) => !v),
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 20 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 20 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden", style: { borderTop: "0.5px solid var(--hairline)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-4 text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "how", className: "py-2 text-text-secondary", onClick: () => setOpen(false), children: "How it works" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "py-2 text-text-secondary", onClick: () => setOpen(false), children: "Pricing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "py-2 text-left text-text-primary", children: "Sign in" })
        ] }) })
      ]
    }
  );
}
export {
  Navbar as N
};
