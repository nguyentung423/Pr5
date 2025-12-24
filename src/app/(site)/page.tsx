import { getLatestContent } from "@/lib/content";
import HomeContent from "@/components/HomeContent";

export default function HomePage() {
  const latestWork = getLatestContent("work", 2);
  const latestThinking = getLatestContent("thinking", 2);

  return (
    <HomeContent latestWork={latestWork} latestThinking={latestThinking} />
  );
}
