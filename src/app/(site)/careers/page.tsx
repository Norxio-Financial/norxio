import CareersHero from "@/components/sections/CareersHero";
import BuildTheFuture from "@/components/sections/BuildTheFuture";
import ContentBlock from "@/components/sections/ContentBlock";
import CultureValues from "@/components/sections/CultureValues";
import OpenPositions from "@/components/sections/OpenPositions";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";

export default function CareersPage() {
  const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to common questions about how the Norxio blog works and how to get the most from our content.",
    faqs: [
      {
        question: "What is the purpose of the Norxio Blog?",
        answer: "The Norxio Blog shares insights on global finance, fintech trends, and updates about our products to help businesses stay informed."
      },
      {
        question: "Can I search for articles by topic?",
        answer: "Yes, you can filter articles by category or use the search bar to find content relevant to your interests."
      },
      {
        question: "Who is the blog designed for?",
        answer: "Our blog is for business owners, finance professionals, and anyone interested in the future of global payments."
      },
      {
        question: "Do I need a Norxio account to read the blog?",
        answer: "No, the blog is public and accessible to everyone without an account."
      },
      {
        question: "Are the blog articles based on real financial expertise?",
        answer: "Yes, our content is written and reviewed by financial experts and industry professionals to ensure accuracy."
      },
      {
        question: "Can I suggest a topic for the blog?",
        answer: "Absolutely! We love hearing from our readers. Feel free to contact us with topic suggestions."
      },
      {
        question: "How often do you publish new content?",
        answer: "We publish new articles regularly, typically on a weekly basis, covering the latest in fintech and global business."
      },
      {
        question: "Are product update posts included in the blog?",
        answer: "Yes, we post major product updates, new feature announcements, and tutorials on the blog."
      },
      {
        question: "Can I use the information in the blog for my business?",
        answer: "The information provided is for educational purposes. We recommend consulting with a financial advisor for specific business advice."
      },
      {
        question: "Can I share Norxio blog articles with others?",
        answer: "Yes, we encourage you to share our articles on social media or with colleagues who might find them useful."
      }
    ]
  };

  return (
    <main>
      <CareersHero />
      
      <BuildTheFuture />
      
      <ContentBlock
        title="Grow With a Future-Focused Fintech"
        description="At Norxio, you'll work with smart people solving real financial challenges for global businesses. Even if roles aren't open yet, we're building a team that values innovation, ownership, and growth."
        image="/images/careers/careers3.jpg"
        imageAlt="Grow with Norxio"
        imagePosition="left"
        className="bg-white"
        // ctaText="View Open Positions"
        // ctaLink="#positions"
      />
      
      <CultureValues />
      
      <div id="positions">
        <OpenPositions />
      </div>
      
      <FAQ data={faqData} className="bg-[#F4F9FB]" />
    </main>
  );
}
