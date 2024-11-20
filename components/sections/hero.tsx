"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { ArrowRightCircle, Bookmark, Check } from "lucide-react";

export const Hero = () => {
  const MotionButton = motion(Button);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh_-_84px)] py-20 mt-[84px]"
    >
      <div className="absolute inset-0 z-0 hidden lg:flex">
        <img
          src="/hero.jpg"
          alt="hero image"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      <div className="absolute inset-0 z-0 lg:hidden">
        <img
          src="/hero-mobile.jpg"
          alt="hero image"
          className="object-cover w-full h-full opacity-20"
        />
      </div>

      <div className="container z-10 flex flex-col items-center justify-center gap-y-6 lg:gap-y-10">
        <motion.h1
          className="text-4xl font-extrabold text-center md:text-5xl lg:text-7xl text-wrap drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          Professional <span className="text-primary">Cleaning</span>
        </motion.h1>

        <motion.h2
          className="text-2xl font-extrabold text-center md:text-3xl lg:text-5xl text-wrap drop-shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          viewport={{ once: false }}
        >
          For Your <span className="text-primary">Peace</span> of Mind !
        </motion.h2>

        <motion.strong
          className="text-sm text-center lg:text-base text-muted-foreground text-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          {`Experience the difference with CleanApp's premium cleaning services.`}
          <br />
          {`We bring sparkle to every corner of your space.`}
        </motion.strong>

        <div className="flex flex-col gap-y-1">
          {[
            "14+ years of industry experience",
            "5000+ satisfied customers",
            "100% satisfaction guaranteed",
            "Eco-friendly cleaning solutions",
          ].map((item, i) => {
            return (
              <motion.p
                key={i}
                className="flex items-center text-sm lg:text-base lg:gap-x-2 gap-x-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                viewport={{ once: false }}
              >
                <Check className="text-primary size-5 lg:size-6" /> {item}
              </motion.p>
            );
          })}
        </div>

        <div className="flex flex-col gap-x-8 gap-y-6 md:flex-row">
          <MotionButton
            size={"lg"}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <ArrowRightCircle /> Get Started
          </MotionButton>

          <MotionButton
            variant={"outline"}
            size={"lg"}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
          >
            <Bookmark /> Book Now
          </MotionButton>
        </div>
      </div>
    </section>
  );
};
