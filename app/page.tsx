import {
  About,
  Contact,
  Features,
  Hero,
  Newsletter,
  Testimonials,
  WhyChoose,
} from "@/components/sections";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">
      <Hero />
      <WhyChoose />
      <About />
      <Testimonials />
      <Features />
      <div className="container">
        <Separator />
      </div>
      <Contact />
      <Newsletter />
    </main>
  );
}
