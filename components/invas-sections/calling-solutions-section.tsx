import { PhoneIcon } from "lucide-react";
import { TbTargetArrow } from "react-icons/tb";

export function CallingSection() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                MAJOR FEATURE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              WhatsApp Calling & Call Center Solutions
            </h2>
            <p className="text-gray-600 mb-6 text-base leading-relaxed">
              Enable voice calling for your business with two powerful solutions: Standard calling for direct customer connections, or our enterprise Call Center handling 1,000+ concurrent calls with intelligent routing.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <PhoneIcon /> Standard Calling
                </h4>
                <p className="text-sm text-gray-600">
                  Business & customer-initiated calls
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-1 flex items-center gap-2">
                  <TbTargetArrow className="w-7 h-7" /> Call Center Solution
                </h4>
                <p className="text-sm text-gray-600">
                  1000+ calls with smart routing
                </p>
              </div>
            </div>

            {/* <Link href="/services/invas/calling">
              <Button className="bg-blue-700 hover:bg-blue-800">
                Learn More About Calling
              </Button>
            </Link> */}
          </div>

          {/* Right - Image */}
          <div className="flex justify-center">
            <img src="/invas/monitor_calls.png" alt="Calling solutions interface" className="w-full max-w-2xl rounded-lg object-cover"/>
          </div>
        </div>
      </div>
    </section>
  );
}
