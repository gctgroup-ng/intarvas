import { Button } from "@/components/ui/button";

export function WhatsAppCTASection() {
  return (
    <section className="bg-blue-700 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              inVAS - Connect with Us via WhatsApp
            </h2>
            <p className="text-blue-50 mb-6 text-base md:text-lg leading-relaxed">
              Scan the QR code to instantly engage with Invas through WhatsApp. Whether you're looking for support, interested in our platform, or exploring how our chatbot can revolutionize your business engagement, Invas has you covered.
            </p>
            <p className="text-blue-50 mb-8 text-base">
              Get started with smarter, faster customer interactions through Invas's WhatsApp-powered platform.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Unable to scan QR? Click here.
            </Button>
          </div>

          {/* Right - QR Code */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm aspect-square flex items-center justify-center">
              <img
                src="/images/screenshot-202026-02-06-20at-2016.png"
                alt="WhatsApp QR Code"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
