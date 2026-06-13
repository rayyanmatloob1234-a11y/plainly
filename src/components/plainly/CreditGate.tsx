// src/components/plainly/CreditGate.tsx
// Shows when user has run out of free analyses
import { Link } from "@tanstack/react-router";
import { Sparkles, Zap } from "lucide-react";
import { signInWithGoogle } from "@/lib/supabase";

export function CreditGate({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <div className="mx-auto max-w-[480px] px-6 py-20 text-center">
      <div
        className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl"
        style={{ background: "var(--teal-soft)" }}
      >
        <Sparkles size={24} color="var(--teal-deep)" />
      </div>

      <h2
        className="text-[24px] font-medium text-text-primary"
        style={{ letterSpacing: "-0.02em" }}
      >
        {isLoggedIn ? "You've used your free analyses" : "You've used your 3 free analyses"}
      </h2>

      <p className="mx-auto mt-3 max-w-[340px] text-[15px] leading-relaxed text-text-secondary">
        {isLoggedIn
          ? "Top up with a credit bundle — starting at $1.99 for 10 analyses. Credits never expire."
          : "Create a free account to get 3 more analyses, or top up with a credit bundle."}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Link
          to="/pricing"
          className="flex items-center justify-center gap-2 rounded-full py-3 text-[14px] font-medium text-white"
          style={{ background: "var(--teal)" }}
        >
          <Zap size={14} />
          See pricing — from $1.99
        </Link>

        {!isLoggedIn && (
          <button
            onClick={() => signInWithGoogle()}
            className="rounded-full py-3 text-[14px] font-medium text-text-primary"
            style={{ border: "0.5px solid var(--hairline)" }}
          >
            Sign in for 3 more free analyses
          </button>
        )}
      </div>

      <p className="mt-6 text-[12px] text-text-tertiary">
        No subscription · Credits never expire · Cancel anytime
      </p>
    </div>
  );
}