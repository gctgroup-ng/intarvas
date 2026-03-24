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
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341287/airtel_wx2njt.svg", alt: "Airtel", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341230/fcmb_bbfrx6.svg", alt: "FCMB", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341245/mafab_vhhycq.svg", alt: "Mafab", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341243/lotus_xv1fvk.svg", alt: "Lotus Bank", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341231/aero-logo_lqynkp.svg", alt: "Aero", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341234/ICN_rugpf5.svg", alt: "ICN", large: true },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341236/Klayed_cvnfnf.svg", alt: "Klayed", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341248/MiGO-Mobile-Black-Logo_mc9fxd.svg", alt: "MiGO Mobile", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341257/Monieswitch_xmbjak.svg", alt: "Monieswitch", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341259/NMRC-Logo_miba24.svg", alt: "NMRC", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341266/Paycelar_cyix8r.svg", alt: "Paycelar", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341274/Renmoney_cv9wf1.svg", alt: "Renmoney", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341245/bazeuniversityhospitallogo_yx8hzh.svg", alt: "Baze University Hospital", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341232/globacomlogo_b49ows.svg", alt: "Globacom", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341286/TelkoMS_tuahiu.svg", alt: "TelkoMS", large: true },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341293/WGC_xzc4p3.svg", alt: "Winner Golden Chance", large: true },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341265/capital_metriq_pdjnlf.svg", alt: "Capital Metriq", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341227/christian_association_of_nigeria_ghlr4r.svg", alt: "Christian Association of Nigeria", large: false,},
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341242/logo-rapidbts_hd0vkk.svg", alt: "RapidBTS", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341276/rubies-logo_mtrbxd.svg", alt: "Rubies", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341278/sendtruly_bob18y.svg", alt: "SendTruly", large: true },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341289/travna-logo_vugqtv.svg", alt: "Travna", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341294/xrnet-logo_unusd3.svg", alt: "XRNet", large: true },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341280/SUNTRUST-LOGO_s7ljn5.png", alt: "Suntrust", large: false },
    { src: "https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341277/ruut_csm-_l5jnsg.png", alt: "Ruut CSM", large: false },
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
                  alt={"logo"}
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
                  alt={"logo"}
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
