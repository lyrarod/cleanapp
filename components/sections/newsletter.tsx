"use client";

import { Mail, Mails } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="flex items-center mb-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center px-4 py-12 rounded-md shadow-md bg-secondary gap-x-4 gap-y-2 xl:flex-row text-border">
          <Mails className="xl:size-12 size-8" />
          <h1 className="flex items-center text-xl font-semibold md:text-2xl lg:text-3xl w-max text-nowrap gap-x-2">
            Subscribe to Newsletter
          </h1>
          <form
            className="relative flex w-full max-w-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <Input
              placeholder="Your E-mail"
              type="email"
              required
              className="text-black dark:text-white"
            />
            <Button
              variant={"outline"}
              size={"default"}
              className="absolute right-0 rounded-l-none"
            >
              <Mail />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
