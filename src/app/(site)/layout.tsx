import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getLandingPageData } from "@/lib/queries";

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getLandingPageData();

  return (
    <>
      <Header data={data.settings} />
      <main className="min-h-screen">{children}</main>
      <Footer data={data.footer} settings={data.settings} />
    </>
  );
}
