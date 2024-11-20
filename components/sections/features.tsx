"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Building2,
  Globe,
  Grid2X2,
  Grip,
  Handshake,
  House,
  RefreshCw,
} from "lucide-react";
import { Card } from "../ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ScrollArea } from "@/components/ui/scroll-area";

export const Features = () => {
  return (
    <section id="features" className="flex py-20">
      <div className="container">
        <motion.div
          className="flex flex-col w-max"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: false }}
        >
          <h1 className="flex text-4xl font-extrabold lg:text-5xl text-primary gap-x-1 drop-shadow">
            Features <Handshake className="text-muted-foreground" />
          </h1>
          <p className="text-sm text-muted-foreground lg:text-base">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-10 md:grid-cols-2 xl:grid-cols-3 lg:mt-20">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                viewport={{ once: false, amount: 0.4 }}
              >
                <Dialog>
                  <DialogTrigger>
                    <Card className="flex flex-col justify-between gap-4 p-6 transition bg-white cursor-pointer hover:border-primary hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-primary/25 dark:bg-secondary">
                      <div className="flex items-center gap-x-2">
                        <feature.icon className="lg:size-12 size-10 text-primary" />
                        <div className="flex flex-col justify-center">
                          <strong className="text-sm lg:text-base text-primary">
                            {feature.title}
                          </strong>
                          <p className="text-xs text-left lg:text-sm text-muted-foreground">
                            {feature.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="px-2 text-sm text-left lg:text-base">
                        {feature.description.short}
                      </p>

                      <span className="flex items-center self-end text-sm font-medium transition w-max gap-x-1 text-primary">
                        {`Read`} <ArrowRight className="size-5" />
                      </span>
                    </Card>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div className="flex items-center text-primary gap-x-2">
                          <feature.icon /> {feature.title}
                        </div>
                      </DialogTitle>
                      <ScrollArea className="max-h-[50vh] h-full text-muted-foreground text-sm text-left p-1">
                        <DialogDescription>
                          {feature.description.full}
                        </DialogDescription>
                      </ScrollArea>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: House,
    title: "Residential Cleaning",
    subtitle: "Residential Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    subtitle: "Commercial Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
  {
    icon: Globe,
    title: "Deep Cleaning",
    subtitle: "Deep Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
  {
    icon: RefreshCw,
    title: "Move In/Out Cleaning",
    subtitle: "Move In/Out Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
  {
    icon: Grid2X2,
    title: "Window Cleaning",
    subtitle: "Window Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
  {
    icon: Grip,
    title: "Carpet Cleaning",
    subtitle: "Carpet Cleaning",
    description: {
      short:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque blanditiis doloribus ipsum consequatur impedit iste temporibus aut facere distinctio possimus?",
      full: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facilis aliquam rerum quis? Quos autem eum fuga suscipit iste laborum architecto amet tempore incidunt! Nesciunt similique facere eum, laudantium inventore, fugit officia quisquam repellendus dolores at quas consequuntur aliquam officiis vel voluptatum qui rem ratione! Nostrum illum dolores consequatur corporis. Accusamus voluptatem fugiat corrupti ea exercitationem deleniti quisquam distinctio ab. Repellendus esse corrupti porro pariatur illum, repellat quidem, commodi nisi, ratione neque tempora impedit officiis velit. Esse, expedita. Doloribus quae modi, deleniti vero saepe delectus iure, sunt, dignissimos aut tenetur velit eveniet repellat! Est nemo reiciendis maxime, laboriosam earum dicta.",
    },
  },
];
