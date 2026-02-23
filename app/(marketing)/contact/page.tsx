import { AmbientColor } from "@/components/ambient-color";
import { ContactForm } from "@/components/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Dellep",
  description:
    "Get in touch with Dellep. We help functional and naturopathic practitioners fill their calendars with done-for-you marketing systems.",
};

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <AmbientColor />
      <ContactForm />
    </div>
  );
}
