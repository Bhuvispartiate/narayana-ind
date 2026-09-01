import Contact from "@/components/sections/Contact";
import { ColorWipeSection } from "@/components/ui/ColorWipeSection";
import { SubpageHero } from "@/components/ui/SubpageHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Narayana Industries",
  description: "Get in touch for project inquiries, fabrication needs, and CNC machining.",
  verification: {
    google: "PjyKxJb4BQdHK4kqMt1bHwGt7UMr0e1uY9wicjJUl38",
  },
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
