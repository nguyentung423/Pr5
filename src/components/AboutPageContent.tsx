"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

function ExpandableSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="group flex items-center gap-2 text-[15px] text-muted hover:text-fg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
      >
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-150 ${
            isOpen ? "rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span>{label}</span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-[15px] text-fg leading-[1.7] pl-5.5">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <article className="max-w-[1000px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20 page-content">
      {/* Editorial opening */}
      <header className="mb-14">
        <h1 className="text-[32px] md:text-[38px] font-semibold text-fg tracking-[-0.02em] leading-[1.15] mb-5">
          {t.about.title}
        </h1>
        <p className="text-[19px] md:text-[20px] text-muted leading-[1.6] max-w-[600px] italic">
          {t.about.openingStatement}
        </p>
      </header>

      {/* Background - flowing narrative */}
      <section className="mb-14">
        <p className="text-[16px] text-fg leading-[1.75] mb-4">
          {t.about.backgroundP1}
        </p>
        <p className="text-[16px] text-fg leading-[1.75]">
          {t.about.backgroundP2}
        </p>
      </section>

      {/* Pull quote - editorial moment */}
      <blockquote className="my-14 pl-5 border-l-2 border-border">
        <p className="text-[18px] text-muted leading-[1.65] italic">
          {t.about.pullQuote}
        </p>
      </blockquote>

      {/* Interests - merged, tighter */}
      <section className="mb-14">
        <h2 className="text-[18px] font-semibold text-fg tracking-[-0.01em] mb-4">
          {t.about.interestsTitle}
        </h2>
        <p className="text-[16px] text-fg leading-[1.75]">
          {t.about.interestsP1}
        </p>
      </section>

      {/* Philosophy - emphasized section */}
      <section className="mb-16">
        <h2 className="text-[20px] font-semibold text-fg tracking-[-0.01em] mb-6">
          {t.about.philosophyTitle}
        </h2>
        <div className="space-y-5">
          {t.about.philosophyList.map((item, index) => (
            <div key={index}>
              <p className="text-[16px] font-medium text-fg mb-1">
                {item.principle}
              </p>
              <p className="text-[15px] text-muted leading-[1.6]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subtle divider */}
      <hr className="border-t border-border mb-10" />

      {/* Progressive disclosure - editorial text toggles */}
      <div className="space-y-2">
        <ExpandableSection label={t.about.experienceToggle}>
          <ul className="space-y-3">
            {t.about.experienceItems.map((item, index) => (
              <li key={index}>
                <p className="text-[15px] font-medium text-fg">
                  {item.headline}
                </p>
                <p className="text-[14px] text-muted leading-[1.6]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </ExpandableSection>
        <ExpandableSection label={t.about.certificatesToggle}>
          <ul className="space-y-3">
            {t.about.certificatesItems.map((item, index) => (
              <li key={index}>
                <p className="text-[15px] font-medium text-fg">
                  {item.headline}
                </p>
                <p className="text-[14px] text-muted leading-[1.6]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </ExpandableSection>
        <ExpandableSection label={t.about.activitiesToggle}>
          <ul className="space-y-3">
            {t.about.activitiesItems.map((item, index) => (
              <li key={index}>
                <p className="text-[15px] font-medium text-fg">
                  {item.headline}
                </p>
                <p className="text-[14px] text-muted leading-[1.6]">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </ExpandableSection>
      </div>

      {/* CV download - subtle, optional next step */}
      <aside className="mt-14 pt-8 border-t border-border-light">
        <p className="text-[14px] text-muted mb-3">Muốn xem tổng quan nhanh?</p>
        <a
          href="/cv-nguyen-hoang-tung.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Tải CV của Nguyễn Hoàng Tùng dưới dạng PDF"
          className="inline-flex items-center text-[14px] text-muted hover:text-fg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded"
        >
          Tải CV (PDF) →
        </a>
      </aside>
    </article>
  );
}
