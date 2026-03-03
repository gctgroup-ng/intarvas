import { Button } from "@/components/ui/button";
import Link from "next/link";

export function OmniChannelSection() {
  return (
    <section className="bg-blue-800 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Omni-Channel Marketing
            </h2>
            <p className="text-blue-50 mb-6 text-base md:text-lg leading-relaxed">
              Invas is an omni-channel hub that connects your website chat, e-commerce app, and channels like WhatsApp, Instagram, & Messenger. It keeps customer conversations in one place, so you can reply fast and trigger automated journeys—abandoned-cart reminders, order updates, and support handoffs—on the customer's preferred channel.
            </p>
            <p className="text-blue-50 mb-8 text-base">
              You also get clear analytics and consent controls, so everything stays consistent, compliant, and measurable.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="text-blue-800">
                Talk to Sales Team
              </Button>
            </Link>
          </div>

          {/* Right - Illustration */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg aspect-square bg-blue-600 rounded-3xl flex items-center justify-center">
              <img src="/about-thrive/invas-about-us.jpg" alt="Omni-channel illustration" className="w-full h-full object-cover rounded-3xl"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
