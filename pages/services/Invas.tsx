"use client";

import { HeroSection } from "@/components/invas-sections/hero-section";
// import { StatsSection } from "@/components/invas-sections/stats-section";
import { ChatbotSection } from "@/components/invas-sections/chatbot-section";
// import { OmniChannelSection } from "@/components/invas-sections/omni-channel-section";
import { CallingSection } from "@/components/invas-sections/calling-solutions-section";
// import { PricingSection } from "@/components/invas-sections/pricing-section";
import { IndustriesSection } from "@/components/invas-sections/industries-section";
// import { FeaturesSection } from "@/components/invas-sections/features-section";
// import { WhyChooseSection } from "@/components/invas-sections/why-choose-section";
import { FAQSection } from "@/components/invas-sections/faq-section";
// import { WhatsAppCTASection } from "@/components/invas-sections/whatsapp-cta-section";
// import { ContactSection } from "@/components/invas-sections/contact-section";
// import { MetaPartnerSection } from "@/components/invas-sections/meta-partner-section";
// import { CTAFinalSection } from "@/components/invas-sections/cta-final-section";
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
            {/* <FeaturesSection /> */}
            {/* <WhyChooseSection /> */}
            <FAQSection />
            {/* <WhatsAppCTASection /> */} 
            {/* <ContactSection /> */}
            {/* <MetaPartnerSection /> */}
            {/* <CTAFinalSection /> */}
        </main>
    );
}
