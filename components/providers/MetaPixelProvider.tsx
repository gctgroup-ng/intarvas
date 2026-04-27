"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function MetaPixelEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fbq = (globalThis as any).fbq;
    if (typeof fbq === "function") {
      fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixelProvider() {
  return (
    <Suspense fallback={null}>
      <MetaPixelEvents />
    </Suspense>
  );
}