import {
  About,
  Contact,
  Features,
  Hero,
  Newsletter,
  Testimonials,
  WhyChoose,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <WhyChoose />
      <About />
      <Testimonials />
      <Features />
      <div className="container">
        <div className="h-[1px] w-full bg-border"></div>
      </div>
      <Contact />
      <Newsletter />
    </main>
  );
}
