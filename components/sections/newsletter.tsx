"use client";

import { motion } from "framer-motion";

import { Mail, Mails } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="flex mb-20">
      <div className="container">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 px-4 py-10 shadow-md rounded-xl xl:flex-row bg-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.4 }}
        >
          <Mails className="xl:size-12 size-8 text-muted-foreground" />
          <h1 className="text-xl font-semibold md:text-2xl lg:text-3xl w-max text-nowrap text-muted-foreground">
            Subscribe to Newsletter
          </h1>
          <form
            className="relative flex w-full max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input placeholder="Your E-mail" type="email" required />
            <Button
              variant={"outline"}
              size={"default"}
              className="absolute right-0 rounded-l-none"
            >
              <Mail /> <span className="hidden sm:inline">Subscribe!</span>
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
