import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Features from "@/components/sections/Features";
import WhyTrust from "@/components/sections/WhyTrust";
import Security from "@/components/sections/Security";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { getLandingPageData } from "@/lib/queries";

export default async function HomePage() {
  const data = await getLandingPageData();

  return (
    <>
      <Hero data={data.hero} />
      <TrustedBy data={data.trustedBy} />
      <Features data={data.features} />
      <WhyTrust data={data.whyTrust} />
      <Security data={data.security} />
      <Pricing data={data.pricing} />
      <FAQ data={data.faq} />
      <CTA data={data.cta} />
    </>
  );
}
