import { AboutHero } from "@/components/AboutHero";
import { AboutIntro } from "@/components/AboutIntro";
import { AboutStats } from "@/components/AboutStats";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <AboutIntro />
      <AboutStats />
      <AboutCTA />
    </div>
  );
}
