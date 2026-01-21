"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

interface CaseSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function CaseSection({ id, title, children }: CaseSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-[88px]">
      <h2 className="text-[13px] font-semibold text-muted-light uppercase tracking-[0.08em] mb-4">
        {title}
      </h2>
      <div className="prose-case">{children}</div>
    </section>
  );
}

interface CaseLayoutProps {
  context: React.ReactNode;
  problem: React.ReactNode;
  role: React.ReactNode;
  approach: React.ReactNode;
  decisions: React.ReactNode;
  outcome: React.ReactNode;
  reflection: React.ReactNode;
  focusArea?: string;
}

export default function CaseLayout({
  context,
  problem,
  role,
  approach,
  decisions,
  outcome,
  reflection,
  focusArea,
}: CaseLayoutProps) {
  const [showTOC, setShowTOC] = useState(false);
  const { t } = useLanguage();

  const sections = [
    { id: "context", title: t.caseLayout.sections.context, content: context },
    { id: "problem", title: t.caseLayout.sections.problem, content: problem },
    { id: "role", title: t.caseLayout.sections.role, content: role },
    {
      id: "approach",
      title: t.caseLayout.sections.approach,
      content: approach,
    },
    {
      id: "decisions",
      title: t.caseLayout.sections.decisions,
      content: decisions,
    },
    { id: "outcome", title: t.caseLayout.sections.outcome, content: outcome },
    {
      id: "reflection",
      title: t.caseLayout.sections.reflection,
      content: reflection,
    },
  ];

  return (
    <div className="relative">
      {/* Optional: Table of Contents */}
      <aside className="mb-12 pb-6 border-b border-border-light">
        <button
          onClick={() => setShowTOC(!showTOC)}
          className="text-[13px] text-muted hover:text-fg transition-colors font-medium flex items-center gap-2 mb-3"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-150 ${
              showTOC ? "rotate-90" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          {t.caseLayout.tableOfContents}
        </button>
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
            showTOC ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pl-1">
            {focusArea && (
              <p className="text-[13px] text-muted leading-relaxed mb-4 italic">
                {t.caseLayout.focus}: {focusArea}
              </p>
            )}
            <ol className="space-y-1.5 text-[13px] list-none pl-0">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-muted hover:text-fg transition-colors"
                  >
                    {index + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </aside>

      {/* Fixed-structure sections with flexible MDX content */}
      {sections.map((section) => (
        <CaseSection key={section.id} id={section.id} title={section.title}>
          {section.content}
        </CaseSection>
      ))}
    </div>
  );
}
