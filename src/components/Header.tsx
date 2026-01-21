"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useLanguage, Language } from "@/lib/i18n";

// ============================================
// SCROLL BEHAVIOR CONSTANTS
// ============================================
const SCROLL_THRESHOLD_ON = 50; // px - activate scrolled state
const SCROLL_THRESHOLD_OFF = 10; // px - deactivate scrolled state
const STATE_CHANGE_COOLDOWN = 150; // ms - prevent rapid toggling

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Ref to track current scrolled state for hysteresis
  const scrolledRef = useRef(false);
  // Cooldown timer to prevent rapid state changes
  const lastChangeRef = useRef(0);

  // Track scroll position with RAF throttling + hysteresis + cooldown
  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollState = (forceUpdate = false) => {
      const y = window.scrollY;
      const wasScrolled = scrolledRef.current;
      const now = Date.now();

      // Cooldown: prevent state change if less than cooldown since last change
      const cooldownPassed =
        now - lastChangeRef.current > STATE_CHANGE_COOLDOWN;

      // Hysteresis: different thresholds for on/off to prevent flicker
      let shouldBeScrolled = wasScrolled;
      if (!wasScrolled && y > SCROLL_THRESHOLD_ON) {
        shouldBeScrolled = true;
      } else if (wasScrolled && y < SCROLL_THRESHOLD_OFF) {
        shouldBeScrolled = false;
      }

      if (shouldBeScrolled !== wasScrolled && (cooldownPassed || forceUpdate)) {
        scrolledRef.current = shouldBeScrolled;
        lastChangeRef.current = now;
        setScrolled(shouldBeScrolled);
      }
    };

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        updateScrollState();
        rafId = null;
      });
    };

    // Check initial scroll position (forceUpdate bypasses cooldown)
    updateScrollState(true);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const navItems = [
    { href: "/work", label: t.header.nav.work, disabled: false },
    { href: "/thinking", label: t.header.nav.thinking, disabled: true },
    { href: "/about", label: t.header.nav.about, disabled: false },
    { href: "/contact", label: t.header.nav.contact, disabled: false },
  ];

  const handleLanguageSwitch = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50",
        // Smooth transitions - explicit properties for performance
        "transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-300 ease-out",
        "motion-reduce:transition-none",
        // Conditional styles based on scroll
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border-light/40 py-2 shadow-sm"
          : "py-6 bg-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="max-w-[1000px] mx-auto px-6 flex items-center justify-between">
        {/* Logo - intentional personal signature */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="text-fg font-semibold text-[17px] tracking-[-0.02em]">
            Tung Nguyen
          </span>
          <span className="text-muted-light text-[13px] font-medium hidden sm:inline">
            / {t.header.tagline}
          </span>
        </Link>

        {/* Desktop Navigation - refined spacing and weight */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) =>
            item.disabled ? (
              <span
                key={item.href}
                className="text-muted-light/50 text-[15px] font-medium cursor-not-allowed"
                title="Sắp ra mắt"
              >
                {item.label}
              </span>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted hover:text-fg transition-colors text-[15px] font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-fg after:transition-[width] after:duration-150 hover:after:w-full"
              >
                {item.label}
              </Link>
            ),
          )}

          {/* Language Switch - minimal, text-based */}
          <div
            className="flex items-center gap-1 text-[13px] ml-2"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => handleLanguageSwitch("vi")}
              className={`px-1 py-0.5 transition-colors duration-150 focus:outline-none focus-visible:underline underline-offset-2 ${
                language === "vi"
                  ? "text-fg font-semibold"
                  : "text-muted-light hover:text-muted"
              }`}
              aria-pressed={language === "vi"}
              aria-label="Tiếng Việt"
            >
              VI
            </button>
            <span className="text-muted-light">/</span>
            <button
              onClick={() => handleLanguageSwitch("en")}
              className={`px-1 py-0.5 transition-colors duration-150 focus:outline-none focus-visible:underline underline-offset-2 ${
                language === "en"
                  ? "text-fg font-semibold"
                  : "text-muted-light hover:text-muted"
              }`}
              aria-pressed={language === "en"}
              aria-label="English"
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile: Language Switch + Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {/* Mobile Language Switch */}
          <div
            className="flex items-center gap-1 text-[12px]"
            role="group"
            aria-label="Language selection"
          >
            <button
              onClick={() => handleLanguageSwitch("vi")}
              className={`px-1 py-0.5 transition-colors duration-150 focus:outline-none focus-visible:underline underline-offset-2 ${
                language === "vi"
                  ? "text-fg font-semibold"
                  : "text-muted-light hover:text-muted"
              }`}
              aria-pressed={language === "vi"}
            >
              VI
            </button>
            <span className="text-muted-light">/</span>
            <button
              onClick={() => handleLanguageSwitch("en")}
              className={`px-1 py-0.5 transition-colors duration-150 focus:outline-none focus-visible:underline underline-offset-2 ${
                language === "en"
                  ? "text-fg font-semibold"
                  : "text-muted-light hover:text-muted"
              }`}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 -mr-2 text-fg hover:text-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation - cleaner presentation */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="md:hidden border-t border-border-light bg-bg/95 backdrop-blur-xl"
        >
          <div className="max-w-[1000px] mx-auto px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) =>
              item.disabled ? (
                <span
                  key={item.href}
                  className="text-muted-light/50 text-[17px] font-medium py-3 border-b border-border-light last:border-0 cursor-not-allowed"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-fg transition-colors text-[17px] font-medium py-3 border-b border-border-light last:border-0 focus-visible:outline-none focus-visible:text-fg focus-visible:underline underline-offset-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
