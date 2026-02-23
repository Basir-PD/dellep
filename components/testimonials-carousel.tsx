"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { testimonials } from "@/constants/page-testimonials";

export function TestimonialsCarousel() {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const visibleTestimonials = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
        <p className="text-neutral-500 font-mono text-lg dark:text-neutral-400">
          Testimonials
        </p>
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-black md:text-4xl lg:text-5xl dark:text-white leading-tight">
            Practitioners who are growing.
          </h2>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={handlePrevious}
              className="flex size-10 items-center justify-center rounded-full border border-black/15 text-black transition duration-200 hover:bg-black/5 active:scale-95 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={handleNext}
              className="flex size-10 items-center justify-center rounded-full border border-black/15 text-black transition duration-200 hover:bg-black/5 active:scale-95 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              <svg
                aria-hidden
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                key={testimonial.name}
                className="flex h-full flex-col justify-between rounded-lg bg-white p-4 shadow-sm ring-1 shadow-black/10 ring-black/10 md:p-6 dark:bg-neutral-900 dark:shadow-white/10 dark:ring-white/5"
              >
                <p className="text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-6 md:mt-14 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="size-8 shrink-0 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-black dark:text-white">
                      {testimonial.name}
                    </span>
                    {testimonial.designation && (
                      <span className="text-xs text-neutral-500 dark:text-neutral-400">
                        {testimonial.designation}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
