import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="sticky top-0 z-40 bg-background/90 backdrop-blur"
      style={{ borderBottom: "0.5px solid rgba(0,0,0,0.08)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="outline-none">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" hash="how" className="text-[13px] text-text-secondary transition-colors hover:text-text-primary">
            How it works
          </Link>
          <Link to="/pricing" className="text-[13px] text-text-secondary transition-colors hover:text-text-primary">
            Pricing
          </Link>
          <button
            className="rounded-full border px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-surface"
            style={{ borderColor: "var(--hairline)" }}
          >
            Sign in
          </button>
        </nav>
        <button
          aria-label="Menu"
          className="rounded-md p-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ borderTop: "0.5px solid var(--hairline)" }}>
          <div className="flex flex-col px-6 py-4 text-[14px]">
            <Link to="/" hash="how" className="py-2 text-text-secondary" onClick={() => setOpen(false)}>
              How it works
            </Link>
            <Link to="/pricing" className="py-2 text-text-secondary" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <button className="py-2 text-left text-text-primary">Sign in</button>
          </div>
        </div>
      )}
    </header>
  );
}