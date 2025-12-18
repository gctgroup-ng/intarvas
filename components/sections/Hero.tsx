// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { useLoading } from "../context/loading-context";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//     const { isLoading, setIsLoading } = useLoading()
//     const containerRef = useRef(null);
//     const imageContainerRef = useRef(null);
//     const phoneRef = useRef(null);
//     const dashboardRef = useRef(null);
//     const pbxRef = useRef(null);
//     const statsRef = useRef(null);
//     const layerRef = useRef(null);
//     const heroContentRef = useRef(null);

//     const title = "Smart Telecom Solutions for Modern Businesses";
//     const subtitle = "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.";
//     const primaryButtonText = "Request Demo";
//     const secondaryButtonText = "Explore Services";
    
//     useEffect(() => {
//         setIsLoading(true);

//         return () => {
//             setIsLoading(false);
//         };
//     }, [setIsLoading]);

//     // useEffect(() => {
//     //     if (isLoading) return

//     //     const container = containerRef.current;
//     //     const imageContainer = imageContainerRef.current;
        
//     //     if (!container || !imageContainer) return;

//     //     const tl = gsap.timeline({
//     //         scrollTrigger: {
//     //             trigger: container,
//     //             start: "top top",
//     //             end: "bottom center",
//     //             scrub: 1,
//     //             pin: true,
//     //             pinSpacing: true,
//     //         },
//     //     });

//     //     // Fade out and move up the text content
//     //     tl.to(
//     //         container.querySelector(".hero-content"),
//     //         {
//     //             y: -50,
//     //             opacity: 0,
//     //             duration: 1,
//     //         }, 0
//     // );

//     //     // Scale and position images to cover viewport
//     //     tl.to(
//     //         imageContainer,
//     //         {
//     //             width: "50vw",
//     //             scale: 2.5,
//     //             duration: 1,
//     //         }, 0
//     //     );

//     //     tl.to(
//     //         imageContainerRef.current,
//     //         {
//     //             // backgroundColor: "#FFFFFF0D",
//     //             duration: 0.8,
//     //         },
//     //         0.2
//     //     );

//     //     // Individual image animations
//     //     tl.to(
//     //         phoneRef.current,
//     //         {
//     //             y: 190,
//     //             x: -700, // Move to far left
//     //             duration: 0.8,
//     //         },
//     //         0.2
//     //     );

//     //     tl.to(
//     //         dashboardRef.current,
//     //         {
//     //             scale: 1.1,
//     //             width: '955px',
//     //             x: -100, // Move to center
//     //             y: -90,
//     //             duration: 0.8,
//     //         },
//     //         0.2
//     //     );

//     //     // Hide other elements (pbxRef, layerRef, statsRef)
//     //     tl.to(
//     //         [pbxRef.current, layerRef.current, statsRef.current],
//     //         {
//     //             opacity: 0,
//     //             duration: 0.5,
//     //         },
//     //         0.2
//     //     );

//     //     return () => {
//     //         tl.kill();
//     //         ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     //     };
//     // }, []);
    
//     return (
//         <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden flex items-end">
//             {/* Background Pattern */}
//             <div className="absolute inset-0">
//                 <div className="absolute inset-0" style={{ backgroundImage: "url(/images/herosectionbg.svg)", backgroundSize: "cover", backgroundPosition: "center"}}/>
//             </div>
//                 {/* relative z-10 h-screen  */}
//             <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
//             {/* <div className="relative z-10 h-screen flex items-end justify-end"> */}
//                 {/* Content Left Side */}
//                 {/* <div ref={heroContentRef} className="hero-content w-full lg:w-1/2 px-6 md:px-10 lg:px-16 flex flex-col justify-center space-y-6 ml-32">
//                     <h1 className="animate-fade-in-up font-inter font-extrabold text-[64px] text-white leading-[1.3] tracking-[0.3px] align-middle max-w-[90vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
//                         {title}
//                     </h1>

//                     <p className="animate-fade-in-up delay-300 font-inter text-[#C2C6CE] font-[400] text-[18px] md:leading-2 leading-8 tracking-[0.2px] align-left sm:w-4/6 w-full">
//                         {subtitle}
//                     </p>

//                     <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 pt-4">
//                         <Link href="/about#services-showcase">
//                             <Button variant="outline" size="lg"
//                                 className="bg-white text-[#001933] border-white hover:bg-gray-100 font-semibold px-8" >
//                                 {secondaryButtonText}
//                             </Button>
//                         </Link>
//                         <Link href="/contact">
//                             <Button variant="default" size="lg"
//                                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8" >
//                                 {primaryButtonText}
//                             </Button>
//                         </Link>
//                     </div>
//                 </div> */}
//                 {/* Content */}
//                 {/* <div className="flex flex-col lg:pt-10 pt-24 md:pt-24 lg:pt-36 2xl:pt-56 pb-58 md:pb-56 lg:pb-64 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px] pb-8"> */}
//                 <div className="flex flex-col pt-10 md:pt-24 lg:pt-36 2xl:pt-56 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]">
//                     <h1 className="animate-fade-in-up font-inter font-extrabold text-white leading-10 tracking-wide align-middle text-4xl md:text-5xl lg:text-6xl align-middle max-w-[100vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
//                         {title}
//                     </h1>
//                     <h1 className="animate-fade-in-up delay-300 font-inter text-[#C2C6CE] font-[400] text-sm sm:text-base md:text-lg lg:text-xl leading-8 sm:leading-5 md:leading-2 tracking-[0.2px] align-left sm:w-11/12 w-full">
//                         {subtitle}
//                     </h1>
//                     <div className="animate-fade-in-up delay-500 flex sm:flex-row gap-3 pt-3 sm:pt-6">
//                         <Link href="/about#services-showcase">
//                             <Button variant="outline" size="default" className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6">
//                                 {secondaryButtonText}
//                             </Button>
//                         </Link>
//                         <Link href="/contact">
//                             <Button variant="hero" size="default" className="w-full sm:w-auto sm:px-6">
//                                 {primaryButtonText}
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="px-0 flex justify-end items-end " >
//                     <div className="animate-fade-in-up delay-700 flex">
//                         <img src={"/hero-animate/all123.png"} alt={"placeholder"} className="object-cover w-full 2xl:w-[70vw] " loading="eager"/>
//                     </div>
//                 </div>

//                 {/* Images Right Side */}
//                 {/* <div ref={imageContainerRef} className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none" style={{ transformStyle: "preserve-3d",  }}> */}

//                 {/* Background Blue Layer */}
//                     {/* <div ref={layerRef} className="absolute w-[420px] h-[420px] z-0" style={{
//                             right: "5%",
//                             top: "30%",
//                             transform: "translateY(10%) translateX(-5%)",
//                         }}
//                     >
//                         <img src="/hero-animate/layer.png" alt="Layer" className="w-[1133px] h-[749px] object-contain"/>
//                     </div> */}

//                 {/* Mobile Phone (right-most) */}
//                     {/* <div ref={phoneRef} className="absolute z-20"
//                         style={{
//                             right: "-3%",
//                             top: "38%",
//                             transform: "translateY(10%) translateX(15%)",
//                         }}
//                     >
//                         <img src="/hero-animate/phone.png" className="w-[255.8px] h-[514.3px] object-contain drop-shadow-2xl" alt="Mobile UI"
//                         />
//                     </div> */}

//                 {/* PBX Phones Group (middle-right) */}
//                     {/* <div ref={pbxRef} className="absolute z-10 flex flex-col space-y-4" style={{
//                             right: "2%",
//                             top: "45%",
//                             transform: "translateY(30%) translateX(-40%)",
//                         }}
//                     >
//                         <img src="/hero-animate/desktop-phone.png" className="w-[337px] object-contain drop-shadow-2xl" alt="PBX Phone"/>
//                     </div> */}

//                 {/* Dashboard Screen (bottom-right) */}
//                     {/* <div ref={dashboardRef} className="absolute z-[25]"
//                         style={{
//                             top: "558px",
//                             left: "321px",
//                             right: "-5%",
//                             bottom: "12%",
//                             transform: "translateY(1%) translateX(10%)",
//                         }}
//                     >
//                         <img src="/hero-animate/desk-dashboard.png" className="w-[1574px] h-[593px] object-contain drop-shadow-2xl rounded-4xl" alt="Statistics Dashboard"/>
//                     </div> */}

//                 {/* Circular Stats (bottom-left) */}
//                     {/* <div ref={statsRef} className="absolute z-10"
//                         style={{
//                             top: "686.76px",
//                             left: "-11%",
//                             bottom: "15%",
//                             transform: "translateY(90%) translateX(90%)",
//                         }}
//                     >
//                         <img src="/hero-animate/analytics.png" className="w-[289px] h-[310px] object-contain drop-shadow-2xl" alt="Analytics" />
//                     </div> */}

//                 {/* </div> */}
//             </div>

//             {/* Spacer for scroll */}
//             {/* <div className="h-screen" /> */}
//         </section>
//     );
// };

// export default Hero;


import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLoading } from "../context/loading-context";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { isLoading, setIsLoading } = useLoading();
  const containerRef = useRef<HTMLElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const pbxRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const heroContentRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  const title = "Smart Telecom Solutions for Modern Businesses";
  const subtitle =
    "Special Numbers, Call Centres, Bulk Messaging & Digital Solutions all tailored for modern Nigerian brands.";
  const primaryButtonText = "Request Demo";
  const secondaryButtonText = "Explore Services";

  useEffect(() => {
    setIsLoading(true);

    return () => {
      setIsLoading(false);
    };
  }, [setIsLoading]);

  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const phoneElement = phoneRef.current;
      const viewportWidth = window.innerWidth;
      const phoneWidth = phoneElement?.offsetWidth || 200;
      const moveDistance = -(viewportWidth - phoneWidth - viewportWidth * 0.08);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate background color: dark (#001932) -> blue (#3B6DA2) -> white
      tl.to(
        containerRef.current,
        {
          backgroundColor: "#3B6DA2",
          duration: 0.4,
          ease: "none",
        },
        0
      );

      tl.to(
        containerRef.current,
        {
          backgroundColor: "#ffffff",
          duration: 0.4,
          ease: "none",
        },
        0.5
      );

      // Fade out the dark background pattern
      tl.to(bgRef.current, { opacity: 0, duration: 0.3, ease: "none" }, 0);

      // Fade out text content
      tl.to(
        heroContentRef.current,
        { opacity: 0, x: -100, duration: 0.3, ease: "none" },
        0
      );

      // Animate PBX - move behind dashboard (to the right and down)
      tl.to(
        pbxRef.current,
        {
          x: 200,
          y: 100,
          scale: 0,
          zIndex: 5,
          duration: 0.5,
          ease: "none",
        },
        0
      );

      // Animate Analytics - move behind dashboard (to the right and up)
      tl.to(
        statsRef.current,
        {
          x: 300,
          y: -50,
          scale: 0,
          zIndex: 5,
          duration: 0.5,
          ease: "none",
        },
        0
      );

      // Fade out background layer
      tl.to(layerRef.current, { opacity: 0, duration: 0.3, ease: "none" }, 0);

      // Animate dashboard - expand to almost full screen
      tl.to(
        dashboardRef.current,
        {
          scale: 1.0,
          bottom: "10%",
          right: "0%",
          duration: 1,
          ease: "none",
        },
        0
      );

      tl.to(
        dashboardRef.current?.querySelector("img"),
        {
          width: "77vw",
          duration: 1,
          ease: "none",
        },
        0
      );

      // Animate phone - use x translation
      tl.to(
        phoneRef.current,
        {
          x: moveDistance,
          top: "56%",
          yPercent: -55,
          scale: 1.9,
          zIndex: 50,
          duration: 1,
          ease: "none",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden flex items-end"
      style={{ backgroundColor: "#001932" }}
    >
      {/* Background Pattern */}
      <div ref={bgRef} className="hidden md:inline-block absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/herosectionbg.svg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Mobile Phone - OUTSIDE the image container so it can animate across full screen */}
      <div
        ref={phoneRef}
        className="hidden md:inline-block absolute z-20 pointer-events-none"
        style={{
          scale: 1.6,
          right: "3%",
          top: "30%",
        }}
      >
        <img
          src="/hero-animate/phone.png"
          alt="Mobile UI"
          className="w-[200px] h-auto object-contain drop-shadow-2xl"
        />
      </div>

      {/* Dashboard Screen - OUTSIDE the image container so it can animate to full screen */}
      <div
        ref={dashboardRef}
        className="hidden md:inline-block absolute z-[25] pointer-events-none"
        style={{
          scale: 2.5,
          bottom: "-280px",
          right: "-700px",
          // transform: "translateY(70%)",
        }}
      >
        <img
          src="/hero-animate/desk-dashboard.png"
          alt="Statistics dashboard"
          className="w-[700px] h-auto drop-shadow-2xl"
        />
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-6 lg:gap-0 min-h-screen pt-12 md:py-0 xl:pt-16">
        {/* Left content */}
        <div
          ref={heroContentRef}
          className="flex flex-col pt-10 md:pt-24 lg:pt-36 2xl:pt-56 justify-start space-y-4 px-4 md:px-0 md:pl-[40px] 2xl:pl-[170px]"
        >
          <h1 className="animate-fade-in-up font-inter font-extrabold text-white leading-10 tracking-wide align-middle text-4xl md:text-5xl lg:text-6xl max-w-[100vw] sm:max-w-[600px] md:max-w-[600px] lg:max-w-[600px] xl:max-w-[628px]">
            {title}
          </h1>
          <h2
            className="animate-fade-in-up delay-300 font-inter text-[#C2C6CE] font-[400] text-sm sm:text-base md:text-lg lg:text-xl 
              leading-8 sm:leading-5 md:leading-2 tracking-[0.2px] 
              w-8/12 sm:w-6/12"
            >
            {subtitle}
          </h2>

          <div className="animate-fade-in-up delay-500 flex sm:flex-row gap-3 pt-3 sm:pt-6">
            <Link href="/about#services-showcase">
              <Button
                variant="outline"
                size="default"
                className="bg-white text-[#001933] border-[#001933] hover:bg-gray-50 w-full sm:w-auto sm:px-6"
              >
                {secondaryButtonText}
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="hero"
                size="default"
                className="w-full sm:w-auto sm:px-6"
              >
                {primaryButtonText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right-side visuals - only PBX, layer, and analytics stay here */}
        <div className="md:hidden inline-block px-0 flex justify-end items-end " >
            <div className="animate-fade-in-up delay-700 flex">
                <img src={"/hero-animate/all123.png"} alt={"placeholder"} className="object-cover w-full 2xl:w-[70vw] " loading="eager"/>
            </div>
        </div>
        <div
          ref={imageContainerRef}
          className="hidden md:inline-block absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-1/2 h-full flex items-center justify-center pointer-events-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Background Blue Layer */}
          <div
            ref={layerRef}
            className="absolute w-[420px] h-[420px] z-0"
            style={{
              scale: 2.0,
              right: "2%",
              top: "12%",
              transform: "translateY(10%) translateX(-5%)",
            }}
          >
            <img
              src="/hero-animate/layer.png"
              alt="Background layer"
              className="w-[1133px] h-[749px] object-contain"
            />
          </div>

          {/* PBX Phones Group */}
          <div
            ref={pbxRef}
            className="absolute z-10 flex flex-col space-y-4"
            style={{
              scale: 1.1,
              right: "34%",
              top: "34%",
              transform: "translateY(30%)",
            }}
          >
            <img
              src="/hero-animate/desktop-phone.png"
              alt="PBX phone"
              className=" object-contain drop-shadow-2xl"
            />
          </div>

          {/* Circular Analytics Widget */}
          <div
            ref={statsRef}
            className="absolute z-10"
            style={{
              scale: 1.3,
              top: "780px",
              left: "-30%",
              transform: "translateX(110%)",
            }}
          >
            <img
              src="/hero-animate/analytics.png"
              alt="Analytics"
              className="w-[289px] h-[310px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;