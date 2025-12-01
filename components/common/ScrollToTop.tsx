"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * ScrollToTop - Scrolls to top on every route change
 * Uses useLayoutEffect to scroll BEFORE the browser paints
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

