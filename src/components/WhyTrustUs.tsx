export default function WhyTrustUs() {
  const features = [
    {
      icon: "📈",
      title: "Transparent FX Rates",
      description: "Hold, receive, and manage multiple currencies while connecting multiple bank accounts.",
    },
    {
      icon: "🌍",
      title: "Designed for Global Businesses",
      description: "Every transaction is protected with multi-factor authentication and continuous fraud monitoring.",
    },
    {
      icon: "⚡",
      title: "Always On, Always Reliable",
      description: "Same-day payouts in major regions ensure money moves quickly, helping businesses operate without delays.",
    },
    {
      icon: "🛡️",
      title: "Enterprise - Grade Security",
      description: "Businesses trust Norxio because every currency conversion is clear, upfront, and free from hidden fees.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            ✨ Our Identity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why businesses trust us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built to help global businesses move money smarter, faster, and more transparently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image placeholder */}
          <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 shadow-lg max-w-xs">
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold">N</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">NORXIO</h3>
              <p className="text-gray-500 text-sm">Your global payment partner</p>
            </div>
          </div>

          {/* Right - Features */}
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
