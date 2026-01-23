import {
  Hero,
  Features,
  Work,
  Process,
  Testimonials,
  Pricing,
  Contact,
} from "@/features";
import { NoiseBackground } from "@/components";
import Services from "@/features/home/Services";

export default function Home() {
  return (
    <main className="text-white min-h-screen relative">
      <NoiseBackground />
      <Hero />
      <Services/>
      <Work />
      <Process />
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
    </main>
  );
}
