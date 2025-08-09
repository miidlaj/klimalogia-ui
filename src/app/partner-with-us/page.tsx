"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Globe2,
  HandshakeIcon,
  LineChart,
  Shield,
  Users2,
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

const benefits: Benefit[] = [
  {
    title: "Expertise You Can Trust",
    description:
      "Deep industry knowledge and innovative sustainability solutions.",
    icon: Shield,
    color: "blue",
  },
  {
    title: "Amplified Impact",
    description:
      "Maximize collective impact by leveraging shared expertise and resources.",
    icon: LineChart,
    color: "green",
  },
  {
    title: "Global Reach, Local Insights",
    description:
      "International best practices combined with localized approaches.",
    icon: Globe2,
    color: "teal",
  },
  {
    title: "Customized Collaboration",
    description: "Partnership frameworks aligned with your strategic goals.",
    icon: HandshakeIcon,
    color: "primary",
  },
  {
    title: "Enhanced Credentials",
    description: "Position your organization as a leader in climate action.",
    icon: Building2,
    color: "blue",
  },
  {
    title: "Collective Innovation",
    description: "Join a network driving sustainable transformation.",
    icon: Users2,
    color: "green",
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
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <HeroBg video="/partner.mp4" image="/partner.png">
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
            className="text-lg md:text-xl max-w-3xl mx-auto my-8 text-white"
          >
            Partner with a globally trusted name in sustainability and climate
            change solutions. Together, we can create transformative impact.
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
                Why Partner With Us?
              </h2>
            </GradientUnderline>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} delay={0.1 * (index + 1)} />
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
              Let&apos;s Build Together
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              At Klimalogia, we believe that partnerships are key to solving the
              world&apos;s most pressing climate challenges. Join us in creating
              innovative, impactful solutions for a more sustainable future.
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
