"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can I leverage Invas for marketing purposes?",
      answer:
        "Invas offers comprehensive WhatsApp marketing tools including bulk messaging, campaign automation, analytics, and customer segmentation to help you reach and engage your audience effectively.",
    },
    {
      question: "But WhatsApp is free. What does WhatsApp conversation charges mean?",
      answer:
        "While WhatsApp messaging is free between users, businesses using WhatsApp Business API incur conversation charges based on the number of customer interactions, not the volume of messages sent.",
    },
    {
      question:
        "Can I send multi-messages in parallel at the same time using your software?",
      answer:
        "Yes, Invas allows you to send bulk messages across multiple contacts simultaneously, with advanced scheduling and automation capabilities.",
    },
    {
      question: "Is it possible to automate responses using INVAS?",
      answer:
        "Absolutely. Invas's chatbot automation feature allows you to set up predefined conversation flows that automatically respond to customer messages 24/7.",
    },
    {
      question: "How do I get started with INVAS?",
      answer:
        "Getting started is simple. Sign up for an account, choose your plan, and our onboarding team will guide you through setup and configuration.",
    },
    // {
    //   question:
    //     "Can I integrate this software with my existing CRM or Third-party services?",
    //   answer:
    //     "Yes, Invas offers API endpoints and integrations with popular CRM and third-party services to seamlessly connect with your existing business tools.",
    // },
  ];

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index + 1}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
