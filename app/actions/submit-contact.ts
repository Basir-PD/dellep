"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContact(data: {
  full_name: string;
  email: string;
  practice_name?: string;
  message?: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase.from("contact_submissions").insert({
    full_name: data.full_name,
    email: data.email,
    practice_name: data.practice_name || null,
    message: data.message || null,
  });

  if (error) {
    console.error("Contact submission error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
