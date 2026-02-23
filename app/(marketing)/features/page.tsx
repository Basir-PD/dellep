import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { FeaturesGrid } from "@/components/features/features-grid";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | Dellep",
  description:
    "See how Dellep fills calendars for functional and naturopathic practitioners with done-for-you ads, CRM, AI follow-up, and full-stack automation.",
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Tools />
      <Features />
      <FeaturesGrid />

      <div className="pb-40">
        <Testimonials />
      </div>
      <CTA />
    </div>
  );
}
