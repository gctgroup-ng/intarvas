"use client";

import { Hero2, ClientLogosSection, SecuritySection, Testimonials as TestimonialsSection } from "@/components/sections";
import ProvenResultsSection from "@/components/common/LandingStats";
import BusinessCom from "@/components/common/BusinessCom";
import Services from "@/components/sections/Services";
import SupportWidget from "@/components/common/SupportWidget";

export default function Home() {
  return (
    <main>
      <SupportWidget />
      <Hero2/>
      <ClientLogosSection />
      <Services />
      {/* <FeaturesSection /> */}
      <ProvenResultsSection />
      <SecuritySection />
      <TestimonialsSection />
      <BusinessCom />
    </main>
  );
}

