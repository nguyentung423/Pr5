// Shared types and utilities that can be used in both server and client components

export interface ContentMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  type?: "case" | "project" | "experiment"; // Only for work
}

export interface ContentItem extends ContentMeta {
  content: string;
}

export type Locale = "vi" | "en";

/**
 * Format date string based on locale
 * Vietnamese: "Th01/2026"
 * English: "Jan 2026"
 */
export function formatDate(dateString: string, locale: Locale = "en"): string {
  if (!dateString) return "";

  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "short",
  });
}
