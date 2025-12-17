export default function Security() {
  const securityFeatures = [
    {
      icon: "🏢",
      title: "Enterprise-Grade Security",
      description: "Your data, systems, and operations are protected with multi-layer encryption for sensitive transactions.",
    },
    {
      icon: "🔒",
      title: "Advanced Data Encryption",
      description: "Norxio encrypts all data in transit and at rest, ensuring unauthorized parties cannot access your information.",
    },
    {
      icon: "✅",
      title: "Compliance You Can Trust",
      description: "Norxio aligns with global security best practices, giving you peace of mind with compliant work practices.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              🔐 Security
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security You Can Trust
            </h2>
            <p className="text-gray-600 mb-8">
              Your data and operations stay fully protected with enterprise-grade safety at every layer.
            </p>
          </div>

          {/* Right - Feature cards */}
          <div className="grid gap-6">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
