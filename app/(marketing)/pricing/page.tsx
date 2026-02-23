import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { FeatureIconContainer } from "@/components/features/feature-icon-container";
import { Heading } from "@/components/heading";
import { Hero } from "@/components/hero";
import { PricingGrid } from "@/components/pricing-grid";
import { Subheading } from "@/components/subheading";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsMarquee } from "@/components/testimonials/marquee";
import { IconReceiptFilled } from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Dellep",
  description:
    "Transparent pricing for functional and naturopathic practitioners. Done-for-you patient acquisition systems that pay for themselves.",
};

export default function PricingPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <div className="py-20 sm:py-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <IconReceiptFilled className="h-6 w-6 text-cyan-500" />
        </FeatureIconContainer>
        <Heading as="h1" className="mt-4">
          Simple, transparent pricing
        </Heading>
        <Subheading>
          Plans built for solo practitioners, growing clinics, and multi-location
          practices. Pick what fits your stage.
        </Subheading>
        <PricingGrid />
      </div>
      <div className="pb-40">
        <TestimonialsMarquee />
      </div>
      <CTA />
    </div>
  );
}
