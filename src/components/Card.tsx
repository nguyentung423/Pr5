"use client";

import Link from "next/link";
import { formatDate, type ContentMeta } from "@/lib/content-types";
import { useLanguage } from "@/lib/i18n";

interface CardProps {
  item: ContentMeta;
  type: "work" | "thinking";
  disabled?: boolean;
}

export default function Card({ item, type, disabled = false }: CardProps) {
  const href = `/${type}/${item.slug}`;
  const { language } = useLanguage();

  const content = (
    <article
      className={`relative p-6 border border-border rounded-xl bg-bg-elevated transition-all duration-300 ease-out ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:border-muted-light hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
      }`}
    >
      {/* Arrow icon - top right */}
      {!disabled && (
        <svg
          className="absolute top-5 right-5 w-5 h-5 text-gray-400 group-hover:text-black group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300 ease-out"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      )}

      {/* Date - top left */}
      <time className="text-[11px] text-muted-light font-medium uppercase tracking-wide">
        {formatDate(item.date, language)}
      </time>

      {/* Primary focus: Title */}
      <h3
        className={`text-fg font-semibold text-[19px] leading-snug mt-2 mb-3 pr-8 transition-colors duration-300 ease-out ${
          disabled ? "" : "group-hover:text-accent"
        }`}
      >
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
  );

  if (disabled) {
    return (
      <div className="block rounded-xl" title="Sắp ra mắt">
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {content}
    </Link>
  );
}
