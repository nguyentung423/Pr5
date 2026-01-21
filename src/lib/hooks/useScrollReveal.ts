"use client";

import { useCallback, useRef, useState, useSyncExternalStore } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

// Server snapshot for SSR
const getServerSnapshot = () => false;

/**
 * Lightweight scroll reveal hook using Intersection Observer
 * Respects prefers-reduced-motion automatically via CSS
 * Returns a callback ref instead of a ref object to comply with React 19 rules
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
) {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -10% 0px",
    triggerOnce = true,
  } = options;

  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  // Check for reduced motion preference using useSyncExternalStore
  const prefersReducedMotion = useSyncExternalStore(
    (callback) => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    getServerSnapshot,
  );

  // Callback ref that sets up observer when element is mounted
  const setRef = useCallback(
    (element: T | null) => {
      // Cleanup previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      elementRef.current = element;

      if (!element) return;

      // If reduced motion, reveal immediately
      if (prefersReducedMotion) {
        setIsRevealed(true);
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsRevealed(true);
              if (triggerOnce) {
                observer.unobserve(element);
              }
            } else if (!triggerOnce) {
              setIsRevealed(false);
            }
          });
        },
        { threshold, rootMargin },
      );

      observer.observe(element);
      observerRef.current = observer;
    },
    [threshold, rootMargin, triggerOnce, prefersReducedMotion],
  );

  return { ref: setRef, isRevealed };
}
