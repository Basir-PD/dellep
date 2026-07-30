import { describe, it, expect } from "vitest";
import { qualify, type IntakeAnswers } from "@/lib/qualification";

const base: IntakeAnswers = {
  company_name: "Summit Roofing",
  market: "united_states",
  service_area: "Dallas, TX",
  monthly_revenue: "50k_100k",
  current_ads: "boosting",
  ad_spend_budget: "1500_3000",
  job_source: "referrals",
  full_name: "Sam Reyes",
  email: "sam@summitroofing.com",
  phone: "555-0100",
};

describe("qualify", () => {
  it("qualifies a US roofer above the Ad Spend Floor", () => {
    expect(qualify(base)).toEqual({ outcome: "qualified" });
  });

  it("qualifies a Quebec roofer above the Ad Spend Floor", () => {
    expect(
      qualify({ ...base, market: "quebec", ad_spend_budget: "1000_1500" })
    ).toEqual({ outcome: "qualified" });
  });

  it("turns away a roofer below the Ad Spend Floor", () => {
    expect(qualify({ ...base, ad_spend_budget: "under_1000" })).toEqual({
      outcome: "not_a_fit",
      reason: "below_floor",
    });
  });

  it("turns away a roofer outside a Served Market", () => {
    expect(qualify({ ...base, market: "elsewhere" })).toEqual({
      outcome: "not_a_fit",
      reason: "outside_served_market",
    });
  });

  it("reports market before budget when both fail", () => {
    expect(
      qualify({ ...base, market: "elsewhere", ad_spend_budget: "under_1000" })
    ).toEqual({ outcome: "not_a_fit", reason: "outside_served_market" });
  });

  it("does not let a big budget override an unserved market", () => {
    expect(
      qualify({ ...base, market: "elsewhere", ad_spend_budget: "5000_plus" })
        .outcome
    ).toBe("not_a_fit");
  });
});
