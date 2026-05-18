"use client";

import { HeroSection } from "@/components/invas-sections/hero-section";
import { ChatbotSection } from "@/components/invas-sections/chatbot-section";
import { CallingSection } from "@/components/invas-sections/calling-solutions-section";
import { PricingSection } from "@/components/invas-sections/pricing-section";
import { IndustriesSection } from "@/components/invas-sections/industries-section";
import { FAQSection } from "@/components/invas-sections/faq-section";
import { ScrollFeature } from "@/components/invas-sections/scroll-feature";
// import PricingCard, { PLAN } from "@/components/invas/pricing-card";
// import { useRouter } from "next/navigation";

// export const getDemoPlans = (): PLAN[] => [
//     {
//         id: "plan_starter",
//         externalPlanId: "plan_starter",
//         name: "Starter",
//         amount: 45000,
//         duration: 30,
//         currency: "NGN",
//         features: {
//         "Launching Campaigns": "✓",
//         "1,000 ChatBot Sessions Monthly": "✓",
//         "Live Analytics & Statistics": "✓",
//         "1 Team Member": "✓",
//         "Chatbot Factory": "✓",
//         "Phone Books": "✓",
//         "5 GB Cloud Storage": "✓",
//         },
//         isActive: true,
//     },
//     {
//         id: "plan_growth",
//         externalPlanId: "plan_growth",
//         name: "Growth Plan",
//         amount: 90000,
//         duration: 30,
//         currency: "NGN",
//         description: "Everything in Starter Pack +",
//         features: {
//         "Leads Management": "✓",
//         "5,000 ChatBot Sessions": "✓",
//         "Product Catalogue": "✓",
//         "5 Team Members": "✓",
//         "Message Scheduling": "✓",
//         "Send Template API": "✓",
//         "10 GB Cloud Storage": "✓",
//         },
//         isActive: true,
//         isPopular: true,
//     },
//     {
//         id: "plan_premium",
//         externalPlanId: "plan_premium",
//         name: "Premium Pack",
//         amount: 240000,
//         duration: 30,
//         currency: "NGN",
//         description: "Everything in Growth Pack +",
//         features: {
//         "Flow Automation": "✓",
//         "10,000 ChatBot Sessions": "✓",
//         "Order Management": "✓",
//         "10 Team Members": "✓",
//         "Dedicated Support": "✓",
//         "BlueTick Verification": "✓",
//         "15 GB Cloud Storage": "✓",
//         },
//         isActive: true,
//     },
// ]
export default function Invas() {
    // const router = useRouter();
    // const plans = getDemoPlans();

    // const handleSelectPlan = (plan: any) => {
    //     console.log("Selected Plan:", plan);
    //     router.push(`https://invas.me/plans`);
    // };

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