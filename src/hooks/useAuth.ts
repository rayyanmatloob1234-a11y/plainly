// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase, getProfile } from "@/lib/supabase";

export type Profile = {
  id: string;
  email: string;
  free_analyses_used: number;
  credits: number;
  created_at: string;
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        getProfile(session.user.id).then((p) => setProfile(p as Profile));
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          const p = await getProfile(session.user.id);
          setProfile(p as Profile);
        } else {
          setProfile(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const freeRemaining = profile
    ? Math.max(0, 3 - profile.free_analyses_used)
    : null;

  const hasAccess = profile
    ? profile.credits > 0 || profile.free_analyses_used < 3
    : true; // anonymous users handled separately

  return { user, profile, loading, freeRemaining, hasAccess };
}