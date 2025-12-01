"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Service {
  icon: string;
  title: string;
  description: string;
  img: string;
  href?: string;
}

const SERVICES: Service[] = [
  {
    icon: "/networkicon.svg",
    title: "IntarvAS PBX",
    description: "We provide cloud PBX (Private Branch Exchange) solutions designed to help telecom operators and large organizations modernize their voice services.",
    img: "/about-thrive/about-1.svg",
    href: "/services/pbx",
  },
  {
    icon: "/linkicon.svg",
    title: "All in one solution",
    description: "A unified platform combining calling, messaging, and CRM tools for both customer service and outbound sales.",
    img: "/about-thrive/about-2.svg",
    href: "/services/all-in-solution",
  },
  {
    icon: "/vanityiconn.svg",
    title: "Vanity and Toll-free numbers",
    description: "Providing businesses with valuable means of communication that not only benefits the customer but also drives business success.",
    img: "/about-thrive/about-3.svg",
    href: "/services/numbers",
  },
  {
    icon: "/bulkmessaging.svg",
    title: "Bulk Messaging",
    description: "Our messaging solution encompasses a comprehensive suite of messaging services, catering to both person-to-person (P2P) and Application-to-Person (A2P) communication needs.",
    img: "/about-thrive/about-5.png",
    href: "/services/bulk-messaging",
  },
];

const ANIMATION_DELAYS = { header: 0, cards: [200, 400, 600, 800], images: [600, 700, 800, 900] };

export default function ServicesShowcase() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ANIMATION_DELAYS.cards.forEach((delay, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }, delay);
        });

        ANIMATION_DELAYS.images.forEach((delay, index) => {
          setTimeout(() => {
            setVisibleImages((prev) => [...new Set([...prev, index])]);
          }, delay);
        });

        entry.target.classList.add("observed");
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    if (sectionRef.current && !sectionRef.current.classList.contains("observed")) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section
      ref={sectionRef}
      id="services-showcase-section"
      className="bg-[#F6F6F6] py-16 md:py-20 lg:py-24 px-6 md:px-8"
    >
      <div className="max-w-7xl mx-auto" id="services-showcase">
        {/* Header */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          {/* <span className="inline-block px-3 md:px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs md:text-sm font-medium mb-4">
            Our services
          </span> */}
          <span className="inline-block px-3 md:px-4 py-2 border border-[#C6E2FF] bg-[#E5F2FF] text-[#007DFE] rounded-full text-sm font-medium mb-4">
            Our services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Where We Thrive
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Discover reliable telecom tools built for Nigerian businesses and government agencies.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-1000 flex flex-col ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              {/* Service Content */}
              <div className="p-6 md:p-9">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <img src={service.icon} alt={service.title} className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link href={service.href}>
                  <Button variant="hero" className="px-6 py-2 text-sm hover:scale-105 transition-transform duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Phone Mockup */}
              <div className="px-6 md:px-9 flex mt-auto items-end justify-center">
                <div
                  className={`transition-all duration-1000 delay-300 ${
                    visibleImages.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                >
                  <img
                    src={service.img}
                    alt={`${service.title} Mockup`}
                    className="w-full h-auto hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}