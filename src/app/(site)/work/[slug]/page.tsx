import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose, CaseLayout } from "@/components";
import { getContentBySlug, getAllContent, formatDate } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const work = getAllContent("work");
  return work.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug("work", slug);

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: `${item.title} | Nguyen Hoang Tung`,
      description: item.description,
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getContentBySlug("work", slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-20">
      <Link
        href="/work"
        className="inline-flex items-center text-sm text-muted hover:text-fg transition-colors mb-6"
      >
        ← Back to Work
      </Link>

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
          <div className="flex gap-2 mt-6">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted bg-border/50 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <Prose>
        <MDXRemote
          source={item.content}
          components={{
            CaseLayout,
          }}
        />
      </Prose>
    </div>
  );
}
