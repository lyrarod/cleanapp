import {
  Facebook,
  Handshake,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
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
              Get in Touch With Us!
            </strong>
            <ul className="flex flex-col text-sm gap-y-4 lg:text-base text-muted-foreground">
              {contacts.map((contact, i) => {
                return (
                  <li key={i} className="flex items-center gap-x-2">
                    <contact.icon className="text-primary lg:size-6 size-5" />
                    {contact.title}
                  </li>
                );
              })}
            </ul>

            <ul className="grid grid-cols-2 gap-4 lg:gap-8">
              {socials.map((social, i) => {
                return (
                  <li
                    key={i}
                    className="flex flex-col items-center p-4 text-center bg-white border rounded-md shadow dark:bg-secondary gap-y-2"
                  >
                    <social.icon className="lg:size-8 size-6 text-primary" />
                    <strong className="text-sm text-muted-foreground">
                      {social.title}
                    </strong>
                    <p className="text-sm text-muted-foreground">
                      {social.description}
                    </p>
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

const contacts = [
  { icon: MapPin, title: "123 Street Fighter, Clean City, RJ 12345" },
  { icon: Mail, title: "lyrarod@gmail.com" },
  { icon: PhoneCall, title: "+55 21 99999-9999" },
  { icon: FaWhatsapp, title: "+55 21 88888-8888" },
];

const socials = [
  {
    icon: Youtube,
    title: "YouTube",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    icon: Facebook,
    title: "Facebook",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
];
