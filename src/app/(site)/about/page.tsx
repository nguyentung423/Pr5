import { Metadata } from "next";
import { AboutPageContent } from "@/components";

export const metadata: Metadata = {
  title: "About | Nguyen Hoang Tung",
  description:
    "I enjoy analyzing problems, building systems, and reflecting on what I learn along the way.",
  openGraph: {
    title: "About | Nguyen Hoang Tung",
    description:
      "I enjoy analyzing problems, building systems, and reflecting on what I learn along the way.",
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
