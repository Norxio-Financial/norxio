export default function WhatWeOffer() {
  const offerings = [
    {
      icon: "🌐",
      title: "Global payments",
      description: "Send and receive money across borders with competitive rates and quick transfers to 180+ countries.",
      color: "bg-blue-50",
    },
    {
      icon: "💳",
      title: "Virtual & physical cards",
      description: "Create cards for the team and track spending in real-time.",
      color: "bg-purple-50",
    },
    {
      icon: "💱",
      title: "Multi-currency accounts",
      description: "Receive and manage money in over 30+ global currencies.",
      color: "bg-green-50",
    },
    {
      icon: "📊",
      title: "Smart FX Conversion",
      description: "Convert currencies instantly with competitive rates.",
      color: "bg-orange-50",
    },
    {
      icon: "🔗",
      title: "Api Integration",
      description: "Create custom processes using extensive rest Api access.",
      color: "bg-pink-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            ✨ Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What we offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {offerings.map((offer, index) => (
            <div
              key={index}
              className={`${offer.color} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-sm text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-8 h-2 bg-[#1e3a5f] rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
