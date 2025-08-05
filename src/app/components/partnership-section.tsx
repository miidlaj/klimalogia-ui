"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaRocket,
  FaLightbulb,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { ShimmerButton } from "./shimmer-button";
import { cn } from "@/lib/utils";

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

const partnershipCards = [
  {
    name: "Strategic Alliances",
    className: "col-span-1",
    Icon: FaHandshake,
    description:
      "Long-term partnerships built on shared values and mutual success.",
    href: "/partner-with-us",
    cta: "Partner Now",
    color: "blue",
    stats: "50+ Partners",
  },
  {
    name: "Global Reach",
    className: "col-span-1",
    Icon: FaGlobeAmericas,
    description:
      "Expand your impact through our international network and expertise.",
    href: "/partner-with-us",
    cta: "Learn More",
    color: "green",
    stats: "25+ Countries",
  },
  {
    name: "Scalable Impact",
    className: "col-span-1",
    Icon: FaRocket,
    description:
      "Amplify collective impact through combined capabilities and resources.",
    href: "/partner-with-us",
    cta: "Explore",
    color: "teal",
    stats: "10x Growth",
  },
  {
    name: "Innovation Hub",
    className: "col-span-1",
    Icon: FaLightbulb,
    description:
      "Co-create innovative solutions for complex sustainability challenges.",
    href: "/partner-with-us",
    cta: "Innovate",
    color: "primary",
    stats: "100+ Projects",
  },
];

export function PartnershipSection() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-blue)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-r from-[var(--brand-teal)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-sm font-medium text-gray-700 mb-4">
              <FaStar className="w-4 h-4 text-[var(--brand-primary)]" />
              Trusted by Industry Leaders
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal bg-clip-text text-transparent">
                Strategic
              </span>
              <br />
              <span className="bg-gradient-to-r from-brand-light-teal via-brand-teal to-brand-green bg-clip-text text-transparent">
                Partnerships
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join forces with Klimalogia to create transformative impact
              through strategic collaboration and shared commitment to
              sustainability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partnershipCards.map((card, index) => {
            const theme = colorConfig[card.color as keyof typeof colorConfig];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <div
                  className={cn(
                    "relative h-full backdrop-blur-xl rounded-3xl overflow-hidden border bg-white/80 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col",
                    theme.border,
                    `hover:${theme.glow}`
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity duration-500",
                      theme.gradient
                    )}
                  />
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500" />
                  <div className="relative p-8 flex-grow flex flex-col">
                    <div className="mb-6">
                      <div
                        className={cn(
                          "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110",
                          theme.iconGradient
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
                            theme.text
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
                        background={theme.button}
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
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative backdrop-blur-xl rounded-3xl p-12 text-center border border-white/20 bg-gradient-to-br from-white/40 via-white/30 to-white/20 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/5 via-[var(--brand-teal)]/5 to-[var(--brand-green)]/5" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-100/80 to-gray-200/80 text-sm font-medium text-gray-700 mb-6">
                <FaUsers className="w-4 h-4" />
                Join Our Partner Network
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ready to Partner with Us?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Whether you&apos;re looking to advance sustainability goals or
                create shared impact, we&apos;re ready to collaborate and build
                something meaningful together.
              </p>
              <div className="flex flex-col items-center gap-6">
                <Link href={"/partner-with-us"}>
                  <ShimmerButton background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Explore Partnership Opportunities
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </ShimmerButton>
                </Link>
                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--brand-green)] rounded-full animate-pulse" />
                    100+ Active Partners
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--brand-blue)] rounded-full animate-pulse" />
                    25+ Countries
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[var(--brand-teal)] rounded-full animate-pulse" />
                    $50M+ Impact Created
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
