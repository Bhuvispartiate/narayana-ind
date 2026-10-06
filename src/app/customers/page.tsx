import Customers from "@/components/sections/Customers";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Customers & Partners",
  description: "Trusted by industry leaders in railway engineering, automotive OEM manufacturing, and power generation.",
};

export default function CustomersPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Our Customers" 
        subtitle="Trusted by industry leaders across railway, automotive, and power generation sectors." 
      />
      <ColorWipeSection colors={["#0284c7", "#10b981", "#4f46e5"]}>
        <Customers />
      </ColorWipeSection>
    </main>
  );
}
