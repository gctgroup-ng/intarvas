"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "../ui/button";
import PBXCarousel from '../PBXCarousel'

const IMAGES = [
  { title: 'PBX 1', id: 1, image: "/pbx/pbx-1.svg" },
  { title: 'PBX 2', id: 2, image: "/pbx/pbx-2.svg" },
  { title: 'PBX 3', id: 3, image: "/pbx/pbx-3.svg" },
  { title: 'PBX 4', id: 4, image: "/pbx/pbx-4.svg" }
];

const ANIMATION_DELAYS = { image: 200, content: 400, buttons: 600 };

export default function PbxFooter() {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShowImage(true), ANIMATION_DELAYS.image);
        setTimeout(() => setShowContent(true), ANIMATION_DELAYS.content);
      setTimeout(() => setShowButtons(true), ANIMATION_DELAYS.buttons);
      entry.target.classList.add('observed');
    }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    if (sectionRef.current && !sectionRef.current.classList.contains('observed')) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <section ref={sectionRef} className="max-h-screen py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:p-20 lg:p-36 relative overflow-hidden flex items-center" >
    {/* md:h-[80vh] */}
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 md:top-20 left-10 md:left-20 w-40 md:w-64 h-40 md:h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 md:bottom-20 right-10 md:right-20 w-40 md:w-80 h-40 md:h-80 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="w-full container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

          {/* Image Section */}
          <div className={`hidden md:flex my-64 justify-center transition-all duration-1000  ${showImage ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative w-full max-w-[550px] justify-center">
              <div className="bg-[#F6F6F6] max-w-[550px] md:block hidden min-h-[430px] rounded-[30px] aspect-video shadow-lg hover:shadow-xl transition-shadow duration-300 mt-32"></div>
              {/* <div className="bg-[#F6F6F6] block 2xl:hidden min-h-[430px] rounded-[30px] aspect-video shadow-lg hover:shadow-xl transition-shadow duration-300 mt-32"></div> */}
              <div className="absolute inset-0 flex items-center justify-center -bottom-1 left-1/2 -translate-x-1/2">
                <div className="hover:scale-105 transition-transform duration-500">
                  <PBXCarousel items={IMAGES} baseWidth={300} autoplay={true} autoplayDelay={5000} pauseOnHover={true} loop={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 ${ showContent ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h2 className="text-5xl md:text-3xl lg:text-5xl font-bold font-inter leading-tight mb-4 hover:text-gray-800 transition-colors duration-300">
              Your PBX, <br/> everywhere you work
            </h2>
            <p className="text-md md:text-lg text-gray-600 hover:text-gray-700 transition-colors duration-300 mb-8">
              Access guides and APIs to set up, manage, and scale your virtual PBX across any device
            </p>

            <div className={`flex flex-col sm:flex-row gap-3 transition-all duration-1000 
              ${showButtons  ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} >
              <Button variant="hero" className="hover:scale-105 transition-transform duration-300 hover:shadow-lg" asChild>
                <a href="https://wiki.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">
                  User Guides
                </a>
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-transform duration-300 hover:shadow-lg" asChild>
                <a href="https://api.ccaas.intarvas.com" target="_blank" rel="noopener noreferrer">
                  API Docs
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}