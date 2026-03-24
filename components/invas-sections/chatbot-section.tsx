import { ClipboardIcon, RefreshCwIcon } from "lucide-react";
import { IoFlash, IoChatbubbleEllipsesSharp} from "react-icons/io5";

export function ChatbotSection() {
  const features = [
    {
      title: "Automated Responses",
      description: "Respond instantly to customer queries 24/7.",
      icon: <IoFlash className="w-6 h-6 text-[#0e8d17]"/>,
    },
    {
      title: "Quick Replies & Menus",
      description: "Provide pre-set options for faster customer interactions.",
      icon: <ClipboardIcon className="w-6 h-6 text-[#0e8d17]"/>,
    },
    {
      title: "Interactive Chat Flows",
      description: "Create step-by-step conversations to guide users effectively.",
      icon: <RefreshCwIcon className="w-6 h-6 text-[#0e8d17]"/>,
    },
    {
      title: "Personalized Messaging",
      description: "Deliver tailored messages using customer data.",
      icon: <IoChatbubbleEllipsesSharp className="w-6 h-6 text-[#0e8d17]"/>,
    },
  ];

  return (
    <section className="bg-[#0e8d17]/10 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Illustration */}
          <div className="flex justify-center">
            <img src="https://res.cloudinary.com/dlgrqik0s/image/upload/v1774341286/chatbot__usvpqw.png" alt="Chatbot interface" className="w-full max-w object-cover rounded-lg"/>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Ready to turn every chat into a customer?{" "}
              <span className="block text-[#0e8d17]">Let our chatbot do the talking!</span>
            </h2>
            <p className="text-gray-600 mb-8 text-base md:text-lg leading-relaxed">
              For medium and large businesses, dedicating human resources to handle bulk customer responses is inefficient. With the Invas Bot Factory, businesses can automate repetitive messaging tasks, ensuring 24/7 instant responses to meet customer needs without manual effort.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index+1} className="flex gap-4 items-center">
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
