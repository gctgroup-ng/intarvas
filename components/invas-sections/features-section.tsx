export function FeaturesSection() {
  const features = [
    {
      title: "Create Templates",
      description:
        "Save time and ensure consistency in your WhatsApp messages by creating customized templates tailored to your needs.",
      icon: "📝",
    },
    {
      title: "Launch Campaigns",
      description:
        "Our solution lets you create, manage, and automate personalized campaigns—whether for promotions, updates, or customer engagement.",
      icon: "🚀",
    },
    {
      title: "Create Phonebooks",
      description:
        "Create customized phonebooks tailored to your needs, making it easy to manage and reach out to your contacts efficiently.",
      icon: "📞",
    },
    {
      title: "Advanced Chatting",
      description:
        "Lets you send rich, interactive messages—like buttons, product lists, quick replies, and forms—that go far beyond the basic text and media options in the WhatsApp Business app.",
      icon: "💬",
    },
    {
      title: "Chatbot Automation",
      description:
        "Allows you to set up predefined conversation flows that automatically respond to customer messages.",
      icon: "🤖",
    },
    {
      title: "Live Analytics",
      description:
        "Live monitoring and analytics let you track conversations and performance in real time, measuring engagement and response to optimize results.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to build meaningful customer relationships through WhatsApp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
