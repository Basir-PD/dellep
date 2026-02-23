"use client";
import React, { useRef } from "react";
import { MotionValue, motion, useScroll, useTransform } from "motion/react";
import { useRouter } from "next/navigation";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { VideoModal } from "./video-modal";
import { FeaturedImages } from "./featured-images";
import Beam from "./beam";
import { useIntl } from "react-intl";
export const Hero = () => {
  const intl = useIntl();
  const router = useRouter();

  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1.2];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-[40rem] md:min-h-[80rem] pt-24 md:pt-40 relative overflow-hidden"
    >
      <Container className="flex  flex-col items-center justify-center">
        <Heading
          as="h1"
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold max-w-5xl mx-auto text-center mt-6 relative z-10 py-4 md:py-6 tracking-tight leading-tight"
        >
          {intl.formatMessage({ defaultMessage: "10-20+ New Patients Every Month Or You Don't Pay" })}
        </Heading>
        <Subheading className="text-center mt-2 md:mt-6 text-sm sm:text-base md:text-xl text-neutral-500 dark:text-neutral-400 max-w-3xl mx-auto relative z-10 px-2">
          {intl.formatMessage({ defaultMessage: "We build done-for-you patient acquisition systems for functional and naturopathic practitioners. No retainers. No guesswork. Just patients on your calendar." })}
        </Subheading>
        <div className="flex items-center gap-4 justify-center my-6 md:my-10 relative z-10">
          <Button className="flex space-x-2 items-center group !text-base md:!text-lg">
            <span>{intl.formatMessage({ defaultMessage: "Book a free strategy call" })}</span>{" "}
            <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
          </Button>
        </div>
      </Container>
      <div className="flex items-center justify-center relative px-3 py-2 md:p-20 pb-20 md:pb-72 cursor-pointer md:-mt-20">
        <div
          className="w-full relative"
          style={{
            perspective: "1000px",
          }}
        >
          <Card rotate={rotate} translate={translate} scale={scale}>
            <Image
              src={`/dashboard.png`}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-md grayscale group-hover:grayscale-0 transition duration-200 object-cover object-left-top h-full  md:object-left-top"
              draggable={false}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        translateY: translate,
        // scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[16rem] sm:h-[20rem] md:h-[50rem] w-full border-2 md:border-4 border-neutral-200 dark:border-neutral-900 p-1 md:p-2 bg-white dark:bg-charcoal rounded-xl md:rounded-[30px] shadow-2xl relative overflow-hidden"
    >
      <Beam showBeam className="-top-1 block" />
      <VideoModal />
      <div className=" h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 ">
        {children}
      </div>
    </motion.div>
  );
};
