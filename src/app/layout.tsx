import type { Metadata } from "next";
import { 
  Inter, 
  Space_Grotesk, 
  JetBrains_Mono, 
  Plus_Jakarta_Sans, 
  Manrope,
  Barlow
} from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://narayanaindustries.niorg.in"),
  title: "Narayana Industries | Precision Manufacturing & Engineering",
  description: "Engineering Reliability. Precision Manufacturing. Trusted Quality. ISO 9001:2015, EN 15085-2:2020+A1:2023 & ISO 3834-2:2021 certified.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Narayana Industries | Precision Manufacturing & Engineering",
    description: "Engineering Reliability. Precision Manufacturing. Trusted Quality. ISO 9001:2015, EN 15085-2:2020+A1:2023 & ISO 3834-2:2021 certified.",
    url: "https://narayanaindustries.niorg.in",
    siteName: "Narayana Industries",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayana Industries | Precision Manufacturing & Engineering",
    description: "Engineering Reliability. Precision Manufacturing. Trusted Quality. ISO-certified.",
  },
  verification: {
    google: "PjyKxJb4BQdHK4kqMt1bHwGt7UMr0e1uY9wicjJUl38",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Narayana Industries",
  "image": "https://narayanaindustries.niorg.in/images/logo.png",
  "@id": "https://narayanaindustries.niorg.in",
  "url": "https://narayanaindustries.niorg.in",
  "telephone": "+919003950427",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Narayana Industries",
    "addressLocality": "India",
    "addressCountry": "IN"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${manrope.variable} ${barlow.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">
        <MotionProvider>
          <Navbar />
          {children}
          <ColorWipeSection colors={["#0284c7", "#4f46e5", "#0f172a"]}>
            <Footer />
          </ColorWipeSection>
        </MotionProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

