import AboutHero from "@/components/sections/AboutHero";
import WhyItMatters from "@/components/sections/WhyItMatters";
import ContentBlock from "@/components/sections/ContentBlock";
import AboutCTA from "@/components/sections/AboutCTA";
import FAQ from "@/components/sections/FAQ";
import { FAQSection } from "@/lib/types";

export default function AboutPage() {
  const faqData: FAQSection = {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our company, mission, and services.",
    faqs: [
      {
        question: "What is the purpose of the Norxio app?",
        answer: "Norxio is designed to simplify global finance for businesses. We provide multi-currency accounts, corporate cards, and seamless international transfers to help you operate globally with ease."
      },
      {
        question: "Can I use Norxio for personal use?",
        answer: "Currently, Norxio is focused on serving businesses, from startups to large enterprises. We offer tailored solutions for corporate financial needs."
      },
      {
        question: "Who is Norxio designed for?",
        answer: "Norxio is built for businesses of all sizes that deal with international transactions, have remote teams, or need to manage expenses in multiple currencies."
      },
      {
        question: "Do I need a Norxio account to read the blog?",
        answer: "No, our blog and resources are open to everyone. We believe in sharing knowledge about global finance and fintech trends with the community."
      },
      {
        question: "How do I contact Norxio support?",
        answer: "You can reach our support team via email at support@norxio.com or through the live chat feature in your dashboard. We offer 24/7 support for our customers."
      },
      {
        question: "Can I request a feature?",
        answer: "Absolutely! We value customer feedback and often prioritize our roadmap based on user requests. You can submit feature requests through your account manager or support."
      },
      {
        question: "Can I contact Norxio for business partnerships?",
        answer: "Yes, we are always open to strategic partnerships. Please contact our partnerships team at partners@norxio.com to discuss potential collaboration opportunities."
      },
      {
        question: "Does Norxio have a mobile app?",
        answer: "Yes, we have a mobile app available for both iOS and Android, allowing you to manage your business finances on the go."
      }
    ]
  };

  return (
    <main>
      <AboutHero />

      <WhyItMatters />

      <ContentBlock
        title="About Norxio"
        subtitle="Creating a Borderless Financial Experience"
        description={"We're on a mission to redefine global financial operations by removing outdated barriers, hidden processes, and unnecessary delays.\n\nNorxio is built to give users full control, real-time transparency, and modern tools that enable them to do business without borders."}
        image="/images/aboutus/about1.jpg"
        imageAlt="Man using phone"
        imagePosition="right"
        ctaText="Open an account"
        ctaLink="/get-started"
        className="bg-[#F4F9FB]"
      />

      <ContentBlock
        title="Our Vision"
        subtitle="Empowering the Future of Global Money Movement"
        description="Our vision is a world where money moves as freely as information. We are building the infrastructure to make this a reality, connecting economies and enabling businesses to thrive in a digital-first world."
        image="/images/aboutus/about2.png"
        imageAlt="Global connection"
        imagePosition="left"
        ctaText="Learn more"
        ctaLink="/get-started"
        className="bg-white"
      />

      <ContentBlock
        title="Values That Drives Us"
        subtitle="The principles behind everything we do"
        description="Integrity, innovation, and customer-centricity are at the core of our culture. We are committed to transparency in our pricing, security in our technology, and excellence in our service. Every product we build and every decision we make is guided by these values."
        image="/images/aboutus/about3.png"
        imageAlt="Team collaboration"
        imagePosition="right"
        ctaText="Join our team"
        ctaLink="/careers"
        className="bg-[#F4F9FB]"
      />

      <AboutCTA />

      <FAQ data={faqData} className="bg-white" />
    </main>
  );
}
