"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeatureCard from "@/components/invas-sections/featureCard";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clipboard } from "lucide-react";

if (globalThis.window !== undefined) {
  gsap.registerPlugin(ScrollTrigger);
}
export function ScrollFeature() {
  const [isMounted, setIsMounted] = useState(false);

  const invasFeatures = [
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Create Templates",
      name: "create-templates",
      description: "Save time and ensure consistency in your WhatsApp messages by creating customized templates tailored to your needs.",
      image: "/invas/template_builder.png",
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Launch Campaigns",
      name: "launch-campaigns",
      description: "Our solution lets you create, manage, and automate personalized campaigns—whether for promotions, updates, or customer engagement.",
      image: "/invas/launch_campaign.png",
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Create Phonebooks",
      name: "create-phonebooks",
      description: "Create customized phonebooks tailored to your needs, making it easy to manage and reach out to your contacts efficiently.",
      image: "/invas/phonebooks.png"
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Advanced Chatting",
      name: "advanced-chatting",
      description: "Lets you send rich, interactive messages—like buttons, product lists, quick replies, and forms—that go far beyond the basic text and media options in the WhatsApp Business app.",
      image: "/invas/advanced_chatting.png"
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Chatbot Automation",
      name: "chatbot-automation",
      description: "Allows you to set up predefined conversation flows that automatically respond to customer messages.",
      image: "/invas/chatbot_automation.png"
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Live Analytics",
      name: "live-analytics",
      description: "Live monitoring and analytics let you track conversations and performance in real time, measuring engagement and response to optimize results.",
      image: "/invas/monitor_calls.png"
    }

  ];
  const featuresRef = useRef<HTMLDivElement>(null);
  const stickyLeftRef = useRef<HTMLDivElement>(null);
  const scrollingRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // GSAP ScrollTrigger for sticky left column
  useLayoutEffect(() => {
    if (!isMounted || (globalThis.window !== undefined && window.innerWidth < 1024) || !featuresRef.current || !stickyLeftRef.current || !scrollingRightRef.current) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "features-sticky") {
        trigger.kill();
      }
    });

    // Create the pin effect
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        id: "features-sticky",
        trigger: featuresRef.current,
        start: "top 80px",
        end: () => {
          const rightHeight = scrollingRightRef.current?.offsetHeight || 0;
          const leftHeight = stickyLeftRef.current?.offsetHeight || 0;
          return `+=${rightHeight - leftHeight - 150}`;
        },
        pin: stickyLeftRef.current,
        pinSpacing: false,
        markers: false,
        scrub: false,
      });
    }, featuresRef.current);

    // Cleanup on resize
    const handleResize = () => {
      if (globalThis.window !== undefined && window.innerWidth < 1024) {
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars.id === "features-sticky") {
            trigger.kill();
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert(); 
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === "features-sticky") {
          trigger.kill();
        }
      });
    };
  }, [isMounted]);

  return (
    <>
      {/* Feature Section */}
      {/* bg-[#F6F6F6] */}
      <section ref={featuresRef} className="bg-blue-50/60 pt-20 pb-32 relative">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10 min-h-[600px] px-4">
          {/* LEFT STICKY - Desktop sticky, mobile/tablet normal with order */}
          <div ref={stickyLeftRef} className={`max-w-lg h-fit transition-opacity duration-700 order-first md:order-none md:sticky md:top-32`}>
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                Features
              </span>
            </div>
            <h3 className="font-inter text-[28px] md:text-[38px] font-[600] leading-[1.2]">
              Powerful Features for meaningful conversations.
            </h3>
            <p className="text-[#858D9D] mb-3 mt-4 text-sm md:text-base">
              Everything you need to build meaningful customer relationships through WhatsApp
            </p>
            <div className="mt-6">
              <Link href="https://invas.me">
                <Button size="lg" variant="hero" className="hover:scale-105 transition-transform duration-300 ">
                  Try inVAS
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN - Normal scroll on mobile, with order */}
          <div ref={scrollingRightRef} className="flex flex-col gap-10 order-last md:order-none">
            {invasFeatures.map((item, index) => (
              <div key={item.name} className="flex items-center justify-center" style={{
                  opacity: isMounted ? 0 : 1,
                  animation: isMounted ? `fadeInUp 0.6s ease-out forwards ${index * 0.1}s` : 'none'
                }}>
                <FeatureCard icon={item.icon} title={item.title} description={item.description} img={item.image} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>
        {`@keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }`}
      </style>
    </>
  );
}
