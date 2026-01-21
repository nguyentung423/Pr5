"use client";

import { useLanguage } from "@/lib/i18n";

export default function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <article className="max-w-[1000px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20 page-content">
      {/* Editorial opening */}
      <header className="mb-20 md:mb-24">
        <div className="mb-4">
          <h1 className="text-[32px] md:text-[38px] font-semibold text-fg tracking-[-0.02em] leading-[1.15] mb-2">
            {t.about.title}
          </h1>
          {/* Status indicator - minimal style */}
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[13px] text-gray-500 font-medium">
              {t.about.openForInternship}
            </span>
          </div>
        </div>
        <p className="text-[19px] md:text-[20px] text-muted leading-[1.6] max-w-[650px] italic mb-6">
          {t.about.openingStatement}
        </p>
        <a
          href="/CV_Tung Nguyen (1).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-[14px] font-medium border border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white dark:border-neutral-300 dark:text-neutral-300 dark:hover:bg-neutral-300 dark:hover:text-neutral-900 transition-colors duration-200 rounded-lg"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {t.about.downloadCV}
        </a>
      </header>

      {/* Brief intro */}
      <section className="mb-16 max-w-[700px]">
        <p className="text-[16px] text-fg leading-[1.75] mb-4">
          {t.about.backgroundP1}
        </p>
        <p className="text-[16px] text-fg leading-[1.75]">
          {t.about.backgroundP2}
        </p>
      </section>

      {/* SECTION 1: KINH NGHIỆM */}
      <section className="mb-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.1em] sticky top-24">
              {t.about.experienceTitle}
            </h2>
          </div>
          <div className="space-y-10">
            {t.about.experiences.map((exp, index) => (
              <div
                key={index}
                className="pb-10 border-b border-border-light last:border-0 last:pb-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[17px] font-semibold text-fg">
                      {exp.company}
                    </h3>
                    <p className="text-[15px] text-muted italic">{exp.role}</p>
                  </div>
                  <span className="text-[13px] text-muted-light font-medium">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className="text-[15px] text-fg leading-[1.7] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-1.5 before:h-1.5 before:bg-border before:rounded-full"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: KỸ NĂNG & CÔNG CỤ */}
      <section className="mb-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.1em] sticky top-24">
              {t.about.skillsTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {t.about.skills.map((skillGroup, index) => (
              <div key={index}>
                <h3 className="text-[14px] font-semibold text-fg mb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1.5 text-[13px] font-medium text-gray-900 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-150 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THÀNH TỰU */}
      <section className="mb-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.1em] sticky top-24">
              {t.about.achievementsTitle}
            </h2>
          </div>
          <div className="space-y-3">
            {t.about.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-[15px] text-fg"
              >
                <span className="w-6 h-6 flex items-center justify-center text-[12px] font-semibold text-gray-900 bg-gray-100 rounded-full">
                  {index + 1}
                </span>
                {achievement}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mb-16">
        <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
          <div>
            <h2 className="text-[13px] font-semibold text-muted uppercase tracking-[0.1em] sticky top-24">
              {t.about.philosophyTitle}
            </h2>
          </div>
          <div className="space-y-6 max-w-[600px]">
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
        </div>
      </section>
    </article>
  );
}
