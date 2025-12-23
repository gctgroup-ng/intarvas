"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What exactly is IntarvAS’s Bulk Messaging service?",
      answer:
        "Our Bulk Messaging service allows you to send large volumes of SMS (text) messages at once for marketing, alerts, notifications, reminders, and other communications to many recipients via a single platform."
    },
    {
      question: "Who can benefit from using Bulk Messaging?",
      answer:
        "Any business or organization—such as retail, education, finance, logistics, healthcare, NGOs, and more—can benefit from using bulk SMS to efficiently reach customers, clients, or members."
    },
    {
      question:
        "What are the main advantages of using Bulk SMS over other channels (e.g. email, calls)?",
      answer: "Bulk SMS delivers several advantages:",
      answerList: [
        "Instant delivery and near-instant visibility: SMS messages are often received and read almost immediately after sending.",
        "Works without internet or smartphones: Recipients only need a basic phone with SMS capability.",
        "Cost-effective and scalable: Bulk messaging lets you reach many people at minimal cost compared to other communication methods.",
        "High engagement and open rates: People tend to read SMS more reliably than many other channels.",
        "Flexible usage: Suitable for promotions, alerts, reminders, updates, and announcements."
      ]
    },
    {
      question:
        "Do I need any special tools or technical knowledge to send bulk SMS through IntarvAS?",
      answer:
        "No,  you can send bulk messages via a simple web-based platform or interface. Our system handles the technical delivery through our SMS gateway. Also, if needed, you can integrate via our API (for automated or programmatic SMS sending) to support more advanced workflows."
    },
    {
      question:
        "Can I both send and receive SMS (allow replies from recipients)?",
      answer:
        "Yes. Our bulk SMS solution supports two-way messaging, allowing you to send messages and receive replies directly through our platform."
    },
    {
      question:
        "Can I schedule messages to be sent later or keep custom sender IDs / long messages / message queues",
      answer:
        "Yes. Our platform supports message scheduling, custom sender IDs, long-message support, and message queuing so you can effectively plan and manage your campaigns."
    },
    {
      question:
        "How do I get started with Bulk Messaging through IntarvAS?",
      answer:
        "To get started, contact us via our website or sales team, register for an account, and we will guide you through uploading your contact list, setting up the sender ID, and sending your first bulk message."
    },
    {
      question: "Is Bulk SMS effective for businesses in Nigeria?",
      answer:
        "Absolutely. In Nigeria (and similar markets), bulk SMS is a powerful channel because many people use mobile phones, even without smartphones or internet, so SMS ensures wide reach, quick delivery and high engagement."
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
                <div className="px-6 pt-0">{faq.answer && (
                  <p className="text-gray-600 leading-relaxed pb-6">{faq.answer}</p>
                )}

                {faq.answerList && (
                  <>
                  <ul className="list-disc pl-5 pb-6 space-y-2 text-gray-600">
                    {faq.answerList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul></>
                )}
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
