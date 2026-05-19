import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import MetaPixelProvider from "@/components/providers/MetaPixelProvider";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import SupportWidget from "@/components/common/SupportWidget";
import WhatsAppWidget from "@/components/common/WhatappWidget";

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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-9XZQ2FFR5J"></Script>
        <Script
          id="ga-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-9XZQ2FFR5J');
            `,
          }}
        />
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
        {/* Meta Pixel Snippet */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1614061226591922');
              fbq('track', 'PageView');
            `,
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
        {/* Meta Pixel Body Fallback */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1614061226591922&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <ClientProviders>
          <SupportWidget />
          <WhatsAppWidget/>
          <MetaPixelProvider />
          <Toaster />
          <Sonner />
          <SiteHeader />
          {children}
          <SiteFooter />
          <SupportWidget />
        </ClientProviders>
      </body>
    </html>
  );
}

