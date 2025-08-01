"use client";

import { FileText, BarChart3, Leaf, Building } from "lucide-react";
import { BentoGrid, BentoCard } from "./bento-grid";
import { ShinyButton } from "./shiny-button";

const allProjectCards = [
  {
    name: "Case Studies",
    className: "col-span-3 lg:col-span-2", // Made wider
    Icon: FileText,
    description:
      "In-depth analysis of successful sustainability transformations.",
    href: "/projects",
    cta: "View Studies",
    background: (
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-blue-100/30 to-transparent" />
    ),
  },
  {
    name: "Impact Metrics",
    className: "col-span-3 lg:col-span-1", // Narrower
    Icon: BarChart3,
    description: "Quantified results in emissions reductions and cost savings.",
    href: "/projects",
    cta: "See Data",
    background: (
      // A simple visual representation of a bar chart
      <div className="absolute bottom-0 left-0 right-0 top-10 flex h-full items-end gap-1 p-2 transition-all duration-300 group-hover:p-1">
        <div className="h-1/2 w-full rounded-sm bg-blue-200/50 transition-all duration-300 group-hover:h-3/4" />
        <div className="h-full w-full rounded-sm bg-blue-200/60 transition-all duration-300 group-hover:h-1/2" />
        <div className="h-1/3 w-full rounded-sm bg-blue-200/50 transition-all duration-300 group-hover:h-2/3" />
      </div>
    ),
  },
  {
    name: "Green Buildings & Infrastructure",
    className: "col-span-3 lg:col-span-1", // Narrower
    Icon: Building,
    description: "Sustainable design and green infrastructure solutions.",
    href: "/projects",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-green-100/70" />
    ),
  },
  {
    name: "Carbon Neutrality & Net-Zero",
    className: "col-span-3 lg:col-span-2", // Wider
    Icon: Leaf,
    description: "Comprehensive carbon reduction and neutrality strategies.",
    href: "/projects",
    cta: "Learn More",
    background: (
      <Leaf className="absolute -right-10 -bottom-10 h-40 w-40 text-green-300/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
    ),
  },
];

export function ProjectsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable impact through innovative sustainability
              solutions across diverse industries.
            </p>
          </div>

          <BentoGrid className="lg:grid-cols-3">
            {allProjectCards.map((card) => (
              <BentoCard key={card.name} {...card} />
            ))}
          </BentoGrid>

          <div className="text-center mt-16">
            <ShinyButton >
              Explore All Projects
            </ShinyButton>
          </div>
      </div>
    </section>
  );
}
