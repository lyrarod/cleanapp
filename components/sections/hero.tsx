import { Button } from "../ui/button";
import { ArrowRightCircle, Bookmark, Check } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative grid min-h-[calc(100vh_-_84px)] place-items-center py-20"
    >
      <div className="absolute inset-0 z-0 hidden lg:flex">
        <img
          src="/hero.jpg"
          alt="hero image"
          className="object-cover w-full h-full opacity-25"
        />
      </div>

      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src="/hero-mobile.jpg"
          alt="hero image"
          className="object-cover w-full h-full opacity-25"
        />
      </div>

      <div className="container z-10 flex flex-col items-center justify-center gap-y-8 lg:gap-y-10">
        <h1 className="text-4xl font-extrabold text-center md:text-5xl lg:text-7xl text-wrap drop-shadow">
          Professional <span className="text-primary">Cleaning</span> for Your
          Peace of Mind
        </h1>

        <strong className="text-sm text-center lg:text-lg text-muted-foreground text-wrap">
          {`Experience the difference with CleanApp's premium cleaning services.`}
          <br />
          {`We bring sparkle to every corner of your space.`}
        </strong>

        <div className="flex flex-col gap-y-1">
          {[
            "14+ years of industry experience",
            "5000+ satisfied customers",
            "100% satisfaction guaranteed",
            "Eco-friendly cleaning solutions",
          ].map((item, i) => {
            return (
              <p
                key={i}
                className="flex items-center text-sm lg:text-base lg:gap-x-2 gap-x-1"
              >
                <Check className="text-primary size-5 lg:size-6" /> {item}
              </p>
            );
          })}
        </div>

        <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row">
          <Button size={"lg"}>
            <ArrowRightCircle /> Get Started
          </Button>
          <Button variant={"outline"} size={"lg"}>
            <Bookmark /> Book Now
          </Button>
        </div>
      </div>
    </section>
  );
};
