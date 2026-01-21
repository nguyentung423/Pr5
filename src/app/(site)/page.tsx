import { getLatestContent } from "@/lib/content";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  const viLatestWork = getLatestContent("work", 2, "vi");
  const enLatestWork = getLatestContent("work", 2, "en");
  const latestThinking = getLatestContent("thinking", 2, "vi");

  return (
    <HomeContent
      viLatestWork={viLatestWork}
      enLatestWork={enLatestWork}
      latestThinking={latestThinking}
    />
  );
}
