import { TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  Facebook,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Youtube,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact" className="flex py-20">
      <div className="container">
        <div className="flex flex-col">
          <h1 className="flex text-4xl font-extrabold lg:text-5xl text-primary gap-x-1 drop-shadow">
            Contact Us <Handshake className="text-muted-foreground" />
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>

        <div className="flex flex-col mt-10 lg:flex-row lg:mt-20">
          <div className="flex flex-col lg:pr-8 basis-1/2 gap-y-8">
            <strong className="flex items-center text-xl lg:text-2xl gap-x-2">
              <Mail className="lg:size-8" />
              Get in Touch With Us!
            </strong>
            <ul className="flex flex-col text-sm gap-y-4 lg:text-base text-muted-foreground">
              <li className="flex items-center gap-x-2">
                <MapPin className="text-primary" /> 123 Street Fighter, Clean
                City, RJ 12345
              </li>
              <li className="flex items-center gap-x-2">
                <Mail className="text-primary" /> lyrarod@gmail.com
              </li>
              <li className="flex items-center gap-x-2">
                <PhoneCall className="text-primary" /> +55 21 99999-9999
              </li>
              <li className="flex items-center gap-x-2">
                <FaWhatsapp className="text-primary size-6" /> +55 21 88888-8888
              </li>
            </ul>

            <ul className="grid grid-cols-2 gap-4 lg:gap-8">
              {[
                {
                  icon: Youtube,
                  title: "YouTube",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                },
                {
                  icon: TwitterLogoIcon,
                  title: "Twitter",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                },
                {
                  icon: Facebook,
                  title: "Facebook",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                },
                {
                  icon: Instagram,
                  title: "Instagram",
                  description:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
                },
              ].map((contact, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-col items-center p-4 text-center border rounded-md shadow gap-y-2 bg-card"
                  >
                    <contact.icon className="size-8 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                    <strong className="text-sm">{contact.title}</strong>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative z-0 flex flex-col mt-10 basis-1/2 lg:mt-0">
            <img
              src="/contact.jpg"
              alt="contact image"
              className="object-cover w-full h-full shadow-md shadow-gray-400 dark:shadow-none"
            />
            <div className="absolute w-full h-full -top-3 -right-3 bg-gradient-to-l from-primary to-emerald-300 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
