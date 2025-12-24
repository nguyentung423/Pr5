"use client";

import { useLanguage } from "@/lib/i18n";

export default function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-[1000px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20">
      {/* Opening - emotional connection first */}
      <header className="mb-14">
        <h1 className="text-4xl font-semibold text-fg tracking-tight mb-4">
          {t.contact.title}
        </h1>
        <p className="text-[18px] text-fg leading-relaxed mb-3">
          {t.contact.subtitle}
        </p>
        <p className="text-[16px] text-muted leading-relaxed">
          {t.contact.humanNote}
        </p>
      </header>

      <div className="space-y-12">
        {/* Primary CTA section */}
        <section>
          <h2 className="text-xl font-semibold text-fg mb-3">
            {t.contact.reachOutTitle}
          </h2>
          <p className="text-fg leading-relaxed mb-2">
            {t.contact.reachOutText}
          </p>
          {/* Micro-prompt - subtle guidance */}
          <p className="text-[14px] text-muted-light mb-6">
            {t.contact.microPrompt}
          </p>
          <a
            href="https://zalo.me/0374918396"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-black rounded-xl text-[15px] font-medium hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            style={{ color: "#ffffff" }}
          >
            {t.contact.sendEmail}
          </a>
        </section>

        {/* Social links */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-lg font-semibold text-fg mb-4">
            {t.contact.elsewhereTitle}
          </h2>
          <p className="text-muted leading-relaxed mb-5">
            {t.contact.elsewhereText}
          </p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/tungvspace"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-muted hover:text-fg transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tungnh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] text-muted hover:text-fg transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
