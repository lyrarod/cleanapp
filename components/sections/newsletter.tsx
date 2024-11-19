"use client";

import { Mail, Mails } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const Newsletter = () => {
  return (
    <section id="newsletter" className="flex mb-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4 px-4 py-10 shadow rounded-xl xl:flex-row bg-secondary">
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
              <Mail /> Subscribe!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
