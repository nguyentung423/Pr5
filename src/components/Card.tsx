"use client";

import Link from "next/link";
import { formatDate, type ContentMeta } from "@/lib/content-types";
import { useLanguage } from "@/lib/i18n";

interface CardProps {
  item: ContentMeta;
  type: "work" | "thinking";
}

export default function Card({ item, type }: CardProps) {
  const href = `/${type}/${item.slug}`;
  const { language } = useLanguage();

  return (
    <Link
      href={href}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <article className="p-6 border border-border rounded-xl bg-bg-elevated hover:border-muted-light hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-[border-color,transform,box-shadow] duration-200">
        {/* Header: Type label + metadata above title */}
        {item.type && (
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-muted-light uppercase tracking-[0.08em] font-semibold">
              {item.type}
            </span>
            <time className="text-[11px] text-muted-light font-medium">
              {formatDate(item.date, language)}
            </time>
          </div>
        )}

        {/* Primary focus: Title */}
        <h3 className="text-fg font-semibold text-[19px] leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
          {item.title}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="text-muted text-[15px] leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Tags - contextual metadata */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-muted bg-border-light px-2.5 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
