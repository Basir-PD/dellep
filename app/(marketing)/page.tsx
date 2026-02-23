import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonials";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      {/* <Features /> */}
      <Tools />
      <Testimonials />
      <FAQs />
      <CTA />
    </div>
  );
}
