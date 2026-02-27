import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  imageAlt?: string;
}

const Hero2 = ({
  title = "Smart Telecom Solutions for Modern Businesses",
  subtitle =
    "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.",
  primaryButtonText = "Explore Product",
  secondaryButtonText = "Request a Demo",
  onPrimaryClick,
  onSecondaryClick,
  imageAlt = "Telecom analytics dashboard",
}: HeroSectionProps) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from([titleRef.current, subtitleRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(imageRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#001933]/20 min-h-screen flex flex-col"
    >
      {/* Background image at 20% opacity — doesn't affect content */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url("/revamp/pattern-1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 pb-12 md:pt-32 md:pb-16">
        <h1 ref={titleRef}
          className="text-black max-w-3xl text-[35px] sm:text-[42px] md:text-[50px] xl:text-[58px] font-black leading-[1.15] tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif", }}
        >
          {title}
        </h1>

        <p ref={subtitleRef} className="mt-5 max-w-xl text-[16px] md:text-[18px] text-black leading-normal tracking-wide" >
          {subtitle}
        </p>

        <div ref={buttonsRef} className="mt-8 flex flex-col sm:flex-row gap-3 items-center justify-center">
          {/* Primary */}
          <Button onClick={onPrimaryClick} variant="hero" size="lg" 
            className="rounded-full transition-all duration-300 ease-in-out hover:scale-105 shadow-md hover:bg-[#007DFE]/10 hover:text-[#001933] border-[#007DFE]"
          >
            <Link href="/about#services-showcase">{primaryButtonText}</Link>
          </Button>

          {/* Secondary */}
          <Button onClick={onSecondaryClick} variant="outline" size="lg" 
            className="rounded-full bg-transparent border border-black transition-all duration-300 ease-in-out hover:scale-105 shadow-md"
          >
            <Link href="/contact">{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>

      {/* Dashboard */}
      <div ref={imageRef} className="relative z-10 flex justify-center px-4 pb-16 mt-auto">
        <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-[#D0D1E8]" style={{ background: "rgba(255,255,255,0.98)" }}>
          <img src={"/hero-animate/dashboard.png"} alt={imageAlt} className="rounded-3xl w-full object-cover object-top" loading="eager" />
        </div>
      </div>

    </section>
  );
};

export default Hero2;