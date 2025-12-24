"use client";

import Link from "next/link";
import { Card } from "@/components";
import { useLanguage } from "@/lib/i18n";
import { useScrollReveal } from "@/lib/hooks";
import type { ContentMeta } from "@/lib/content-types";

interface HomeContentProps {
  latestWork: ContentMeta[];
  latestThinking: ContentMeta[];
}

export default function HomeContent({
  latestWork,
  latestThinking,
}: HomeContentProps) {
  const { t } = useLanguage();

  // Scroll reveal for key sections
  const caseStudiesReveal = useScrollReveal<HTMLElement>();
  const notesReveal = useScrollReveal<HTMLElement>();

  return (
    <div className="max-w-[1000px] mx-auto px-6 page-content">
      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        {/* Eyebrow - positioning statement */}
        <p className="text-muted text-[13px] font-medium uppercase tracking-[0.1em] mb-6">
          {t.home.eyebrow}
        </p>

        {/* Headline - specific, outcome-oriented */}
        <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-fg leading-[1.08] tracking-[-0.035em] mb-8 max-w-[720px]">
          {t.home.headline}
          <br />
          <span className="text-muted">{t.home.headlineMuted}</span>
        </h1>

        {/* Subtext - outcome-driven value prop */}
        <p className="text-[17px] md:text-[19px] text-muted leading-[1.65] max-w-[560px] mb-10">
          {t.home.subtext}
        </p>

        {/* CTAs - clean two-action layout */}
        <div className="flex flex-wrap items-center gap-5">
          {/* Primary CTA */}
          <Link
            href="/work"
            className="inline-flex items-center justify-center h-11 px-5 bg-fg-secondary rounded-xl text-[14px] font-medium tracking-[-0.01em] hover:bg-fg hover:-translate-y-px active:translate-y-0 transition-[background-color,transform] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fg focus-visible:ring-offset-2"
            style={{ color: "#ffffff" }}
          >
            {t.home.ctaPrimary}
          </Link>
          {/* Secondary: Notes link */}
          <Link
            href="/thinking"
            className="inline-flex items-center gap-1 h-11 px-3 text-muted text-[14px] font-medium hover:text-fg transition-colors duration-150 focus-visible:outline-none focus-visible:underline underline-offset-4"
          >
            {t.home.ctaSecondary}
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        </div>

        {/* Credibility line */}
        <p className="mt-10 text-[14px] text-muted-light">
          {t.home.credibility}
        </p>
      </section>

      {/* What Lives Here - refined grid */}
      <section className="py-20 border-t border-border">
        <h2 className="text-[13px] font-medium uppercase tracking-[0.1em] text-muted mb-10">
          {t.home.whatLivesHere}
        </h2>
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          <div className="group">
            <h3 className="text-[17px] font-semibold text-fg mb-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                {t.home.workTitle}
                <svg
                  className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              {t.home.workDesc}
            </p>
          </div>
          <div className="group">
            <h3 className="text-[17px] font-semibold text-fg mb-3">
              <Link
                href="/thinking"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                {t.home.notesTitle}
                <svg
                  className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              {t.home.notesDesc}
            </p>
          </div>
          <div className="group">
            <h3 className="text-[17px] font-semibold text-fg mb-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                {t.home.aboutTitle}
                <svg
                  className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-[opacity,transform] duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </h3>
            <p className="text-muted text-[15px] leading-relaxed">
              {t.home.aboutDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies - elevated presentation */}
      <section
        ref={caseStudiesReveal.ref}
        className={`py-20 border-t border-border reveal ${
          caseStudiesReveal.isRevealed ? "revealed" : ""
        }`}
      >
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="text-[22px] font-semibold text-fg tracking-[-0.02em]">
            {t.home.caseStudies}
          </h2>
          <Link
            href="/work"
            className="text-[14px] text-muted hover:text-fg transition-colors font-medium"
          >
            {t.home.viewAll}
          </Link>
        </div>
        {latestWork.length > 0 ? (
          <div
            className={`grid md:grid-cols-2 gap-6 reveal-stagger ${
              caseStudiesReveal.isRevealed ? "revealed" : ""
            }`}
          >
            {latestWork.map((item) => (
              <Card key={item.slug} item={item} type="work" />
            ))}
          </div>
        ) : (
          <p className="text-muted">{t.home.workComingSoon}</p>
        )}
      </section>

      {/* Recent Notes - analytical thinking */}
      <section
        ref={notesReveal.ref}
        className={`py-20 border-t border-border reveal ${
          notesReveal.isRevealed ? "revealed" : ""
        }`}
      >
        <div className="flex items-baseline justify-between mb-3">
          <h2 className="text-[22px] font-semibold text-fg tracking-[-0.02em]">
            {t.home.analysisNotes}
          </h2>
          <Link
            href="/thinking"
            className="text-[14px] text-muted hover:text-fg transition-colors font-medium"
          >
            {t.home.viewAll}
          </Link>
        </div>
        <p className="text-[14px] text-muted mb-8 max-w-[480px]">
          {t.home.analysisNotesDesc}
        </p>
        {latestThinking.length > 0 ? (
          <div
            className={`grid md:grid-cols-2 gap-6 reveal-stagger ${
              notesReveal.isRevealed ? "revealed" : ""
            }`}
          >
            {latestThinking.map((item) => (
              <Card key={item.slug} item={item} type="thinking" />
            ))}
          </div>
        ) : (
          <p className="text-muted">{t.home.notesComingSoon}</p>
        )}
      </section>

      {/* Closing - reflective, learning-oriented */}
      <section className="py-20 border-t border-border">
        <div className="max-w-[480px]">
          <h2 className="text-[22px] font-semibold text-fg tracking-[-0.02em] mb-4">
            {t.home.workingTogether}
          </h2>
          <p className="text-muted text-[15px] leading-relaxed mb-6">
            {t.home.workingTogetherDesc}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-muted text-[14px] font-medium hover:text-fg transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
          >
            {t.home.discussProject}
          </Link>
        </div>
      </section>
    </div>
  );
}
