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
  applicationName: "Narayana Industries",
  title: {
    default: "Narayana Industries | Precision Manufacturing & Engineering",
    template: "%s | Narayana Industries",
  },
  description: "Premier precision engineering and manufacturing company specializing in automotive & railway air spring metal components, heavy machining, and certified structural fabrication.",
  keywords: [
    "Narayana Industries",
    "Precision Engineering",
    "Precision Manufacturing",
    "Railway Air Spring Components",
    "Automotive Metal Components",
    "Heavy Machining",
    "Structural Fabrication",
    "EN 15085 Certified",
    "ISO 9001:2015",
    "Precision Manufacturing India",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Narayana Industries | Precision Manufacturing & Engineering",
    description: "Premier precision engineering and manufacturing company specializing in automotive & railway air spring metal components, heavy machining, and certified structural fabrication.",
    url: "https://narayanaindustries.niorg.in",
    siteName: "Narayana Industries",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
        alt: "Narayana Industries Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayana Industries | Precision Manufacturing & Engineering",
    description: "Premier precision engineering and manufacturing company specializing in automotive & railway air spring metal components, heavy machining, and certified structural fabrication.",
    images: ["/images/logo.png"],
  },
  verification: {
    google: "PjyKxJb4BQdHK4kqMt1bHwGt7UMr0e1uY9wicjJUl38",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://narayanaindustries.niorg.in/#website",
      "url": "https://narayanaindustries.niorg.in",
      "name": "Narayana Industries",
      "alternateName": [
        "Narayana Precision Engineering",
        "Narayana Industries India",
        "NI"
      ],
      "description": "Premier precision engineering and manufacturing company specializing in automotive and railway air spring metal components, heavy machining, and structural fabrication."
    },
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://narayanaindustries.niorg.in/#organization",
      "name": "Narayana Industries",
      "url": "https://narayanaindustries.niorg.in",
      "logo": "https://narayanaindustries.niorg.in/images/logo.png",
      "image": "https://narayanaindustries.niorg.in/images/logo.png",
      "description": "Premier precision engineering and manufacturing company specializing in automotive and railway air spring metal components, heavy machining, and certified structural fabrication.",
      "telephone": "+919003950427",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Narayana Industries",
        "addressLocality": "India",
        "addressCountry": "IN"
      }
    }
  ]
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

