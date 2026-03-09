import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Phone } from "lucide-react";

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

// const APPS = [
//   {
//     name: "IntarvAS PBX",
//     // icon: <Phone className="size-12"/>,
//     icon: (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>Assistant SVG Icon</title><g fill="#FFA726"><circle cx="10" cy="26" r="4"/><circle cx="38" cy="26" r="4"/></g><path fill="#FFB74D" d="M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15z"/><path fill="#FF5722" d="M24 3C14.6 3 7 10.6 7 20v3.4L9 25v-3l21-9.8l9 9.8v3l2-1.6V20c0-8-5.7-17-17-17"/><g fill="#784719"><circle cx="31" cy="26" r="2"/><circle cx="17" cy="26" r="2"/></g><path fill="#757575" d="M43 24c-.6 0-1 .4-1 1v-7c0-8.8-7.2-16-16-16h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c7.7 0 14 6.3 14 14v10c0 .6.4 1 1 1s1-.4 1-1v2c0 3.9-3.1 7-7 7H24c-.6 0-1 .4-1 1s.4 1 1 1h11c5 0 9-4 9-9v-5c0-.6-.4-1-1-1"/><g fill="#37474F"><path d="M43 22h-1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2"/><circle cx="24" cy="38" r="2"/></g></svg>),
//     href: "/services/pbx",
//   },
//   {
//     icon: (
//         <img
//           src="/correctpuzlleicon.svg"
//           alt=""
//           style={{ width: "40px", height: "40px" }}
//         />
//       ),
//     name: "Virtual Extensions",
//     href: "/services/pbx",
//   },
//   {
//     icon: (
//         <img
//           src="/callrecordicon.svg"
//           alt=""
//           style={{ width: "40px", height: "40px" }}
//         />
//       ),
//       name: "Call Recording",
//       href: "/services/pbx",
//   },
//   {
//     name: "All In One",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FFF7ED" />
//         <rect x="12" y="12" width="10" height="10" rx="3" fill="#F97316" />
//         <rect x="26" y="12" width="10" height="10" rx="3" fill="#FB923C" />
//         <rect x="12" y="26" width="10" height="10" rx="3" fill="#FDBA74" />
//         <rect x="26" y="26" width="10" height="10" rx="3" fill="#F97316" />
//       </svg>
//     ),
//     href: "/services/all-in-solution",
//   },
//   {
//     name: "inVAS",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#F0FDF4" />
//         <path d="M24 12l10 6v12l-10 6-10-6V18l10-6z" fill="#22C55E" />
//         <path d="M24 24l10-6M24 24v12M24 24l-10-6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/invas",
//   },
//   {
//     name: "Bulk Messaging",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#EFF6FF" />
//         <path d="M12 16a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H26l-4 4v-4h-8a2 2 0 0 1-2-2V16z" fill="#3B82F6" />
//         <path d="M16 20h16M16 24h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/bulk-messaging",
//   },
//   {
//     name: "Special Numbers",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FFF1F2" />
//         <path d="M18 14h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2z" fill="#F43F5E" />
//         <circle cx="24" cy="20" r="3" fill="white" />
//         <path d="M19 29c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/numbers",
//   },
//   {
//     name: "Call Centre",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#F5F3FF" />
//         <path d="M17 16a2 2 0 0 0-2 2c0 9.39 7.61 17 17 17a2 2 0 0 0 2-2v-3.5a2 2 0 0 0-2-2c-1.25 0-2.45-.2-3.57-.57a2 2 0 0 0-2.01.49l-2.2 2.2a15.15 15.15 0 0 1-6.34-6.34l2.2-2.2a2 2 0 0 0 .49-2.01A10.95 10.95 0 0 1 19 16a2 2 0 0 0-2-2z" fill="#7C3AED" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
//   {
//     name: "Analytics",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#ECFDF5" />
//         <rect x="13" y="28" width="6" height="8" rx="2" fill="#059669" />
//         <rect x="21" y="22" width="6" height="14" rx="2" fill="#10B981" />
//         <rect x="29" y="16" width="6" height="20" rx="2" fill="#34D399" />
//         <path d="M13 20l8-6 8 4 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
//   {
//     name: "CRM",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FFF7ED" />
//         <circle cx="24" cy="16" r="3" fill="#EA580C" />
//         <circle cx="16" cy="26" r="3" fill="#EA580C" />
//         <circle cx="32" cy="26" r="3" fill="#EA580C" />
//         <circle cx="24" cy="35" r="3" fill="#EA580C" />
//         <path d="M24 19l-8 4M24 19l8 4M16 29l8 3M32 29l-8 3" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/all-in-solution",
//   },
//   {
//     name: "SMS Gateway",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#EFF6FF" />
//         <rect x="14" y="18" width="20" height="14" rx="3" fill="#2563EB" />
//         <path d="M18 24h12M18 28h8" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <path d="M24 14v4M20 15l1.5 3M28 15l-1.5 3" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/all-in-solution",
//   },
//   {
//     name: "USSD",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#F0FDF4" />
//         <rect x="16" y="10" width="16" height="28" rx="3" fill="#16A34A" />
//         <rect x="18" y="14" width="12" height="8" rx="1" fill="white" />
//         <circle cx="24" cy="34" r="2" fill="white" />
//         <path d="M20 25h8M20 28h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/all-in-solution",
//   },
//   {
//     name: "IVR Studio",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FDF4FF" />
//         <circle cx="24" cy="20" r="6" fill="#A855F7" />
//         <path d="M24 14v-3M24 26v3M18 20h-3M30 20h3" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
//         <path d="M18 30c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
//         <rect x="20" y="30" width="8" height="4" rx="2" fill="#A855F7" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
//   {
//     name: "Number Masking",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FFF1F2" />
//         <circle cx="24" cy="24" r="10" fill="#E11D48" />
//         <path d="M18 24a6 6 0 0 1 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
//         <circle cx="24" cy="24" r="3" fill="white" />
//         <path d="M15 15l18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
//   {
//     name: "Reports",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#FFFBEB" />
//         <rect x="13" y="12" width="22" height="28" rx="3" fill="#D97706" />
//         <path d="M17 20h14M17 25h14M17 30h9" stroke="white" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/all-in-solution",
//   },
//   {
//     name: "API Access",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#F0F9FF" />
//         <path d="M20 18l-6 6 6 6M28 18l6 6-6 6" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M26 15l-4 18" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
//   {
//     name: "Support",
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
//         <rect width="48" height="48" rx="12" fill="#F5F3FF" />
//         <circle cx="24" cy="20" r="6" fill="#7C3AED" />
//         <path d="M24 16v5l3 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         <path d="M16 34c0-2.21 3.58-4 8-4s8 1.79 8 4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
//       </svg>
//     ),
//     href: "/services/pbx",
//   },
// ];

// const APPS = [
//   // PBX Features
//   {
//     icon: <img src="/correctpuzlleicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Virtual Extensions",
//     href: "/services/pbx",
//   },
//   {
//     icon: <img src="/callrecordicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Call Recording",
//     href: "/services/pbx",
//   },
//   {
//     icon: <img src="/analysicreporticon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Analytics & Reporting",
//     href: "/services/pbx",
//   },
//   {
//     icon: <img src="/voicetoemailicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Voicemail-to-Email",
//     href: "/services/pbx",
//   },
//   {
//     icon: <img src="/callfowardingicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Call Forwarding & Routing",
//     href: "/services/pbx",
//   },
//   {
//     icon: <img src="/seamlessscalabilityicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Seamless Scalability",
//     href: "/services/pbx",
//   },

//   // Bulk Messaging Features
//   {
//     icon: <img src="/bulksmsicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Bulk SMS delivery",
//     href: "/services/bulk-messaging",
//   },
//   {
//     icon: <img src="/ussdservicesicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "USSD Services",
//     href: "/services/bulk-messaging",
//   },
//   {
//     icon: <img src="/a2pmessagingicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "A2P Messaging APIs",
//     href: "/services/bulk-messaging",
//   },
//   {
//     icon: <img src="/twowaymessagingicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Two-way Messaging",
//     href: "/services/bulk-messaging",
//   },
//   {
//     icon: <img src="/realtimedeliveryicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Real-Time Delivery Reports",
//     href: "/services/bulk-messaging",
//   },
//   {
//     icon: <img src="/customSIDicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Custom Sender IDs",
//     href: "/services/bulk-messaging",
//   },

//   // All-in-One Features
//   {
//     icon: <img src="/headphoneicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Unified Omnichannel Support",
//     href: "/services/all-in-one",
//   },
//   {
//     icon: <img src="/smartcrmicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Smart CRM",
//     href: "/services/all-in-one",
//   },
//   {
//     icon: <img src="/ticketingautomationicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Ticketing & Automation",
//     href: "/services/all-in-one",
//   },
//   {
//     icon: <img src="/securityicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Security & Compliance",
//     href: "/services/all-in-one",
//   },
//   {
//     icon: <img src="/customworkflows.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Custom workflows",
//     href: "/services/all-in-one",
//   },
//   {
//     icon: <img src="/aianalyticsicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "AI-powered Analytics",
//     href: "/services/all-in-one",
//   },

//   // Numbers Features
//   {
//     icon: <img src="/memorablevanity.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Memorable Vanity Numbers (0700)",
//     href: "/services/numbers",
//   },
//   {
//     icon: <img src="/tollfreeicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Toll-Free Numbers (0800)",
//     href: "/services/numbers",
//   },
//   {
//     icon: <img src="/enhancedtrusticon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Enhanced Customer Trust",
//     href: "/services/numbers",
//   },
//   {
//     icon: <img src="/callroutingicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Call Routing Options",
//     href: "/services/numbers",
//   },
//   {
//     icon: <img src="/scalableicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Scalable",
//     href: "/services/numbers",
//   },
//   {
//     icon: <img src="/customeraccessibilityicon.svg" alt="" style={{ width: "32px", height: "32px" }} />,
//     name: "Improved Customer Accessibility",
//     href: "/services/numbers",
//   },
// ];

const APPS = [
  // PBX Features
  { icon: "/correctpuzlleicon.svg", name: "Virtual Extensions", href: "/services/pbx", group: "Intarvas PBX" },
  { icon: "/callrecordicon.svg", name: "Call Recording", href: "/services/pbx", group: "Intarvas PBX" },
  { icon: "/analysicreporticon.svg", name: "Analytics & Reporting", href: "/services/pbx", group: "Intarvas PBX" },
  { icon: "/voicetoemailicon.svg", name: "Voicemail-to-Email", href: "/services/pbx", group: "Intarvas PBX" },
  { icon: "/callroutingicon.svg", name: "Call Forwarding & Routing", href: "/services/pbx", group: "Intarvas PBX" },
  { icon: "/seamlessscalabilityicon.svg", name: "Seamless Scalability", href: "/services/pbx", group: "Intarvas PBX" },
  // Bulk Messaging
  { icon: "/bulksmsicon.svg", name: "Bulk SMS Delivery", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  { icon: "/ussdservicesicon.svg", name: "USSD Services", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  { icon: "/a2pmessagingicon.svg", name: "A2P Messaging APIs", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  { icon: "/twowaymessagingicon.svg", name: "Two-way Messaging", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  { icon: "/realtimedeliveryicon.svg", name: "Real-Time Delivery Reports", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  { icon: "/customSIDicon.svg", name: "Custom Sender IDs", href: "/services/bulk-messaging", group: "Bulk Messaging" },
  // All-in-One
  { icon: "/headphoneicon.svg", name: "Unified Omnichannel Support", href: "/services/all-in-one", group: "All-in-One" },
  { icon: "/smartcrmicon.svg", name: "Smart CRM", href: "/services/all-in-one", group: "All-in-One" },
  { icon: "/ticketingautomationicon.svg", name: "Ticketing & Automation", href: "/services/all-in-one", group: "All-in-One" },
  { icon: "/securityicon.svg", name: "Security & Compliance", href: "/services/all-in-one", group: "All-in-One" },
  { icon: "/customworkflows.svg", name: "Custom Workflows", href: "/services/all-in-one", group: "All-in-One" },
  { icon: "/aianalyticsicon.svg", name: "AI-powered Analytics", href: "/services/all-in-one", group: "All-in-One" },
  // Numbers
  { icon: "/memorablevanity.svg", name: "Vanity Numbers (0700)", href: "/services/numbers", group: "Smart Numbers" },
  { icon: "/tollfreeicon.svg", name: "Toll-Free Numbers (0800)", href: "/services/numbers", group: "Smart Numbers" },
  { icon: "/enhancedtrusticon.svg", name: "Enhanced Customer Trust", href: "/services/numbers", group: "Smart Numbers" },
  { icon: "/callroutingicon.svg", name: "Call Routing Options", href: "/services/numbers", group: "Smart Numbers" },
  { icon: "/scalableicon.svg", name: "Scalable for All Businesses", href: "/services/numbers", group: "Smart Numbers" },
  { icon: "/customeraccessibilityicon.svg", name: "Customer Accessibility", href: "/services/numbers", group: "Smart Numbers" },
  //  invax
  { icon: "/ticketingautomationicon.svg", name: "Create Templates", href: "/services/invas", group: "Invas" },
  { icon: "/ticketingautomationicon.svg", name: "Launch Campaigns", href: "/services/invas", group: "Invas" },
  { icon: "/ticketingautomationicon.svg", name: "Create Phonebooks", href: "/services/invas", group: "Invas" },
  { icon: "/ticketingautomationicon.svg", name: "Advanced Chatting", href: "/services/invas", group: "Invas" },
  { icon: "/ticketingautomationicon.svg", name: "Chatbot Automation", href: "/services/invas", group: "Invas" },
  { icon: "/ticketingautomationicon.svg", name: "WhatsApp Business", href: "/services/invas", group: "Invas" },
];

const GROUP_COLORS = {
  "Intarvas PBX": { accent: "#007DFE", light: "#EBF4FF" },
  "Bulk Messaging": { accent: "#00B87A", light: "#E6F9F3" },
  "All-in-One": { accent: "#8B5CF6", light: "#F3EEFF" },
  "Smart Numbers": { accent: "#F97316", light: "#FFF3EB" },
  "Invas": { accent: "#25D366", light: "#d1e2f9ff" },
};

// Group apps
const grouped = APPS.reduce((acc: Record<string, typeof APPS[0][]>, app) => {
  if (!acc[app.group]) acc[app.group] = [];
  acc[app.group].push(app);
  return acc;
}, {} as Record<string, typeof APPS[0][]>);

const Hero2 = ({
  title = "Smart Telecom Solutions for Modern Business",
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
        style={{ backgroundImage: `url("/revamp/pattern-1.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", opacity: 0.1 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 md:pt-32 md:pb-16">
        <h1 ref={titleRef} className="text-black max-w-3xl text-[35px] sm:text-[42px] md:text-[50px] xl:text-[58px] font-black leading-[1.15] tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
          {title}
        </h1>
        <p ref={subtitleRef} className="mt-5 max-w-xl text-[16px] md:text-[18px] text-black leading-normal tracking-wide">
          {subtitle}
        </p>
        <div ref={buttonsRef} className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          {/* Primary */}
          {/* <Button onClick={onPrimaryClick} variant="hero" size="lg" className="rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:bg-[#007DFE]/10 hover:text-[#001933] border-[#007DFE]" >
            <Link href="/about#services-showcase">{primaryButtonText}</Link>
          </Button> */}
          {/* Secondary */}
          <Button onClick={onSecondaryClick} variant="outline" size="lg" className="rounded-full bg-transparent border border-black transition-all duration-300 ease-in-out hover:scale-105 shadow-md">
            <Link href="/contact">{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>

      {/* Apps Grid */}
      <div ref={imageRef} className="relative z-10 flex justify-center px-4 pb-16 mt-auto bg-[#007DFE]/10  md:rounded-tr-[350px] lg:rounded-tr-[700px] rounded-tr-none">
        <div className="w-full max-w-3xl mt-10 overflow-hidden">
          {/* Header pill */}
          <p className="text-[13px] text-[#007DFE] text-center font-semibold tracking-wider bg-white/90 p-2 max-w-sm mx-auto rounded-full mb-6">
            Explore our products &amp; services 
            {/* → */}
          </p>

          {/* Grouped sections */}
          <div className="mx-3 space-y-5">
            {Object.entries(grouped).map(([groupName, apps]) => {
              const { accent, light } = GROUP_COLORS[groupName];
              return (
                <div key={groupName}>
                  {/* Group label */}
                  <div className="flex items-center gap-2 mb-2 px-1">
                    <span
                      className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                      style={{ color: accent, backgroundColor: light }}
                    >
                      {groupName}
                    </span>
                    <div className="flex-1 h-px" style={{ backgroundColor: light }} />
                  </div>

                  {/* 6-column grid per group */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-1">
                    {apps.map((app) => (
                      <Link
                        key={app.name}
                        href={app.href}
                        className="group flex flex-col items-center justify-start py-4 px-2 rounded-xl transition-all duration-200 hover:bg-white hover:shadow-md"
                      >
                        {/* Icon container */}
                        <div
                          className="flex items-center justify-center w-14 h-14 rounded-2xl mb-2.5 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-0.5 group-hover:shadow-lg"
                          style={{ backgroundColor: light }}
                        >
                          <img
                            src={app.icon}
                            alt=""
                            style={{ width: "28px", height: "28px" }}
                          />
                        </div>

                        {/* Label */}
                        <span
                          className="text-[11px] font-medium text-center leading-tight text-gray-600 transition-colors duration-200 group-hover:font-semibold group-hover:text-[color:var(--hover-color)]"
                          style={{ "--hover-color": accent } as React.CSSProperties}
                        >
                          {app.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    <div ref={imageRef} className="relative z-10 flex justify-center px-4 pb-16 mt-auto bg-[#007DFE]/10  md:rounded-tr-[350px] lg:rounded-tr-[700px] rounded-tr-none">
      <div className="w-full max-w-3xl mt-10 overflow-hidden">
        <p className="text-[13px] text-[#007DFE] text-center font-semibold tracking-wider bg-white/90 p-2 max-w-sm mx-auto rounded-full mb-4">
          Explore our products &amp; services →
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-6 mx-3 my-2">
          {APPS.map((app, i) => (
            <Link
              key={i + 1}
              href={app.href}
              className="group flex flex-col items-center justify-start py-4 px-2 rounded-xl transition-all duration-200 hover:bg-white/80 hover:shadow-sm"
            >
              {/* Icon container */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md mb-2.5 transition-all duration-200 group-hover:scale-110 group-hover:-translate-y-1 group-hover:shadow-lg">
                <img src={app.icon} alt="" style={{ width: "28px", height: "28px" }} />
              </div>

              {/* Label */}
              <span className="text-[11px] font-medium text-center leading-tight text-gray-500 transition-colors duration-200 group-hover:text-[#007DFE]">
                {app.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero2;