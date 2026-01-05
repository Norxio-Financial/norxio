import Image from "next/image";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";


// FAQ Data
const faqData: FAQSection = {
  title: "Frequently Asked Questions",
  badge: "FAQ",
  subtitle: "Get quick answers to the most common questions about how Norxio helps your business manage global payments with ease.",
  faqs: [
    {
      question: "What is a Norxio multi-currency account about?",
      answer: "A Norxio multi-currency account allows you to hold, manage, and exchange over 30 currencies in a single account. It simplifies global business operations by eliminating the need for multiple local bank accounts."
    },
    {
      question: "Is there a fee for converting currencies?",
      answer: "We offer transparent, competitive exchange rates with low conversion fees, typically much lower than traditional banks."
    },
    {
      question: "Which currencies can I hold?",
      answer: "You can hold major currencies like USD, EUR, GBP, CAD, AUD, JPY, and many more. Check our full list of supported currencies for details."
    },
    {
      question: "Can I send and receive international payments?",
      answer: "Yes, you can send and receive payments globally. We provide local account details for major currencies to receive payments like a local."
    },
    {
      question: "Do I get local account details?",
      answer: "Yes, for key currencies like USD, GBP, and EUR, you get your own unique local account details (IBAN, Sort Code, Routing Number) to receive funds easily."
    },
    {
      question: "How secure are multi-currency accounts?",
      answer: "Your funds are safeguarded with regulated financial institutions, and we use bank-grade encryption to protect your account and transactions."
    },
    {
      question: "Are transfers between currencies instant?",
      answer: "Conversions between currencies within your Norxio account are instant. Transfers to external accounts typically take 1-2 business days depending on the destination."
    },
    {
      question: "Can multiple team members access the account?",
      answer: "Yes, you can invite team members and assign them specific roles and permissions to manage the account securely."
    },
    {
      question: "What are sub-accounts and how do they work?",
      answer: "Sub-accounts allow you to segregate funds for different teams, projects, or regions within your main account for better organization and budgeting."
    },
    {
      question: "Does Norxio connect to accounting apps?",
      answer: "Yes, Norxio integrates with popular accounting software to streamline your reconciliation and financial reporting."
    }
  ]
};

export default function MultiCurrencyAccountPage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
        <Image
          src="/images/currency/hero-currency.jpg"
          alt="Multi Currency Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 100%)",
          }}
        />

        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
                <span className="text-xs font-medium text-white">Multi currency account</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Send Payments Globally, Hassle-Free
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
                Reach your suppliers, partners, and teams worldwide with transparent fees and same-day payouts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#0B2545] hover:bg-blue-50 text-base py-6 px-8 rounded-full font-semibold">
                  Open an Account
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base py-6 px-8 rounded-full bg-transparent">
                  Talk to Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hold 30+ Global Currencies */}
      <section className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#0B2545] mb-6">
            Hold 30+ Global Currencies
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-16">
            Manage and store multiple currencies in one unified account without opening separate bank accounts.
          </p>

          <div className="relative w-full max-w-6xl mx-auto">
            <Image
              src="/images/currency/coins.png"
              alt="30+ Currencies"
              width={1200}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 3. Your money, connected across borders (Map) */}
      <section className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image (Left) */}
            <div className="relative order-1">
              <div className="relative w-full lg:w-[496px] h-[520px] rounded-[15px] overflow-hidden">
                <Image
                  src="/images/currency/map-1.png"
                  alt="Global Connections"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content (Right) */}
            <div className="order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 leading-tight">
                Your money, connected across borders
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Effortlessly move money between global markets and manage all your currencies from a single, unified account—giving your business the flexibility, speed to operate confidently across borders.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With seamless cross-border flows, real-time visibility, and streamlined account management, your business can operate confidently in any market.
              </p>
              <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8 text-base shadow-lg shadow-blue-500/25">
                Open an account
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Virtual Wallet Sub-Accounts */}
      <section className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Content (Left) */}
            <div className="order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0B2545] mb-6 leading-tight">
                Virtual Wallet Sub-Accounts
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Create separate wallets for different teams, projects, regions, or revenue streams—giving your business complete clarity and control.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                With sub-accounts, you can track inflows and outflows independently, allocate budgets, and prevent funds from mixing across departments. This makes financial management cleaner, reporting more accurate.
              </p>
              <Button className="bg-[#2563EB] hover:bg-blue-700 text-white rounded-full py-6 px-8 text-base shadow-lg shadow-blue-500/25">
                Open an account
              </Button>
            </div>

            {/* Image (Right) */}
            <div className="relative order-2 lg:flex lg:justify-end">
              <div className="relative w-full lg:w-[496px] h-[520px] rounded-[15px] overflow-hidden">
                <Image
                  src="/images/currency/wallet.png"
                  alt="Virtual Wallet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Built for Global Operations (Dark Blue) */}
      <section className="py-20 lg:py-24 bg-[#0B2545] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Image (Left) */}
            <div className="relative order-1">
              <div className="relative w-full lg:w-[496px] h-[520px] rounded-[15px] overflow-hidden">
                <Image
                  src="/images/currency/oprations.jpg"
                  alt="Global Operations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content (Right) */}
            <div className="order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Built for Global Operations
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Access, control, and move funds across major markets with ease. Norxio gives your business the flexibility to manage currencies, streamline payments, and operate confidently in multiple regions — all from one centralized, intuitive dashboard.
              </p>
              <Button className="bg-white text-[#0B2545] hover:bg-blue-50 rounded-full py-6 px-8 text-base font-semibold">
                Talk to Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FAQ data={faqData} className="bg-[#F5F7FA]" />

      {/* 7. Start Moving Money Smarter CTA */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0B2545] text-center px-6 py-20 lg:py-24">
            {/* Background Pattern overlay */}
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
              }}>
            </div>
            
            {/* Wave effect at bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-64 opacity-30 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/images/home/wave-pattern.png')] bg-cover bg-bottom"></div>
             </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                Start Moving Money Smarter
              </h2>
              <p className="text-blue-200 text-lg mb-10">
                Join businesses using Norxio to streamline global payments, access transparent FX, and move funds faster.
              </p>
              <Button className="bg-[#2563EB] hover:bg-blue-600 text-white rounded-full py-6 px-10 text-lg font-semibold shadow-lg shadow-blue-900/50">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
