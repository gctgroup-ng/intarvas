import { FaCogs, FaMarker } from "react-icons/fa";
import { IoBulb } from "react-icons/io5";
import { Headset, Lock } from "lucide-react";
import { LuChartBar } from "react-icons/lu";

export function WhyChooseSection() {
  const reasons = [
    {
      title: "Innovation and Technology:",
      description:
        "We stay ahead of the curve with continuous innovation and the latest technology, providing you with cutting-edge solutions to stay competitive in the market.",
      icon: <IoBulb />,
    },
    {
      title: "Scalability and Reliability:",
      description:
        "Whether you're a startup or a Fortune company, our platform is built to scale with your business and deliver reliable performance under any circumstances.",
      icon: <LuChartBar/>,
    },
    {
      title: "Compliance and Security:",
      description:
        "Rest assured knowing that our platform is fully compliant with WhatsApp's policies and regulations, ensuring the security and privacy of your data.",
      icon: <Lock/>,
    },
    {
      title: "Proven Results:",
      description:
        "Boost reach, increase sales, and engage customers effortlessly with automated WhatsApp marketing. Invas offers bulk messaging, real-time responses, and data-driven insights to optimize your campaigns and drive results.",
      icon: <FaMarker/>,
    },
    {
      title: "Customization and Flexibility:",
      description:
        "Our platform offers customizable features and flexible pricing bundles to accommodate businesses of all sizes and industries.",
      icon: <FaCogs/>,
    },
    {
      title: "24/7 Customer Support:",
      description:
        "Enjoy personalized support from our team of experts who are committed to helping you achieve your marketing goals and maximize ROI.",
      icon: <Headset/>,
    },
  ];

  return (
    <section className="bg-[#F6F6F6] py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose inVAS?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We stand out as the premier choice for WhatsApp marketing solutions. With a proven track record of delivering exceptional results, our team combines expertise, innovation, and dedication to help businesses thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index+1} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow hover:border-blue-500">
              <div className="text-4xl mb-4 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
