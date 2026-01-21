"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

interface BackLinkProps {
  type: "work" | "thinking";
}

export default function BackLink({ type }: BackLinkProps) {
  const { t } = useLanguage();

  const href = type === "work" ? "/work" : "/thinking";
  const label = type === "work" ? t.work.backToWork : t.thinking.backToThinking;

  return (
    <Link
      href={href}
      className="inline-flex items-center text-sm text-muted hover:text-fg transition-colors mb-6"
    >
      {label}
    </Link>
  );
}
