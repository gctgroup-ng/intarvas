import type { Metadata } from "next";
import Script from "next/script";
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
      {/* <head>
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
      </head> */}
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5S9FTKDR');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5S9FTKDR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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

