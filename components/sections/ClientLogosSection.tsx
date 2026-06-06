"use client";

import React from "react";

interface ClientLogosSectionProps {
  title?: string;
}

const ClientLogosSection = ({
  title = "Innovators worldwide trust us",
}: ClientLogosSectionProps) => {
  // Array of client logos - updated with actual client logos from images folder
  const logos = [
    { src: "/image/clients/airtel.svg", alt: "Airtel", large: false },
    { src: "/image/clients/fcmb.svg", alt: "FCMB", large: false },
    { src: "/image/clients/mafab.svg", alt: "Mafab", large: false },
    // { src: "/image/clients/Lotus-Bank-Logo.png", alt: "Lotus Bank", large: false },
    { src: "/image/clients/aero-logo.svg", alt: "Aero", large: false },
    { src: "/image/clients/ICN.svg", alt: "ICN", large: true },
    { src: "/image/clients/klayed.svg", alt: "Klayed", large: false },
    { src: "/image/clients/MiGO-Mobile-Black-Logo.svg", alt: "MiGO Mobile", large: false },
    { src: "/image/clients/monieswitch.svg", alt: "Monieswitch", large: false },
    { src: "/image/clients/NMRC-Logo.svg", alt: "NMRC", large: false },
    { src: "/image/clients/Paycelar.svg", alt: "Paycelar", large: false },
    // { src: "/image/clients/renmoney.png", alt: "Renmoney", large: false },
    { src: "/image/clients/bazeuniversityhospitallogo.svg", alt: "Baze University Hospital", large: false },
    { src: "/image/clients/globacomlogo.svg", alt: "Globacom", large: false },
    { src: "/image/clients/TelkoMS.svg", alt: "TelkoMS", large: true },
    { src: "/image/clients/WGC.svg", alt: "Winner Golden Chance", large: true },
    { src: "/image/clients/capital metriq.svg", alt: "Capital Metriq", large: false },
    { src: "/image/clients/christian association of nigeria.svg", alt: "Christian Association of Nigeria", large: false,},
    { src: "/image/clients/logo-rapidbts.svg", alt: "RapidBTS", large: false },
    { src: "/image/clients/rubies-logo.svg", alt: "Rubies", large: false },
    { src: "/image/clients/sendtruly.svg", alt: "SendTruly", large: true },
    { src: "/image/clients/travna-logo.svg", alt: "Travna", large: false },
    { src: "/image/clients/xrnet-logo.svg", alt: "XRNet", large: true },
    { src: "/image/clients/SUNTRUST-LOGO.png", alt: "Suntrust", large: false },
    { src: "/image/clients/ruut_csm-.png", alt: "Ruut CSM", large: false },
    { src: "/image/clients/lottomaina.webp", alt: "Lottomania", large: false },
    { src: "/image/clients/green-lotto-1.png", alt: "Green Lotto", large: false },
    { src: "/image/clients/vehicular.png", alt: "Vehicular", large: false },
    { src: "/image/clients/providus.svg", alt: "Providus Bank", large: false },
    { src: "/image/clients/risktech.svg", alt: "RiskTech Advisory", large: false },
    { src: "/image/clients/MSA.svg", alt: "MyServiceAgent", large: false },
    { src: "/image/clients/STN.png", alt: "STN (Swift Telephone Network)", large: false },
    { src: "/image/clients/maekandex.png", alt: "Maekandex", large: false },
    { src: "/image/clients/twin-ai.svg", alt: "Twin AI", large: false },
    { src: "/image/clients/altersupport.png", alt: "AlterSupport Technologies Limited", large: false },
    { src: "/image/clients/ZeroHassle.jpg", alt: "ZeroHassle", large: false },

    { src: "/image/clients/makesales.svg", alt: "Makesales", large: false },
    { src: "/image/clients/JA-nigeria-1.svg", alt: "JA Nigeria", large: false },
    { src: "/image/clients/bestline.webp", alt: "BestLine Shipping Company LTD", large: false },
  ];

  return (
    <section className="bg-white border-b border-[#DFE0F8] py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground animate-fade-in-up">
          {title}
        </p>

        {/* Animated Scrolling Logos */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-logo-scroll will-change-transform">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index.toFixed()}`}
                className={`group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center cursor-pointer ${
                  logo.large
                    ? "w-[140px] h-[80px] md:w-[160px] md:h-[90px]"
                    : "w-[100px] h-[60px] md:w-[120px] md:h-[70px]"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] shadow-lg">
                  {logo.alt}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index.toFixed()}`}
                className={`group relative flex-shrink-0 mx-6 md:mx-8 flex items-center justify-center cursor-pointer ${
                  logo.large
                    ? "w-[140px] h-[80px] md:w-[160px] md:h-[90px]"
                    : "w-[100px] h-[60px] md:w-[120px] md:h-[70px]"
                }`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
                <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-[100] shadow-lg">
                  {logo.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
