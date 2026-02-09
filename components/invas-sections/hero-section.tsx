import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function HeroSection() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeroVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
    <section ref={heroRef} className="bg-background pt-32 pb-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isHeroVisible
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-8"
            }`}
          >
            <h1 className="text-4xl font-inter font-semibold tracking-tight md:text-[64px] mb-3">
              inVAS
            </h1>
            <p className="mx-auto font-inter mt-4 max-w-xl text-lg text-muted-foreground">
              Dedicated to revolutionizing the way businesses engage with their audience through the power of WhatsApp marketing.
            </p>
            <div className="mt-8">
              <Link href="https://invas.me" target="_blank">
                <Button size="lg" className="hover:scale-105 transition-transform duration-300">
                  Get Started!
                </Button>
              </Link>
            </div>
          </div>
        </div>
    </section>
    <section ref={imageRef} className="container mx-auto px-4 py-12 mb-20">
        <div
          className={`max-full transition-all duration-1000 ${
            isImageVisible
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-8"
          }`}
        >
          <img src={"/about-thrive/invas-about-us.jpg"} alt="" className="w-full max-w-7xl mx-auto rounded-[32px] hover:scale-105 hover:rotate-1 shadow-2xl transition-transform duration-500" />
        </div>
      </section>
    </>
  );
}
