"use client";

import Image from "next/image";

export default function CultureValues() {
  const values = [
    {
      title: "Innovation First",
      description: "We experiment, build, and improve daily.",
      image: "/images/careers/careers5.jpg"
    },
    {
      title: "Clear Communication",
      description: "Honest conversations keep us well aligned.",
      image: "/images/careers/careers6.jpg"
    },
    {
      title: "Customer-Driven Mindset",
      description: "Businesses rely on us. We never forget that.",
      image: "/images/careers/careers7.jpg"
    },
    {
      title: "Quality Over Speed",
      description: "We focus on quality and long-term reliability.",
      image: "/images/careers/careers8.jpg"
    }
  ];

  return (
    <section className="py-24 bg-[#F4F9FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
            Culture Values
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The principles that guide how we work, collaborate, and grow at Norxio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0B2545] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
