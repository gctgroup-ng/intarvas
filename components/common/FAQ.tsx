"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What kinds of phone numbers does IntarvAS provide?",
      answer: "We provide Nigerian vanity and toll-free numbers — including 0700 “vanity” numbers and 0800 toll-free numbers to help businesses present a professional, memorable contact line."
    },
    {
      question: "How will getting a 0700 or 0800 number benefit my business?",
      answer: "By using our numbers, you gain a more professional and credible image, make it easier for customers to remember you, and enhance accessibility nationwide."
    },
    {
      question: "Can calls to these numbers be routed to multiple departments or locations?",
      answer: "Yes, our system supports flexible call routing. You can direct incoming calls to different teams, departments, or locations, all via a single central number."
    },
    {
      question: "Is the service scalable as my business grows?",
      answer: "Yes. The numbers and system are scalable, and they support advanced telecom features that can grow along with your company’s needs."
    },
    {
      question: "Are calls from customers free?",
      answer: "For toll-free numbers (0800), callers can reach you without cost. This encourages customer engagement while keeping communication affordable for your business."
    },
    {
      question: "Do you offer desk phones or hardware as part of the package?",
      answer: "Yes, IntarvAS offers enterprise-grade desk phones that work with our IP/PBX/SIP system."
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Questions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Find answers to <span className="text-gray-400">common</span>
            <br />
            <span className="text-gray-400">questions</span> about our platform
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-gray-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
