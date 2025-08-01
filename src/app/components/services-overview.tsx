"use client";

import { Lightbulb, Shield, Zap, Monitor } from "lucide-react";
import { ShinyButton } from "./shiny-button";
import { BentoGrid, BentoCard } from "./bento-grid";
import Link from "next/link";

const features = [
  {
    Icon: Lightbulb,
    name: "Strategy & Advisory",
    description: "Shaping your sustainable future from strategy to finance.",
    href: "/services/strategy-advisory",
    cta: "Explore Strategy",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-blue-200/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Shield,
    name: "Assurance & Compliance",
    description: "Third-party verification and certification you can trust.",
    href: "/services/assurance-compliance",
    cta: "Verify with Us",
    className: "col-span-3 lg:col-span-1", // This card is narrower
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-green-200/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Zap,
    name: "Action & Transformation",
    description: "Implementing tangible changes for real-world impact.",
    href: "/services/action-transformation",
    cta: "Take Action",
    className: "col-span-3 lg:col-span-1", // Narrower card
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 to-purple-200/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    ),
  },
  {
    Icon: Monitor,
    name: "Digital Solutions",
    description: "Data-driven insights and advanced modeling tools.",
    href: "/services/digital-solutions",
    cta: "Discover Digital",
    className: "col-span-3 lg:col-span-2", // Wider card
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 to-orange-200/40 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
    ),
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Klimalogia, we deliver end-to-end climate and sustainability
            solutions designed to help your business meet its goals.
          </p>
        </div>

        <BentoGrid className="lg:grid-cols-3">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>

        <div className="text-center mt-16">
          <Link href={"/services"}>
            <ShinyButton className="group">
              <span className="text-black ">All Services</span>
            </ShinyButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
