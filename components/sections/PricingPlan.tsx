"use client";

import React, { useEffect, useState } from "react";
import {
  Check,
  Shield,
  TrendingUp,
  User,
} from "lucide-react";
import ConsultationDialog from "../pbxForm";
import { ONE_USER_CONFIG, STANDARD_TIER_CONFIG, PBX_TIERS } from "@/lib/pbx-pricing";

const PricingPlans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger card animations
            const cardIndices = [0, 1, 2];
            cardIndices.forEach((index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('pricing-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const naira = (n) => `₦${n.toLocaleString()}`;

  const plans = [
    {
      name: PBX_TIERS.ONE_USER,
      icon: <User className="w-6 h-6 text-[#0A0F8F]" />,
      price: naira(ONE_USER_CONFIG.flatAnnualLicense),
      period: "/year",
      rateNote: "Flat annual license · Single seat",
      description: "Dedicated cloud PBX for solo professionals",
      userRange: "1 user",
      popular: false,
      groups: [
        {
          label: "Included",
          items: [
            "Welcome message setup",
            "PC & mobile app support",
            "Deskphone (IP phone) support",
            "Basic reports",
          ],
        },
        {
          label: "Number",
          items: [
            `Mandatory Add-on: ${naira(30000)}/year`,
          ],
        },
      ],
    },
    {
      name: PBX_TIERS.VALUE_EDGE,
      icon: <Shield className="w-6 h-6 text-[#0A0F8F]" />,
      price: `${naira(STANDARD_TIER_CONFIG.VALUE_EDGE.baseRateBasic)}/user`,
      period: "/month",
      rateNote: `${naira(STANDARD_TIER_CONFIG.VALUE_EDGE.baseRateBundled)}/user/mo bundled with add-ons`,
      description: "Essential cloud PBX for growing teams",
      userRange: `min. ${STANDARD_TIER_CONFIG.VALUE_EDGE.minUsers} users`,
      popular: true,
      groups: [
        {
          label: "Call Handling",
          items: ["IVR", "Call distribution", "Queues", "Blacklist", "Fax", "Voicemail", "Call transfer", "CUG"],
        },
        {
          label: "Management & Reporting",
          items: ["Admin dashboard", "Role management", "Basic reports", "Call stats & reporting"],
        },
        {
          label: "Sales Tools",
          items: ["CRM integration", "Advanced call center", "Sales tools & callbacks", "Auto-dialing option"],
        },
        {
          label: "Numbers & Credit",
          items: [
            "1 free 0700/0800 number",
            `Extra numbers: ${naira(25000)}/year each`,
            "Up to 1,200 bonus minutes/year (T&C applied)",
            "1 month call recording",
          ],
        },
        {
          label: "Onboarding & Support",
          items: ["Virtual onboarding session", "Standard basic support"],
        },
      ],
    },
    {
      name: PBX_TIERS.PREMIUM,
      icon: <TrendingUp className="w-6 h-6 text-[#0A0F8F]" />,
      price: `${naira(STANDARD_TIER_CONFIG.PREMIUM.baseRateBasic)}/user`,
      period: "/month",
      rateNote: `${naira(STANDARD_TIER_CONFIG.PREMIUM.baseRateBundled)}/user/mo bundled with add-ons`,
      description: "High-capacity PBX with enterprise features",
      userRange: `min. ${STANDARD_TIER_CONFIG.PREMIUM.minUsers} users`,
      popular: false,
      everythingIn: "ValueEdge",
      groups: [
        {
          label: "Team Value",
          items: ["1 free user for every 4 active users", "Pick your own number"],
        },
        {
          label: "Numbers & Credit",
          items: [
            "Up to 5 free 0700/0800 numbers",
            "Up to 12,000 bonus minutes/year (T&C applied)",
            "3 months call recording",
            `Extra numbers: ${naira(20000)}/year each`,
          ],
        },
        {
          label: "Platform & Integration",
          items: ["AIO integration with IntarvAS PBX (T&C applied)", "Early access to new platform features"],
        },
        {
          label: "Onboarding & Support",
          items: [
            "Up to 2 physical onboarding sessions (T&C applied)",
            "Dedicated premium support",
            "Buy 1 add-on, get full PBX features free for 7 days (T&C applied)",
          ],
        },
      ],
    },
  ];

  return (
    <section id="pricing-section" className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Flexible Plans for{" "}
            <span className="text-gray-400">Every Business</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the right package for your business needs — Start with a
            7-day free trial, no credit card required
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index.toFixed()}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-xl hover:scale-105 ${plan.popular
                  ? "border-2 border-blue-500 shadow-lg scale-105"
                  : "border border-gray-200 hover:border-blue-300"
                } ${visibleCards.includes(index)
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-8'
                }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="bg-[#0A0F8F] text-white text-center py-2 font-medium text-sm flex items-center justify-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Popular
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {/* <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                      ₦{plan.price}
                    </span>
                    <span className="text-gray-500 font-medium text-sm">
                      {plan.period}
                    </span>
                  </div> */}
                  {/* {plan.rateNote && (
                    <div className="mt-2 inline-block text-xs font-medium text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                      {plan.rateNote}
                    </div>
                  )} */}
                  <p className="text-sm text-gray-600 mt-2.5">
                    {plan.description}{" "}
                    <br />
                    <span className="font-semibold text-gray-800">({plan.userRange})</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="h-[600px] overflow-y-auto custom-scrollbar">
                  <div className="flex-1 flex flex-col gap-5">
                    {plan.everythingIn && (
                      <p className="font-medium text-[#0A0F8F]">Everything in {plan.everythingIn}, plus:</p>
                    )}
                    {plan.groups.map((group) => (
                      <div key={group.label}>
                        <p className="text-sm font-medium text-slate-400 mb-2">{group.label}</p>
                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                              <Check className="w-4 h-4 text-[#0A0F8F] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6 p-3"> 
                    <ConsultationDialog triggerLabel={`Choose ${plan.name}`} 
                      triggerClassName={`w-full py-3 rounded-lg font-medium transition-all duration-300 mb-8 hover:scale-102 ${plan.popular
                          ? "bg-[#0A0F8F] text-white hover:brightness-110 hover:shadow-lg"
                          : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-blue-300"
                        }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        {/* <div className={`flex items-center pt-10 justify-center gap-8 text-sm text-gray-600 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-300">
            <Calendar className="w-4 h-4" />
            <span>free trial on any package</span>
          </div>
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-300">
            <Phone className="w-4 h-4" />
            <span>free 2000 airtime</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default PricingPlans;
