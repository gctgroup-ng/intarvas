"use client";

import { Hero2, ClientLogosSection, SecuritySection, Testimonials as TestimonialsSection } from "@/components/sections";
import FeaturesSection from "@/components/common/LandingFeature";
import ProvenResultsSection from "@/components/common/LandingStats";
import BusinessCom from "@/components/common/BusinessCom";

export default function Home() {
  return (
    <main>
      <Hero2/>
      <ClientLogosSection />
      <FeaturesSection />
      <ProvenResultsSection />
      <SecuritySection />
      <TestimonialsSection />
      <BusinessCom />
    </main>
  );
}

