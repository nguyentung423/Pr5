"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navLinks = [
    { href: "/work", label: t.footer.navWork },
    { href: "/thinking", label: t.footer.navThinking },
    { href: "/about", label: t.footer.navAbout },
    { href: "/contact", label: t.footer.navContact },
  ];

  return (
    <footer className="border-t border-border mt-auto" role="contentinfo">
      <div className="max-w-[1000px] mx-auto px-6 pt-10 pb-8 md:pt-12 md:pb-10">
        {/* Main footer grid - balanced 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">
          {/* Column 1: Identity */}
          <div>
            <p className="text-[11px] font-medium text-muted-light uppercase tracking-wider mb-2">
              Identity
            </p>
            <p className="text-[15px] font-semibold text-fg leading-tight">
              Nguyen Hoang Tung
            </p>
            <p className="text-[13px] text-muted leading-tight mb-1.5">
              Business Analyst
            </p>
            <p className="text-[12px] text-muted-light leading-snug">
              Ghi chép, tư duy và học hỏi từ thực tế.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <nav aria-label="Footer navigation">
            <p className="text-[11px] font-medium text-muted-light uppercase tracking-wider mb-2">
              Khám phá
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-muted hover:text-fg transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact */}
          <div>
            <p className="text-[11px] font-medium text-muted-light uppercase tracking-wider mb-2">
              Cởi mở trao đổi
            </p>
            <p className="text-[12px] text-muted-light leading-snug mb-1.5">
              Về sản phẩm, yêu cầu và quy trình triển khai.
            </p>
            <address className="not-italic">
              <a
                href="mailto:tungnh.vspace@gmail.com"
                className="text-[13px] text-muted hover:text-fg transition-colors focus-visible:outline-none focus-visible:underline underline-offset-4"
                aria-label="Send email to tungnh.vspace@gmail.com"
              >
                tungnh.vspace@gmail.com
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar - copyright */}
        <div className="mt-8 pt-4 border-t border-border-light">
          <p className="text-[11px] text-muted-light text-center md:text-left">
            © {currentYear} Nguyen Hoang Tung
          </p>
        </div>
      </div>
    </footer>
  );
}
