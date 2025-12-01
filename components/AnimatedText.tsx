import { useState, useEffect } from "react";

interface AnimatedTextProps {
  descriptionText?: string;
  background?: string;
  textSize?: string;
}

export default function AnimatedText({
    descriptionText = "With IntarvAS PBX, you get enterprise-grade call management without the cost of on-site hardware. Create extensions for your team, route calls intelligently, and manage everything from a simple dashboard.",
    background = "bg-[#FFFFFF]",
    textSize = "text-[38px]",
}: AnimatedTextProps) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    const descriptionWords = descriptionText.split(" ");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const handleScroll = () => {
        const descriptionSection = document.getElementById("description-section");
        if (!descriptionSection) return;

        const rect = descriptionSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const startPoint = windowHeight * 0.5;
        const endPoint = -rect.height;

        const progress = Math.max(
                0, Math.min(1, (startPoint - rect.top) / (startPoint - endPoint))
            );
            setScrollProgress(progress);
        };

        const timeoutId = setTimeout(() => {
            handleScroll();
        }, 100);

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isMounted]);

    return (
        <section id="description-section" className={`${background} w-full py-[200px] relative overflow-hidden`}>
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/3 rounded-full blur-2xl animate-bounce delay-2000"></div>
            </div>

            <div className="container mx-auto px-1 relative z-10">
                <div className="transition-all duration-1000 opacity-100 transform translate-y-0">
                    <p className={`mx-auto font-inter sm:${textSize} text-3xl md:px-0 px-6 font-[600] max-w-[865px] text-center hover:scale-105 transition-all duration-500 cursor-default`} style={{lineHeight: "48px", letterSpacing: "-5%"}}>
                        {descriptionWords.map((word, index) => {
                            const greyR = 133, greyG = 141, greyB = 157;
                            const darkR = 0, darkG = 25, darkB = 51;

                            let currentR = greyR;
                            let currentG = greyG;
                            let currentB = greyB;

                            if (isMounted) {
                                const wordProgress = Math.max(0,
                                    Math.min(1, scrollProgress * descriptionWords.length * 1.9 - index)
                                );

                                currentR = Math.round(greyR + (darkR - greyR) * wordProgress);
                                currentG = Math.round(greyG + (darkG - greyG) * wordProgress);
                                currentB = Math.round(greyB + (darkB - greyB) * wordProgress);
                            }

                            return (
                                <span key={index} className="transition-colors duration-300" style={{
                                    color: `rgb(${currentR}, ${currentG}, ${currentB})`,
                                }}>
                                    {word}{" "}
                                </span>
                            );
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
}