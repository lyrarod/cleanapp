import { Clock, Shield, Sparkles } from "lucide-react";
import { Card } from "../ui/card";

export const WhyChoose = () => {
  return (
    <section id="whychooseus" className="flex py-20 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-medium lg:text-4xl md:text-3xl">
          Why Choose <span className="text-primary">{`CleanApp`}</span>
        </h2>

        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          {chooses.map((choose, i) => {
            return (
              <Card key={i} className="bg-white dark:bg-background">
                <div className="flex flex-col gap-4 p-6">
                  <choose.icon className="lg:size-8 text-primary" />
                  <strong className="text-sm lg:text-base">
                    {choose.title}
                  </strong>
                  <p className="text-sm lg:text-base text-muted-foreground">
                    {choose.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const chooses = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description:
      "We use eco-friendly products and advanced cleaning techniques",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Punctual service with respect for your schedule",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Your property is protected with our comprehensive insurance",
  },
];
