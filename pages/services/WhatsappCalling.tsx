"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Noise from "@/components/Noise";

// ── Shared colour tokens ───────────────────────────────────────────────
// const GREEN = "#0064CB";       
// const GREEN_MID = "#4080c0ff";
// const GREEN_LIGHT = "#e5f1fdff";
// const BG = "#9bb2c9ff";           
// const BG_CARD = "#dae1e7ff";

const GREEN = "#0064CB";       // Primary blue
const GREEN_MID = "#3B82F6";   // Medium blue
const GREEN_LIGHT = "#DBEAFE"; // Light blue background
const BG = "#EFF6FF";         // Page background
const BG_CARD = "#FFFFFF"; 

// ── Tiny reusable icon components (SVG) ──────────────────────────────
const Icon = {
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13.5 19.79 19.79 0 0 1 1 4.82 2 2 0 0 1 2.96 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.38a16 16 0 0 0 6.29 6.29l1.16-1.16a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.19 17.92z"/>
    </svg>
  ),
  PhoneOut: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="23 7 23 1 17 1"/><line x1="16" y1="8" x2="23" y2="1"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13.5 19.79 19.79 0 0 1 1 4.82 2 2 0 0 1 2.96 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.38a16 16 0 0 0 6.29 6.29l1.16-1.16a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.19 17.92z"/>
    </svg>
  ),
  PhoneIn: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="16 2 16 8 22 8"/><line x1="23" y1="1" x2="16" y2="8"/>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13.5 19.79 19.79 0 0 1 1 4.82 2 2 0 0 1 2.96 2.63h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.38a16 16 0 0 0 6.29 6.29l1.16-1.16a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.19 17.92z"/>
    </svg>
  ),
  Headset: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Chat: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  CheckCircle: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  ShoppingBag: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
    </svg>
  ),
  Heart: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  BookOpen: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Home: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  Zap: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
};

// ── Dashboard mockup ──────────────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-white/30" style={{ background: "#1a2e1a" }}>
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10" style={{ background: "#243824" }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="ml-2 text-xs text-white/50 font-mono">CALL CENTER</span>
        </div>
        <div className="flex gap-3">
          <div className="w-4 h-4 rounded-sm bg-white/10" />
          <div className="w-4 h-4 rounded-sm bg-white/10" />
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-6 px-4 py-3 border-b border-white/10">
        <div>
          <p className="text-[10px] text-white/40">Total Calls</p>
          <p className="text-xl font-bold text-white">465</p>
        </div>
        <div>
          <p className="text-[10px] text-white/40">Completed</p>
          <p className="text-xl font-bold" style={{ color: GREEN_LIGHT }}>5</p>
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-[10px]">M</div>
          <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-[10px]">B</div>
          <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: GREEN }}>
            <span className="text-white text-[10px]">W</span>
          </div>
        </div>
      </div>
      {/* Sidebar + table */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-20 border-r border-white/10 py-3 flex flex-col gap-3 px-2" style={{ background: "#1e2f1e" }}>
          {["Agents", "Active", "History"].map((s) => (
            <div key={s} className="text-[10px] text-white/40 px-2 py-1 rounded cursor-pointer hover:bg-white/5">{s}</div>
          ))}
        </div>
        {/* Table */}
        <div className="flex-1 p-2">
          <div className="flex gap-2 mb-2">
            <div className="flex-1 h-6 rounded text-[10px] text-white/30 flex items-center px-2 border border-white/10">Search…</div>
            <div className="h-6 px-2 rounded text-[10px] text-white/40 border border-white/10 flex items-center">All Status</div>
          </div>
          {/* Table header */}
          <div className="grid grid-cols-4 text-[9px] text-white/30 px-2 py-1 border-b border-white/10">
            <span>Agent</span><span>Caller</span><span>Callee</span><span>Duration</span>
          </div>
          {/* Rows */}
          {[
            ["Customer 1", "Harry", "Test Number", ""],
            ["Customer 2", "John", "Test Number", "12/26/2025"],
            ["Customer 3", "Sasha", "Test Number", "12/26/2025"],
            ["Customer 4", "Henry", "Test Number", "12/26/2025"],
            ["Unknown", "Rick", "Test Number", ""],
            ["Unknown", "Monica", "Test Number", "12/…"],
          ].map(([agent, caller, callee, date], i) => (
            <div key={i + 1} className="grid grid-cols-4 text-[9px] text-white/60 px-2 py-1.5 border-b border-white/5 hover:bg-white/5 cursor-pointer">
              <span>{agent}</span><span>{caller}</span><span>{callee}</span><span className="text-white/30">{date}</span>
            </div>
          ))}
          {/* Bottom badge */}
          <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[9px] text-white/60 border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />Customer Support
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Green icon circle ─────────────────────────────────────────────────
function IconCircle({ children, size = "md" }: Readonly<{ children: React.ReactNode; size?: "sm" | "md" | "lg" }>) {
    // const s = size === "lg" ? "w-14 h-14" : size === "sm" ? "w-9 h-9" : "w-11 h-11";
    const sizeMap: Record<string, string> = {
        lg: "w-14 h-14",
        sm: "w-9 h-9",
    };

    const s = sizeMap[size] ?? "w-11 h-11";
    return (
        <div className={`${s} rounded-full flex items-center justify-center text-white flex-shrink-0`} style={{ background: GREEN }}>
            {children}
        </div>
    );
}

// ── Feature card ──────────────────────────────────────────────────────
function FeatureCard({ icon, title, desc, highlight = false }: Readonly<{ icon: React.ReactNode; title: string; desc: string; highlight?: boolean }>) {
  return (
    <div className={`rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-200 hover:shadow-md ${highlight ? "border-green-300 shadow-sm" : "border-gray-200 bg-white"}`}
      style={highlight ? { background: BG_CARD, borderColor: "#a8d5a2" } : { background: "white" }}>
      <IconCircle size="sm">{icon}</IconCircle>
      <div>
        <h3 className="font-bold text-[#1a1a1a] mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

// ── Industry card ─────────────────────────────────────────────────────
function IndustryCard({ icon, title, desc }: Readonly<{ icon: React.ReactNode; title: string; desc: string }>) {
  return (
    <div className="rounded-2xl p-7 border border-gray-200 bg-white hover:border-green-300 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center gap-3">
      <IconCircle size="md">{icon}</IconCircle>
      <h3 className="font-bold text-[#1a1a1a]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
    </div>
  );
}

// ── Step ──────────────────────────────────────────────────────────────
function Step({ num, icon, title, desc, last = false }: Readonly<{ num: string; icon: React.ReactNode; title: string; desc: string; last?: boolean }>) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <p className="text-6xl font-black mb-4" style={{ color: "#d9ddd4", fontFamily: "'DM Sans', sans-serif" }}>{num}</p>
      <div className="relative">
        <IconCircle size="md">{icon}</IconCircle>
        {!last && (
          <div className="absolute top-1/2 left-full w-16 md:w-24 h-px -translate-y-1/2 ml-2" style={{ background: GREEN_MID }} />
        )}
      </div>
      <h4 className="font-bold text-[#1a1a1a] mt-4 mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed max-w-[180px]">{desc}</p>
    </div>
  );
}

// ── Checklist item ────────────────────────────────────────────────────
function CheckItem({ text, green = false }: Readonly<{ text: string; green?: boolean }>) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 flex-shrink-0" style={{ color: GREEN }}><Icon.Check /></span>
      <span className={`text-sm ${green ? "font-semibold" : "text-gray-700"}`} style={green ? { color: GREEN } : {}}>{text}</span>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────
export default function WhatsappCalling() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => { setTimeout(() => setIsVisible(true), 100); }, []);

    return (
        <div className="min-h-screen" style={{ background: BG, fontFamily: "'DM Sans', sans-serif" }}>
            {/* ── HERO ─────────────────────────────────────────────────────── */}
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className={`flex flex-col gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border self-start text-sm font-medium" style={{ borderColor: GREEN, color: GREEN, background: "rgba(45,90,39,0.06)" }}>
                    <Icon.Phone />
                    WhatsApp Business Calling API
                </div>

                {/* Headline */}
                <h1 className="text-4xl md:text-5xl font-black leading-[1.1] text-[#111]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Transform<br />
                    Customer Service<br />
                    with{" "}
                    <span style={{ color: GREEN }}>WhatsApp<br />Calling</span>
                </h1>

                {/* Body */}
                <p className="text-md text-gray-600 leading-relaxed max-w-lg">
                    Enable powerful voice calling for your business on WhatsApp. From standard business calls to enterprise-grade call center solutions—handle up to 1,000 concurrent calls with intelligent routing and multi-agent support.
                </p>

                {/* CTAs */}
                <div className="flex gap-3 flex-wrap">
                    <Link href="https://invas.me" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow-lg"
                    style={{ background: GREEN }}>
                    Get Started →
                    </Link>
                    <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#111] bg-white border border-gray-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
                    Learn More
                    </Link>
                </div>

                {/* Stats row */}
                <div className="flex gap-8 pt-4 border-t border-gray-200">
                    {[["1000", "Concurrent Calls"], ["24/7", "Available Support"], ["2B+", "WhatsApp Users"]].map(([val, label]) => (
                    <div key={label}>
                        <p className="text-2xl font-black text-[#111]">{val}</p>
                        <p className="text-sm text-gray-500">{label}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Right – dashboard */}
                <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                {/* <DashboardMockup /> */}
                <img src="/invas/monitor_calls.png" alt="" />
                </div>
            </section>

            {/* ── STATS BANNER ─────────────────────────────────────────────── */}
            {/* <section className="py-20 px-6" style={{ background: GREEN }}>
                <div className="max-w-4xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white">WhatsApp Calling by the Numbers</h2>
                <p className="mt-2 text-white/70">See the impact of voice calling and call center solutions on your business</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                    ["1000", "Concurrent Calls", "Handle massive call volumes simultaneously"],
                    ["100%", "Free for Customers", "Customer-initiated calls cost them nothing"],
                    ["24/7", "Automated Routing", "Smart distribution to available agents"],
                    ["2B+", "WhatsApp Users", "Reach billions of customers worldwide"],
                ].map(([val, label, sub]) => (
                    <div key={label} className="flex flex-col gap-1">
                    <p className="text-5xl font-black text-white">{val}</p>
                    <p className="font-semibold text-white/90 text-sm">{label}</p>
                    <p className="text-xs text-white/55 leading-snug">{sub}</p>
                    </div>
                ))}
                </div>
            </section> */}

            {/* ── TWO SOLUTIONS ─────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 py-20 my-14 rounded-[60px]" style={{backgroundColor: GREEN_LIGHT}}>
                <div className="text-center mb-14">
                <h2 className="text-4xl font-black text-[#111]">Two Calling Solutions, Unlimited Possibilities</h2>
                <p className="mt-3 text-gray-500">Choose from standard calling or our enterprise call center solution</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                <FeatureCard icon={<Icon.PhoneOut />} title="Business-Initiated Calls" desc="Reach out to customers proactively. Make outbound calls for sales, support, and follow-ups. Pay per minute for calls you initiate." />
                <FeatureCard icon={<Icon.PhoneIn />} highlight title="Customer-Initiated Calls" desc="Let customers call you for free. They can initiate calls to your business number at no cost, perfect for support inquiries." />
                <FeatureCard icon={<Icon.Headset />} title="Call Center Solution" desc="Enterprise-grade call center on a single WhatsApp number. Handle up to 1,000 concurrent calls with intelligent routing to available agents." />
                <FeatureCard icon={<Icon.Users />} title="Smart Agent Routing" desc="Automated call distribution routes incoming calls to the next available agent, ensuring no customer waits and optimal team efficiency." />
                <FeatureCard icon={<Icon.Shield />} title="End-to-End Encryption" desc="All calls are protected with WhatsApp's end-to-end encryption, ensuring privacy and security for your business communications." />
                <FeatureCard icon={<Icon.Globe />} title="Global Reach" desc="Reach customers in over 180 countries. Make international calls without expensive phone bills or complex setups." />
                </div>
            </section>

            {/* ── BUILT FOR EVERY INDUSTRY ──────────────────────────────────── */}
            <section className="px-6 py-24" style={{ background: BG_CARD }}>
                <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-black text-[#111]">Built for Every Industry</h2>
                    <p className="mt-3 text-gray-500">Discover how businesses across industries use WhatsApp calling to connect with customers</p>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    <IndustryCard icon={<Icon.ShoppingBag />} title="E-commerce & Retail" desc="Product consultations, customer support, and order assistance through voice calls." />
                    <IndustryCard icon={<Icon.Headset />} title="Customer Support" desc="Technical troubleshooting, account assistance, and complex issue resolution via voice calls." />
                    <IndustryCard icon={<Icon.BookOpen />} title="Education & Training" desc="One-on-one tutoring, course consultations, and personalized learning support." />
                    <IndustryCard icon={<Icon.Heart />} title="Healthcare & Wellness" desc="Telemedicine consultations, appointment scheduling, and patient follow-ups." />
                    <IndustryCard icon={<Icon.Home />} title="Real Estate" desc="Property inquiries, consultation calls, and client relationship management." />
                    <IndustryCard icon={<Icon.Briefcase />} title="Professional Services" desc="Client consultations, service demonstrations, and business relationship building." />
                </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
            <section className="max-w-5xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-[#111]">How It Works</h2>
                <p className="mt-3 text-gray-500">Two powerful solutions for different business needs</p>
                </div>

                {/* Standard calling */}
                <h3 className="text-xl font-bold text-[#111] text-center mb-10">Standard Business Calling</h3>
                <div className="grid grid-cols-3 gap-4 mb-20">
                <Step num="01" icon={<Icon.Chat />} title="Customer or Business Initiates" desc="Either the customer starts a chat and requests a call (free for them), or your business initiates an outbound call (per-minute fees apply)." />
                <Step num="02" icon={<Icon.Phone />} title="Call Invitation Sent" desc="A call invitation is sent directly in the WhatsApp conversation. One tap to connect—no phone numbers or apps needed." />
                <Step num="03" icon={<Icon.CheckCircle />} title="Instant Connection" desc="Crystal-clear voice call connects instantly. Customer-initiated calls are completely free; business-initiated calls are billed per minute." last />
                </div>

                {/* Call center */}
                <div className="rounded-3xl p-10 border" style={{ background: BG_CARD, borderColor: "#c9d8c5" }}>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-white mb-8" style={{ background: GREEN }}>
                    <Icon.Zap /> Premium Feature
                </div>
                <h3 className="text-xl font-bold text-[#111] text-center mb-10">Call Center Solution</h3>
                <div className="grid grid-cols-3 gap-4">
                    <Step num="01" icon={<Icon.Phone />} title="Customer Calls Your Number" desc="Customer initiates a call to your dedicated WhatsApp business number. No cost to them, available 24/7." />
                    <Step num="02" icon={<Icon.Users />} title="Automated Routing" desc="Our intelligent system automatically routes the call to the next available agent in your team. No waiting, no manual transfers." />
                    <Step num="03" icon={<Icon.CheckCircle />} title="Agent Handles Call" desc="Your agent receives the call with full customer context. Handle up to 1,000 concurrent calls across your team simultaneously." last />
                </div>
                </div>
            </section>

            {/* ── INTEGRATION ───────────────────────────────────────────────── */}
            <section className="px-6 py-24" style={{ background: BG_CARD }}>
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Left */}
                <div className="flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border self-start text-sm font-medium" style={{ borderColor: GREEN, color: GREEN, background: "rgba(45,90,39,0.06)" }}>
                    <Icon.Zap /> Seamless Integration
                    </div>
                    <h2 className="text-4xl font-black text-[#111] leading-tight">Integrated with Your Initial Setup</h2>
                    <p className="text-gray-600 leading-relaxed">WhatsApp Business Calling works seamlessly with your current setup. No complex integrations, no learning curve. Start making calls in minutes with our easy-to-use platform.</p>
                    <div className="grid grid-cols-2 gap-3">
                    {["WhatsApp Business Platform", "Cloud-based Infrastructure", "Multi-device Support", "CRM Integration", "Analytics Dashboard", "Call Recording & Transcription", "Agent Management", "Quality Monitoring"].map((f) => (
                        <CheckItem key={f} text={f} />
                    ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white self-start transition-all duration-200 hover:opacity-90 hover:scale-[1.02] shadow" style={{ background: GREEN }}>
                    Get Started Now
                    </Link>
                </div>
                {/* Right – mini mockup */}
                <div>
                  {/* <DashboardMockup /> */}
                  <img src="/invas/call_transfer.png" alt="" />
                </div>
                </div>
            </section>

            {/* ── PRICING ───────────────────────────────────────────────────── */}
            <section className="max-w-4xl mx-auto px-6 py-24">
                <div className="text-center mb-14">
                <h2 className="text-4xl font-black text-[#111]">Calling Features Included in Your Plan</h2>
                <p className="mt-3 text-gray-500">WhatsApp calling is seamlessly integrated into our platform plans</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-8 border border-gray-200 bg-white flex flex-col gap-5">
                    <div>
                    <h3 className="text-2xl font-black text-[#111]">Starter Plan</h3>
                    <p className="text-sm text-gray-400 mt-1">Standard calling features included</p>
                    </div>
                    <div className="flex flex-col gap-3">
                    {["Business-initiated calls (per-minute fees apply)", "Customer-initiated calls (free for customers)", "Basic call analytics", "Call history & recording (coming soon)"].map((f) => (
                        <CheckItem key={f} text={f} />
                    ))}
                    </div>
                    <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-gray-300 text-[#111] transition-all hover:border-green-400 hover:shadow-sm">
                    Get Started
                    </Link>
                </div>

                {/* Premium */}
                <div className="rounded-2xl p-8 border-2 flex flex-col gap-5 relative overflow-hidden" style={{ borderColor: GREEN, background: "rgba(45,90,39,0.03)" }}>
                    <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{ background: GREEN }}>Enterprise Feature</span>
                    </div>
                    <div>
                    <h3 className="text-2xl font-black text-[#111]">Premium Plan</h3>
                    <p className="text-sm text-gray-400 mt-1">Advanced call center solution included</p>
                    </div>
                    <div className="flex flex-col gap-3">
                    <CheckItem text="Everything in Starter Plan" />
                    <CheckItem text="Call Center Solution (1000 concurrent calls)" green />
                    <CheckItem text="Automated intelligent call routing" />
                    <CheckItem text="Real-time queue management" />
                    <CheckItem text="Unlimited agents" />
                    <CheckItem text="Advanced analytics & reporting" />
                    <CheckItem text="Priority support" />
                    </div>
                    <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01] shadow-lg" style={{ background: GREEN }}>
                    Upgrade to Premium
                    </Link>
                </div>
                </div>
            </section>

            {/* ── CTA FOOTER BAND ──────────────────────────────────────────── */}
            {/* <section className="py-20 px-6 text-center" style={{ background: GREEN }}>
                <h2 className="text-4xl font-black text-white mb-4">Ready to Transform Your Customer Service?</h2>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">Join thousands of businesses using WhatsApp Calling to connect with their customers more effectively.</p>
                <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#111] bg-white hover:scale-[1.02] transition-all duration-200 shadow-lg">
                  Start Free Trial →
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white border border-white/30 hover:bg-white/10 transition-all duration-200">
                  Talk to Sales
                </Link>
                </div>
            </section> */}

            <div className="bg-[#0064CB] relative overflow-hidden">
              <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={15} />
              <div>
                {/* Background */}
                <img className="absolute inset-0 w-full h-full object-cover" src="/images/BG.svg" alt=""/>

                {/* Content */}
                {/* Text */}
                <div className={`flex flex-col items-center text-center py-16 px-4 relative z-10 max-w-7xl mx-auto transition-all duration-1000 
                    ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"}`}>
                  <h2 className="text-4xl font-black text-white mb-4">Ready to Transform Your Customer Service?</h2>
                  <p className="text-white/70 mb-8 max-w-xl mx-auto">Join thousands of businesses using WhatsApp Calling to connect with their customers more effectively.</p>
                  <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}>
                    <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <a href="https://invas.me" target="_blank" rel="noopener noreferrer" className="font-semibold">
                        Start Free Trial →
                      </a>
                    </Button>
                    <Button variant="hero" size="lg" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                      <a href="/contact" className="font-semibold">
                        Talk to Sales
                      </a>
                    </Button>
                  </div>
                  <Noise patternSize={1} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={9} />
                </div>
              </div>
            </div>

            {/* WhatsApp FAB */}
            {/* <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
                className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center shadow-xl text-white z-50 hover:scale-110 transition-transform"
                style={{ background: "#25D366" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </a> */}
        </div>
    );
}