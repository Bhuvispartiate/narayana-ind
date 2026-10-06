import Capabilities from "@/components/sections/Capabilities";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capabilities & Infrastructure",
  description: "Explore Narayana Industries' heavy fabrication, welding robotics, and precision CNC machining infrastructure.",
};

export default function CapabilitiesPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Capabilities & Infrastructure" 
        subtitle="Explore our heavy fabrication and precision CNC machining infrastructure." 
      />
      <ColorWipeSection colors={["#0f172a", "#0284c7", "#f59e0b"]}>
        <Capabilities />
      </ColorWipeSection>
    </main>
  );
}
