import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
// import LoadingScreen from "@/components/common/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
// import SupportWidget from "@/components/common/SupportWidget";
// import ScrollToTop from "@/components/ScrollToTop";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "IntarvAS - Smart Telecom Solutions",
  description: "Transform your business communication with IntarvAS",
  icons: {
    icon: [
      {
        url: "/intarvasfaviconblue.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/intarvasfaviconblue.svg",
    apple: "/intarvasfaviconblue.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* GTM Head Snippet */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5S9FTKDR');`,
          }}
        />
      </head>
      <body>
        {/* GTM Body Fallback */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-5S9FTKDR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ClientProviders>
          <Toaster />
          <Sonner />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ClientProviders>
      </body>
    </html>
  );
}

