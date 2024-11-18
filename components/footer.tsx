import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Logo } from "./logo";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col bg-muted-foreground text-muted"
    >
      <div className="container flex flex-col py-8 md:justify-between lg:flex-row gap-y-1">
        <div>
          <Logo />
          <p className="text-sm">
            Professional Cleaning for Your Peace of Mind.
          </p>
        </div>

        <div className="flex flex-col mt-8 space-y-2 lg:mt-0">
          <strong className="capitalize">Links</strong>
          {[
            { label: "Features", href: "#features" },
            { label: "Why Choose Us", href: "#whychooseus" },
            { label: "Testimonials", href: "#testimonials" },
          ].map((link, i) => {
            return (
              <a
                key={i}
                href={link.href}
                className="text-sm capitalize transition hover:underline"
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col mt-8 space-y-2 lg:mt-0">
          <strong className="capitalize">support</strong>
          {["help center", "Privacy Policy", "Terms of Service"].map(
            (link, i) => {
              return (
                <a
                  href="#"
                  key={i}
                  className="text-sm capitalize transition hover:underline"
                >
                  {link}
                </a>
              );
            }
          )}
        </div>

        <div className="flex flex-col mt-8 space-y-2 lg:mt-0">
          <strong>Connect With Us</strong>
          <div className="flex gap-x-4">
            <a href="#">
              <Twitter className="transition hover:scale-105" />
            </a>
            <a href="#">
              <Facebook className="transition hover:scale-105" />
            </a>
            <a href="#">
              <Instagram className="transition hover:scale-105" />
            </a>
            <a href="#">
              <Youtube className="transition hover:scale-105" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t">
        <p className="container py-4 text-xs lg:text-sm">
          Copyright &copy; {new Date().getFullYear()} CleanApp. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
