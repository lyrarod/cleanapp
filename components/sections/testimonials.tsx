"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const MotionCard = motion(Card);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container">
        <motion.h2
          className="mb-8 text-2xl font-medium lg:text-4xl md:text-3xl w-max"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <MotionCard
              key={i}
              className="flex flex-col justify-between p-6 bg-white dark:bg-background"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 size-5 fill-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-6 text-sm text-muted-foreground lg:text-base">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={100}
                  height={100}
                  className="object-cover rounded-full size-12"
                />
                <div>
                  <strong className="text-sm">{testimonial.name}</strong>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content:
      "CleanApp has transformed how I maintain my home. Their attention to detail is outstanding, and the team is always professional and friendly.",
  },
  {
    name: "Michael Chen",
    role: "Office Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    content:
      "We've been using CleanApp for our office space for over a year now. The consistency and quality of their service have been exceptional.",
  },
  {
    name: "Emma Davis",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content:
      "In the restaurant business, cleanliness is crucial. CleanApp understands our high standards and delivers every single time.",
  },
];
