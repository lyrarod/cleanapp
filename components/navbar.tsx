"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";
import { Darkmode } from "./darkmode";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { FaWhatsapp } from "react-icons/fa";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full shadow bg-background/70 backdrop-blur-md dark:border-b">
      <nav className="container flex items-center justify-between py-6">
        <Logo className="text-primary" />
        <ul className="items-center hidden lg:flex gap-x-8">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <a
                  href={`${link.href}`}
                  className="text-sm font-semibold tracking-wide uppercase transition hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-x-1">
          <Darkmode />
          <Button className="hidden lg:flex">
            <FaWhatsapp /> WhatsApp
          </Button>
          <Button
            onClick={() => setMenuIsOpen((prevState) => !prevState)}
            variant={"outline"}
            size={"icon"}
            className="lg:hidden"
          >
            {menuIsOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul
        className={cn(
          `flex flex-col items-center gap-y-4 lg:hidden w-full h-[calc(100vh_-_84px)] justify-center`,
          menuIsOpen ? `flex` : `hidden`
        )}
      >
        {links.map((link, i) => {
          return (
            <li key={i} onClick={() => setMenuIsOpen(false)}>
              <a
                href={`${link.href}`}
                className="text-lg font-semibold tracking-wider uppercase hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          );
        })}

        <Button onClick={() => setMenuIsOpen(false)} className="flex mt-4">
          <FaWhatsapp /> WhatsApp
        </Button>
      </ul>
    </header>
  );
};

const links = [
  { label: "home", href: "#" },
  { label: "about us", href: "#about" },
  { label: "features", href: "#features" },
  { label: "contact", href: "#contact" },
];
