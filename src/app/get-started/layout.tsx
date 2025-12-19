import Header from "@/components/layout/Header";

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    return (
        <>
            <Header />
            <main className="min-h-screen ">{children}</main>
        </>
    );
}
