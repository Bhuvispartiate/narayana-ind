import QualityAssurance from "@/components/sections/QualityAssurance";
import CertifiedExcellence from "@/components/sections/CertifiedExcellence";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality Assurance & Certifications",
  description: "ISO 9001:2015, EN 15085-2:2020+A1:2023 & ISO 3834-2:2021 certified quality standards and testing facilities.",
};

export default function QualityPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Quality Assurance" 
        subtitle="Uncompromising quality control and ISO-certified precision at every step of manufacturing." 
      />
      <ColorWipeSection colors={["#059669", "#0284c7", "#4f46e5"]}>
        <QualityAssurance />
      </ColorWipeSection>

      <ColorWipeSection colors={["#d97706", "#2563eb", "#0f172a"]}>
        <CertifiedExcellence />
      </ColorWipeSection>
    </main>
  );
}
