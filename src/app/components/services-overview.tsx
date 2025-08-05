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
import { BentoGrid } from "./bento-grid";
import { ShimmerButton } from "./shimmer-button";

const colorConfig = {
  blue: {
    text: "text-[var(--brand-blue)]",
    border: "border-[var(--brand-blue)]/20",
    glow: "shadow-[var(--brand-blue)]/25",
    button:
      "linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)",
    gradient:
      "from-[var(--brand-blue)]/20 via-[var(--brand-blue)]/10 to-transparent",
    iconGradient: "from-[var(--brand-blue)] to-[var(--brand-navy)]",
  },
  green: {
    text: "text-[var(--brand-green)]",
    border: "border-[var(--brand-green)]/20",
    glow: "shadow-[var(--brand-green)]/25",
    button:
      "linear-gradient(135deg, var(--brand-green) 0%, var(--brand-dark-green) 50%, var(--brand-forest) 100%)",
    gradient:
      "from-[var(--brand-green)]/20 via-[var(--brand-green)]/10 to-transparent",
    iconGradient: "from-[var(--brand-green)] to-[var(--brand-dark-green)]",
  },
  teal: {
    text: "text-[var(--brand-teal)]",
    border: "border-[var(--brand-teal)]/20",
    glow: "shadow-[var(--brand-teal)]/25",
    button:
      "linear-gradient(135deg, var(--brand-light-teal) 0%, var(--brand-teal) 50%, var(--brand-blue) 100%)",
    gradient:
      "from-[var(--brand-teal)]/20 via-[var(--brand-teal)]/10 to-transparent",
    iconGradient: "from-[var(--brand-teal)] to-[var(--brand-blue)]",
  },
  primary: {
    text: "text-[var(--brand-primary)]",
    border: "border-[var(--brand-primary)]/20",
    glow: "shadow-[var(--brand-primary)]/25",
    button:
      "linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-light-teal) 50%, var(--brand-teal) 100%)",
    gradient:
      "from-[var(--brand-primary)]/20 via-[var(--brand-primary)]/10 to-transparent",
    iconGradient: "from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
  },
};

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
    color: "teal",
    stats: "500+ Projects",
    ...colorConfig.teal,
  },
  {
    Icon: Monitor,
    name: "Digital Solutions",
    description: "Data-driven insights and advanced modeling tools.",
    href: "/services/digital-solutions",
    cta: "Discover Digital",
    className: "col-span-3 lg:col-span-2",
    color: "primary",
    stats: "20+ Tools",
    ...colorConfig.primary,
  },
];
export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-green-400/10 to-orange-400/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-light-teal">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Klimalogia, we deliver end-to-end climate and sustainability
            solutions designed to help your business meet its goals.
          </p>
        </motion.div>

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
                      background={card.button}
                      className="w-full group/btn"
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center flex justify-center items-center mt-20"
        >
          <Link href={"/services"}>
            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="group shadow-2xl px-8 py-3"
            >
              <span className="text-white flex items-center gap-2">
                View All Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
