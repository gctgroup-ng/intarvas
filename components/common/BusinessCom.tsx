"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import Noise from '../Noise';

interface BusinessComProps {
  dashboardImage?: string;
  backgroundFrame?: string;
}

export default function BusinessCom({
  dashboardImage = "/images/CommDashboard.png",
  backgroundFrame,
}: BusinessComProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
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
    <div ref={sectionRef} className="bg-[#0064CB] relative overflow-hidden">
      <Noise patternSize={250} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={15} />
      <div>
        {/* Background */}
        <img className="absolute inset-0 w-full h-full object-cover" src="/images/BG.svg" alt="Business Communication"/>

        {/* Content */}
        {/* Text */}
        <div className={`flex flex-col items-center text-center py-16 px-4 relative z-10 max-w-7xl mx-auto transition-all duration-1000 
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12"}`}>

          <h2 className={`font-inter text-[24px] md:text-[48px] text-white font-[700] max-w-md md:max-w-2xl mx-auto leading-[1.2] text-center pt-17 transition-all duration-700 
            ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}>
              Ready to Transform Your Business Communication?
          </h2>
          <p className={`mt-4 text-white max-w-md text-center transition-all duration-700 delay-200 
            ${ isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}>
              Take the next step toward smarter, more reliable customer interactions.
          </p>

          <div className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 delay-400 ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"}`}>
            <Button variant="outline" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="/about#services-showcase-section">
                Explore Services
              </a>
            </Button>
            <Button variant="hero" asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="/contact" target="_blank" rel="noopener noreferrer">
                Request Demo
              </a>
            </Button>
          </div>
          <Noise patternSize={1} patternScaleX={1} patternScaleY={1} patternRefreshInterval={1} patternAlpha={9} />
        </div>
        {/* Image */}
        <div className={`max-w-7xl mx-auto px-4 transition-all duration-1000 delay-600 relative 
          ${isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12" }`}
        > 
          {backgroundFrame && (
            <img src={backgroundFrame} alt="Background Frame"
              className="absolute left-5 md:left-12 -top-2 md:-top-3 w-full h-full object-contain object-left opacity-40 -z-10 scale-110" 
            />
          )}
          <img src={dashboardImage} alt="Business Communication Illustration"
            className="w-full h-auto transition-all duration-500 hover:scale-105 hover:brightness-110 relative z-10"
          />
        </div>
      </div>
    </div>
  );
};