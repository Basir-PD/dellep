// Readable labels for Intake answers, used in the notification email.
// Always English — this email is read by Dellep, not by the Roofer.

export const LABELS: Record<string, Record<string, string>> = {
  market: {
    united_states: "United States",
    quebec: "Quebec, Canada",
    elsewhere: "Somewhere else",
  },
  monthly_revenue: {
    under_20k: "Under $20k/month",
    "20k_50k": "$20k – $50k/month",
    "50k_100k": "$50k – $100k/month",
    "100k_250k": "$100k – $250k/month",
    "250k_plus": "$250k+/month",
  },
  current_ads: {
    none: "Not running Meta ads",
    boosting: "Boosting posts occasionally",
    self_managed: "Running campaigns themselves",
    agency: "An agency runs them",
  },
  ad_spend_budget: {
    under_1000: "Under $1,000/month — BELOW FLOOR",
    "1000_1500": "$1,000 – $1,500/month",
    "1500_3000": "$1,500 – $3,000/month",
    "3000_5000": "$3,000 – $5,000/month",
    "5000_plus": "$5,000+/month",
  },
  job_source: {
    referrals: "Referrals and word of mouth",
    door_knocking: "Door knocking / canvassing",
    google: "Google search or Maps",
    lead_vendors: "Lead vendors (Angi, HomeAdvisor)",
    storm_chasing: "Storm work",
    meta_ads: "Facebook / Instagram ads",
    other: "Other",
  },
};
