import { AmbientColor } from "@/components/ambient-color";
import { GrowthAssessment } from "@/components/growth-assessment";
import { Container } from "@/components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Growth Assessment | Dellep",
  description:
    "Take the free 2-minute assessment to uncover the biggest growth levers in your functional or naturopathic practice.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Container className="py-20 md:py-28">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-secondary mb-3">
            Free 2-Minute Assessment
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-neutral-900 to-neutral-900 dark:from-neutral-800 dark:via-white dark:to-white">
            Unlock Your Growth Roadmap
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mt-3 text-sm md:text-base max-w-lg mx-auto">
            Answer a few quick questions about your practice and we&apos;ll
            build a personalized plan to help you attract more patients.
          </p>
        </div>
        <GrowthAssessment />
      </Container>
    </div>
  );
}
