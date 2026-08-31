import ServicesPortfolio from "@/components/sections/ServicesPortfolio";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products & Services | Narayana Industries",
  description: "Our portfolio of heavy fabrication, precision machining, and specialized services.",
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
