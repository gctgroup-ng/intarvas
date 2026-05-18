import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
export interface PLAN {
  id: string
  externalPlanId: string
  name: string
  amount: number
  duration: number
  currency: string
  features: Record<string, string> | string[]
  isActive?: boolean
  description?: string
  isPopular?: boolean
}

export function PricingSection() {
  // const plans = [
  //   {
  //     name: "Starter",
  //     price: "₦80,659",
  //     period: "/month",
  //     description: "Essentials to start messaging at scale.",
  //     features: [
  //       "PhoneBooks Manipulation",
  //       "Template Management",
  //       "Bulk Messaging",
  //       "Campaign Statistics",
  //       "Chatting System",
  //       "Live History",
  //       "Standard ticketing support",
  //       "Calls & Notifications",
  //       "1,000 Bot Sessions",
  //       "5 GB Cloud Storage",
  //     ],
  //     cta: "Get Starter",
  //     highlight: false,
  //   },
  //   {
  //     name: "Growth",
  //     price: "₦135,342",
  //     period: "/month",
  //     badge: "Most Popular",
  //     description: "Everything in Starter Pack +",
  //     features: [
  //       "Roles & Permissions",
  //       "Leads Management",
  //       "API Endpoints",
  //       "Message Scheduling",
  //       "Catalog Management",
  //       "Advanced ticketing support",
  //       "Basic Flows",
  //       "5,000 Bot Sessions",
  //       "10 GB Cloud Storage",
  //     ],
  //     cta: "Choose Growth",
  //     highlight: true,
  //   },
  //   {
  //     name: "Premium",
  //     price: "₦340,407",
  //     period: "/month",
  //     description: "Everything in Growth Pack +",
  //     features: [
  //       "Order Manipulation",
  //       "Call Center",
  //       "Advanced Flows",
  //       "Premium Customer Support",
  //       "10,000 Chatbot Sessions",
  //       "15 GB Cloud Storage",
  //     ],
  //     cta: "Go Premium",
  //     highlight: false,
  //   },
  // ];
  
  const getDemoPlans = [
    {
        id: "plan_starter",
        externalPlanId: "plan_starter",
        name: "Starter",
        amount: 45000,
        duration: 30,
        currency: "NGN",
        features: {
        "Launching Campaigns": "✓",
        "1,000 ChatBot Sessions Monthly": "✓",
        "Live Analytics & Statistics": "✓",
        "1 Team Member": "✓",
        "Chatbot Factory": "✓",
        "Phone Books": "✓",
        "5 GB Cloud Storage": "✓",
        },
        isActive: true,
        cta: "Get Starter",
    },
    {
        id: "plan_growth",
        externalPlanId: "plan_growth",
        name: "Growth",
        amount: 90000,
        duration: 30,
        currency: "NGN",
        description: "Everything in Starter Pack +",
        features: {
        "Leads Management": "✓",
        "5,000 ChatBot Sessions": "✓",
        "Product Catalogue": "✓",
        "5 Team Members": "✓",
        "Message Scheduling": "✓",
        "Send Template API": "✓",
        "10 GB Cloud Storage": "✓",
        },
        isActive: true,
        isPopular: true,
        cta: "Choose Growth",
    },
    {
        id: "plan_premium",
        externalPlanId: "plan_premium",
        name: "Premium",
        amount: 240000,
        duration: 30,
        currency: "NGN",
        description: "Everything in Growth Pack +",
        features: {
          "Flow Automation": "✓",
          "10,000 ChatBot Sessions": "✓",
          "Order Management": "✓",
          "10 Team Members": "✓",
          "Dedicated Support": "✓",
          "BlueTick Verification": "✓",
          "15 GB Cloud Storage": "✓",
        },
        isActive: true,
        cta: "Go Premium",
    },
  ]

  return (
    <section className="bg-foreground/5 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2> */}
          <h3 className="font-inter text-[38px] md:text-[42px] font-[600] leading-[1.2]">
            Simple, transparent pricing
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Pick a plan that fits today, and scale whenever you need.
          </p>

          {/* Billing Toggle */}
          {/* <div className="flex justify-center gap-4 mb-8">
            <button className="px-4 py-2 bg-[#0A0F8F] text-white rounded-full font-medium">
              Monthly
            </button>
            <div className="border border-[#0A0F8F] rounded-full flex ">
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full font-medium">
                Yearly
              </button>
              <button className="px-4 py-2 bg-[#0A0F8F]/10 text-[#0A0F8F] rounded-full font-medium text-xs">
                Save 17%
              </button>
            </div>
            
          </div> */}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getDemoPlans.map((plan, index) => (
            <div
              key={index.toFixed()}
              className={`rounded-2xl p-8 relative ${
                plan.isPopular
                  ? "bg-white border-2 border-[#0A0F8F] shadow-lg transform md:scale-105"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#0A0F8F] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-4xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                {/* <span className="text-4xl text-[#0e8d17] font-bold">₦ {(plan.amount).toLocaleString()}</span>  */}
                {/* <span className="text-gray-600 ml-2">{plan.period}</span>*/}
              </div>
              <p className="text-gray-600 text-medium mb-6">{plan.description}</p>

              <Link href={`https://invas.me/plans`} >
              <Button variant={"hero"} size={"lg"}
                className={`w-full mb-8`}
                // ${
                //   plan.isPopular
                //     ? "border-accent hover:bg-accent hover:text-background"
                //     : "border-blue-600 hover:bg-blue-600 hover:text-white"
                // }`
                
              >
                {plan.cta}
              </Button>
              </Link>

              <div className="space-y-3 border-t pt-6">
                {Object.keys(plan.features).map((feature, fIndex) => (
                  <div key={fIndex.toFixed()} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0e8d17] flex-shrink-0 mt-0.5" />
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
