import { AmbientColor } from "@/components/ambient-color";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { Hero } from "@/components/hero";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { Tools } from "@/components/tools";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <Hero />
      {/* <Features /> */}
      <Tools />
      <TestimonialsCarousel />
      <FAQs />
      <CTA />
    </div>
  );
}
