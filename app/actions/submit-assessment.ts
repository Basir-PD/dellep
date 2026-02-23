"use server";

import { createClient } from "@/lib/supabase/server";

export interface AssessmentData {
  practice_name: string;
  monthly_inquiries: string;
  patient_value: string;
  discovery_channel: string;
  online_presence: string;
  paid_ads: string;
  response_time: string;
  show_rate: number;
  follow_up: string;
  full_name: string;
  email: string;
  phone?: string;
}

export async function submitAssessment(data: AssessmentData) {
  const supabase = await createClient();

  const { error } = await supabase.from("growth_assessments").insert({
    practice_name: data.practice_name,
    monthly_inquiries: data.monthly_inquiries,
    patient_value: data.patient_value,
    discovery_channel: data.discovery_channel,
    online_presence: data.online_presence,
    paid_ads: data.paid_ads || null,
    response_time: data.response_time,
    show_rate: data.show_rate,
    follow_up: data.follow_up || null,
    full_name: data.full_name,
    email: data.email,
    phone: data.phone || null,
  });

  if (error) {
    console.error("Assessment submission error:", error);
    return { success: false, error: error.message };
  }

  return { success: true };
}
