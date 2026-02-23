import React from "react";
import { GradientContainer } from "../gradient-container";
import { Container } from "../container";
import { Heading } from "../heading";
import { Subheading } from "../subheading";
import { FeatureIconContainer } from "./feature-icon-container";
import { FaBolt, FaChartLine } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
} from "./card";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonFour } from "./skeletons/fourth";
import { SkeletonFive } from "./skeletons/fifth";

export const Features = () => {
  return (
    <GradientContainer className="md:my-20">
      <Container className="py-20 max-w-5xl mx-auto  relative z-40">
        <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
          <FaBolt className="h-6 w-6 text-green-500" />
        </FeatureIconContainer>
        <Heading className="pt-4">Why most practitioners struggle with marketing</Heading>
        <Subheading>
          You trained to heal people, not run Facebook ads. We did. Here&apos;s
          what we handle so you can focus on your patients.
        </Subheading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 py-10">
          <Card className="lg:col-span-2">
            <CardTitle>Done-For-You Ad Campaigns</CardTitle>
            <CardDescription>
              We write, launch, and optimize your ads across Facebook, Instagram,
              and Google. You never touch an ad manager.
            </CardDescription>
            <CardSkeletonContainer>
              <SkeletonOne />
            </CardSkeletonContainer>
          </Card>
          <Card>
            <CardSkeletonContainer className="max-w-[16rem] mx-auto">
              <SkeletonTwo />
            </CardSkeletonContainer>
            <CardTitle>Real-Time Lead Tracking</CardTitle>
            <CardDescription>
              See every lead, every booked call, and every new patient in one
              dashboard. No guessing. Just numbers.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonThree />
            </CardSkeletonContainer>
            <CardTitle>AI-Powered Follow-Up</CardTitle>
            <CardDescription>
              Our systems follow up with leads via text and email within 60
              seconds. Speed-to-lead wins the patient.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer
              showGradient={false}
              className="max-w-[16rem] mx-auto"
            >
              <SkeletonFour />
            </CardSkeletonContainer>
            <CardTitle>Seamless CRM Integration</CardTitle>
            <CardDescription>
              Plugs into your existing systems. No ripping out what works. We
              add the layer that brings patients in.
            </CardDescription>
          </Card>
          <Card>
            <CardSkeletonContainer>
              <SkeletonFive />
            </CardSkeletonContainer>
            <CardTitle>Know Exactly What&apos;s Working</CardTitle>
            <CardDescription>
              Every dollar tracked. Every lead attributed. You&apos;ll know your
              cost per patient down to the penny.
            </CardDescription>
          </Card>
        </div>
      </Container>
    </GradientContainer>
  );
};
