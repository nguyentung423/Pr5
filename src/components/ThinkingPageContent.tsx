"use client";

import { Card } from "@/components";
import { useLanguage } from "@/lib/i18n";
import type { ContentMeta } from "@/lib/content-types";

interface ThinkingPageContentProps {
  thinking: ContentMeta[];
}

export default function ThinkingPageContent({
  thinking,
}: ThinkingPageContentProps) {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20">
      <header className="mb-12">
        <h1 className="text-4xl font-semibold text-fg tracking-tight mb-4">
          {t.thinking.title}
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          {t.thinking.description}
        </p>
      </header>

      {thinking.length > 0 ? (
        <div className="grid gap-6">
          {thinking.map((item) => (
            <Card key={item.slug} item={item} type="thinking" />
          ))}
        </div>
      ) : (
        <p className="text-muted">{t.thinking.emptyState}</p>
      )}
    </div>
  );
}
