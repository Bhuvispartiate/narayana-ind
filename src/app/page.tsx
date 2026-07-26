import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Capabilities from "@/components/sections/Capabilities";
import QualityAssurance from "@/components/sections/QualityAssurance";
import CertifiedExcellence from "@/components/sections/CertifiedExcellence";
import ServicesPortfolio from "@/components/sections/ServicesPortfolio";
import Customers from "@/components/sections/Customers";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Customers />
        <About />
        <Stats />
        <Capabilities />
        <QualityAssurance />
        <CertifiedExcellence />
        <ServicesPortfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
