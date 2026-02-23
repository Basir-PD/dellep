"use client";
import { testimonials } from "@/constants/page-testimonials";
import { cn } from "@/lib/utils";
import { IconUserCircle } from "@tabler/icons-react";
import React from "react";

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 4);
  const second = testimonials.slice(4, 8);
  const third = testimonials.slice(8, 12);
  const fourth = testimonials.slice(12, 16);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <IconUserCircle className="h-10 w-10 text-neutral-400 dark:text-neutral-500 shrink-0" />
                <div className="flex flex-col">
                  <QuoteDescription className="text-neutral-600 dark:text-neutral-300">
                    {testimonial.name}
                  </QuoteDescription>
                  <QuoteDescription className="text-neutral-400">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-neutral-200 dark:border-[rgba(255,255,255,0.10)] bg-neutral-50 dark:bg-[rgba(40,40,40,0.30)] shadow-sm dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3 className={cn("text-base font-semibold text-neutral-900 dark:text-white py-2", className)}>
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn("text-sm font-normal text-neutral-500 dark:text-neutral-400 max-w-sm", className)}
    >
      {children}
    </p>
  );
};
