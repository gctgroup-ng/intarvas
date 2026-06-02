"use client";

import { HeroSection } from "@/components/invas-sections/hero-section";
import { ChatbotSection } from "@/components/invas-sections/chatbot-section";
import { CallingSection } from "@/components/invas-sections/calling-solutions-section";
import { PricingSection } from "@/components/invas-sections/pricing-section";
import { IndustriesSection } from "@/components/invas-sections/industries-section";
import { FAQSection } from "@/components/invas-sections/faq-section";
import { ScrollFeature } from "@/components/invas-sections/scroll-feature";

export default function Invas() {

    return (
        <main className="bg-white">
            <HeroSection />
            {/* <StatsSection /> */}
            <ChatbotSection />
            {/* <OmniChannelSection /> */}
            <CallingSection />
            <ScrollFeature/>
            {/* <PricingSection /> */}
            <IndustriesSection />
            <PricingSection />
            <FAQSection />
        </main>
    );
}