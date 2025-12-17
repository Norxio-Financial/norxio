export default function HelpsYouGrow() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Norxio Helps You Grow
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Main large card */}
          <div className="md:col-span-2 bg-[#1e3a5f] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
                Real Time example
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Manage your finances with our multi-currency account
              </h3>
              <p className="text-gray-300 mb-6">
                A simple process that lets your business hold, convert, and send money globally—fast, transparent, and secure.
              </p>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="w-full h-full bg-gradient-to-l from-white to-transparent"></div>
            </div>
          </div>

          {/* Right side cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Fast turnaround on support issues, and the user interface is really intuitive to use.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💼</span>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    The best solution for international payments we have found so far.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
