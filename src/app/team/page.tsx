import Team from "@/components/sections/Team";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership & Team | Narayana Industries",
  description: "Meet the experts behind our precision engineering excellence.",
};

export default function TeamPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Our Team" 
        subtitle="Meet the leadership and engineering experts driving innovation and reliability." 
      />
      <ColorWipeSection colors={["#0f172a", "#0284c7", "#38bdf8"]}>
        <Team />
      </ColorWipeSection>
    </main>
  );
}
