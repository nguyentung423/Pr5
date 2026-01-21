"use client";

import { useLanguage } from "@/lib/i18n";
import { useState } from "react";

export default function ContactPageContent() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tungnh.vspace@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[900px] mx-auto px-6 pt-10 pb-16 md:pt-12 md:pb-20">
      {/* Header */}
      <header className="mb-14">
        <h1 className="text-4xl font-semibold text-fg tracking-tight mb-4">
          {t.contact.title}
        </h1>
        <p className="text-[18px] text-muted leading-relaxed max-w-[600px]">
          {t.contact.subtitle}
        </p>
      </header>

      {/* Contact Grid */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Block 1: Email (Primary) - Minimalist Outline Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-black">
          <h2 className="text-lg font-bold text-black mb-2">
            {t.contact.emailTitle}
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            {t.contact.emailDesc}
          </p>
          <a
            href="mailto:tungnh.vspace@gmail.com"
            className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-black rounded-xl text-[15px] font-medium hover:bg-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
            style={{ color: "#ffffff" }}
          >
            {t.contact.emailCTA}
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <button
            onClick={handleCopyEmail}
            className="mt-3 w-full text-center text-[13px] text-gray-500 hover:text-black transition-colors"
          >
            {copied ? t.contact.emailCopied : t.contact.emailCopy}
          </button>
        </div>

        {/* Block 2: Social & Quick Chat - Matching Outline Style */}
        <div className="p-6 md:p-8 rounded-2xl bg-white border border-black">
          <h2 className="text-lg font-bold text-black mb-2">
            {t.contact.socialTitle}
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
            {t.contact.socialDesc}
          </p>
          <div className="space-y-3">
            {/* LinkedIn (Priority) */}
            <a
              href="https://www.linkedin.com/in/tungnguyenhoang/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#0A66C2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span className="text-[15px] font-medium text-gray-900">
                  LinkedIn
                </span>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* Zalo (Secondary) */}
            <a
              href="https://zalo.me/0374918396"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#0068FF]"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm9.447 26.105c-.465.93-2.51 1.83-3.49 1.943-.98.112-1.884.466-6.31-1.327-5.334-2.16-8.69-7.612-8.954-7.968-.266-.356-2.17-2.884-2.17-5.504 0-2.62 1.372-3.91 1.86-4.445.488-.534 1.063-.668 1.418-.668.355 0 .71.004 1.02.018.328.015.767-.124 1.2.916.436.94 1.48 3.616 1.61 3.878.133.263.22.57.044.916-.177.346-.266.56-.53.865-.266.305-.56.682-.8.916-.265.262-.542.547-.233 1.072.31.526 1.374 2.27 2.95 3.677 2.027 1.812 3.734 2.374 4.265 2.64.532.267.84.223 1.15-.133.31-.356 1.33-1.55 1.686-2.083.355-.534.71-.445 1.197-.267.488.178 3.1 1.463 3.63 1.73.533.267.888.4 1.02.62.133.22.133 1.276-.332 2.207z" />
                </svg>
                <div>
                  <span className="text-[15px] font-medium text-gray-900">
                    Zalo
                  </span>
                  <span className="text-[13px] text-gray-500 ml-2">
                    {t.contact.zaloQuickChat}
                  </span>
                </div>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/nguyentung423"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="text-[15px] font-medium text-gray-900">
                  GitHub
                </span>
              </div>
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
