import Contact from "@/components/sections/Contact";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Narayana Industries for project inquiries, custom precision machining, and fabrication quotes.",
};

export default function ContactPage() {
  return (
    <main className="overflow-x-hidden pt-0">
      <SubpageHero 
        title="Contact Us" 
        subtitle="Get in touch with our team for project inquiries, fabrication needs, and quotes." 
      />
      <ColorWipeSection colors={["#0284c7", "#4f46e5", "#ea580c"]}>
        <Contact />
      </ColorWipeSection>
    </main>
  );
}
