"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CarouselPlugin } from "./carousel";

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState("pbx");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // const tabSequenceRef = useRef<string[]>(["pbx", "allinone", "messaging", "numbers"]);
  const tabSequenceRef = useRef<string[]>(['', "pbx", "allinone", "messaging", "numbers", '']);
  
  const isAnimatingRef = useRef(false);

  const pbxFeatures = [
    {
      icon: (
        <img
          src="/correctpuzlleicon.svg"
          alt="Virtual Extensions"
          style={{ width: "26px", height: "26px" }}
        />
      ),
      title: "Virtual Extensions",
      subtitle: "for scalable teams.",
    },
    {
      icon: (
        <img
          src="/callrecordicon.svg"
          alt="Call Recording"
          style={{ width: "25px", height: "23px" }}
        />
      ),
      title: "Call Recording",
      subtitle: "for compliance and quality checks.",
    },
    {
      icon: (
        <img
          src="/analysicreporticon.svg"
          alt="Analytics & Reporting"
          style={{ width: "24px", height: "22px" }}
        />
      ),
      title: "Analytics & Reporting",
      subtitle: "dashboards",
    },
    {
      icon: (
        <img
          src="/voicetoemailicon.svg"
          alt="Voicemail-to-Email"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Voicemail-to-Email",
      subtitle: "for better accessibility.",
    },
    {
      icon: (
        <img
          src="/callfowardingicon.svg"
          alt="Call Forwarding & Routing"
          style={{ width: "26px", height: "26px" }}
        />
      ),
      title: "Call Forwarding & Routing",
      subtitle: "flexibility.",
    },
    {
      icon: (
        <img
          src="/seamlessscalabilityicon.svg"
          alt="Seamless Scalability"
          style={{ width: "18px", height: "18px" }}
        />
      ),
      title: "Seamless Scalability",
      subtitle: "for growing businesses.",
    },
  ];

  const bulkMessagingFeatures = [
    {
      icon: (
        <img
          src="/bulksmsicon.svg"
          alt="Bulk SMS"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Bulk SMS delivery",
      subtitle: "at scale.",
    },
    {
      icon: (
        <img
          src="/ussdservicesicon.svg"
          alt="USSD Services"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "USSD Services",
      subtitle: "for customer interaction.",
    },
    {
      icon: (
        <img
          src="/a2pmessagingicon.svg"
          alt="A2P Messaging"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "A2P Messaging APIs",
      subtitle: "for integration.",
    },
    {
      icon: (
        <img
          src="/twowaymessagingicon.svg"
          alt="Two-way Messaging"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Two-way Messaging",
      subtitle: "with customers.",
    },
    {
      icon: (
        <img
          src="/realtimedeliveryicon.svg"
          alt="Real-Time Delivery"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Real-Time Delivery Reports",
      subtitle: "with metrics.",
    },
    {
      icon: (
        <img
          src="/customSIDicon.svg"
          alt="Custom Sender IDs"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Custom Sender IDs",
      subtitle: "for brand identity.",
    },
  ];

  const allInOneFeatures = [
    {
      icon: (
        <img
          src="/headphoneicon.svg"
          alt="Unified Support"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Unified Omnichannel Support",
      subtitle: "(voice, chat, email, social).",
    },
    {
      icon: (
        <img
          src="/smartcrmicon.svg"
          alt="Smart CRM"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Smart CRM",
      subtitle: "with customer history and insights.",
    },
    {
      icon: (
        <img
          src="/ticketingautomationicon.svg"
          alt="Ticketing & Automation"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Ticketing & Automation",
      subtitle: "for faster resolutions.",
    },
    {
      icon: (
        <img
          src="/securityicon.svg"
          alt="Security & Compliance"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Security & Compliance",
      subtitle: "built for enterprise standards.",
    },
    {
      icon: (
        <img
          src="/customworkflows.svg"
          alt="Custom Workflows"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Custom workflows",
      subtitle: "to match your business processes.",
    },
    {
      icon: (
        <img
          src="/aianalyticsicon.svg"
          alt="AI Analytics"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "AI-powered Analytics",
      subtitle: "for smarter decision making.",
    },
  ];

  const numbersFeatures = [
    {
      icon: (
        <img
          src="/memorablevanity.svg"
          alt="Vanity Numbers"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Memorable Vanity Numbers (0700)",
      subtitle: "for branding.",
    },
    {
      icon: (
        <img
          src="/tollfreeicon.svg"
          alt="Toll-Free Numbers"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Toll-Free Numbers (0800)",
      subtitle: "for nationwide reach.",
    },
    {
      icon: (
        <img
          src="/enhancedtrusticon.svg"
          alt="Enhanced Trust"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Enhanced Customer Trust",
      subtitle: "with professional presence.",
    },
    {
      icon: (
        <img
          src="/callroutingicon.svg"
          alt="Call Routing"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Call Routing Options",
      subtitle: "for flexibility.",
    },
    {
      icon: (
        <img
          src="/scalableicon.svg"
          alt="Scalable"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Scalable",
      subtitle: "for SMEs & Large Corporates.",
    },
    {
      icon: (
        <img
          src="/customeraccessibilityicon.svg"
          alt="Customer Accessibility"
          style={{ width: "24px", height: "24px" }}
        />
      ),
      title: "Improved Customer Accessibility",
      subtitle: "anywhere in Nigeria.",
    },
  ];

  const getCurrentFeatures = () => {
    switch (activeTab) {
      case "pbx":
        return pbxFeatures;
      case "messaging":
        return bulkMessagingFeatures;
      case "allinone":
        return allInOneFeatures;
      case "numbers":
        return numbersFeatures;
      default:
        return pbxFeatures;
    }
  };

  const getCurrentImage = () => {
    switch (activeTab) {
      case "pbx":
        return "images/phone.png";
      case "messaging":
        return "/bulkmessagingphoneimage.svg";
      case "allinone":
        return "/allinoneimage.svg";
      case "numbers":
        return "/number.png";
      default:
        return "/number.png";
    }
  };

  const getImageSize = () => {
    switch (activeTab) {
      case "pbx":
        return "w-[400px] h-full";
      case "messaging":
        return "w-[400px] h-full";
      case "allinone":
        return "w-[500px] h-full";
      case "numbers":
        return "w-[400px] h-full";
      default:
        return "w-[400px] h-full";
    }
  };

  // Handle manual tab clicks
  const handleTabClick = (tab: string) => {
    // if (isAnimatingRef.current) return;
    
    setActiveTab(tab);
    
    if (sectionRef.current) {
      const tabIndex = tabSequenceRef.current.indexOf(tab);
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate scroll position based on tab index
      const scrollProgress = tabIndex / (tabSequenceRef.current.length - 1);
      const scrollDistance = sectionHeight * tabSequenceRef.current.length;
      const scrollPosition = sectionRef.current.offsetTop + (scrollProgress * scrollDistance);
      
      isAnimatingRef.current = true;
      
      gsap.to(window, {
        duration: 0.8,
        scrollTo: {
          y: scrollPosition,
          autoKill: false
        },
        ease: "power2.inOut",
        onComplete: () => {
          setTimeout(() => {
            isAnimatingRef.current = false;
          }, 300);
        }
      });
    }
  };

  // Scroll animation effect with intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // GSAP Scroll-triggered tab animation
  useEffect(() => {
      if (!sectionRef.current || !isVisible) return;

  const tabs = tabSequenceRef.current;
  const sectionHeight = sectionRef.current.offsetHeight;

  // Kill any existing ScrollTriggers to avoid conflicts
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger === sectionRef.current) {
      trigger.kill();
    }
  });

  // Delay ScrollTrigger initialization to prevent interfering with initial scroll position
  const initTimeout = setTimeout(() => {
    // Ensure we're at the top before initializing ScrollTrigger
    if (window.scrollY === 0) {
      // Create a timeline for smooth tab transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${sectionHeight * tabs.length}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          preventOverlaps: true,
          onEnter: () => {
            isAnimatingRef.current = true;
          },
          onLeave: () => {
            isAnimatingRef.current = false;
          },
          onEnterBack: () => {
            isAnimatingRef.current = true;
          },
          onLeaveBack: () => {
            isAnimatingRef.current = false;
          }
        }
      });

    // Add tab transitions to the timeline with proper spacing
    tabs.forEach((tab, index) => {
      if (index > 0) {
        // Each tab gets equal portion of the scroll distance
        const progress = index / (tabs.length);
        tl.add(() => {
          setActiveTab(tab);
        }, progress);
      }
    });

      // Animate content entrance on scroll
      gsap.fromTo(sectionRef.current.querySelector('[class*="grid"]'),
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          }
        }
      );
    }
  }, 1600); // 1600ms delay - wait for scroll lock to release

    return () => {
      clearTimeout(initTimeout);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="bg-black text-white px-3 py-10 md:py-20 relative overflow-hidden">
      {/* Header Navigation */}
      <div className={`flex max-w-[300px] md:max-w-[44rem] mx-auto md:p-1 rounded-full md:flex-wrap bg-[#0C0C0C]  items-center justify-center md:gap-8 mb-10 md:mb-20 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-8"
        }`}
      >
        <button
          className={`md:px-6 md:py-2 py-1 px-3 rounded-full text-[12px] md:text-sm transition-all duration-300 ${
            activeTab === "pbx"
              ? "bg-[#007DFE] text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleTabClick("pbx")}
        >
          <span className="hidden sm:inline">IntarvAS PBX</span>
          <span className="sm:hidden">PBX</span>
        </button>
        <button className={`md:px-6 md:py-2 py-1 px-3 rounded-full text-[12px] md:text-sm transition-all duration-300 truncate ${
            activeTab === "allinone"
              ? "bg-[#007DFE] text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleTabClick("allinone")}
        >
          <span className="hidden sm:inline">All in one solution</span>
          <span className="sm:hidden">AIO</span>
        </button>
        <button
          className={`md:px-6 md:py-2 py-1 px-3 rounded-full text-[12px] md:text-sm transition-all duration-300 ${
            activeTab === "messaging"
              ? "bg-[#007DFE] text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleTabClick("messaging")}
        >
          Bulk Messaging
        </button>
        <button
          className={`md:px-6 md:py-2 py-1 px-3 rounded-full text-[12px] md:text-sm transition-all duration-300 ${
            activeTab === "numbers"
              ? "bg-[#007DFE] text-white"
              : "text-gray-400 hover:text-white"
          }`}
          onClick={() => handleTabClick("numbers")}
        >
          <span className="hidden sm:inline">0700 & 0800</span>
          <span className="sm:hidden">Numbers</span>
        </button>
      </div>

      {/* Main Content */}
      <div
        ref={contentRef}
        className={`max-w-7xl mx-auto hidden md:grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
          isVisible
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-12"
        }`}
      >
        {/* Left Side - Features List */}
        <div
          className={`bg-[#0C0C0C] rounded-3xl p-8 space-y-8 h-[600px] flex flex-col justify-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform -translate-x-12"
          }`}
        >
          {getCurrentFeatures().map((feature, index) => (
            <div
              key={`${activeTab}-${index}`}
              className="flex relative items-center gap-4 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div
                className={`bg-[#1F2228] z-10 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:bg-[#2A2D35]`}
              >
                {feature.icon}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-0.7xl transition-all duration-300 hover:text-white">
                  <span className="text-blue-500 font-medium transition-all duration-300 hover:text-blue-400">
                    {feature.title}
                  </span>
                  <span className="text-gray-300 ml-2 transition-all duration-300 hover:text-gray-200">
                    {feature.subtitle}
                  </span>
                </h3>
              </div>

              {/* Connector Line */}
              {index < getCurrentFeatures().length - 1 && (
                <div
                  className="absolute top-[-20px] overflow-hidden left-[39px] mt-16 w-0.5 h-16 md:h-10 border-l-2 border-dashed border-blue-500 animate-pulse-slow"
                  style={{ marginLeft: "-16px" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Dynamic Image */}
        <div
          className={`bg-[#0C0C0C] rounded-3xl p-8 flex justify-center items-center h-[600px] transition-all duration-1000 ${
            isVisible
              ? "opacity-100 transform translate-x-0"
              : "opacity-0 transform translate-x-12"
          }`}
        >
          <img
            key={activeTab}
            src={getCurrentImage()}
            alt={`${activeTab} Content`}
            className={`${getImageSize()} object-contain transition-all duration-500 ease-in-out animate-fade-in-right hover:scale-105`}
          />
        </div>
      </div>

      <div>
        {/* Mobile View */}
        <div className="md:hidden mt-10">
          <div
            className={`flex flex-col items-center space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-12"
            }`}
          >
            <img
              key={activeTab}
              src={getCurrentImage()}
              alt={`${activeTab} Content`}
              className={`w-[300px] h-[300px] object-contain transition-all duration-500 ease-in-out animate-fade-in-right hover:scale-105`}
            />

            <CarouselPlugin list={getCurrentFeatures()} />            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;