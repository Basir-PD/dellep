"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "./container";

const features = [
  {
    title: "Targeted Ad Campaigns",
    description:
      "We launch precision-targeted campaigns on Meta and Google that attract patients actively searching for functional and naturopathic care.",
  },
  {
    title: "Automated Follow-Up",
    description:
      "Every lead enters an automated nurture sequence — emails, SMS, and reminders — so no patient slips through the cracks.",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Track every dollar spent, every lead generated, and every appointment booked from a single dashboard you can check anytime.",
  },
  {
    title: "Done-For-You Booking",
    description:
      "Leads are pre-qualified and booked directly onto your calendar. You just show up and treat patients.",
  },
];

export const EngineShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const initGSAP = async () => {
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.default;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Heading — fade up
        const headingElements = headingRef.current?.children;
        if (headingElements) {
          gsap.fromTo(
            headingElements,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: headingRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Feature items — stagger slide in from left
        const featureItems =
          featuresRef.current?.querySelectorAll(".feature-item");
        if (featureItems) {
          gsap.fromTo(
            featureItems,
            { x: -60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.7,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: featuresRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Image — slide in from right with scale
        gsap.fromTo(
          imageRef.current,
          { x: 80, opacity: 0, scale: 0.95 },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Stat card — pop in
        gsap.fromTo(
          statCardRef.current,
          { y: 20, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: imageRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );

        // Image — subtle parallax float on scroll
        gsap.to(imageRef.current, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }, sectionRef);
    };

    initGSAP();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 dark:bg-green-500/[0.07] rounded-full blur-[100px] pointer-events-none" />

      <Container>
        {/* Section heading */}
        <div ref={headingRef} className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600 dark:text-green-400 mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
            Your entire patient acquisition engine
          </h2>
          <p className="mt-5 text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Everything you need to fill your calendar — built, managed, and
            optimized by us.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          {/* Left — Features */}
          <div ref={featuresRef} className="space-y-4 md:space-y-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="feature-item group flex gap-4 md:gap-5 p-4 md:p-5 rounded-2xl transition-all duration-300 hover:bg-neutral-100/80 dark:hover:bg-white/[0.04] border border-transparent hover:border-neutral-200 dark:hover:border-neutral-800"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Dashboard Image */}
          <div ref={imageRef} className="relative lg:sticky lg:top-32">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
              <Image
                src="/dashboard.png"
                alt="Patient acquisition dashboard"
                width={1400}
                height={720}
                className="w-full h-auto"
                quality={90}
                draggable={false}
              />
            </div>

            {/* Floating stat card */}
            <div
              ref={statCardRef}
              className="absolute -bottom-5 left-6 md:-bottom-6 md:left-8 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xl px-5 py-4"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">
                New patients this month
              </p>
              <div className="flex items-end gap-2">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400 leading-none">
                  +18
                </p>
                <span className="text-xs text-green-500 font-medium mb-0.5">
                  +32%
                </span>
              </div>
            </div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-green-500/10 dark:border-green-500/20 rounded-full pointer-events-none hidden lg:block" />
          </div>
        </div>
      </Container>
    </section>
  );
};
