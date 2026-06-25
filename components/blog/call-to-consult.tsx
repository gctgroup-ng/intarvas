import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CallToConsult() {
    return (
        <section className="py-24 px-5 bg-gray-50">
            <div className="h-48 container mx-auto px-4 text-center space-y-6">
                <h1 className="text-3xl font-inter font-[600] tracking-tight md:text-[44px] animate-fade-in-up">
                    Ready to improve your business connectivity
                </h1>
                <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground animate-fade-in-up delay-300">
                    Discover Cloud PBX, WhatsApp automation, and SMS solutions designed to help Nigerian businesses communicate, convert, and grow without dropped calls or missed leads.
                </p>
                <Link href="/contact">
                    <Button size="lg" className="hover:scale-105 transition-transform duration-300 mt-5">
                        Book a Consultation
                    </Button>
                </Link>
            </div>
        </section>
    )
}