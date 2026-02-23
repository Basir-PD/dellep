"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { IconCheck } from "@tabler/icons-react";
import { CustomLink } from "./custom-link";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Beam from "./beam";
import { Switch } from "./switch";
import { Clients } from "./clients";
import { useIntl } from "react-intl";

export const PricingGrid = () => {
  const intl = useIntl();
  const tiers = [
    {
      title: intl.formatMessage({ defaultMessage: "Starter" }),
      description: intl.formatMessage({ defaultMessage: "For solo practitioners exploring growth" }),
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        intl.formatMessage({ defaultMessage: "Access to all tools for 14 days" }),
        intl.formatMessage({ defaultMessage: "No credit card required" }),
        intl.formatMessage({ defaultMessage: "Community Support" }),
        intl.formatMessage({ defaultMessage: "Access to all Dellep tools" }),
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: intl.formatMessage({ defaultMessage: "Get Started" }),
    },
    {
      title: intl.formatMessage({ defaultMessage: "Growth" }),
      description: intl.formatMessage({ defaultMessage: "For practitioners ready to scale" }),
      monthlyPrice: 20,
      yearlyPrice: 100,
      features: [
        intl.formatMessage({ defaultMessage: "Everything in Hobby +" }),
        intl.formatMessage({ defaultMessage: "Access to Dellep AI" }),
        intl.formatMessage({ defaultMessage: "Priority tools access" }),
        intl.formatMessage({ defaultMessage: "Slack and email support" }),
        intl.formatMessage({ defaultMessage: "Priority support" }),
        intl.formatMessage({ defaultMessage: "99.67% Uptime SLA" }),
        intl.formatMessage({ defaultMessage: "Access to all templates" }),
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: intl.formatMessage({ defaultMessage: "Get Started" }),
    },
    {
      title: intl.formatMessage({ defaultMessage: "Pro" }),
      description: intl.formatMessage({ defaultMessage: "For established clinics & multi-provider practices" }),
      monthlyPrice: 30,
      yearlyPrice: 150,
      features: [
        intl.formatMessage({ defaultMessage: "Everything in Starter +" }),
        intl.formatMessage({ defaultMessage: "Access to our dev team" }),
        intl.formatMessage({ defaultMessage: "Coffee with the CEO" }),
        intl.formatMessage({ defaultMessage: "Access to all Dellep tools" }),
        intl.formatMessage({ defaultMessage: "Request tools" }),
        intl.formatMessage({ defaultMessage: "Advanced analytics" }),
        intl.formatMessage({ defaultMessage: "Customizable dashboards" }),
        intl.formatMessage({ defaultMessage: "24/7 customer support" }),
        intl.formatMessage({ defaultMessage: "Unlimited data storage" }),
        intl.formatMessage({ defaultMessage: "Enhanced security features" }),
      ],
      featured: true,
      onClick: () => {
        console.log("clicked");
      },
      ctaText: intl.formatMessage({ defaultMessage: "Get Started" }),
    },
    {
      title: intl.formatMessage({ defaultMessage: "Enterprise" }),
      description: intl.formatMessage({ defaultMessage: "For multi-location practices & clinic networks" }),
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        intl.formatMessage({ defaultMessage: "Everything in Pro +" }),
        intl.formatMessage({ defaultMessage: "HIPAA and SOC2 compliance" }),
        intl.formatMessage({ defaultMessage: "Bulk email support" }),
        intl.formatMessage({ defaultMessage: "Customizable dashboards" }),
        intl.formatMessage({ defaultMessage: "24/7 customer support" }),
      ],
      onClick: () => {
        console.log("clicked");
      },
      ctaText: intl.formatMessage({ defaultMessage: "Book a demo" }),
      isEnterprise: true,
    },
  ];
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="flex justify-center">
        <Switch checked={checked} setChecked={setChecked} />
      </div>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4 py-20">
        {tiers.map((tier, index) => (
          <div
            key={tier.title + index}
            className={cn(
              "flex flex-col justify-between items-start px-6 py-4 rounded-lg relative overflow-hidden",
              tier.featured &&
                "bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-neutral-950"
            )}
          >
            {tier.featured && <Beam showBeam className="top-0 block" />}
            <div>
              <h3 className="text-base font-normal">{tier.title}</h3>
              <p className="text-lg text-neutral-400 mt-4 font-medium">
                {"isEnterprise" in tier && tier.isEnterprise
                  ? intl.formatMessage({ defaultMessage: "Custom" })
                  : `$${checked ? tier.yearlyPrice : tier.monthlyPrice} / ${
                      checked
                        ? intl.formatMessage({ defaultMessage: "year" })
                        : intl.formatMessage({ defaultMessage: "month" })
                    }`}
              </p>
              <p className="text-sm text-neutral-4000 mt-4">
                {tier.description}
              </p>
              <div className="mt-4">
                {tier.features.map((feature, idx) => (
                  <Step key={`feature-${index}-${idx}`}>{feature}</Step>
                ))}
              </div>
            </div>
            <Button
              variant={tier.featured ? "primary" : "muted"}
              onClick={tier.onClick}
              className="mt-4"
            >
              {tier.ctaText}
            </Button>
          </div>
        ))}
      </Container>
      {/* <Clients /> */}
    </div>
  );
};

const Step = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2 items-start my-4">
      <IconCheck className="h-4 w-4 text-neutral-300 mt-0.5" />
      <div className="text-sm text-neutral-400">
        <Balancer>{children}</Balancer>
      </div>
    </div>
  );
};
