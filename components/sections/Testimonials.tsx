"use client";

import { useState, useEffect, useRef } from "react";
import { RiStarFill } from "react-icons/ri";


const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");
  const sectionRef = useRef(null);

  // Store animation states to maintain position
  const animationStates = useRef({
    mobileRow1: { translateX: 0 },
    mobileRow2: { translateX: 0 },
    tabletCol1: { translateY: 0 },
    tabletCol2: { translateY: 0 },
    desktopCol1: { translateY: 0 },
    desktopCol2: { translateY: 0 },
    desktopCol3: { translateY: 0 },
  });

  const animationRefs = useRef({
    mobileRow1: null,
    mobileRow2: null,
    tabletCol1: null,
    tabletCol2: null,
    desktopCol1: null,
    desktopCol2: null,
    desktopCol3: null,
  });

  // Determine screen size
  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth < 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Animation control
  useEffect(() => {
    if (!isVisible) return;

    const animateElement = (element, direction, speed, stateKey) => {
      if (!element) return;

      let animationId = null;
      let lastTimestamp = null;
      let isAnimating = true;

      const animate = (timestamp) => {
        if (!isAnimating || !element) return;

        if (lastTimestamp === null) {
          lastTimestamp = timestamp;
        }

        if (isPaused) {
          lastTimestamp = timestamp;
          animationId = requestAnimationFrame(animate);
          return;
        }

        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        const itemWidth = 320; // w-80 = 320px
        const gap = 16; // gap-4 = 16px
        const totalItemWidth = itemWidth + gap;
        const totalWidth = testimonials.length * totalItemWidth;

        if (direction === "left") {
          animationStates.current[stateKey].translateX -= (delta * speed);

          // Reset position when we've scrolled the full width
          if (Math.abs(animationStates.current[stateKey].translateX) >= totalWidth) {
            animationStates.current[stateKey].translateX += totalWidth;
          }
          element.style.transform = `translateX(${animationStates.current[stateKey].translateX}px)`;
        } else if (direction === "right") {
          animationStates.current[stateKey].translateX += (delta * speed);

          // Reset position when we've scrolled the full width in the negative direction
          if (animationStates.current[stateKey].translateX >= -totalWidth) {
            animationStates.current[stateKey].translateX -= totalWidth;
          }
          element.style.transform = `translateX(${animationStates.current[stateKey].translateX}px)`;
        } else if (direction === "up") {
          animationStates.current[stateKey].translateY -= (delta * speed);
          const maxTranslate = element.scrollHeight / 2;
          if (Math.abs(animationStates.current[stateKey].translateY) >= maxTranslate) {
            animationStates.current[stateKey].translateY += maxTranslate;
          }
          element.style.transform = `translateY(${animationStates.current[stateKey].translateY}px)`;
        } else if (direction === "down") {
          animationStates.current[stateKey].translateY += (delta * speed);
          const maxTranslate = element.scrollHeight / 2;
          if (animationStates.current[stateKey].translateY >= 0) {
            animationStates.current[stateKey].translateY = -maxTranslate;
          }
          element.style.transform = `translateY(${animationStates.current[stateKey].translateY}px)`;
        }

        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
        isAnimating = false;
        if (animationId) {
          cancelAnimationFrame(animationId);
        }
      };
    };

    const cleanupFunctions = [];

    if (screenSize === "mobile") {
      // Reset positions when switching to mobile
      animationStates.current.mobileRow1.translateX = 0;
      animationStates.current.mobileRow2.translateX = 0;

      cleanupFunctions.push(
        animateElement(animationRefs.current.mobileRow1, "left", 0.06, "mobileRow1")
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.mobileRow2, "right", 0.06, "mobileRow2")
      );
    } else if (screenSize === "tablet") {
      cleanupFunctions.push(
        animateElement(animationRefs.current.tabletCol1, "up", 0.04, "tabletCol1")
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.tabletCol2, "down", 0.04, "tabletCol2")
      );
    } else {
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol1, "up", 0.04, "desktopCol1")
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol2, "down", 0.04, "desktopCol2")
      );
      cleanupFunctions.push(
        animateElement(animationRefs.current.desktopCol3, "up", 0.04, "desktopCol3")
      );
    }

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup?.());
    };
  }, [isVisible, isPaused, screenSize]);

  // Scroll animation effect
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

  const testimonials = [
    {
      text: "My experience with your platform has been great so far. The interface is user-friendly, responses are fast, and the customer support team is helpful and professional. I appreciate the efficiency and look forward to seeing more improvements and new features",
      name: "Adesoji Emmanuel",
      company: "XRNET Technologies LTD",
      avatar: "/image/clients/xrnet-logo.svg",
      rating: 4
    },
    {
      text: "I'll give them 5 stars, their service has been great, and the support from the Intarvas team has been outsatnding so far",
      name: "Olakunle Opajobi",
      company: "Winners Golden Chance Group",
      avatar: "/image/clients/WGC.svg",
      rating: 5
    },
    {
      text: "My experience using the IntarvAS PBX has been smooth so far.",
      name: "Kpejoh Tamara",
      company: "XRNET Technologies LTD",
      avatar: "/image/clients/xrnet-logo.svg",
      rating: 4
    },
    {
      text: "Intarvas has been an incredible partner for us. Their PBX and SMS solutions were exactly what we needed, and they ensured our onboarding process was smooth and hassle-free. The team has been consistently responsive and supportive every step of the way.",
      name: "Emmanuel Ezeani",
      company: "Ruut CSM",
      avatar: "/image/clients/ruut_csm-.png",
      rating: 5
    },
    {
      text: "It's swift and friendly.",
      name: "Marian Omon Adebayo-Adeola",
      company: "Aero Contractors",
      avatar: "/image/clients/aero-logo.svg",
      rating: 4
    },
    {
      text: "The onboarding was great, and the team has been very helpful to us with using and trying to work around the app.",
      name: "Temitayo Akure",
      company: "Suntrust Bank",
      avatar: "/image/clients/SUNTRUST-LOGO.png",
      rating: 4
    }
  ];

  const Card = ({ testimonial }) => {
    return (
      <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl w-80 sm:w-80 lg:w-full p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex-shrink-0">
        <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed line-clamp-3 sm:line-clamp-none">
          {testimonial.text}
        </p>
        <div className="flex flex-row mb-4 sm:mb-6 lg:mb-8 mt-4">
          {Array.from({ length: testimonial.rating }, (_, index) => (
            <RiStarFill key={index} className="text-amber-400" />
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={testimonial.avatar}
            alt={'image'}
            className="size-7 sm:size-9 lg:size-11 object-contain"
          />
          <div className="min-w-0">
            <h4 className="font-semibold text-xs sm:text-sm lg:text-base text-gray-900 truncate">
              {testimonial.name}
            </h4>
            <p className="text-xs sm:text-xs lg:text-sm text-gray-500 truncate">
              {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="bg-gray-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full sm:max-w-2xl lg:max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 border border-[#C6E2FF] bg-[#E5F2FF] text-[#0A0F8F] rounded-full text-xs sm:text-sm font-medium">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 my-3 sm:my-4">
            What our clients say
          </h2>
          <p className="text-xs sm:text-sm lg:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            From government agencies to growing enterprises, our clients trust IntarvAS.
          </p>
        </div>

        {/* MOBILE — 2 Horizontal Scrolling Rows (< 640px) */}
        {screenSize === "mobile" && (
          <div
            className="space-y-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {[0, 1].map((i) => (
              <div
                key={i}
                ref={(el) => {
                  if (i === 0) animationRefs.current.mobileRow1 = el;
                  if (i === 1) animationRefs.current.mobileRow2 = el;
                }}
                className="flex gap-4"
              >
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
                  <Card testimonial={t} key={idx} />
                ))}
              </div>
            ))}
          </div>
        )}

        {/* TABLET — 2 Vertical Auto-Scrolling Columns (640px - 1023px) */}
        {screenSize === "tablet" && (
          <div
            className="grid grid-cols-2 gap-4 h-96 sm:h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[0, 1].map((col) => (
              <div key={col} className="overflow-hidden">
                <div
                  ref={(el) => {
                    if (col === 0) animationRefs.current.tabletCol1 = el;
                    if (col === 1) animationRefs.current.tabletCol2 = el;
                  }}
                  className="space-y-3 sm:space-y-4"
                >
                  {[...testimonials, ...testimonials].map((t, idx) => (
                    <Card testimonial={t} key={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DESKTOP — 3 Vertical Auto-Scrolling Columns (≥ 1024px) */}
        {screenSize === "desktop" && (
          <div
            className="grid grid-cols-3 gap-8 h-[500px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[0, 1, 2].map((col) => (
              <div key={col} className="overflow-hidden">
                <div
                  ref={(el) => {
                    if (col === 0) animationRefs.current.desktopCol1 = el;
                    if (col === 1) animationRefs.current.desktopCol2 = el;
                    if (col === 2) animationRefs.current.desktopCol3 = el;
                  }}
                  className="space-y-4"
                >
                  {[...testimonials, ...testimonials].map((t, idx) => (
                    <Card testimonial={t} key={idx} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default TestimonialsSection;