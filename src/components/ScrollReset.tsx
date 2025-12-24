"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Ensures scroll position resets to top on route change.
 * Prevents header from starting in "scrolled" state on new pages.
 */
export default function ScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on pathname change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
