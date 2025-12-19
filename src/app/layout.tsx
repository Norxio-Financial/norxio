import type { Metadata } from "next";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Norxio - Global Payments Platform",
  description: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" />
      <link rel="shortcut icon" href="/Norxio-White-Icon.svg" />
      <body
        className={`${inter.variable} ${rethinkSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

