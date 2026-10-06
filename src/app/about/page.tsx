import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Narayana Industries' 30+ year legacy in precision manufacturing, leadership, and engineering excellence.",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="About Us" 
        subtitle="Learn about our 30+ year legacy in precision manufacturing and engineering excellence." 
      />
      <ColorWipeSection colors={["#0284c7", "#4f46e5", "#f59e0b"]}>
        <About />
      </ColorWipeSection>

      <ColorWipeSection colors={["#4f46e5", "#0ea5e9", "#f59e0b"]}>
        <Stats />
      </ColorWipeSection>
    </main>
  );
}
