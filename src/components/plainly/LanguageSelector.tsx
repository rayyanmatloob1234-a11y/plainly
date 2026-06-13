import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export const LANGUAGES = [
  { code: "English", label: "English", flag: "🇬🇧" },
  { code: "Urdu", label: "اردو", flag: "🇵🇰" },
  { code: "Arabic", label: "العربية", flag: "🇸🇦" },
  { code: "Spanish", label: "Español", flag: "🇪🇸" },
  { code: "French", label: "Français", flag: "🇫🇷" },
  { code: "Hindi", label: "हिंदी", flag: "🇮🇳" },
  { code: "Portuguese", label: "Português", flag: "🇵🇹" },
  { code: "German", label: "Deutsch", flag: "🇩🇪" },
  { code: "Turkish", label: "Türkçe", flag: "🇹🇷" },
  { code: "Indonesian", label: "Indonesia", flag: "🇮🇩" },
];

export function LanguageSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const current = LANGUAGES.find((l) => l.code === value) ?? LANGUAGES[0];
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12.5px] text-text-primary hover:bg-surface"
        style={{ borderColor: "var(--hairline)" }}
      >
        <span>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown size={13} className="text-text-tertiary" />
      </button>
      {open && (
        <div
          className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-xl bg-white py-1.5"
          style={{ border: "0.5px solid var(--hairline)" }}
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                onChange(l.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between px-3 py-2 text-left text-[13px] hover:bg-surface"
            >
              <span className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span>{l.label}</span>
              </span>
              {l.code === value && <Check size={14} color="var(--teal)" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}