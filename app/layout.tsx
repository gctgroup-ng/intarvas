import type { Metadata } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LoadingScreen from "@/components/common/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SupportWidget from "@/components/common/SupportWidget";
import ScrollToTop from "@/components/ScrollToTop";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "IntarvAS - Smart Telecom Solutions",
  description: "Transform your business communication with IntarvAS",
  icons: {
    icon: [
      {
        url: "/intarvasfavicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/intarvasfavicon.svg",
    apple: "/intarvasfavicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force scroll to top immediately on page load
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }

              // Scroll to top immediately and repeatedly
              window.scrollTo(0, 0);

              // Prevent any scroll restoration during initial load
              let scrollLocked = true;
              let lockTimer = null;

              const unlockScroll = function() {
                scrollLocked = false;
              };

              // Aggressively lock scroll position at top during initial page load
              const enforceTop = function() {
                if (scrollLocked) {
                  window.scrollTo(0, 0);
                }
              };

              window.addEventListener('scroll', enforceTop, { passive: false });

              // Force scroll to top every 50ms for the first 1.5 seconds
              const forceInterval = setInterval(function() {
                if (scrollLocked) {
                  window.scrollTo(0, 0);
                }
              }, 50);

              // Unlock scroll after 1.5 seconds (giving ScrollTrigger time to fully initialize)
              const unlockAfterDelay = function() {
                setTimeout(function() {
                  scrollLocked = false;
                  clearInterval(forceInterval);
                  window.scrollTo(0, 0); // One final scroll to top
                }, 1500);
              };

              // Start unlock timer on DOMContentLoaded
              document.addEventListener('DOMContentLoaded', function() {
                window.scrollTo(0, 0);
                unlockAfterDelay();
              });

              // Fallback unlock on load event
              window.addEventListener('load', function() {
                if (scrollLocked) {
                  unlockAfterDelay();
                }
              });
            `,
          }}
        />
      </head>
      <body>
        <ClientProviders>
          <ScrollToTop />
          {/* <LoadingScreen /> */}
          <Toaster />
          <Sonner />
          {/* <SupportWidget /> */}
          <SiteHeader />
          {children}
          <SiteFooter />
        </ClientProviders>
      </body>
    </html>
  );
}

