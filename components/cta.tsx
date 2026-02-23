"use client";
import React from "react";
import { AmbientColor } from "./ambient-color";
import { ContactForm } from "./contact-form";

export const CTA = () => {
  return (
    <div className="relative">
      <AmbientColor />
      <ContactForm />
    </div>
  );
};
