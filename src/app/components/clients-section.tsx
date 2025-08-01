"use client";

import { Building2, Landmark, Users, Factory, Banknote } from "lucide-react";
import { BentoGrid, BentoCard } from "./bento-grid";
import { ShinyButton } from "./shiny-button";
import Link from "next/link";

const allClientCards = [
  {
    name: "Corporations",
    className: "col-span-3 lg:col-span-4",
    Icon: Building2,
    description:
      "Global enterprises seeking to integrate sustainability into core strategy.",
    href: "/clients",
    cta: "View Clients",
    background: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-full bg-gradient-to-br from-blue-50/50 to-blue-100/50" />
        <Building2 className="absolute h-3/4 w-3/4 text-blue-200/50 transition-transform duration-300 group-hover:scale-105" />
      </div>
    ),
  },
  {
    name: "Governments",
    className: "col-span-3 lg:col-span-2",
    Icon: Landmark,
    description: "Public sector organizations implementing climate policies.",
    href: "/clients",
    cta: "View Clients",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-green-100/70" />
    ),
  },
  {
    name: "Institutions & NGOs",
    className: "col-span-3 lg:col-span-2",
    Icon: Users,
    description: "Non-profits and organizations driving climate action.",
    href: "/clients",
    cta: "View Clients",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/70 to-purple-100/70" />
    ),
  },
  {
    name: "Manufacturing & Industrial",
    className: "col-span-3 lg:col-span-2",
    Icon: Factory,
    description: "Sustainable solutions for complex industrial sectors.",
    href: "/clients",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/70 to-orange-100/70" />
    ),
  },
  {
    name: "Financial Services",
    className: "col-span-3 lg:col-span-2",
    Icon: Banknote,
    description: "ESG reporting and sustainable finance solutions.",
    href: "/clients",
    cta: "Learn More",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 to-red-100/70" />
    ),
  },
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by corporations, governments, and institutions worldwide to
            deliver impactful and credible ESG leadership.
          </p>
        </div>

        <BentoGrid className="lg:grid-cols-6">
          {allClientCards.map((card) => (
            <BentoCard key={card.name} {...card} />
          ))}
        </BentoGrid>

        <div className="text-center mt-16">
          <Link href={"/clients"}>
            <ShinyButton>View Our Client Stories</ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
