import { Metadata } from "next";
import { WorkPageContent } from "@/components";
import { getAllContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies, projects, and experiments. A collection of work I've built or contributed to.",
  openGraph: {
    title: "Work | Nguyen Hoang Tung",
    description:
      "Case studies, projects, and experiments. A collection of work I've built or contributed to.",
  },
};

export default function WorkPage() {
  const viWork = getAllContent("work", "vi");
  const enWork = getAllContent("work", "en");

  return <WorkPageContent viWork={viWork} enWork={enWork} />;
}
