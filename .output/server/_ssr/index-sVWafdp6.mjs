import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useRouter } from "../_libs/tanstack__react-router.mjs";
import { m as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { N as Navbar } from "./Navbar-DG_erq4G.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-BZt1QFpg.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";

import "../_libs/seroval.mjs";
import { b as Lock, B as Bolt, a as Check, c as GitCompare, F as FileText, d as SearchCheck, e as Copy, D as Download, f as Link, g as CloudUpload, h as Siren, T as TriangleAlert, i as CircleCheck, j as ChevronDown, S as ShieldCheck, k as CircleX, A as ArrowUp, l as ArrowDown, m as ArrowRight } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, a as arrayType, e as enumType } from "../_libs/zod.mjs";

import "../_libs/react-dom.mjs";

import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";

import "../_libs/h3-v2.mjs";
import "../_libs/unenv.mjs";


import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";




function useServerFn(serverFn) {
  const router = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router.stores.location.get();
        return router.navigate(router.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router, serverFn]);
}
const docTypes = ["Medical reports", "Lab results", "Medical bills", "Utility bills", "Bank statements", "Legal contracts"];
function UploadZone({ onSubmit, disabled }) {
  const [dragging, setDragging] = reactExports.useState(false);
  const [pasteMode, setPasteMode] = reactExports.useState(false);
  const [text, setText] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) onSubmit({ kind: "file", file });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[560px]", children: !pasteMode ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      onDragOver: (e) => {
        e.preventDefault();
        setDragging(true);
      },
      onDragLeave: () => setDragging(false),
      onDrop: handleDrop,
      onClick: () => inputRef.current?.click(),
      className: "cursor-pointer rounded-[20px] bg-white px-10 py-14 text-center transition-all",
      style: {
        border: `1px dashed ${dragging ? "var(--teal)" : "rgba(0,0,0,0.15)"}`,
        background: dragging ? "#f0faf6" : "#fff",
        transform: dragging ? "scale(1.01)" : "scale(1)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: inputRef,
            type: "file",
            className: "hidden",
            accept: "application/pdf,image/*,.txt",
            onChange: (e) => {
              const file = e.target.files?.[0];
              if (file) onSubmit({ kind: "file", file });
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CloudUpload, { size: 40, color: "var(--text-tertiary)", strokeWidth: 1.5, className: "mx-auto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[15px] font-medium text-text-primary", children: "Drop your document here" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[13px] text-text-tertiary", children: "PDF, image, report, bill, or photo — we'll figure out the rest" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap justify-center gap-1.5", children: docTypes.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "rounded-full px-2.5 py-[3px] text-[11px] font-medium",
            style: { background: "var(--teal-soft)", color: "var(--teal-deep)" },
            children: t
          },
          t
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-col items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-text-tertiary", children: "or" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              disabled,
              onClick: (e) => {
                e.stopPropagation();
                setPasteMode(true);
              },
              className: "rounded-full border px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-surface",
              style: { borderColor: "var(--hairline)" },
              children: "Paste text instead"
            }
          )
        ] })
      ]
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[20px] bg-white p-6", style: { border: "1px solid var(--hairline)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        autoFocus: true,
        value: text,
        onChange: (e) => setText(e.target.value),
        rows: 10,
        placeholder: "Paste the document text here…",
        className: "w-full resize-none rounded-lg bg-surface p-4 text-[14px] leading-relaxed text-text-primary outline-none",
        style: { border: "0.5px solid var(--hairline)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setPasteMode(false),
          className: "text-[13px] text-text-secondary hover:text-text-primary",
          children: "← Upload a file instead"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          disabled: !text.trim() || disabled,
          onClick: () => onSubmit({ kind: "text", text }),
          className: "rounded-full px-5 py-2 text-[13px] font-medium text-white transition-opacity disabled:opacity-40",
          style: { background: "var(--teal)" },
          children: "Explain this"
        }
      )
    ] })
  ] }) });
}
const messages = [
  "Reading your document…",
  "Identifying what it is…",
  "Writing your explanation…"
];
function LoadingState() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % messages.length), 1500);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center py-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-10 w-10 animate-spin rounded-full",
        style: { border: "2px solid var(--teal-soft)", borderTopColor: "var(--teal)" }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-[14px] text-text-secondary transition-opacity", children: messages[i] })
  ] });
}
const KNOWN_COMPANIES = [
  // ── Pakistan — Electricity ─────────────────────────────────
  { name: "K-Electric", aliases: ["KE", "KESC", "K Electric", "Karachi Electric", "K-Electric Limited", "KE Electric"], domain: "k-electric.com", country: "Pakistan", type: "utility" },
  { name: "LESCO", aliases: ["Lahore Electric Supply Company", "Lesco"], domain: "lesco.gov.pk", country: "Pakistan", type: "utility" },
  { name: "MEPCO", aliases: ["Multan Electric Power Company", "Mepco"], domain: "mepco.com.pk", country: "Pakistan", type: "utility" },
  { name: "PESCO", aliases: ["Peshawar Electric Supply Company", "Pesco"], domain: "pesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "HESCO", aliases: ["Hyderabad Electric Supply Company", "Hesco"], domain: "hesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "SEPCO", aliases: ["Sukkur Electric Power Company", "Sepco"], domain: "sepco.com.pk", country: "Pakistan", type: "utility" },
  { name: "QESCO", aliases: ["Quetta Electric Supply Company", "Qesco"], domain: "qesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "IESCO", aliases: ["Islamabad Electric Supply Company", "Iesco"], domain: "iesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "FESCO", aliases: ["Faisalabad Electric Supply Company", "Fesco"], domain: "fesco.com.pk", country: "Pakistan", type: "utility" },
  { name: "TESCO", aliases: ["Tribal Electric Supply Company", "Tesco"], domain: "tesco.com.pk", country: "Pakistan", type: "utility" },
  // ── Pakistan — Gas ────────────────────────────────────────
  { name: "SNGPL", aliases: ["Sui Northern Gas", "Sui Gas", "Sui Northern Gas Pipelines"], domain: "sngpl.com.pk", country: "Pakistan", type: "utility" },
  { name: "SSGC", aliases: ["Sui Southern Gas", "Sui Southern Gas Company", "Sui Gas Sindh"], domain: "ssgc.com.pk", country: "Pakistan", type: "utility" },
  // ── Pakistan — Banks ──────────────────────────────────────
  { name: "HBL", aliases: ["Habib Bank", "Habib Bank Limited", "HBL Bank"], domain: "hbl.com", country: "Pakistan", type: "bank" },
  { name: "UBL", aliases: ["United Bank", "United Bank Limited", "UBL Bank"], domain: "ubldigital.com", country: "Pakistan", type: "bank" },
  { name: "Meezan Bank", aliases: ["Meezan", "Al Meezan", "Meezan Islamic Bank"], domain: "meezanbank.com", country: "Pakistan", type: "bank" },
  { name: "MCB Bank", aliases: ["MCB", "Muslim Commercial Bank", "MCB Islamic"], domain: "mcb.com.pk", country: "Pakistan", type: "bank" },
  { name: "Allied Bank", aliases: ["ABL", "Allied Bank Limited"], domain: "abl.com", country: "Pakistan", type: "bank" },
  { name: "Bank Alfalah", aliases: ["Alfalah", "Alfalah Bank", "Bank Al Falah"], domain: "bankalfalah.com", country: "Pakistan", type: "bank" },
  { name: "Standard Chartered Pakistan", aliases: ["Standard Chartered", "SCB Pakistan"], domain: "sc.com", country: "Pakistan", type: "bank" },
  { name: "Faysal Bank", aliases: ["Faysal", "Faysal Islamic"], domain: "faysalbank.com", country: "Pakistan", type: "bank" },
  { name: "Askari Bank", aliases: ["Askari", "ACBL"], domain: "askaribank.com.pk", country: "Pakistan", type: "bank" },
  { name: "Silk Bank", aliases: ["Silkbank"], domain: "silkbank.com.pk", country: "Pakistan", type: "bank" },
  { name: "Bank of Punjab", aliases: ["BOP", "The Bank of Punjab"], domain: "bop.com.pk", country: "Pakistan", type: "bank" },
  { name: "National Bank of Pakistan", aliases: ["NBP", "National Bank"], domain: "nbp.com.pk", country: "Pakistan", type: "bank" },
  { name: "Sindh Bank", aliases: ["The Sindh Bank"], domain: "sindhbank.com.pk", country: "Pakistan", type: "bank" },
  // ── Pakistan — Digital Banks & Fintech ────────────────────
  { name: "SadaPay", aliases: ["Sada Pay", "Sadapay Digital Bank", "SadaPay Digital Bank", "Sada"], domain: "sadapay.pk", country: "Pakistan", type: "bank" },
  { name: "NayaPay", aliases: ["Naya Pay", "NayaPay Digital"], domain: "nayapay.com", country: "Pakistan", type: "bank" },
  { name: "EasyPaisa", aliases: ["Easypaisa", "Easy Paisa", "Telenor Microfinance"], domain: "easypaisa.com.pk", country: "Pakistan", type: "bank" },
  { name: "JazzCash", aliases: ["Jazz Cash", "Mobilink Microfinance"], domain: "jazzcash.com.pk", country: "Pakistan", type: "bank" },
  { name: "UPaisa", aliases: ["U Paisa", "Ufone Paisa"], domain: "upaisa.com", country: "Pakistan", type: "bank" },
  // ── Pakistan — Telecom ────────────────────────────────────
  { name: "Jazz", aliases: ["Mobilink", "Jazz Cash", "Jazz Pakistan"], domain: "jazz.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Zong", aliases: ["China Mobile Pakistan", "Zong 4G"], domain: "zong.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Telenor Pakistan", aliases: ["Telenor", "Telenor PK"], domain: "telenor.com.pk", country: "Pakistan", type: "telecom" },
  { name: "Ufone", aliases: ["PTCL Ufone", "Ufone 4G"], domain: "ufone.com", country: "Pakistan", type: "telecom" },
  { name: "PTCL", aliases: ["Pakistan Telecommunication Company", "PTCL Broadband"], domain: "ptcl.com.pk", country: "Pakistan", type: "telecom" },
  { name: "StormFiber", aliases: ["Storm Fiber", "Cybernet StormFiber"], domain: "stormfiber.com", country: "Pakistan", type: "telecom" },
  { name: "Nayatel", aliases: ["Naya Tel"], domain: "nayatel.com", country: "Pakistan", type: "telecom" },
  // ── Pakistan — Medical ────────────────────────────────────
  { name: "Aga Khan Hospital", aliases: ["AKUH", "Aga Khan University Hospital", "Aga Khan Health"], domain: "aku.edu", country: "Pakistan", type: "medical" },
  { name: "Shaukat Khanum", aliases: ["Shaukat Khanum Memorial", "SKMCH", "Shaukat Khanum Cancer Hospital"], domain: "shaukatkhanum.org.pk", country: "Pakistan", type: "medical" },
  { name: "Liaquat National Hospital", aliases: ["LNH", "Liaquat National"], domain: "lnh.edu.pk", country: "Pakistan", type: "medical" },
  { name: "Indus Hospital", aliases: ["The Indus Hospital", "Indus Health Network"], domain: "indushospital.org.pk", country: "Pakistan", type: "medical" },
  { name: "Dow University Hospital", aliases: ["DUHS", "Dow Hospital"], domain: "duhs.edu.pk", country: "Pakistan", type: "medical" },
  { name: "South City Hospital", aliases: ["South City"], domain: "southcityhospital.com", country: "Pakistan", type: "medical" },
  { name: "Chughtai Lab", aliases: ["Chughtai Lahore Lab", "Chughtai"], domain: "chughtailab.com", country: "Pakistan", type: "medical" },
  { name: "Dr Essa Laboratory", aliases: ["Essa Lab", "Essa Laboratory"], domain: "essalab.com", country: "Pakistan", type: "medical" },
  // ── Pakistan — Insurance ──────────────────────────────────
  { name: "State Life", aliases: ["State Life Insurance", "SLIC"], domain: "statelife.com.pk", country: "Pakistan", type: "insurance" },
  { name: "Jubilee Life", aliases: ["Jubilee Insurance", "Jubilee Life Insurance"], domain: "jubileelife.com", country: "Pakistan", type: "insurance" },
  { name: "EFU Life", aliases: ["EFU", "EFU Life Assurance"], domain: "efu.com.pk", country: "Pakistan", type: "insurance" },
  { name: "Adamjee Insurance", aliases: ["Adamjee"], domain: "adamjeeinsurance.com", country: "Pakistan", type: "insurance" },
  // ── Pakistan — Government ─────────────────────────────────
  { name: "FBR", aliases: ["Federal Board of Revenue", "Pakistan Tax"], domain: "fbr.gov.pk", country: "Pakistan", type: "government" },
  { name: "NADRA", aliases: ["National Database and Registration Authority"], domain: "nadra.gov.pk", country: "Pakistan", type: "government" },
  { name: "EOBI", aliases: ["Employees Old-Age Benefits Institution"], domain: "eobi.gov.pk", country: "Pakistan", type: "government" },
  // ── United Kingdom ─────────────────────────────────────────
  { name: "NHS", aliases: ["National Health Service", "NHS England", "NHS Scotland", "NHS Wales"], domain: "nhs.uk", country: "United Kingdom", type: "medical" },
  { name: "Barclays", aliases: ["Barclays Bank", "Barclays PLC"], domain: "barclays.com", country: "United Kingdom", type: "bank" },
  { name: "HSBC", aliases: ["HSBC UK", "HSBC Bank", "HSBC Holdings"], domain: "hsbc.com", country: "United Kingdom", type: "bank" },
  { name: "Lloyds Bank", aliases: ["Lloyds", "Lloyds Banking Group", "Lloyds TSB"], domain: "lloydsbank.com", country: "United Kingdom", type: "bank" },
  { name: "NatWest", aliases: ["National Westminster Bank", "NatWest Group"], domain: "natwest.com", country: "United Kingdom", type: "bank" },
  { name: "Santander UK", aliases: ["Santander"], domain: "santander.co.uk", country: "United Kingdom", type: "bank" },
  { name: "Halifax", aliases: ["Halifax Bank"], domain: "halifax.co.uk", country: "United Kingdom", type: "bank" },
  { name: "Monzo", aliases: ["Monzo Bank"], domain: "monzo.com", country: "United Kingdom", type: "bank" },
  { name: "Starling Bank", aliases: ["Starling"], domain: "starlingbank.com", country: "United Kingdom", type: "bank" },
  { name: "British Gas", aliases: ["BG Group", "Centrica"], domain: "britishgas.co.uk", country: "United Kingdom", type: "utility" },
  { name: "BT", aliases: ["British Telecom", "BT Group", "BT Broadband"], domain: "bt.com", country: "United Kingdom", type: "telecom" },
  { name: "Virgin Media", aliases: ["Virgin", "Virgin Media O2"], domain: "virginmedia.com", country: "United Kingdom", type: "telecom" },
  { name: "EDF Energy", aliases: ["EDF"], domain: "edfenergy.com", country: "United Kingdom", type: "utility" },
  { name: "Octopus Energy", aliases: ["Octopus"], domain: "octopus.energy", country: "United Kingdom", type: "utility" },
  { name: "E.ON", aliases: ["EON", "E.ON UK"], domain: "eon.com", country: "United Kingdom", type: "utility" },
  { name: "Sky", aliases: ["Sky UK", "Sky Broadband", "Sky TV"], domain: "sky.com", country: "United Kingdom", type: "telecom" },
  { name: "Vodafone UK", aliases: ["Vodafone"], domain: "vodafone.co.uk", country: "United Kingdom", type: "telecom" },
  { name: "O2 UK", aliases: ["O2", "Telefonica UK"], domain: "o2.co.uk", country: "United Kingdom", type: "telecom" },
  { name: "AXA UK", aliases: ["AXA Insurance", "AXA"], domain: "axa.co.uk", country: "United Kingdom", type: "insurance" },
  { name: "Aviva", aliases: ["Aviva Insurance", "Aviva PLC"], domain: "aviva.com", country: "United Kingdom", type: "insurance" },
  { name: "Admiral", aliases: ["Admiral Insurance"], domain: "admiral.com", country: "United Kingdom", type: "insurance" },
  { name: "Direct Line", aliases: ["Direct Line Insurance"], domain: "directline.com", country: "United Kingdom", type: "insurance" },
  { name: "HMRC", aliases: ["Her Majesty Revenue and Customs", "His Majesty Revenue and Customs", "UK Tax"], domain: "hmrc.gov.uk", country: "United Kingdom", type: "government" },
  // ── United States ──────────────────────────────────────────
  { name: "Chase", aliases: ["JPMorgan Chase", "Chase Bank", "JP Morgan"], domain: "chase.com", country: "United States", type: "bank" },
  { name: "Bank of America", aliases: ["BofA", "Bank of America Corp"], domain: "bankofamerica.com", country: "United States", type: "bank" },
  { name: "Wells Fargo", aliases: ["Wells Fargo Bank", "WF"], domain: "wellsfargo.com", country: "United States", type: "bank" },
  { name: "Citibank", aliases: ["Citi", "Citigroup", "Citi Bank"], domain: "citibank.com", country: "United States", type: "bank" },
  { name: "Capital One", aliases: ["Capital One Bank"], domain: "capitalone.com", country: "United States", type: "bank" },
  { name: "American Express", aliases: ["Amex", "AMEX"], domain: "americanexpress.com", country: "United States", type: "bank" },
  { name: "Cigna", aliases: ["Cigna Healthcare", "Cigna Health"], domain: "cigna.com", country: "United States", type: "insurance" },
  { name: "Aetna", aliases: ["Aetna Insurance", "Aetna Health"], domain: "aetna.com", country: "United States", type: "insurance" },
  { name: "UnitedHealth", aliases: ["United Healthcare", "UHC", "United Health Group"], domain: "uhc.com", country: "United States", type: "insurance" },
  { name: "Blue Cross Blue Shield", aliases: ["BCBS", "BlueCross", "Blue Cross"], domain: "bcbs.com", country: "United States", type: "insurance" },
  { name: "Humana", aliases: ["Humana Insurance"], domain: "humana.com", country: "United States", type: "insurance" },
  { name: "AT&T", aliases: ["ATT", "AT and T"], domain: "att.com", country: "United States", type: "telecom" },
  { name: "Verizon", aliases: ["Verizon Wireless", "VZW"], domain: "verizon.com", country: "United States", type: "telecom" },
  { name: "T-Mobile", aliases: ["TMobile", "T Mobile"], domain: "t-mobile.com", country: "United States", type: "telecom" },
  { name: "Comcast", aliases: ["Xfinity", "Comcast Xfinity"], domain: "comcast.com", country: "United States", type: "telecom" },
  { name: "Medicare", aliases: ["US Medicare", "Centers for Medicare", "CMS"], domain: "medicare.gov", country: "United States", type: "government" },
  { name: "IRS", aliases: ["Internal Revenue Service", "US Tax"], domain: "irs.gov", country: "United States", type: "government" },
  // ── UAE ───────────────────────────────────────────────────
  { name: "DEWA", aliases: ["Dubai Electricity and Water Authority", "Dubai Electric"], domain: "dewa.gov.ae", country: "UAE", type: "utility" },
  { name: "SEWA", aliases: ["Sharjah Electricity and Water Authority"], domain: "sewa.gov.ae", country: "UAE", type: "utility" },
  { name: "ADDC", aliases: ["Abu Dhabi Distribution Company"], domain: "addc.ae", country: "UAE", type: "utility" },
  { name: "Emirates NBD", aliases: ["ENBD", "Emirates NBD Bank"], domain: "emiratesnbd.com", country: "UAE", type: "bank" },
  { name: "FAB", aliases: ["First Abu Dhabi Bank", "National Bank of Abu Dhabi"], domain: "bankfab.com", country: "UAE", type: "bank" },
  { name: "ADCB", aliases: ["Abu Dhabi Commercial Bank"], domain: "adcb.com", country: "UAE", type: "bank" },
  { name: "Mashreq Bank", aliases: ["Mashreq", "Mashreqbank"], domain: "mashreq.com", country: "UAE", type: "bank" },
  { name: "Etisalat", aliases: ["e&", "Emirates Telecom", "e& UAE"], domain: "etisalat.ae", country: "UAE", type: "telecom" },
  { name: "du", aliases: ["Du Telecom", "Emirates Integrated Telecommunications", "du UAE"], domain: "du.ae", country: "UAE", type: "telecom" },
  // ── India ─────────────────────────────────────────────────
  { name: "SBI", aliases: ["State Bank of India", "State Bank"], domain: "sbi.co.in", country: "India", type: "bank" },
  { name: "HDFC Bank", aliases: ["HDFC", "HDFC Ltd"], domain: "hdfcbank.com", country: "India", type: "bank" },
  { name: "ICICI Bank", aliases: ["ICICI"], domain: "icicibank.com", country: "India", type: "bank" },
  { name: "Axis Bank", aliases: ["Axis"], domain: "axisbank.com", country: "India", type: "bank" },
  { name: "Kotak Mahindra Bank", aliases: ["Kotak", "Kotak Bank"], domain: "kotak.com", country: "India", type: "bank" },
  { name: "Airtel", aliases: ["Bharti Airtel", "Airtel India"], domain: "airtel.in", country: "India", type: "telecom" },
  { name: "Jio", aliases: ["Reliance Jio", "Jio India"], domain: "jio.com", country: "India", type: "telecom" },
  { name: "BSNL", aliases: ["Bharat Sanchar Nigam"], domain: "bsnl.in", country: "India", type: "telecom" },
  { name: "Apollo Hospitals", aliases: ["Apollo", "Apollo Health"], domain: "apollohospitals.com", country: "India", type: "medical" },
  { name: "Fortis Healthcare", aliases: ["Fortis"], domain: "fortishealthcare.com", country: "India", type: "medical" },
  // ── Canada ────────────────────────────────────────────────
  { name: "RBC", aliases: ["Royal Bank of Canada", "Royal Bank"], domain: "rbc.com", country: "Canada", type: "bank" },
  { name: "TD Bank", aliases: ["Toronto-Dominion Bank", "TD Canada Trust"], domain: "td.com", country: "Canada", type: "bank" },
  { name: "Scotiabank", aliases: ["Bank of Nova Scotia", "Scotia"], domain: "scotiabank.com", country: "Canada", type: "bank" },
  { name: "BMO", aliases: ["Bank of Montreal", "BMO Financial"], domain: "bmo.com", country: "Canada", type: "bank" },
  { name: "Bell Canada", aliases: ["Bell", "BCE"], domain: "bell.ca", country: "Canada", type: "telecom" },
  { name: "Rogers", aliases: ["Rogers Communications", "Rogers Canada"], domain: "rogers.com", country: "Canada", type: "telecom" },
  { name: "Telus", aliases: ["Telus Communications"], domain: "telus.com", country: "Canada", type: "telecom" },
  // ── Australia ─────────────────────────────────────────────
  { name: "Commonwealth Bank", aliases: ["CBA", "CommBank", "Commonwealth Bank of Australia"], domain: "commbank.com.au", country: "Australia", type: "bank" },
  { name: "ANZ", aliases: ["Australia and New Zealand Banking Group", "ANZ Bank"], domain: "anz.com.au", country: "Australia", type: "bank" },
  { name: "Westpac", aliases: ["Westpac Bank", "Westpac Banking Corporation"], domain: "westpac.com.au", country: "Australia", type: "bank" },
  { name: "NAB", aliases: ["National Australia Bank"], domain: "nab.com.au", country: "Australia", type: "bank" },
  { name: "Telstra", aliases: ["Telstra Corporation", "Telstra Australia"], domain: "telstra.com.au", country: "Australia", type: "telecom" },
  { name: "Optus", aliases: ["Singtel Optus"], domain: "optus.com.au", country: "Australia", type: "telecom" },
  { name: "AGL Energy", aliases: ["AGL", "AGL Australia"], domain: "agl.com.au", country: "Australia", type: "utility" },
  { name: "Origin Energy", aliases: ["Origin"], domain: "originenergy.com.au", country: "Australia", type: "utility" },
  // ── Saudi Arabia ──────────────────────────────────────────
  { name: "SEC", aliases: ["Saudi Electricity Company", "Saudi Electric"], domain: "se.com.sa", country: "Saudi Arabia", type: "utility" },
  { name: "Al Rajhi Bank", aliases: ["Al Rajhi", "Rajhi Bank"], domain: "alrajhibank.com.sa", country: "Saudi Arabia", type: "bank" },
  { name: "Saudi National Bank", aliases: ["SNB", "NCB", "National Commercial Bank"], domain: "alahli.com", country: "Saudi Arabia", type: "bank" },
  { name: "STC", aliases: ["Saudi Telecom Company", "STC Pay"], domain: "stc.com.sa", country: "Saudi Arabia", type: "telecom" },
  { name: "Mobily", aliases: ["Etihad Etisalat", "Mobily Saudi"], domain: "mobily.com.sa", country: "Saudi Arabia", type: "telecom" }
];
function findCompany(companyName) {
  if (!companyName || companyName === "Unknown") return null;
  const lower = companyName.toLowerCase().trim();
  return KNOWN_COMPANIES.find((c) => {
    if (c.name.toLowerCase() === lower) return true;
    return c.aliases.some(
      (a) => a.toLowerCase() === lower || lower.includes(a.toLowerCase()) || a.toLowerCase().includes(lower)
    );
  }) ?? null;
}
const TYPE_COLORS = {
  utility: { bg: "#FEF3C7", text: "#92400E" },
  bank: { bg: "#EFF6FF", text: "#1E40AF" },
  insurance: { bg: "#F0FDF4", text: "#166534" },
  telecom: { bg: "#F5F3FF", text: "#5B21B6" },
  medical: { bg: "#FFF1F2", text: "#9F1239" },
  government: { bg: "#F1F5F9", text: "#334155" },
  other: { bg: "#F9F9F7", text: "#374151" }
};
function InitialsBadge({ name, type }) {
  const colors = TYPE_COLORS[type] || TYPE_COLORS.other;
  const initials = name.split(/[\s-]/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[12px] font-semibold",
      style: { background: colors.bg, color: colors.text, border: "0.5px solid var(--hairline)" },
      children: initials
    }
  );
}
function CompanyBadge({ companyName }) {
  const company = findCompany(companyName);
  const [imgLoaded, setImgLoaded] = reactExports.useState(false);
  const [imgError, setImgError] = reactExports.useState(false);
  if (!company) return null;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${company.domain}&sz=64`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mt-4 flex items-center gap-3 rounded-xl p-3",
      style: { background: "var(--surface)", border: "0.5px solid var(--hairline)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-9 w-9 shrink-0", children: [
          !imgError && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: faviconUrl,
              alt: company.name,
              onLoad: () => setImgLoaded(true),
              onError: () => setImgError(true),
              className: "h-9 w-9 rounded-xl object-contain",
              style: {
                border: "0.5px solid var(--hairline)",
                padding: 4,
                background: "white",
                display: imgLoaded ? "block" : "none"
              }
            }
          ),
          (!imgLoaded || imgError) && /* @__PURE__ */ jsxRuntimeExports.jsx(InitialsBadge, { name: company.name, type: company.type })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium text-text-primary truncate", children: company.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-text-tertiary capitalize", children: [
            company.country,
            " · ",
            company.type
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1",
            style: { background: "var(--teal-soft)", border: "0.5px solid var(--teal)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { size: 11, color: "var(--teal-deep)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", style: { color: "var(--teal-deep)" }, children: "Verified Issuer" })
            ]
          }
        )
      ]
    }
  );
}
const config = {
  red: { bg: "#fef2f2", border: "var(--danger)", icon: CircleX, color: "var(--danger)" },
  amber: { bg: "#fffbeb", border: "var(--warning)", icon: TriangleAlert, color: "var(--warning)" },
  green: { bg: "#f0fdf4", border: "var(--success)", icon: CircleCheck, color: "var(--success)" }
};
function FlagCard({
  severity,
  title,
  description
}) {
  const c = config[severity];
  const Icon = c.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-3 px-4 py-3.5",
      style: {
        background: c.bg,
        borderLeft: `3px solid ${c.border}`,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, color: c.color, className: "mt-0.5 shrink-0", strokeWidth: 2 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[14px] font-medium text-text-primary", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[13.5px] leading-relaxed text-text-secondary", children: description })
        ] })
      ]
    }
  );
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const AnalyseInput = objectType({
  text: stringType().min(1).max(5e4).optional(),
  fileBase64: stringType().optional(),
  fileMime: stringType().optional(),
  fileName: stringType().optional(),
  language: stringType().min(2).max(40).default("English")
});
const analyseDocument = createServerFn({
  method: "POST"
}).inputValidator((input) => AnalyseInput.parse(input)).handler(createSsrRpc("a8745f03bbf65999e2be8d58fc8c995faccd0c4bf6c5cc888cc9939efe268608"));
const ChatInput = objectType({
  docContext: stringType().min(1).max(2e4),
  history: arrayType(objectType({
    role: enumType(["user", "assistant"]),
    content: stringType()
  })).max(20).default([]),
  message: stringType().min(1).max(2e3),
  language: stringType().default("English")
});
const chatFollowUp = createServerFn({
  method: "POST"
}).inputValidator((input) => ChatInput.parse(input)).handler(createSsrRpc("d2ff833751e4fa8be9863691e89bab18fdc3a35b445146213ef04c62fa0cf068"));
const CompareInput = objectType({
  doc1Text: stringType().min(1).max(25e3),
  doc2Text: stringType().min(1).max(25e3),
  language: stringType().default("English")
});
const compareDocuments = createServerFn({
  method: "POST"
}).inputValidator((input) => CompareInput.parse(input)).handler(createSsrRpc("7ae4ad10439d6124e7dce91144dcc123f3581053eb720dcd8d8d3b19f6263fe8"));
function FollowUpChat({ docContext, language }) {
  const [messages2, setMessages] = reactExports.useState([]);
  const [input, setInput] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const chat = useServerFn(chatFollowUp);
  async function send() {
    const q = input.trim();
    if (!q || busy) return;
    setInput("");
    const next = [...messages2, { role: "user", content: q }];
    setMessages(next);
    setBusy(true);
    try {
      const { reply } = await chat({ data: { docContext, history: messages2, message: q, language } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e) {
      setMessages([...next, { role: "assistant", content: e instanceof Error ? e.message : "Something went wrong." }]);
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Ask a follow-up question" }),
    messages2.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 space-y-3", children: [
      messages2.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-xl px-4 py-3 text-[14px] leading-relaxed",
          style: {
            background: m.role === "user" ? "var(--teal-soft)" : "var(--surface)",
            color: m.role === "user" ? "var(--teal-deep)" : "var(--text-primary)"
          },
          children: m.content
        },
        i
      )),
      busy && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] text-text-tertiary", children: "Thinking…" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5",
        style: { border: "0.5px solid var(--hairline)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              value: input,
              onChange: (e) => setInput(e.target.value),
              onKeyDown: (e) => e.key === "Enter" && send(),
              placeholder: "e.g. Can I dispute the charge on line 7?",
              className: "flex-1 bg-transparent py-1.5 text-[14px] outline-none placeholder:text-text-tertiary"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: send,
              disabled: !input.trim() || busy,
              className: "flex h-8 w-8 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-30",
              style: { background: "var(--teal)" },
              "aria-label": "Send",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 16 })
            }
          )
        ]
      }
    )
  ] });
}
const LANGUAGES = [
  { code: "English", label: "English", flag: "🇬🇧" },
  { code: "Urdu", label: "اردو", flag: "🇵🇰" },
  { code: "Arabic", label: "العربية", flag: "🇸🇦" },
  { code: "Spanish", label: "Español", flag: "🇪🇸" },
  { code: "French", label: "Français", flag: "🇫🇷" },
  { code: "Hindi", label: "हिंदी", flag: "🇮🇳" },
  { code: "Portuguese", label: "Português", flag: "🇵🇹" },
  { code: "German", label: "Deutsch", flag: "🇩🇪" },
  { code: "Turkish", label: "Türkçe", flag: "🇹🇷" },
  { code: "Indonesian", label: "Indonesia", flag: "🇮🇩" }
];
function LanguageSelector({ value, onChange }) {
  const [open, setOpen] = reactExports.useState(false);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    function h(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const current = LANGUAGES.find((l) => l.code === value) ?? LANGUAGES[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        className: "flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] text-text-primary hover:bg-surface",
        style: { borderColor: "var(--hairline)" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.flag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: current.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13, className: "text-text-tertiary" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl bg-white py-1.5",
        style: { border: "0.5px solid var(--hairline)" },
        children: LANGUAGES.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: () => {
              onChange(l.code);
              setOpen(false);
            },
            className: "flex w-full items-center justify-between px-3 py-2 text-left text-[13px] hover:bg-surface",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.flag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: l.label })
              ] }),
              l.code === value && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14, color: "var(--teal)" })
            ]
          },
          l.code
        ))
      }
    )
  ] });
}
const STATUS = {
  normal: { label: "Normal", bg: "#F0FDF4", border: "#1D9E75", text: "#166534", dot: "#1D9E75" },
  low: { label: "Low", bg: "#EFF6FF", border: "#3B82F6", text: "#1E40AF", dot: "#3B82F6" },
  high: { label: "High", bg: "#FEF2F2", border: "#E24B4A", text: "#991B1B", dot: "#E24B4A" },
  ask_doctor: { label: "Ask Doctor", bg: "#FFFBEB", border: "#EF9F27", text: "#92400E", dot: "#EF9F27" }
};
function LabValuesTable({ values }) {
  if (!values || values.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "mb-4 flex items-start gap-3 rounded-xl p-4",
        style: { background: "#FFFBEB", border: "0.5px solid #EF9F27" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-lg", children: "⚕️" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium leading-relaxed", style: { color: "#92400E" }, children: "Plainly is not diagnosing you. These are the values from your report to discuss with your doctor." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Lab Values" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl", style: { border: "0.5px solid var(--hairline)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "grid text-[11px] font-medium uppercase tracking-[0.05em] text-text-secondary",
          style: {
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            padding: "8px 14px",
            background: "var(--surface)",
            borderBottom: "0.5px solid var(--hairline)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Test" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Reference" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Status" })
          ]
        }
      ),
      values.map((v, i) => {
        const c = STATUS[v.status];
        const isLast = i === values.length - 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "grid items-center",
            style: {
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              padding: "10px 14px",
              borderBottom: isLast ? "none" : "0.5px solid var(--hairline)",
              background: v.status !== "normal" ? c.bg : "#ffffff"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-text-primary", children: v.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "text-[13px]",
                  style: { color: v.status !== "normal" ? c.text : "var(--text-primary)", fontWeight: v.status !== "normal" ? 500 : 400 },
                  children: [
                    v.value,
                    v.unit && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1 text-[11px] text-text-tertiary", children: v.unit })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] text-text-secondary", children: v.referenceRange || "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex w-fit items-center gap-1.5 rounded-full px-2 py-[3px]",
                  style: { background: c.bg, border: `0.5px solid ${c.border}` },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 shrink-0 rounded-full", style: { background: c.dot } }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", style: { color: c.text }, children: c.label })
                  ]
                }
              )
            ]
          },
          i
        );
      })
    ] })
  ] });
}
function PrivacyBanner({ hasAccount = false, onDelete }) {
  const [timeLeft, setTimeLeft] = reactExports.useState("");
  const [start] = reactExports.useState(Date.now());
  reactExports.useEffect(() => {
    const DURATION = 30 * 60 * 1e3;
    const tick = () => {
      const remaining = DURATION - (Date.now() - start);
      if (remaining <= 0) {
        setTimeLeft("cleared");
        return;
      }
      const m = Math.floor(remaining / 6e4);
      const s = Math.floor(remaining % 6e4 / 1e3);
      setTimeLeft(`${m}:${s.toString().padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, [start]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mb-6 flex items-start gap-3 rounded-xl p-3",
      style: { background: "var(--surface)", border: "0.5px solid var(--hairline)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg",
            style: { background: "var(--teal-soft)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 13, color: "var(--teal-deep)" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium text-text-primary", children: "Your document stays private" }),
          hasAccount ? /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[12px] leading-relaxed text-text-secondary", children: [
            "Saved to your vault so you can revisit this.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onDelete,
                className: "font-medium",
                style: { color: "var(--teal)" },
                children: "Delete it now →"
              }
            )
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[12px] leading-relaxed text-text-secondary", children: [
            "We don't store your document after analysis. Cleared from memory when you close this tab",
            timeLeft && timeLeft !== "cleared" && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium", style: { color: "var(--teal)" }, children: [
              " (or in ",
              timeLeft,
              ")"
            ] }),
            timeLeft === "cleared" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-tertiary", children: " — memory cleared" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-center gap-1 pt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full", style: { background: "var(--success)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium", style: { color: "var(--success)" }, children: "Private" })
        ] })
      ]
    }
  );
}
function getRiskSignal(result) {
  const level = result.riskLevel;
  if (level === "urgent" || result.flags.some((f) => f.severity === "red")) {
    const redCount = result.flags.filter((f) => f.severity === "red").length;
    return {
      label: "Urgent",
      description: redCount === 1 ? "One item needs prompt attention." : `${redCount} items need prompt attention.`,
      icon: Siren,
      color: "var(--danger)",
      bg: "var(--danger-bg)",
      position: "100%"
    };
  }
  if (level === "incorrect") {
    return {
      label: "Possibly incorrect",
      description: "Some values or charges appear inconsistent. Worth checking.",
      icon: TriangleAlert,
      color: "var(--danger)",
      bg: "var(--danger-bg)",
      position: "85%"
    };
  }
  if (level === "attention" || result.flags.some((f) => f.severity === "amber")) {
    const amberCount = result.flags.filter((f) => f.severity === "amber").length;
    return {
      label: "Needs attention",
      description: amberCount === 1 ? "One item is worth checking." : `${amberCount} items are worth checking.`,
      icon: TriangleAlert,
      color: "var(--warning)",
      bg: "var(--warning-bg)",
      position: "58%"
    };
  }
  return {
    label: "Looks normal",
    description: "No obvious red or amber flags found.",
    icon: CircleCheck,
    color: "var(--success)",
    bg: "var(--success-bg)",
    position: "12%"
  };
}
const highlightStyles = {
  red: { bg: "#fef2f2", border: "var(--danger)", color: "var(--danger)" },
  amber: { bg: "#fffbeb", border: "var(--warning)", color: "var(--warning)" },
  green: { bg: "#f0fdf4", border: "var(--success)", color: "var(--success)" }
};
function ResultCard({
  result,
  fileName,
  language,
  onLanguageChange,
  onReset
}) {
  const [checked, setChecked] = reactExports.useState({});
  const flagCount = result.flags.length;
  const risk = getRiskSignal(result);
  const RiskIcon = risk.icon;
  const issuer = result.company && result.company !== "Unknown" ? ` from ${result.company}` : "";
  const country = result.country && result.country !== "Unknown" ? ` in ${result.country}` : "";
  const isMedical = result.labValues && result.labValues.length > 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[680px] px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onReset, className: "shrink-0 text-[13px] text-text-secondary hover:text-text-primary", children: "← New document" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-center justify-center gap-2 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14, color: "var(--text-tertiary)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-[13px] text-text-secondary", children: fileName })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LanguageSelector, { value: language, onChange: onLanguageChange })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PrivacyBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white p-6", style: { border: "0.5px solid var(--hairline)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-text-primary", children: result.docType }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-tertiary", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-text-secondary", children: result.company }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "span",
          {
            className: "ml-auto rounded-full px-2.5 py-[3px] text-[11px] font-medium",
            style: { background: "var(--teal-soft)", color: "var(--teal-deep)" },
            children: [
              flagCount,
              " ",
              flagCount === 1 ? "thing" : "things",
              " to know"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompanyBadge, { companyName: result.company }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-xl p-4", style: { background: "var(--teal-soft)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SearchCheck, { size: 18, color: "var(--teal-deep)", strokeWidth: 2.2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Auto-label" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[15px] leading-relaxed text-text-primary", children: [
            "This looks like a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: result.docType }),
            issuer,
            country,
            "."
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "What this document is" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] leading-[1.75] text-text-primary", children: result.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-xl p-4", style: { background: "var(--surface)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
            style: { background: risk.bg },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(RiskIcon, { size: 18, color: risk.color, strokeWidth: 2.2 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-x-2 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Risk meter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium", style: { color: risk.color }, children: risk.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13.5px] leading-relaxed text-text-secondary", children: risk.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 rounded-full bg-white", style: { border: "0.5px solid var(--hairline)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-full rounded-full transition-all duration-500",
              style: { width: risk.position, background: risk.color }
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[11px] text-text-tertiary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Normal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Check" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Urgent" })
          ] })
        ] })
      ] }) })
    ] }),
    isMedical && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LabValuesTable, { values: result.labValues }) }),
    result.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Lines to check" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: result.highlights.map((h, i) => {
        const style = highlightStyles[h.severity];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-xl bg-white p-4",
            style: { border: "0.5px solid var(--hairline)", borderLeft: `3px solid ${style.border}` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-text-primary", children: h.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "rounded-full px-2 py-[2px] text-[10px] font-medium uppercase",
                    style: { background: style.bg, color: style.color },
                    children: h.severity
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "blockquote",
                {
                  className: "mt-2 rounded-lg px-3 py-2 text-[13.5px] leading-relaxed text-text-primary",
                  style: { background: "var(--surface)" },
                  children: h.quote
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[13.5px] leading-relaxed text-text-secondary", children: h.explanation })
            ]
          },
          i
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Things to know" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: result.flags.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(FlagCard, { severity: f.severity, title: f.title, description: f.description }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "What to do next" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-2.5", children: result.actions.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "flex items-start gap-3 rounded-xl bg-white p-4",
          style: { border: "0.5px solid var(--hairline)" },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setChecked((c) => ({ ...c, [i]: !c[i] })),
                "aria-label": "Mark done",
                className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-colors",
                style: {
                  border: `1.5px solid ${checked[i] ? "var(--teal)" : "var(--hairline)"}`,
                  background: checked[i] ? "var(--teal)" : "transparent"
                },
                children: checked[i] && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "11", height: "11", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 6.5l2.5 2.5 4.5-5", stroke: "#fff", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "text-[14px] leading-relaxed text-text-primary",
                style: { textDecoration: checked[i] ? "line-through" : void 0, opacity: checked[i] ? 0.5 : 1 },
                children: a
              }
            )
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      FollowUpChat,
      {
        language,
        docContext: `Type: ${result.docType}
Issuer: ${result.company}
Country: ${result.country}
Summary: ${result.summary}
Highlights: ${result.highlights.map((h) => `[${h.severity}] ${h.label}: "${h.quote}" - ${h.explanation}`).join("\n")}
Flags: ${result.flags.map((f) => `[${f.severity}] ${f.title}: ${f.description}`).join("\n")}
Actions: ${result.actions.join(" | ")}${result.labValues?.length ? `
Lab Values: ${result.labValues.map((v) => `${v.name}: ${v.value} ${v.unit || ""} (${v.status})`).join(", ")}` : ""}`
      }
    ) })
  ] });
}
function ExportBar({ getText }) {
  const [copied, setCopied] = reactExports.useState(false);
  async function copy() {
    await navigator.clipboard.writeText(getText());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    toast.success("Copied to clipboard");
  }
  function download() {
    const blob = new Blob([getText()], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "plainly-explanation.txt";
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Downloaded");
  }
  async function share() {
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share({
          title: "Plainly explanation",
          text: getText()
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Link copied");
      }
    } catch {
    }
  }
  const btn = "flex items-center gap-2 rounded-full px-4 py-2 text-[13px] transition-colors";
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sticky bottom-0 z-30 bg-white/95 backdrop-blur",
      style: { borderTop: "0.5px solid var(--hairline)" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-[680px] items-center justify-between gap-3 px-6 py-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: copy, className: btn + " text-white", style: { background: "var(--teal)" }, children: [
          copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 14 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 14 }),
          copied ? "Copied" : "Copy explanation"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: download,
            className: btn + " text-text-primary hover:bg-surface",
            style: { border: "0.5px solid var(--hairline)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 14 }),
              " Download"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: share,
            className: btn + " text-text-primary hover:bg-surface",
            style: { border: "0.5px solid var(--hairline)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { size: 14 }),
              " Share"
            ]
          }
        )
      ] })
    }
  );
}
function ExampleResult() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "mx-auto w-full max-w-[560px] rounded-[20px] bg-white p-6",
      style: { border: "0.5px solid var(--hairline)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex h-9 w-9 items-center justify-center rounded-lg",
              style: { background: "var(--surface)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 16, color: "var(--text-secondary)" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-[13px] font-medium text-text-primary", children: "hospital_bill_march.pdf" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11.5px] text-text-tertiary", children: "Medical bill · detected automatically" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "rounded-full px-2.5 py-[3px] text-[11px] font-medium",
              style: { background: "var(--teal-soft)", color: "var(--teal-deep)" },
              children: "3 things to know"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[14.5px] leading-[1.75] text-text-primary", children: "This is a bill from Mercy General for an emergency room visit on March 14. The total is $1,847 after insurance. Most of it looks normal, but one line is worth pushing back on, and you have options to reduce what you actually pay." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlagCard,
            {
              severity: "red",
              title: "Dispute the $340 'facility fee' on line 7",
              description: "This was already billed under your ER visit. You're being charged twice for the same thing."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlagCard,
            {
              severity: "amber",
              title: "Ask about a payment plan",
              description: "Mercy offers 0% interest plans up to 24 months — but you have to call within 30 days."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlagCard,
            {
              severity: "green",
              title: "Your insurance was billed correctly",
              description: "The $1,200 insurance adjustment matches your plan. No action needed."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full px-4 py-1.5 text-[12.5px] font-medium text-white", style: { background: "var(--teal)" }, children: "Copy explanation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border px-4 py-1.5 text-[12.5px] text-text-primary", style: { borderColor: "var(--hairline)" }, children: "Save as PDF" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border px-4 py-1.5 text-[12.5px] text-text-primary", style: { borderColor: "var(--hairline)" }, children: "Ask a follow-up" })
        ] })
      ]
    }
  );
}
const SEV = {
  red: { bg: "#FEF2F2", text: "#991B1B", border: "#E24B4A" },
  amber: { bg: "#FFFBEB", text: "#92400E", border: "#EF9F27" },
  green: { bg: "#F0FDF4", text: "#166534", border: "#1D9E75" }
};
function CompareDocuments({ onBack }) {
  const [doc1, setDoc1] = reactExports.useState("");
  const [doc2, setDoc2] = reactExports.useState("");
  const [result, setResult] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const compare = useServerFn(compareDocuments);
  const handle = async () => {
    if (!doc1.trim() || !doc2.trim()) {
      setError("Paste both documents first.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await compare({ data: { doc1Text: doc1, doc2Text: doc2, language: "English" } });
      setResult(res);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Comparison failed. Try again.");
    } finally {
      setLoading(false);
    }
  };
  const DirIcon = ({ d }) => {
    if (d === "up") return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { size: 13 });
    if (d === "down") return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDown, { size: 13 });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13 });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-[680px] px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onBack, className: "mb-8 text-[13px] text-text-secondary hover:text-text-primary", children: "← Back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Compare Documents" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[22px] font-medium text-text-primary", style: { letterSpacing: "-0.02em" }, children: "See exactly what changed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[14px] leading-relaxed text-text-secondary", children: "Paste two bills, statements, or contracts. Plainly tells you what changed and why it matters." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 grid grid-cols-2 gap-3", children: [
      { label: "Older document", val: doc1, set: setDoc1 },
      { label: "Newer document", val: doc2, set: setDoc2 }
    ].map(({ label, val, set }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[11px] font-medium uppercase tracking-[0.05em] text-text-secondary", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "textarea",
        {
          value: val,
          onChange: (e) => set(e.target.value),
          placeholder: `Paste ${label.toLowerCase()} here...`,
          className: "w-full resize-none rounded-xl p-3 text-[12px] leading-relaxed text-text-primary outline-none",
          style: {
            height: 160,
            border: "0.5px solid var(--hairline)",
            background: "var(--surface)",
            fontFamily: "inherit"
          }
        }
      )
    ] }, label)) }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-[13px]", style: { color: "var(--danger)" }, children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: handle,
        disabled: loading,
        className: "mb-8 w-full rounded-xl py-3 text-[14px] font-medium text-white transition-opacity",
        style: { background: loading ? "var(--text-tertiary)" : "var(--teal)", cursor: loading ? "not-allowed" : "pointer" },
        children: loading ? "Comparing..." : "Compare documents →"
      }
    ),
    result && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4", style: { background: "var(--surface)", border: "0.5px solid var(--hairline)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-[1.7] text-text-primary", children: result.summary })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 text-[10px] font-medium uppercase tracking-[0.12em] text-text-tertiary", children: "What changed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: result.changes.map((c, i) => {
        const col = SEV[c.severity];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-4", style: { background: col.bg, border: `0.5px solid ${col.border}` }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-medium text-text-primary", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-[13px] font-medium", style: { color: col.text }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DirIcon, { d: c.direction }),
              " ",
              c.difference
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-text-secondary", children: [
              "Before: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: c.before })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[12px] text-text-secondary", children: [
              "After: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: col.text }, children: c.after })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] leading-relaxed", style: { color: col.text }, children: c.reason })
        ] }, i);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl p-4", style: { background: "#F0FDF4", border: "0.5px solid #1D9E75" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] leading-relaxed", style: { color: "#166534" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Bottom line: " }),
        result.verdict
      ] }) })
    ] })
  ] });
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = reactExports.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, role: "alert", className: cn(alertVariants({ variant }), className), ...props }));
Alert.displayName = "Alert";
const AlertTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "h5",
    {
      ref,
      className: cn("mb-1 font-medium leading-none tracking-tight", className),
      ...props
    }
  )
);
AlertTitle.displayName = "AlertTitle";
const AlertDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm [&_p]:leading-relaxed", className), ...props }));
AlertDescription.displayName = "AlertDescription";
const MAX_PDF_PAGES = 12;
const MAX_EXTRACTED_CHARS = 18e3;
function normalizeExtractedText(text) {
  return text.replace(/\u0000/g, " ").replace(/\r/g, "").replace(/[ \t]+/g, " ").replace(/\n{3,}/g, "\n\n").trim();
}
function clampExtractedText(text, maxChars = MAX_EXTRACTED_CHARS) {
  const normalized = normalizeExtractedText(text);
  if (normalized.length <= maxChars) return normalized;
  const head = Math.floor(maxChars * 0.7);
  const tail = maxChars - head - 48;
  return `${normalized.slice(0, head)}

[...document truncated...]

${normalized.slice(-tail)}`;
}
async function extractPdfText(file) {
  const pdfjs = await import("../_libs/pdfjs-dist.mjs");
  const bytes = new Uint8Array(await file.arrayBuffer());
  const loadingTask = pdfjs.getDocument({
    data: bytes,
    disableWorker: true
  });
  const pdf = await loadingTask.promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= Math.min(pdf.numPages, MAX_PDF_PAGES); pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items.map((item) => item.str ?? "").join(" ").trim();
    if (pageText) {
      pages.push(`Page ${pageNumber}
${pageText}`);
    }
    if (pages.join("\n\n").length >= MAX_EXTRACTED_CHARS) {
      break;
    }
  }
  return clampExtractedText(pages.join("\n\n"));
}
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => {
      const result = r.result;
      resolve(result.split(",")[1] ?? "");
    };
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
function getErrorMessage(error) {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Something went wrong while analysing the document.";
}
function Index() {
  const [state, setState] = reactExports.useState({
    step: "idle"
  });
  const [language, setLanguage] = reactExports.useState("English");
  const analyse = useServerFn(analyseDocument);
  async function handleSubmit(payload) {
    setState({
      step: "loading"
    });
    try {
      if (payload.kind === "text") {
        const result = await analyse({
          data: {
            text: payload.text,
            language
          }
        });
        setState({
          step: "result",
          result,
          fileName: "Pasted text",
          sourceText: payload.text
        });
      } else {
        const mime = payload.file.type || "application/octet-stream";
        let extractedText = "";
        if (mime === "application/pdf") {
          try {
            extractedText = await extractPdfText(payload.file);
          } catch {
            extractedText = "";
          }
        }
        const base64 = extractedText ? null : await fileToBase64(payload.file);
        const result = await analyse({
          data: extractedText ? {
            text: extractedText,
            fileName: payload.file.name,
            language
          } : {
            fileBase64: base64,
            fileMime: mime,
            fileName: payload.file.name,
            language
          }
        });
        setState({
          step: "result",
          result,
          fileName: payload.file.name,
          sourceText: extractedText || void 0,
          sourceFile: extractedText ? void 0 : {
            base64,
            mime,
            name: payload.file.name
          }
        });
      }
    } catch (e) {
      const message = getErrorMessage(e);
      toast.error(message);
      setState({
        step: "idle",
        error: message
      });
    }
  }
  async function handleLanguageChange(next) {
    setLanguage(next);
    if (state.step !== "result") return;
    setState({
      step: "loading"
    });
    try {
      const result = await analyse({
        data: state.sourceText ? {
          text: state.sourceText,
          language: next
        } : {
          fileBase64: state.sourceFile.base64,
          fileMime: state.sourceFile.mime,
          fileName: state.sourceFile.name,
          language: next
        }
      });
      setState((prev) => prev.step === "loading" ? {
        step: "result",
        result,
        fileName: state.fileName,
        sourceText: state.sourceText,
        sourceFile: state.sourceFile
      } : prev);
    } catch (e) {
      const message = getErrorMessage(e);
      toast.error(message || "Couldn't re-translate.");
      setState((prev) => prev.step === "loading" ? {
        step: "result",
        result: state.result,
        fileName: state.fileName,
        sourceText: state.sourceText,
        sourceFile: state.sourceFile
      } : prev);
    }
  }
  if (state.step === "result") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ResultCard, { result: state.result, fileName: state.fileName, language, onLanguageChange: handleLanguageChange, onReset: () => setState({
        step: "idle"
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExportBar, { getText: () => {
        const r = state.result;
        return [`${r.docType} — ${r.company}`, "", r.summary, "", "Lines to check:", ...r.highlights.length ? r.highlights.map((h) => `[${h.severity.toUpperCase()}] ${h.label}: "${h.quote}" - ${h.explanation}`) : ["None found."], "", "Things to know:", ...r.flags.map((f) => `• [${f.severity.toUpperCase()}] ${f.title} — ${f.description}`), "", "What to do next:", ...r.actions.map((a, i) => `${i + 1}. ${a}`), ...r.labValues?.length ? ["", "Lab Values:", ...r.labValues.map((v) => `${v.name}: ${v.value} ${v.unit || ""} — ${v.status}`)] : []].join("\n");
      } })
    ] });
  }
  if (state.step === "compare") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CompareDocuments, { onBack: () => setState({
        step: "idle"
      }) })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    state.step === "loading" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoadingState, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-6 pb-16 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[600px] text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full px-3 py-1 text-[11px] font-medium", style: {
          background: "var(--teal-soft)",
          color: "var(--teal-deep)"
        }, children: "Free to try · No signup required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-[44px] leading-[1.05] text-text-primary sm:text-[52px]", style: {
          letterSpacing: "-0.03em",
          fontWeight: 500
        }, children: "Finally, plain English." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-4 max-w-[480px] text-[17px] leading-[1.6] text-text-secondary sm:text-[18px]", children: "Upload any confusing document and get a clear, honest explanation in seconds. Medical reports, lab results, bills, contracts, insurance letters — anything." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UploadZone, { onSubmit: handleSubmit }) }),
        state.step === "idle" && state.error && /* @__PURE__ */ jsxRuntimeExports.jsxs(Alert, { variant: "destructive", className: "mt-5 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertTitle, { children: "Couldn't explain this document" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDescription, { children: state.error })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[12px] text-text-tertiary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { size: 12 }),
            " Private & secure"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-tertiary", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bolt, { size: 12 }),
            " Results in seconds"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-text-tertiary", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
            " No signup to try"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setState({
          step: "compare"
        }), className: "mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-medium transition-colors hover:opacity-80", style: {
          background: "var(--surface)",
          border: "0.5px solid var(--hairline)",
          color: "var(--text-secondary)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(GitCompare, { size: 13 }),
          "Compare two documents"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "how", className: "px-6 pb-24 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-text-tertiary", children: "See an example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ExampleResult, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "px-6 pb-12 text-center text-[12px] text-text-tertiary", children: "Plainly · Finally, plain English." })
    ] })
  ] });
}
export {
  Index as component
};
