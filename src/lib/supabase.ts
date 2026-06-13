// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export async function signInWithGoogle() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/`,
    },
  });
  if (error) throw error;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (error) return null;
  return data;
}

export async function incrementFreeAnalyses(userId: string) {
  const { data, error } = await supabase.rpc("increment_free_analyses", {
    user_id: userId,
  });
  if (error) throw error;
  return data;
}

export async function canUserAnalyse(userId: string | null): Promise<{
  allowed: boolean;
  reason: "free" | "credits" | "limit_reached" | "anonymous";
  freeRemaining?: number;
  credits?: number;
}> {
  // Anonymous users get 3 free analyses tracked in localStorage
  if (!userId) {
    const used = parseInt(localStorage.getItem("plainly_anon_used") || "0");
    if (used < 3) {
      return { allowed: true, reason: "anonymous", freeRemaining: 3 - used };
    }
    return { allowed: false, reason: "limit_reached", freeRemaining: 0 };
  }

  const profile = await getProfile(userId);
  if (!profile) return { allowed: false, reason: "limit_reached" };

  // Has paid credits
  if (profile.credits > 0) {
    return { allowed: true, reason: "credits", credits: profile.credits };
  }

  // Has free analyses remaining
  if (profile.free_analyses_used < 3) {
    return {
      allowed: true,
      reason: "free",
      freeRemaining: 3 - profile.free_analyses_used,
    };
  }

  return { allowed: false, reason: "limit_reached", freeRemaining: 0 };
}

export async function recordAnalysis(userId: string | null) {
  if (!userId) {
    // Anonymous — track in localStorage
    const used = parseInt(localStorage.getItem("plainly_anon_used") || "0");
    localStorage.setItem("plainly_anon_used", String(used + 1));
    return;
  }

  const profile = await getProfile(userId);
  if (!profile) return;

  if (profile.credits > 0) {
    // Deduct a credit
    await supabase
      .from("profiles")
      .update({ credits: profile.credits - 1 })
      .eq("id", userId);
  } else {
    // Use a free analysis
    await supabase
      .from("profiles")
      .update({ free_analyses_used: profile.free_analyses_used + 1 })
      .eq("id", userId);
  }
}

export async function saveDocument(
  userId: string,
  data: {
    fileName: string;
    docType: string;
    company: string;
    country: string;
    summary: string;
    riskLevel: string;
    flags: unknown[];
    highlights: unknown[];
    actions: string[];
    labValues: unknown[];
    language: string;
  }
) {
  const { error } = await supabase.from("documents").insert({
    user_id: userId,
    file_name: data.fileName,
    doc_type: data.docType,
    company: data.company,
    country: data.country,
    summary: data.summary,
    risk_level: data.riskLevel,
    flags: data.flags,
    highlights: data.highlights,
    actions: data.actions,
    lab_values: data.labValues,
    language: data.language,
  });
  if (error) throw error;
}

export async function getUserDocuments(userId: string) {
  const { data, error } = await supabase
    .from("documents")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error) return [];
  return data;
}

export async function deleteDocument(docId: string) {
  const { error } = await supabase
    .from("documents")
    .delete()
    .eq("id", docId);
  if (error) throw error;
}