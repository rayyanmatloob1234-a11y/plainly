import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, LogOut, User } from "lucide-react";

import { Logo } from "./Logo";
import { useAuth } from "@/hooks/useAuth";
import { signInWithGoogle, signOut } from "@/lib/supabase";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, profile, loading } = useAuth();

  const freeRemaining = profile
    ? Math.max(0, 3 - profile.free_analyses_used)
    : null;

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e);
    }
  };

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
          <Link
            to="/"
            hash="how"
            className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
          >
            How it works
          </Link>
          <Link
            to="/pricing"
            className="text-[13px] text-text-secondary transition-colors hover:text-text-primary"
          >
            Pricing
          </Link>

          {!loading && (
            <>
              {user ? (
                <div className="flex items-center gap-3">
                  {/* Credit / free analyses indicator */}
                  {profile && (
                    <div
                      className="flex items-center gap-1.5 rounded-full px-3 py-1"
                      style={{
                        background: profile.credits > 0
                          ? "var(--teal-soft)"
                          : freeRemaining && freeRemaining > 0
                          ? "var(--surface)"
                          : "#FEF2F2",
                        border: "0.5px solid var(--hairline)",
                      }}
                    >
                      <span
                        className="text-[12px] font-medium"
                        style={{
                          color: profile.credits > 0
                            ? "var(--teal-deep)"
                            : freeRemaining && freeRemaining > 0
                            ? "var(--text-secondary)"
                            : "#991B1B",
                        }}
                      >
                        {profile.credits > 0
                          ? `${profile.credits} credits`
                          : freeRemaining && freeRemaining > 0
                          ? `${freeRemaining} free left`
                          : "No analyses left"}
                      </span>
                    </div>
                  )}

                  {/* User avatar + email */}
                  <div className="flex items-center gap-2">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium"
                      style={{ background: "var(--teal-soft)", color: "var(--teal-deep)" }}
                    >
                      {user.email?.slice(0, 1).toUpperCase() ?? <User size={12} />}
                    </div>
                    <span className="text-[13px] text-text-secondary">
                      {user.email?.split("@")[0]}
                    </span>
                  </div>

                  {/* Sign out */}
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] text-text-secondary transition-colors hover:text-text-primary"
                    style={{ border: "0.5px solid var(--hairline)" }}
                  >
                    <LogOut size={12} />
                    Sign out
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleSignIn}
                  className="rounded-full border px-4 py-1.5 text-[13px] text-text-primary transition-colors hover:bg-surface"
                  style={{ borderColor: "var(--hairline)" }}
                >
                  Sign in
                </button>
              )}
            </>
          )}
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
            <Link
              to="/"
              hash="how"
              className="py-2 text-text-secondary"
              onClick={() => setOpen(false)}
            >
              How it works
            </Link>
            <Link
              to="/pricing"
              className="py-2 text-text-secondary"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            {user ? (
              <button
                onClick={handleSignOut}
                className="py-2 text-left text-text-secondary"
              >
                Sign out
              </button>
            ) : (
              <button
                onClick={handleSignIn}
                className="py-2 text-left text-text-primary"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}