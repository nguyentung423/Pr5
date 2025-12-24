import { Metadata } from "next";
import { ThinkingPageContent } from "@/components";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thinking",
  description:
    "Notes, reflections, and ideas about design, technology, and creative work.",
  openGraph: {
    title: "Thinking | Nguyen Hoang Tung",
    description:
      "Notes, reflections, and ideas about design, technology, and creative work.",
  },
};

export default function ThinkingPage() {
  const thinking = getAllContent("thinking");

  return <ThinkingPageContent thinking={thinking} />;
}
