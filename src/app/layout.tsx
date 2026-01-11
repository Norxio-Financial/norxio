import type { Metadata } from "next";
import { Inter, Rethink_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { SanityDataProvider } from "@/lib/i18n/SanityDataContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Norxio - Global Payments Platform",
    template: "%s | Norxio"
  },
  description: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
  keywords: ["fintech", "global payments", "multi-currency", "fx exchange", "corporate cards", "payouts", "api integration", "banking", "international business"],
  authors: [{ name: "Norxio Team" }],
  creator: "Norxio",
  publisher: "Norxio",
  metadataBase: new URL('https://norxio.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://norxio.com",
    title: "Norxio - Global Payments Platform",
    description: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
    siteName: "Norxio",
    images: [
      {
        url: "/Norxio-Dark-Icon.svg",
        width: 1200,
        height: 630,
        alt: "Norxio Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Norxio - Global Payments Platform",
    description: "Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts.",
    images: ["/Norxio-Dark-Icon.svg"],
    creator: "@norxio",
  },
  icons: {
    icon: [
      { url: '/Icon 16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/Icon 64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/Icon 128x128.png', sizes: '128x128', type: 'image/png' },
    ],
    shortcut: '/Icon 16x16.png',
    apple: [
      { url: '/Icon 128x128.png', sizes: '128x128', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Manage money worldwide with multi-currency accounts, transparent FX pricing, and fast payouts." />
        <link rel="canonical" href="https://norxio.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Norxio" />
        <meta name="keywords" content="fintech, global payments, multi-currency, fx exchange, corporate cards, payouts, api integration, banking, international business" />
        <meta name="theme-color" content="#09325E" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/Norxio-White-Icon.svg" />
        <link rel="apple-touch-icon" href="/Norxio-White-Icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#09325E" />
        <meta name="msapplication-TileImage" content="/Norxio-White-Icon.svg" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Icon 32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Icon 16x16.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/Icon 64x64.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/Icon 128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/Icon 256x256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/Icon 512x512.png" />
      </head>
      <body
        className={`${inter.variable} ${rethinkSans.variable} ${cairo.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <SanityDataProvider>
            {children}
          </SanityDataProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
