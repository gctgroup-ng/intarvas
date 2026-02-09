export function StatsSection() {
  const stats = [
    { number: "2B+", label: "WhatsApp Users Worldwide" },
    { number: "98%", label: "Message Open Rate" },
    { number: "10x", label: "Faster Customer Response" },
    { number: "24/7", label: "Automated Support" },
  ];

  return (
    <section className="bg-blue-100  py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
