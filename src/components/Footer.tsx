import Link from "next/link";

export default function Footer() {
  const footerLinks = {
    Company: ["About", "Careers", "Blog"],
    Product: ["Multi-Currency Accounts", "FX & Currency Exchange", "Global Payouts", "Virtual Cards"],
    Resources: ["Security & Compliance", "Support", "Contact Us"],
    Legal: ["Terms & Conditions", "Privacy Policy", "Cookie Policy"],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1e3a5f] rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Norxio</span>
            </Link>
            <p className="text-sm text-gray-500">
              A smarter way for businesses to hold, convert, and move money globally.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-gray-900 mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Follow us on social media</h4>
              <div className="flex gap-4">
                <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <span className="text-gray-600">𝕏</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <span className="text-gray-600">in</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <span className="text-gray-600">f</span>
                </Link>
                <Link href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200">
                  <span className="text-gray-600">▶</span>
                </Link>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-8">
            Norxio Technologies Limited provides advanced digital identity verification, compliance, and fraud prevention solutions for modern businesses. Norxio operates under strict industry standards for data protection, encryption, and authentication to guarantee secure onboarding, reliable verification processes, and operational integrity across all services. All user interactions and data handling are continuously monitored, audited, and updated to maintain the highest level of trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
