"use client";

import { useTranslation } from "@/lib/i18n";

export default function RegulatoryRequirementsPage() {
    const { t, isRTL } = useTranslation();

    const regulations = [
        {
            country: t.regulatory?.usa ?? "United States",
            description: t.regulatory?.usaDesc ?? "Norxio Financial LLC, trading as Norxio Business Bank, with registered office at 8 The Green, Suite A, Dover, Delaware 19901, United States, is registered with the Financial Crimes Enforcement Network (FinCEN) of the U.S. Department of the Treasury as a Money Services Business (MSB) under registration number 31000319285253.",
        },
        {
            country: t.regulatory?.canada ?? "Canada",
            description: t.regulatory?.canadaDesc ?? "Norxio Financial Inc., trading as Norxio, with registered office at 18 King Street East, Suite 1400, Toronto, Ontario M5C 1C4, Canada, is a Canadian corporation (Corporation Number 1755383-8). Registration with the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) as a Money Service Business (MSB) on going.",
        },
        {
            country: t.regulatory?.uk ?? "United Kingdom",
            description: t.regulatory?.ukDesc ?? "Norxio Financial Limited, trading as Norxio, with registered office at 167–169 Great Portland Street, London, England, W1W 5PF, is a private limited company incorporated in England and Wales (Company Number 16853151). Norxio works with UK-authorised partners regulated by the FCA to deliver payment services. Client funds are safeguarded in line with applicable UK regulations.",
        },
        {
            country: t.regulatory?.europe ?? "Europe",
            description: t.regulatory?.europeDesc ?? "United Kingdom: Norxio Financial Limited, trading as Norxio, with registered office at 167–169 Great Portland Street, London, England, W1W 5PF, is a private limited company incorporated in England and Wales (Company Number 16853151). European services are provided via Norxio Financial Limited (UK) in partnership with regulated financial institutions and electronic money institutions authorised in relevant European jurisdictions. Client funds are safeguarded in line with applicable local regulations.",
        },
        {
            country: t.regulatory?.australia ?? "Australia",
            description: t.regulatory?.australiaDesc ?? "Subject to pending local licensing and regulatory approvals.",
        },
        {
            country: t.regulatory?.uae ?? "UAE",
            description: t.regulatory?.uaeDesc ?? "Subject to pending local licensing and regulatory approvals.",
        },
        {
            country: t.regulatory?.singapore ?? "Singapore",
            description: t.regulatory?.singaporeDesc ?? "Subject to pending local licensing and regulatory approvals.",
        },
    ];

    return (
        <div className="bg-[#F5F9FA] min-h-screen font-sans pb-32">
            {/* Header Section */}
            <div className="pt-32 pb-24 text-center px-4">
                <h1 className={`text-4xl md:text-5xl font-bold text-[#0B2545] mb-6 tracking-tight ${isRTL ? 'font-arabic' : ''}`}>
                    {t.regulatory?.title ?? "Our regulatory coverage by jurisdiction"}
                </h1>
                <p className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
                    {t.regulatory?.subtitle ?? "Norxio operates through regulated partner institutions to ensure customer funds, FX, and cross-border payments are handled in accordance with local regulatory standards."}
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
                {regulations.map((item, index) => (
                    <div key={index} className={`flex flex-col ${isRTL ? 'md:flex-row-reverse text-right' : 'md:flex-row'} md:items-start gap-4 md:gap-24`}>
                        {/* Country Name */}
                        <div className="md:w-1/4 shrink-0">
                            <h3 className={`text-xl font-bold text-[#0B2545] ${isRTL ? 'font-arabic' : ''}`}>
                                {item.country}
                            </h3>
                        </div>

                        {/* Description */}
                        <div className="md:w-3/4">
                            <p className={`text-[15px] leading-7 text-gray-600 font-normal ${isRTL ? 'font-arabic' : ''}`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
