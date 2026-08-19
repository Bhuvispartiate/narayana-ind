import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Capabilities from "@/components/sections/Capabilities";
import Gallery from "@/components/sections/Gallery";
import QualityAssurance from "@/components/sections/QualityAssurance";
import CertifiedExcellence from "@/components/sections/CertifiedExcellence";
import ServicesPortfolio from "@/components/sections/ServicesPortfolio";
import Customers from "@/components/sections/Customers";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";

export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="overflow-x-hidden">
        {/* 1. Hero Section */}
        <ColorWipeSection colors={["#0284c7", "#4f46e5", "#38bdf8"]}>
          <Hero />
        </ColorWipeSection>

        {/* 2. Customers / Brands Marquee */}
        <ColorWipeSection colors={["#0284c7", "#10b981", "#4f46e5"]}>
          <Customers />
        </ColorWipeSection>

        {/* 3. About Us */}
        <ColorWipeSection colors={["#0284c7", "#4f46e5", "#f59e0b"]}>
          <About />
        </ColorWipeSection>

        {/* 4. Stats */}
        <ColorWipeSection colors={["#4f46e5", "#0ea5e9", "#f59e0b"]}>
          <Stats />
        </ColorWipeSection>

        {/* 5. Capabilities & Infrastructure */}
        <ColorWipeSection colors={["#0f172a", "#0284c7", "#f59e0b"]}>
          <Capabilities />
        </ColorWipeSection>

        {/* 6. Gallery */}
        <ColorWipeSection colors={["#0284c7", "#6366f1", "#f59e0b"]}>
          <Gallery />
        </ColorWipeSection>

        {/* 7. Quality Assurance Process */}
        <ColorWipeSection colors={["#059669", "#0284c7", "#4f46e5"]}>
          <QualityAssurance />
        </ColorWipeSection>

        {/* 8. Certified Excellence */}
        <ColorWipeSection colors={["#d97706", "#2563eb", "#0f172a"]}>
          <CertifiedExcellence />
        </ColorWipeSection>

        {/* 9. Services & Products Portfolio */}
        <ColorWipeSection colors={["#0284c7", "#4f46e5", "#ea580c"]}>
          <ServicesPortfolio />
        </ColorWipeSection>

        {/* 10. Leadership & Team */}
        <ColorWipeSection colors={["#0f172a", "#0284c7", "#38bdf8"]}>
          <Team />
        </ColorWipeSection>

        {/* 11. Contact & Inquiry */}
        <ColorWipeSection colors={["#0284c7", "#4f46e5", "#ea580c"]}>
          <Contact />
        </ColorWipeSection>
      </main>

      {/* 12. Footer */}
      <ColorWipeSection colors={["#0284c7", "#4f46e5", "#0f172a"]}>
        <Footer />
      </ColorWipeSection>
    </MotionProvider>
  );
}
