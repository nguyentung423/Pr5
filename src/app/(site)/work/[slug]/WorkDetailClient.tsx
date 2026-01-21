"use client";

import { ReactNode } from "react";
import { useLanguage } from "@/lib/i18n";
import { formatDate } from "@/lib/content-types";
import type { ContentItem } from "@/lib/content-types";

interface WorkDetailClientProps {
  viItem: ContentItem;
  enItem: ContentItem;
  viContent: ReactNode;
  enContent: ReactNode;
}

export default function WorkDetailClient({
  viItem,
  enItem,
  viContent,
  enContent,
}: WorkDetailClientProps) {
  const { language } = useLanguage();

  const item = language === "en" ? enItem : viItem;
  const content = language === "en" ? enContent : viContent;

  return (
    <>
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          {item.type && (
            <span className="text-xs text-muted uppercase tracking-wide">
              {item.type}
            </span>
          )}
          <time className="text-sm text-muted">{formatDate(item.date)}</time>
        </div>
        <h1 className="text-4xl font-semibold text-fg tracking-tight mb-4">
          {item.title}
        </h1>
        {item.description && (
          <p className="text-lg text-muted leading-relaxed">
            {item.description}
          </p>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted bg-border/50 px-2.5 py-1 rounded whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {content}
    </>
  );
}
