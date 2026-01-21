import { Metadata } from "next";
import { AboutPageContent } from "@/components";

export const metadata: Metadata = {
  title: "About",
  description: "Background, interests, and what drives me as a practitioner.",
  openGraph: {
    title: "About | Nguyen Hoang Tung",
    description: "Background, interests, and what drives me as a practitioner.",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
