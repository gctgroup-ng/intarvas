// "use client";

// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// export function ClientProviders({ children }: { children: React.ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         {children}
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }

"use client"

import type React from "react"

import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import { LoadingProvider } from "@/components/context/loading-context"
import LoadingScreen from "@/components/common/LoadingScreen"
import ScrollToTop from "@/components/common/ScrollToTop"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <LoadingProvider>
      <ScrollToTop />
      <LoadingScreen />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>{children}</TooltipProvider>
      </QueryClientProvider>
    </LoadingProvider>
  )
}
