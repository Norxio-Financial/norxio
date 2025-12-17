export default function TrustedBy() {
  const companies = [
    "amazon",
    "Canva",
    "asana",
    "Meta",
    "ups",
    "Airtable",
    "Boostnote",
    "amazon",
    "AliExpress",
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 mb-8">Trusted by 5000+ companies</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div
              key={index}
              className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
