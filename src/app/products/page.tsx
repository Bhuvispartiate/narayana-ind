import ServicesPortfolio from "@/components/sections/ServicesPortfolio";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services",
  description: "Comprehensive portfolio of precision machined parts, railway air spring metal components, and heavy engineering solutions.",
};

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Products & Services" 
        subtitle="Explore our comprehensive portfolio of heavy fabrication, machining, and engineering solutions." 
      />
      <ColorWipeSection colors={["#0284c7", "#4f46e5", "#ea580c"]}>
        <ServicesPortfolio />
      </ColorWipeSection>
    </main>
  );
}
