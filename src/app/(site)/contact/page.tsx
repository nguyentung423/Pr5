import { Metadata } from "next";
import { ContactPageContent } from "@/components";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'm always open to thoughtful conversations.",
  openGraph: {
    title: "Contact | Nguyen Hoang Tung",
    description: "Get in touch — I'm always open to thoughtful conversations.",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
