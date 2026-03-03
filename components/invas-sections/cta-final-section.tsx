import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTAFinalSection() {
  return (
    <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of businesses already using Invas to create exceptional customer experiences on WhatsApp.
          </p>
          <Link href="https://invas.me">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8"> 
              Get Started Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
