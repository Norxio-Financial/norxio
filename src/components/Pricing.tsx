import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Lite",
      subtitle: "For small businesses",
      price: "$0",
      period: "/month",
      features: [
        "Multi-currency account",
        "Transparent FX rates",
        "Global payouts",
        "Virtual cards",
        "Email support",
        "Simple dashboard & reporting",
      ],
      cta: "Start free",
      ctaStyle: "border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white",
      popular: false,
    },
    {
      name: "Enterprise",
      subtitle: "For SMBs",
      price: "$80",
      period: "/month",
      features: [
        "Multi-currency account",
        "Better FX rates",
        "Same-day payouts in major corridors",
        "Multiple virtual cards + export controls",
        "Advanced reporting & access Control",
        "Priority customer support",
      ],
      cta: "Upgrade now",
      ctaStyle: "bg-[#1e3a5f] text-white hover:bg-[#2d4a6f]",
      popular: true,
    },
    {
      name: "Business",
      subtitle: "For large companies",
      price: "Custom",
      period: " pricing",
      features: [
        "Multi-currency Infrastructure",
        "Custom FX pricing",
        "Global payouts with SLAs",
        "Unlimited cards + real-time controls",
        "API access & custom integrations",
        "Account manager support",
      ],
      cta: "Speak to sales",
      ctaStyle: "border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white",
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            💰 Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your business. No hidden fees, no surprises— just clear rates and full transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 ${
                plan.popular ? "ring-2 ring-[#1e3a5f] shadow-xl" : "shadow-md"
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 bg-[#1e3a5f] text-white text-xs rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/signup"
                className={`block w-full text-center py-3 rounded-lg font-medium transition-colors ${plan.ctaStyle}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
