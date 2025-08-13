"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Globe2,
  HandshakeIcon,
  LineChart,
  Shield,
  ArrowRight,
} from "lucide-react";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { cn } from "@/lib/utils";
import React from "react";
import { ShimmerButton } from "../components/shimmer-button";
import HeroBg from "@/components/hero-bg";

// Color configuration remains the same, as it drives the card accents
const colorConfig = {
  blue: {
    border: "border-[var(--brand-blue)]/20",
    glow: "shadow-[var(--brand-blue)]/25",
    gradient: "from-[var(--brand-blue)]/20 to-transparent",
    iconGradient: "from-[var(--brand-blue)] to-[var(--brand-navy)]",
  },
  green: {
    border: "border-[var(--brand-green)]/20",
    glow: "shadow-[var(--brand-green)]/25",
    gradient: "from-[var(--brand-green)]/20 to-transparent",
    iconGradient: "from-[var(--brand-green)] to-[var(--brand-dark-green)]",
  },
  teal: {
    border: "border-[var(--brand-teal)]/20",
    glow: "shadow-[var(--brand-teal)]/25",
    gradient: "from-[var(--brand-teal)]/20 to-transparent",
    iconGradient: "from-[var(--brand-teal)] to-[var(--brand-blue)]",
  },
  primary: {
    border: "border-[var(--brand-primary)]/20",
    glow: "shadow-[var(--brand-primary)]/25",
    gradient: "from-[var(--brand-primary)]/20 to-transparent",
    iconGradient: "from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
  },
};

type ColorTheme = keyof typeof colorConfig;

type Benefit = {
  title: string;
  description: string;
  icon: React.ElementType;
  color: ColorTheme;
};

// Updated benefits content
const benefits: Benefit[] = [
  {
    title: "Proven Expertise",
    description:
      "With nearly a decade of experience, we bring deep technical knowledge and industry insight to every partnership. Our team is trusted by leading organizations to deliver high-impact climate and sustainability solutions tailored to evolving business needs.",
    icon: Shield,
    color: "blue",
  },
  {
    title: "Scalable Impact",
    description:
      "Our partnerships are designed to maximize collective impact. By combining capabilities, networks, and resources, we help our partners achieve greater scale, accelerate climate action, and unlock shared value that lasts.",
    icon: LineChart,
    color: "green",
  },
  {
    title: "Global Reach",
    description:
      "Operating across regions, we combine global best practices with localized execution to ensure relevance, responsiveness, and lasting outcomes.",
    icon: Globe2,
    color: "teal",
  },
  {
    title: "Flexible Collaboration",
    description:
      "From strategic alliances to joint ventures, we offer customized collaboration models that are built around your goals, values, and vision for impact.",
    icon: HandshakeIcon,
    color: "primary",
  },
  {
    title: "Reputation and Credibility",
    description:
      "Partnering with Klimalogia enhances your visibility, strengthens your sustainability credentials, and positions your organization as a purpose-driven leader committed to delivering real climate impact.",
    icon: Building2,
    color: "blue",
  },
];

const BenefitCard = ({
  icon: Icon,
  title,
  description,
  delay,
  color,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay: number;
  color: ColorTheme;
}) => {
  const theme = colorConfig[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay }}
      className="group h-full"
    >
      <div
        className={cn(
          "relative overflow-hidden h-full text-left p-8 rounded-3xl bg-white/60 backdrop-blur-xl border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1",
          theme.border,
          `hover:${theme.glow}`
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-80 transition-opacity duration-500",
            theme.gradient
          )}
        />
        <div className="relative z-10">
          <div
            className={cn(
              "w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white shadow-md transition-transform duration-500 group-hover:scale-110",
              theme.iconGradient
            )}
          >
            <Icon className="h-8 w-8" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function PartnerPage() {
  return (
    <div className="min-h-screen  text-gray-800">
      <HeroBg video="/partner.mp4" image="/partnership.png">
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <GradientUnderline underlineWidth={80} spacing={4}>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Join Forces with Klimalogia
              </h1>
            </GradientUnderline>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl max-w-4xl mx-auto my-8 text-white/90"
          >
            Klimalogia is a globally trusted provider of climate and
            sustainability solutions, working with organizations across
            industries and markets to accelerate progress toward a resilient and
            value-driven future. Through strategic collaboration, we engage with
            businesses, governments, non-profits, and innovators to unlock
            opportunities, scale impact, and deliver measurable results. Our
            partnerships are built on a shared commitment to measurable impact,
            long-term value, and climate leadership.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link href="/contact-us">
              <ShimmerButton
                background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                className="px-8 py-3"
              >
                Explore Partnership Opportunities
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </HeroBg>

      <div id="nav-trigger" />

      <section className="py-20 md:py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <GradientUnderline underlineWidth={50} spacing={4} className="mb-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Why Partner With Klimalogia?
              </h2>
            </GradientUnderline>
          </motion.div>

          {/* IMPROVED RESPONSIVE GRID for 5 items */}
          {/* This grid creates a 3-over-2 layout on large screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  // First 3 items span 2 columns on lg screens
                  index < 3 ? "lg:col-span-2" : "",
                  // Last 2 items span 3 columns on lg screens, creating a centered 2-card row
                  index >= 3 ? "lg:col-span-3" : ""
                )}
              >
                <BenefitCard {...benefit} delay={0.1 * (index + 1)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-white">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-60 bg-[var(--brand-primary)]/10 blur-[100px] rounded-full" />

        <div className="container flex flex-col justify-center items-center mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Let’s Build Together
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed text-justify">
              At Klimalogia, we believe strong partnerships are essential to
              driving meaningful climate action and long-term value. By joining
              forces, we can co-create innovative, scalable solutions that
              tackle today’s environmental and business challenges head-on.
              Whether you&apos;re looking to advance your sustainability goals,
              strengthen your ESG leadership, or create shared impact, we’re
              ready to collaborate. Let’s start a conversation and explore how
              we can work together to shape a more resilient, future-ready
              world.
            </p>

            <div className="flex justify-center items-center">
              <Link href="/contact-us">
                <ShimmerButton
                  background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                  className="px-8 py-3 group"
                >
                  <span className="flex items-center gap-2">
                    Partner with Us
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
