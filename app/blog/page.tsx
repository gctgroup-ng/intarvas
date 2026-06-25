"use client";

import BlogSection from "@/components/blog/section";
import TestimonialsSection from "@/components/sections/Testimonials";
import ScrollToTop from "@/components/ScrollToTop";
import CallToConsult from "@/components/blog/call-to-consult";

export default function Blog() {
    return (
        <main className="pt-20" >
            <BlogSection />
            <CallToConsult/>
            <TestimonialsSection/>
            <ScrollToTop />
        </main>
    );
}

