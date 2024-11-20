"use client";

import { delay, motion } from "framer-motion";

import { CheckCircle, Handshake } from "lucide-react";
import { Separator } from "../ui/separator";

export const About = () => {
  return (
    <section id="about" className="flex py-20">
      <div className="container">
        <motion.div
          className="flex flex-col w-max"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          <h1 className="flex text-4xl font-extrabold lg:text-5xl text-primary gap-x-1 drop-shadow">
            About Us <Handshake className="text-muted-foreground" />
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>

        <div className="flex flex-col mt-10 lg:mt-20 lg:flex-row">
          <div className="flex flex-col lg:pr-8 basis-1/2 lg:gap-y-8 gap-y-4">
            <motion.strong
              className="text-xl md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Who We <span className="text-primary">Are</span>?
            </motion.strong>
            <motion.p
              className="text-sm lg:text-base text-muted-foreground"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nemo tempore non nostrum iure, repellendus debitis
              delectus perferendis. Libero suscipit sunt culpa recusandae quae
              perspiciatis, commodi illo velit earum ipsum.
            </motion.p>

            <ul className="flex flex-col gap-y-2">
              {[
                "14+ years of industry experience",
                "5000+ satisfied customers",
                "100% satisfaction guaranteed",
                "Eco-friendly cleaning solutions",
              ].map((item, i) => {
                return (
                  <motion.li
                    key={i}
                    className="flex items-center text-sm lg:text-base gap-x-2"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <CheckCircle className="text-primary size-5 lg:size-6" />{" "}
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <motion.div
            className="relative flex mt-10 lg:mt-0 basis-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="/about.jpg"
              alt="about image"
              className="object-cover w-full h-full shadow-md shadow-gray-400 dark:shadow-none"
            />
            <div className="absolute w-full h-full -top-3 -right-3 -z-10 bg-gradient-to-l from-primary to-emerald-300"></div>
          </motion.div>
        </div>

        <Separator className="lg:my-20 my-16" />

        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex flex-col lg:pl-8 basis-1/2 lg:gap-y-8 gap-y-4">
            <motion.strong
              className="text-xl md:text-2xl lg:text-3xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              What do we <span className="text-primary">Clean</span>?
            </motion.strong>

            <motion.p
              className="text-sm lg:text-base text-muted-foreground"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus nemo tempore non nostrum iure, repellendus debitis
              delectus perferendis. Libero suscipit sunt culpa recusandae quae
              perspiciatis, commodi illo velit earum ipsum.
            </motion.p>

            <ul className="flex flex-col gap-y-2">
              {[
                "14+ years of industry experience",
                "5000+ satisfied customers",
                "100% satisfaction guaranteed",
                "Eco-friendly cleaning solutions",
              ].map((item, i) => {
                return (
                  <motion.li
                    key={i}
                    className="flex items-center text-sm lg:text-base gap-x-2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <CheckCircle className="text-primary size-5 lg:size-6" />{" "}
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <motion.div
            className="relative flex mt-10 lg:mt-0 basis-1/2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <img
              src="/pexels-mastercowley-713297.jpg"
              alt="about image"
              className="object-cover w-full h-full shadow-md shadow-gray-400 dark:shadow-none"
            />
            <div className="absolute w-full h-full -top-3 -left-3 -z-10 bg-gradient-to-r from-primary to-emerald-300"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
