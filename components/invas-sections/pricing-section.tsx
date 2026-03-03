import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Starter Pack",
      price: "₦80,659",
      period: "/month",
      description: "Essentials to start messaging at scale.",
      features: [
        "PhoneBooks Manipulation",
        "Template Management",
        "Bulk Messaging",
        "Campaign Statistics",
        "Chatting System",
        "Live History",
        "Standard ticketing support",
        "Calls & Notifications",
        "1,000 Bot Sessions",
        "5 GB Cloud Storage",
      ],
      cta: "Get Starter",
      highlight: false,
    },
    {
      name: "Growth Pack",
      price: "₦135,342",
      period: "/month",
      badge: "Most Popular",
      description: "Everything in Starter Pack +",
      features: [
        "Roles & Permissions",
        "Leads Management",
        "API Endpoints",
        "Message Scheduling",
        "Catalog Management",
        "Advanced ticketing support",
        "Basic Flows",
        "5,000 Bot Sessions",
        "10 GB Cloud Storage",
      ],
      cta: "Choose Pro",
      highlight: true,
    },
    {
      name: "Premium Pack",
      price: "₦340,407",
      period: "/month",
      description: "Everything in Growth Pack +",
      features: [
        "Order Manipulation",
        "Call Center",
        "Advanced Flows",
        "Premium Customer Support",
        "10,000 Chatbot Sessions",
        "15 GB Cloud Storage",
      ],
      cta: "Go Premium",
      highlight: false,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Pick a plan that fits today—and scale whenever you need.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-blue-700 text-white rounded-full font-medium">
              Monthly
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
              Yearly
            </button>
            <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium text-sm">
              Save 20%
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 relative ${
                plan.highlight
                  ? "bg-white border-2 border-blue-600 shadow-lg transform md:scale-105"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <Button
                className={`w-full mb-8 ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-blue-700 hover:bg-blue-800 text-white"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-3 border-t pt-6">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
