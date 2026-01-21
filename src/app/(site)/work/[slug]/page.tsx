import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Prose, CaseLayout, BackLink } from "@/components";
import { getContentBySlug, getAllContent } from "@/lib/content";
import WorkDetailClient from "./WorkDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const work = getAllContent("work", "vi");
  return work.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentBySlug("work", slug, "vi");

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
  const viItem = getContentBySlug("work", slug, "vi");
  const enItem = getContentBySlug("work", slug, "en");

  if (!viItem) {
    notFound();
  }

  // Pre-render both language versions
  const viContent = (
    <Prose>
      <MDXRemote
        source={viItem.content}
        components={{
          CaseLayout,
        }}
      />
    </Prose>
  );

  const enContent = enItem ? (
    <Prose>
      <MDXRemote
        source={enItem.content}
        components={{
          CaseLayout,
        }}
      />
    </Prose>
  ) : null;

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-8 pb-16 md:pt-10 md:pb-20">
      <BackLink type="work" />

      <WorkDetailClient
        viItem={viItem}
        enItem={enItem || viItem}
        viContent={viContent}
        enContent={enContent || viContent}
      />
    </div>
  );
}
