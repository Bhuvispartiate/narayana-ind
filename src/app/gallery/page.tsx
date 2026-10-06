import Gallery from "@/components/sections/Gallery";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing Facility & Gallery",
  description: "Tour the Narayana Industries facility, advanced machinery, CNC workshops, and manufactured components.",
};

export default function GalleryPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Gallery" 
        subtitle="Take a visual tour of our manufacturing facility, machinery, and finished products." 
      />
      <ColorWipeSection colors={["#0284c7", "#6366f1", "#f59e0b"]}>
        <Gallery />
      </ColorWipeSection>
    </main>
  );
}
