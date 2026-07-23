import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToConsult() {
    return (
        <section className="py-32 px-5 bg-gray-50">
            <div className="container mx-auto px-4 text-center flex flex-col items-center gap-4 sm:gap-6">
                <h1 className="text-2xl sm:text-3xl md:text-[44px] font-inter font-semibold tracking-tight leading-tight animate-fade-in-up">
                    Ready to improve your business connectivity
                </h1>
            
                <p className="max-w-xl sm:max-w-2xl md:max-w-3xl text-base sm:text-lg text-muted-foreground animate-fade-in-up delay-300">
                Discover Cloud PBX, WhatsApp automation, and SMS solutions designed
                to help Nigerian businesses communicate, convert, and grow without
                dropped calls or missed leads.
                </p>
            
                <Link href="/contact" className="">
                <Button
                    size="lg"
                    className="w-full sm:w-auto hover:scale-105 transition-transform duration-300 animate-fade-in-up delay-500"
                >
                    Book a Consultation
                </Button>
                </Link>
            </div>
        </section>
    )
}