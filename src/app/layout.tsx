import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Narayana Industries | Precision Manufacturing",
  description: "Engineering Reliability. Precision Manufacturing. Trusted Quality. ISO 9001:2015, EN 15085-2:2020+A1:2023 & ISO 3834-2:2021 certified.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${outfit.variable} h-full antialiased overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-clip">{children}</body>
    </html>
  );
}
