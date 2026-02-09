
import { HouseIcon, ShoppingCartIcon, UserIcon, ChartLineIcon, PlaneIcon, BookIcon, HotelIcon } from "lucide-react";
import { IoIosRestaurant } from "react-icons/io";

export function IndustriesSection() {
  const industries = [
    { name: "Real Estate", icon: <HouseIcon /> },
    { name: "E-commerce", icon: <ShoppingCartIcon /> },
    { name: "Healthcare", icon: <UserIcon /> },
    { name: "Finance", icon: <ChartLineIcon /> },
    { name: "Restaurant", icon: <IoIosRestaurant /> },
    { name: "Travel Agency", icon: <PlaneIcon /> },
    { name: "Education", icon: <BookIcon /> },
    { name: "Hotels", icon: <HotelIcon /> },
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Industries Grid */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {/* <p className="text-center text-sm text-gray-600 mb-8 font-medium">
              Click on an industry to see its features →
            </p> */}
            <div className="grid grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div key={index+1} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 text-gray-900 hover:text-blue-700 transition-colors cursor-pointer group">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform text-[#0e8d17] group-hover:text-blue-600">
                    {industry.icon}
                  </div>
                  <p className="text-center font-semibold text-md text-[#0e8d17] group-hover:text-blue-600">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              INVAS — Built for{" "}
              <span className="text-blue-600">Every Industry</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Whether you're in real estate, healthcare, retail, or any other industry, INVAS provides tailored solutions to enhance customer engagement and streamline operations.
            </p>

            <div className="space-y-4">
              {[
                "Targeted Promotional Campaigns",
                "Advanced Live Chat",
                "Automated Customer Support",
                "Surveys and Market Research",
                "Detailed Order Updates",
                "Emergency Alerts and Notifications",
              ].map((feature, index) => (
                <div key={index+1} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
