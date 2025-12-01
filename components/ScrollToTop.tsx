"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Aggressively scroll to top on route change
    window.scrollTo(0, 0);

    // Force scroll multiple times to override any animations
    const forceScroll = () => {
      window.scrollTo(0, 0);
    };

    // Scroll immediately and repeatedly for 1.5 seconds
    const intervals = [0, 50, 100, 150, 200, 300, 500, 800, 1200, 1500];
    const timeouts = intervals.map(delay =>
      setTimeout(forceScroll, delay)
    );

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [pathname]);

  return null;
}
