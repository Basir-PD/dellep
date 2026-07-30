// The qualification gate. See docs/adr/0003-qualify-before-booking.md — a Roofer
// only reaches the Booking step if they are in a Served Market and clear the
// Ad Spend Floor. Kept free of React and I/O so it can be reasoned about (and
// tested) on its own.

export type Market = "united_states" | "quebec" | "elsewhere";

export type MonthlyRevenue =
  | "under_20k"
  | "20k_50k"
  | "50k_100k"
  | "100k_250k"
  | "250k_plus";

export type CurrentAds = "none" | "boosting" | "self_managed" | "agency";

export type AdSpendBudget =
  | "under_1000"
  | "1000_1500"
  | "1500_3000"
  | "3000_5000"
  | "5000_plus";

export type JobSource =
  | "referrals"
  | "door_knocking"
  | "google"
  | "lead_vendors"
  | "storm_chasing"
  | "meta_ads"
  | "other";

export interface IntakeAnswers {
  company_name: string;
  market: Market;
  service_area: string;
  monthly_revenue: MonthlyRevenue;
  current_ads: CurrentAds;
  ad_spend_budget: AdSpendBudget;
  job_source: JobSource;
  full_name: string;
  email: string;
  phone: string;
}

export type DisqualifyReason = "below_floor" | "outside_served_market";

export interface Qualification {
  outcome: "qualified" | "not_a_fit";
  reason?: DisqualifyReason;
}

/** Markets Dellep sells into. See docs/adr/0005-served-markets-us-and-quebec.md */
export const SERVED_MARKETS: Market[] = ["united_states", "quebec"];

/** Budgets that fall under the Ad Spend Floor of $1,000/month. */
export const BELOW_FLOOR_BUDGETS: AdSpendBudget[] = ["under_1000"];

export function qualify(answers: IntakeAnswers): Qualification {
  // Market is checked first: it is absolute, whereas a budget can change.
  if (!SERVED_MARKETS.includes(answers.market)) {
    return { outcome: "not_a_fit", reason: "outside_served_market" };
  }

  if (BELOW_FLOOR_BUDGETS.includes(answers.ad_spend_budget)) {
    return { outcome: "not_a_fit", reason: "below_floor" };
  }

  return { outcome: "qualified" };
}
