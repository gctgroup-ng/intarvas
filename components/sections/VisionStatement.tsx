"use client";

import React, { useEffect, useState } from "react";

const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Stagger the vision and mission animations
            setTimeout(() => setIsVisionVisible(true), 300);
            setTimeout(() => setIsMissionVisible(true), 600);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("vision-mission-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  return (
    <section id="vision-mission-section" className="bg-[#F9F9FA] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left - Text Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ${
            isVisionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform -translate-x-8 lg:-translate-x-20"
          }`}>
            <div className="mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#C6E2FF] bg-[#E5F2FF] text-[#007DFE] rounded-full text-xs sm:text-sm font-medium">
                Our Vision
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug lg:leading-tight">
              <span className="text-[#858D9D]">Our vision</span> is to make
              business communication seamless, scalable, and reliable across Nigeria
            </h2>
            <p className="text-[#667085] text-sm sm:text-base lg:text-[18px] leading-relaxed font-[300]">
              Intarvas envisions a future of innovative communication, striving
              for distinction and personalized connections. Rooted in wisdom,
              our commitment transforms challenges into opportunities, aiming to
              be a beacon of connectivity and a catalyst for a connected
              tomorrow.
            </p>
          </div>

          {/* Right - Image */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 ${
            isVisionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform translate-x-8 lg:translate-x-20"
          }`}>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-blue-200 to-[#E5F2FF] rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-50"></div>
              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
                <img
                  src="/vision-intarvas.png"
                  alt="Vision - Professional woman"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className={`transition-all duration-1000 ${
            isMissionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform -translate-x-8 lg:-translate-x-20"
          }`}>
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-br from-blue-200 to-[#E5F2FF] rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-50"></div>
              <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl">
                <img
                  src="/mission-intarvas.png"
                  alt="Mission - Team meeting"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className={`transition-all duration-1000 ${
            isMissionVisible 
              ? "opacity-100 transform translate-x-0" 
              : "opacity-0 transform translate-x-8 lg:translate-x-20"
          }`}>
            <div className="mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 border border-[#C6E2FF] bg-[#E5F2FF] text-[#007DFE] rounded-full text-xs sm:text-sm font-medium">
                Our Mission
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold mb-4 sm:mb-6 leading-tight sm:leading-snug lg:leading-tight">
              <span className="text-[#858D9D]">Our mission</span> is to connect businesses and customers with reliable, scalable telecom solutions.
            </h2>
            <p className="text-[#667085] text-sm sm:text-base lg:text-[18px] leading-relaxed font-[300]">
              As a premier provider of telecom and digital solutions, IntarVAS
              has spent years empowering businesses with exceptional
              telecommunications expertise. We're dedicated to delivering
              cutting-edge services that help companies thrive in the digital
              world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
