import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Regulatory Requirements | Norxio",
    description: "Norxio partners with regulated institutions for multi-currency accounts, FX, and global payouts.",
};

export default function RegulatoryRequirementsPage() {
    const regulations = [
        {
            country: "United Kingdom",
            description: "Norxio partners with a UK-authorised Electronic Money Institution regulated by the Financial Conduct Authority (FCA). All client funds are held in segregated safeguarding accounts at tier-1 UK banks, in full compliance with the Electronic Money Regulations 2011 and FCA client money rules. This ensures your money is ring-fenced and protected at all times.",
        },
        {
            country: "Germany",
            description: "Through our regulated EU partner, an Electronic Money Institution licensed by BaFin (Federal Financial Supervisory Authority), Norxio provides services across the European Economic Area. Funds are safeguarded in dedicated accounts at major German and EU banks, meeting the highest standards of the German Payment Services Supervision Act (ZAG) and EU e-money directives.",
        },
        {
            country: "United Arab Emirates",
            description: "Norxio collaborates with a licensed payment service provider regulated by the Central Bank of the UAE. Client funds are held in segregated accounts with UAE-based banks, fully compliant with CBUAE safeguarding requirements. This structure supports fast, reliable AED payouts and multi-currency holdings for businesses operating in the Gulf region.",
        },
        {
            country: "United States",
            description: "Norxio works with licensed Money Services Businesses and partner banks regulated at both federal and state level in the US. Funds are held in segregated accounts at FDIC-insured institutions where applicable, ensuring compliance with US federal and state money transmission laws. USD balances and payouts are processed through established, regulated payment rails.",
        },
        {
            country: "China",
            description: "For CNY-related services, Norxio partners with licensed payment institutions authorised by the People's Bank of China (PBOC). All transactions and fund holdings comply with China's cross-border payment regulations. Funds are safeguarded in approved accounts, enabling secure receipt and payout of Chinese Yuan for international trade.",
        },
    ];

    return (
        <div className="bg-[#F5F9FA] min-h-screen font-sans pb-32">
            {/* Header Section */}
            <div className="pt-32 pb-24 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-[#0B2545] mb-6 tracking-tight">
                    Our Regulatory Requirement
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Norxio partners with regulated institutions for multi-currency accounts, FX, and global payouts.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {regulations.map((item, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-24">
                        {/* Country Name */}
                        <div className="md:w-1/4 shrink-0">
                            <h3 className="text-xl font-bold text-[#0B2545]">
                                {item.country}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="md:w-3/4">
                            <p className="text-[15px] leading-7 text-gray-600 font-normal">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
