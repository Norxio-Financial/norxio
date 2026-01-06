"use client";

import { Target, Plane, Handshake, Shield, Globe, Lightbulb } from "lucide-react";

export default function BuildTheFuture() {
  const features = [
    {
      icon: Target,
      title: "Purpose-Driven Work",
      description: "Work on real financial challenges that help businesses move and manage money globally—securely and efficiently."
    },
    {
      icon: Plane,
      title: "Room to Grow",
      description: "We support learning, ownership, and career growth, giving you space to improve, lead, and make impact."
    },
    {
      icon: Handshake,
      title: "Collaborative Culture",
      description: "Join a team that values openness, teamwork, and clear communication across every role."
    },
    {
      icon: Shield,
      title: "Built With Care",
      description: "We focus on building reliable systems the right way—prioritizing quality, security, and long-term thinking."
    },
    {
      icon: Globe,
      title: "Global Mindset",
      description: "Work with a diverse team solving problems for businesses across borders and markets."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage ideas, experimentation, and thoughtful problem-solving—every voice matters here."
    }
  ];

  return (
    <section className="py-24 bg-[#F4F9FB]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2545] mb-6">
            Build the Future with Norxio
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Build meaningful work, grow your skills, and help shape the future of global finance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 lg:p-10 rounded-[32px] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#E6F0F5] rounded-2xl flex items-center justify-center mb-8">
                <feature.icon className="w-7 h-7 text-[#3173BD]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0B2545] mb-4">
                {feature.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
