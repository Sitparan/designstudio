import { AboutHero } from "@/components/AboutHero";
import { AboutIntro } from "@/components/AboutIntro";
import { AboutStats } from "@/components/AboutStats";
import { AboutCTA } from "@/components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,_#a8f0b0_0%,_#22c55e_100%)]">
      <AboutHero />
      <AboutIntro />
      <AboutStats />
      <AboutCTA />
    </div>
  );
}
