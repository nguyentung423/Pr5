import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Re-export types and utilities from shared file for backward compatibility
export {
  formatDate,
  type ContentMeta,
  type ContentItem,
} from "./content-types";
import type { ContentMeta, ContentItem } from "./content-types";

const contentDirectory = path.join(process.cwd(), "src/content");

function getContentDirectory(
  type: "work" | "thinking",
  lang: "vi" | "en" = "vi",
): string {
  const basePath = path.join(contentDirectory, type);
  const langPath = path.join(basePath, lang);

  // If language folder exists, use it; otherwise fall back to base path
  if (fs.existsSync(langPath)) {
    return langPath;
  }
  return basePath;
}

export function getAllContent(
  type: "work" | "thinking",
  lang: "vi" | "en" = "vi",
): ContentMeta[] {
  const directory = getContentDirectory(type, lang);

  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const content = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(directory, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || "",
      tags: data.tags || [],
      ...(type === "work" && { type: data.type }),
    } as ContentMeta;
  });

  // Sort by date, newest first
  return content.sort((a, b) => {
    if (!a.date || !b.date) return 0;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getContentBySlug(
  type: "work" | "thinking",
  slug: string,
  lang: "vi" | "en" = "vi",
): ContentItem | null {
  const directory = getContentDirectory(type, lang);
  const filePath = path.join(directory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    tags: data.tags || [],
    content,
    ...(type === "work" && { type: data.type }),
  } as ContentItem;
}

export function getLatestContent(
  type: "work" | "thinking",
  count: number = 2,
  lang: "vi" | "en" = "vi",
): ContentMeta[] {
  return getAllContent(type, lang).slice(0, count);
}
