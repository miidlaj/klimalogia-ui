"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lightbulb,
  Shield,
  Zap,
  Monitor,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoGrid } from "./bento-grid"; // Keep BentoGrid for the layout
import { ShimmerButton } from "./shimmer-button"; // Use the ShimmerButton for consistency

// 1. A color configuration to manage theming for each card
const colorConfig = {
  blue: {
    text: "text-blue-600",
    border: "border-blue-200/50",
    glow: "shadow-blue-500/25",
    button: "bg-gradient-to-r from-blue-600 to-blue-700",
    gradient: "from-blue-500/20 via-blue-400/10 to-transparent",
    iconGradient: "from-blue-500 to-blue-600",
  },
  green: {
    text: "text-green-600",
    border: "border-green-200/50",
    glow: "shadow-green-500/25",
    button: "bg-gradient-to-r from-green-600 to-green-700",
    gradient: "from-green-500/20 via-green-400/10 to-transparent",
    iconGradient: "from-green-500 to-green-600",
  },
  purple: {
    text: "text-purple-600",
    border: "border-purple-200/50",
    glow: "shadow-purple-500/25",
    button: "bg-gradient-to-r from-purple-600 to-purple-700",
    gradient: "from-purple-500/20 via-purple-400/10 to-transparent",
    iconGradient: "from-purple-500 to-purple-600",
  },
  orange: {
    text: "text-orange-600",
    border: "border-orange-200/50",
    glow: "shadow-orange-500/25",
    button: "bg-gradient-to-r from-orange-600 to-orange-700",
    gradient: "from-orange-500/20 via-orange-400/10 to-transparent",
    iconGradient: "from-orange-500 to-orange-600",
  },
};

// 2. Updated features array with new properties for advanced styling
const features = [
  {
    Icon: Lightbulb,
    name: "Strategy & Advisory",
    description: "Shaping your sustainable future from strategy to finance.",
    href: "/services/strategy-advisory",
    cta: "Explore Strategy",
    className: "col-span-3 lg:col-span-2",
    color: "blue",
    stats: "100+ Strategies",
    ...colorConfig.blue,
  },
  {
    Icon: Shield,
    name: "Assurance & Compliance",
    description: "Third-party verification and certification you can trust.",
    href: "/services/assurance-compliance",
    cta: "Verify with Us",
    className: "col-span-3 lg:col-span-1",
    color: "green",
    stats: "99% Compliance",
    ...colorConfig.green,
  },
  {
    Icon: Zap,
    name: "Action & Transformation",
    description: "Implementing tangible changes for real-world impact.",
    href: "/services/action-transformation",
    cta: "Take Action",
    className: "col-span-3 lg:col-span-1",
    color: "purple",
    stats: "500+ Projects",
    ...colorConfig.purple,
  },
  {
    Icon: Monitor,
    name: "Digital Solutions",
    description: "Data-driven insights and advanced modeling tools.",
    href: "/services/digital-solutions",
    cta: "Discover Digital",
    className: "col-span-3 lg:col-span-2",
    color: "orange",
    stats: "20+ Tools",
    ...colorConfig.orange,
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-light-teal">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Klimalogia, we deliver end-to-end climate and sustainability
            solutions designed to help your business meet its goals.
          </p>
        </div>

        {/* Using BentoGrid for layout but custom JSX for the cards */}
        <BentoGrid className="lg:grid-cols-3">
          {features.map((card, index) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={cn("group h-full", card.className)}
            >
              <div
                className={cn(
                  "relative h-full backdrop-blur-xl rounded-3xl overflow-hidden border bg-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col",
                  card.border,
                  `hover:${card.glow}`
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-500",
                    card.gradient
                  )}
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
                <div className="relative p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110",
                        card.iconGradient
                      )}
                    >
                      <card.Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {card.name}
                      </h3>
                      <span
                        className={cn(
                          "text-xs font-semibold px-2 py-1 rounded-full bg-white/50",
                          card.text
                        )}
                      >
                        {card.stats}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>
                  <Link href={card.href} className="mt-auto">
                    <ShimmerButton
                      background={card.color}
                      className={cn("w-full group/btn", card.button)}
                    >
                      <span className="text-white flex items-center justify-center gap-2 font-medium">
                        {card.cta}
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </ShimmerButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </BentoGrid>

        <div className="text-center flex justify-center items-center mt-20">
          <Link href={"/services"}>
            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="group shadow-2xl bg-gradient-to-r from-gray-800 to-black px-8 py-3"
            >
              <span className="text-white flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
