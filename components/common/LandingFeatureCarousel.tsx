import { useState, useRef, useEffect } from 'react';
import { CarouselPlugin } from "./carousel";

const FeatureCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const [activeTab, setActiveTab] = useState("pbx");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const tabSequenceRef = useRef<string[]>(["pbx", "allinone", "messaging", "numbers"]);
    
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
            return "/sms-bulk.png";
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
        setActiveTab(tab);
        setCurrentSlide(tabSequenceRef.current.indexOf(tab));
    };

    // Slide data structure
    const slides = tabSequenceRef.current.map((tab, index) => ({
        id: index,
        tab: tab,
        features: (() => {
            switch (tab) {
                case "pbx": return pbxFeatures;
                case "messaging": return bulkMessagingFeatures;
                case "allinone": return allInOneFeatures;
                case "numbers": return numbersFeatures;
                default: return pbxFeatures;
            }
        })(),
        image: (() => {
            switch (tab) {
                case "pbx": return "images/phone.png";
                case "messaging": return "/sms-bulk.png";
                case "allinone": return "/allinoneimage.svg";
                case "numbers": return "/number.png";
                default: return "/number.png";
            }
        })(),
        title: tab
    }));

    // Minimum swipe distance
    const minSwipeDistance = 50;

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 }
        );

        if (contentRef.current) {
        observer.observe(contentRef.current);
        }

        return () => {
        if (contentRef.current) {
            observer.unobserve(contentRef.current);
        }
        };
    }, []);

    // Sync activeTab when slide changes
    useEffect(() => {
        const newTab = slides[currentSlide]?.tab;
        if (newTab && newTab !== activeTab) {
            setActiveTab(newTab);
        }
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Touch event handlers for mobile swipe
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        
        if (isLeftSwipe) {
        nextSlide();
        }
        
        if (isRightSwipe) {
        prevSlide();
        }
    };

// ${
//     isVisible
//     ? "opacity-100 transform translate-y-0"
//     : "opacity-0 transform translate-y-8"
// }

    return (
        <div ref={sectionRef} className="bg-black text-white px-3 py-10 md:py-20 relative overflow-hidden">
            {/* Header Navigation */}
            <div className={`flex max-w-[300px] md:max-w-[44rem] mx-auto md:p-1 rounded-full md:flex-wrap bg-[#1A1A1A] items-center justify-center md:gap-8 mb-10 md:mb-20 transition-all duration-1000 
                `}
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
    
            {/* Main Content - Desktop View */}
            <div className="relative max-w-7xl mx-auto bg-black hidden md:block">
                <div
                    ref={contentRef}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${
                        isVisible
                        ? "opacity-100 transform translate-y-0"
                        : "opacity-0 transform translate-y-12"
                    }`}
                >
                    {/* Left Side - Features List */}
                    <div
                        className={`bg-[#1A1A1A] rounded-3xl p-8 space-y-8 h-[600px] flex flex-col justify-center transition-all duration-1000 ${
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
                        className={`bg-[#1A1A1A] rounded-3xl p-8 flex justify-center items-center h-[600px] transition-all duration-1000 ${
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
            </div>

            {/* Mobile View - Swipeable Carousel with Navigation Buttons */}
            <div className="md:hidden mt-10">
                <div
                    className="relative overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Image Carousel */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out mb-8"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={slide.id}
                                className="w-full flex-shrink-0 flex justify-center items-center"
                            >
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-[300px] h-[300px] object-contain transition-all duration-500 ease-in-out"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Features List Carousel */}
                    <div 
                        className="flex transition-transform duration-500 ease-in-out mb-8"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <div
                                key={`features-${slide.id}`}
                                className="w-full flex-shrink-0 px-4"
                            >
                                <div className="bg-[#1A1A1A] rounded-3xl p-6 space-y-6">
                                    {slide.features.map((feature, index) => (
                                        <div
                                            key={`${slide.id}-feature-${index}`}
                                            className="flex relative items-center gap-4 animate-fade-in-up"
                                            style={{ animationDelay: `${index * 100}ms` }}
                                        >
                                            {/* Icon */}
                                            <div className="bg-[#1F2228] z-10 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center">
                                                {feature.icon}
                                            </div>

                                            {/* Text */}
                                            <div className="flex-1">
                                                <h3 className="text-sm">
                                                    <span className="text-blue-500 font-medium">
                                                        {feature.title}
                                                    </span>
                                                    <span className="text-gray-300 ml-2">
                                                        {feature.subtitle}
                                                    </span>
                                                </h3>
                                            </div>

                                            {/* Connector Line */}
                                            {index < slide.features.length - 1 && (
                                                <div
                                                    className="absolute top-[-12px] overflow-hidden left-[24px] mt-12 w-0.5 h-12 border-l-2 border-dashed border-blue-500"
                                                ></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4">
                        {/* Previous Button */}
                        {/* <button
                            onClick={prevSlide}
                            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button> */}

                        {/* Slide Indicators */}
                        <div className="flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        currentSlide === index
                                            ? 'w-8 h-2 bg-[#007DFE]'
                                            : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        {/* <button
                            onClick={nextSlide}
                            className="bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:scale-110"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button> */}
                    </div>
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

export default FeatureCarousel;