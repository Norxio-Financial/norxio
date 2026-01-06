"use client";

import { Globe, Plane, Landmark } from "lucide-react";

export default function WhyItMatters() {
  const cards = [
    {
      icon: Globe,
      title: "One Account, Many Currencies",
      description: "Manage multiple currencies with ease, without the hassle of opening separate bank accounts or dealing with extra setup."
    },
    {
      icon: Plane,
      title: "Faster Global Payments",
      description: "Send and receive money worldwide with ease, ensuring fast, reliable transfers without unnecessary delays or complications."
    },
    {
      icon: Landmark,
      title: "Local Account Details",
      description: "Get local account details for seamless payments in major regions, making it easier to operate and transact like a native business anywhere."
    }
  ];

  return (
    <section className="py-24 bg-[#F4F9FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Why It Matters
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Manage multiple currencies with clarity, speed, and full control—so your business can operate confidently across borders.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-3xl shadow-sm h-full flex flex-col ${index === 1 ? 'md:mt-8' : ''}`}
            >
              <div className="w-14 h-14 bg-[#E6F0F5] rounded-2xl flex items-center justify-center mb-8">
                <card.icon className="w-7 h-7 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] mb-4">
                {card.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
