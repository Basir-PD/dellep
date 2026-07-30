import { AmbientColor } from "@/components/ambient-color";
import { Hero } from "@/components/hero";
import { OfferTerms } from "@/components/offer-terms";
import { ThirtyDayPlan } from "@/components/thirty-day-plan";
import { WhyFree } from "@/components/why-free";
import { Intake } from "@/components/intake";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      <OfferTerms />
      <ThirtyDayPlan />
      <WhyFree />
      <section id="intake" className="scroll-mt-20">
        <Intake />
      </section>
    </div>
  );
}
