import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Airbnb Management Adelaide | Stress-Free Short-Term Rental Management",
    template: "%s | Adelaide Airbnb Management",
  },
  description:
    "Adelaide's leading Airbnb management company. We handle cleaning, linen, dynamic pricing & guest communication. Full owner transparency. Get a free estimate today.",
  keywords: [
    "Airbnb management Adelaide",
    "short-term rental management Adelaide",
    "property management Adelaide",
    "Airbnb property manager SA",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Adelaide Airbnb Management",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Adelaide Airbnb Management",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
  url: "https://www.adelaidebnb.au",
  telephone: "+61-XXX-XXX-XXX",
  description:
    "Professional Airbnb and short-term rental management in Adelaide, South Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
