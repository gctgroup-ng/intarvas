import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageAlt?: string;
}

const APPS = [
  {
    name: "IntarvAS PBX",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#EEF4FF" />
        <path d="M14 20a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V20z" fill="#4F7FFA" />
        <rect x="20" y="30" width="8" height="4" rx="1" fill="#2563EB" />
        <rect x="18" y="34" width="12" height="2" rx="1" fill="#2563EB" />
        <circle cx="24" cy="24" r="3" fill="white" />
        <path d="M20 28h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "All In One",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FFF7ED" />
        <rect x="12" y="12" width="10" height="10" rx="3" fill="#F97316" />
        <rect x="26" y="12" width="10" height="10" rx="3" fill="#FB923C" />
        <rect x="12" y="26" width="10" height="10" rx="3" fill="#FDBA74" />
        <rect x="26" y="26" width="10" height="10" rx="3" fill="#F97316" />
      </svg>
    ),
    href: "/services/all-in-solution",
  },
  {
    name: "inVAS",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#F0FDF4" />
        <path d="M24 12l10 6v12l-10 6-10-6V18l10-6z" fill="#22C55E" />
        <path d="M24 24l10-6M24 24v12M24 24l-10-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/invas",
  },
  {
    name: "Bulk Messaging",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <path d="M12 16a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H26l-4 4v-4h-8a2 2 0 0 1-2-2V16z" fill="#3B82F6" />
        <path d="M16 20h16M16 24h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/bulk-messaging",
  },
  {
    name: "Special Numbers",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FFF1F2" />
        <path d="M18 14h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" fill="#F43F5E" />
        <circle cx="24" cy="20" r="3" fill="white" />
        <path d="M19 29c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/numbers",
  },
  {
    name: "Call Centre",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#F5F3FF" />
        <path d="M17 16a2 2 0 0 0-2 2c0 9.39 7.61 17 17 17a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2c-1.25 0-2.45-.2-3.57-.57a2 2 0 0 0-2.01.49l-2.2 2.2a15.15 15.15 0 0 1-6.34-6.34l2.2-2.2a2 2 0 0 0 .49-2.01A10.95 10.95 0 0 1 19 16a2 2 0 0 0-2-2z" fill="#7C3AED" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "Analytics",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#ECFDF5" />
        <rect x="13" y="28" width="6" height="8" rx="2" fill="#059669" />
        <rect x="21" y="22" width="6" height="14" rx="2" fill="#10B981" />
        <rect x="29" y="16" width="6" height="20" rx="2" fill="#34D399" />
        <path d="M13 20l8-6 8 4 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "CRM",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FFF7ED" />
        <circle cx="24" cy="16" r="3" fill="#EA580C" />
        <circle cx="16" cy="26" r="3" fill="#EA580C" />
        <circle cx="32" cy="26" r="3" fill="#EA580C" />
        <circle cx="24" cy="35" r="3" fill="#EA580C" />
        <path d="M24 19l-8 4M24 19l8 4M16 29l8 3M32 29l-8 3" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/all-in-solution",
  },
  {
    name: "SMS Gateway",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#EFF6FF" />
        <rect x="14" y="18" width="20" height="14" rx="3" fill="#2563EB" />
        <path d="M18 24h12M18 28h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M24 14v4M20 15l1.5 3M28 15l-1.5 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/all-in-solution",
  },
  {
    name: "USSD",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#F0FDF4" />
        <rect x="16" y="10" width="16" height="28" rx="3" fill="#16A34A" />
        <rect x="18" y="14" width="12" height="8" rx="1" fill="white" />
        <circle cx="24" cy="34" r="2" fill="white" />
        <path d="M20 25h8M20 28h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/all-in-solution",
  },
  {
    name: "IVR Studio",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FDF4FF" />
        <circle cx="24" cy="20" r="6" fill="#A855F7" />
        <path d="M24 14v-3M24 26v3M18 20h-3M30 20h3" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 30c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
        <rect x="20" y="30" width="8" height="4" rx="2" fill="#A855F7" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "Number Masking",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FFF1F2" />
        <circle cx="24" cy="24" r="10" fill="#E11D48" />
        <path d="M18 24a6 6 0 0 1 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="24" r="3" fill="white" />
        <path d="M15 15l18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "Reports",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#FFFBEB" />
        <rect x="13" y="12" width="22" height="28" rx="3" fill="#D97706" />
        <path d="M17 20h14M17 25h14M17 30h9" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/all-in-solution",
  },
  {
    name: "API Access",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#F0F9FF" />
        <path d="M20 18l-6 6 6 6M28 18l6 6-6 6" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 15l-4 18" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/pbx",
  },
  {
    name: "Support",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <rect width="48" height="48" rx="12" fill="#F5F3FF" />
        <circle cx="24" cy="20" r="6" fill="#7C3AED" />
        <path d="M24 16v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 34c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    href: "/services/pbx",
  },
];

const Hero2 = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle =
    "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
  primaryButtonText = "Explore Product",
  secondaryButtonText = "Request a Demo",
  onPrimaryClick,
  onSecondaryClick,
  imageAlt = "Telecom analytics dashboard",
}: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#001933]/20 min-h-screen flex flex-col" >
      {/* Background image at 20% opacity — doesn't affect content */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("/revamp/pattern-1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 md:pt-32 md:pb-16">
        <h1 ref={titleRef} className="text-black max-w-3xl text-[35px] sm:text-[42px] md:text-[50px] xl:text-[58px] font-black leading-[1.15] tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
          {title}
        </h1>
        <p ref={subtitleRef} className="mt-5 max-w-xl text-[16px] md:text-[18px] text-black leading-normal tracking-wide">
          {subtitle}
        </p>
        <div ref={buttonsRef}
          className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center"
        >
          {/* Primary */}
          {/* <Button onClick={onPrimaryClick} variant="hero" size="lg"
            className="rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:bg-[#007DFE]/10 hover:text-[#001933] border-[#007DFE]"
          >
            <Link href="/about#services-showcase">{primaryButtonText}</Link>
          </Button> */}
          {/* Secondary */}
          <Button onClick={onSecondaryClick} variant="outline" size="lg"
            className="rounded-full bg-transparent border border-black transition-all duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            <Link href="/contact">{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>

      {/* Apps Grid */}
      <div ref={imageRef} className="relative z-10 flex justify-center px-4 pb-16 mt-auto bg-[#007DFE]/10 rounded-tr-full">
        <div className="w-full max-w-3xl overflow-hidden mt-10">
          {/* Card header */}
          {/* <div className="px-8 pt-7 pb-1 flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Our Products &amp; Services
            </p>
            <Link href="/about#services-showcase" className="text-[11px] font-semibold text-[#007DFE] hover:underline flex items-center gap-1">
              View all →
            </Link>
          </div> */}

          {/* Divider */}
          {/* <div className="h-px bg-[#E8ECF4] mx-6 mt-4" /> */}
          {/* <div className="flex flex-row items-center"> */}
          <p className="text-[13px] text-[#007DFE] text-center font-semibold tracking-wider bg-white/90 p-2 max-w-md mx-auto rounded-full">
            Explore our products &amp; services  →
             
          </p>
          {/* <ArrowRight /> */}
          {/* </div> */}

          {/* 5-column grid — 15 apps = 3 rows */}
          <div className="grid grid-cols-5 mx-3 my-2 overflow-hidden">
            {APPS.map((app, i) => {
              return (
                <Link key={i+1} href={app.href}
                  className={`group flex flex-col items-center justify-center py-6 px-3 transition-colors duration-200 cursor-pointer`}
                >
                  <div className="transition-transform duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 bg-white shadow-lg p-5 mb-3">
                    {app.icon}
                  </div>
                  <span className="text-[14px] font-medium text-black text-center leading-tight group-hover:text-[#007DFE] transition-colors duration-200">
                    {app.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer strip */}
          <div className="flex items-center justify-center gap-1.5 px-8 py-4 border-t border-[#E8ECF4]">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
            <span className="text-[14px] text-black font-medium">
              All products &amp; services included — one plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;