/* eslint-disable @next/next/no-img-element */
"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ElementType } from "react";
import {
  HeartHandshake,
  ShieldCheck,
  Leaf,
  Trophy,
  Rocket,
  Eye,
  ArrowRight,
} from "lucide-react";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "../components/shimmer-button";
import HeroBg from "@/components/hero-bg";

const colorConfig = {
  blue: {
    text: "text-[var(--brand-blue)]",
    border: "border-[var(--brand-blue)]/20",
    glow: "shadow-[var(--brand-blue)]/25",
    gradient: "from-[var(--brand-blue)]/20 to-transparent",
    iconGradient: "from-[var(--brand-blue)] to-[var(--brand-navy)]",
  },
  green: {
    text: "text-[var(--brand-green)]",
    border: "border-[var(--brand-green)]/20",
    glow: "shadow-[var(--brand-green)]/25",
    gradient: "from-[var(--brand-green)]/20 to-transparent",
    iconGradient: "from-[var(--brand-green)] to-[var(--brand-dark-green)]",
  },
  teal: {
    text: "text-[var(--brand-teal)]",
    border: "border-[var(--brand-teal)]/20",
    glow: "shadow-[var(--brand-teal)]/25",
    gradient: "from-[var(--brand-teal)]/20 to-transparent",
    iconGradient: "from-[var(--brand-teal)] to-[var(--brand-blue)]",
  },
  primary: {
    text: "text-[var(--brand-primary)]",
    border: "border-[var(--brand-primary)]/20",
    glow: "shadow-[var(--brand-primary)]/25",
    gradient: "from-[var(--brand-primary)]/20 to-transparent",
    iconGradient: "from-[var(--brand-primary)] to-[var(--brand-light-teal)]",
  },
};

type ColorTheme = keyof typeof colorConfig;

const coreValues = [
  {
    letter: "R",
    icon: HeartHandshake,
    title: "Respect",
    description:
      "Championing inclusivity, collaboration, and care for people and the planet. Valuing diverse perspectives and honoring all stakeholders in the sustainability journey.",
    color: "blue" as keyof typeof colorConfig,
  },
  {
    letter: "I",
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Upholding the highest ethical standards with transparency, honesty, and accountability at the heart of every solution and relationship.",
    color: "green" as keyof typeof colorConfig,
  },
  {
    letter: "S",
    icon: Leaf,
    title: "Sustainability",
    description:
      "Embedding long-term thinking into every action, balancing environmental, social, and economic priorities to create resilient systems and future-ready businesses.",
    color: "teal" as keyof typeof colorConfig,
  },
  {
    letter: "E",
    icon: Trophy,
    title: "Excellence",
    description:
      "Striving for the highest quality in everything we do, delivering impactful, data-driven solutions with precision, innovation, and professionalism.",
    color: "primary" as keyof typeof colorConfig,
  },
];

const RiseCard = ({
  letter,
  icon: Icon,
  title,
  description,
  color,
  delay,
}: {
  letter: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: keyof typeof colorConfig;
  delay: number;
}) => {
  const theme = colorConfig[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="group relative h-96 cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <div className="relative h-full w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        <div
          className={`absolute inset-0 w-full h-full rounded-2xl border-2 ${theme.border} bg-gradient-to-br ${theme.gradient} overflow-hidden backface-hidden flex flex-col items-center justify-center shadow-lg hover:shadow-2xl ${theme.glow} transition-shadow duration-300`}
        >
          <div
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${theme.iconGradient} flex items-center justify-center mb-4 shadow-lg transform transition-transform duration-500 group-hover:scale-110`}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div
            className={`text-8xl font-black ${theme.text} mb-2 transform transition-transform duration-500`}
          >
            {letter}
          </div>
          <div className={`text-xl font-semibold ${theme.text} opacity-80`}>
            {title}
          </div>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="text-sm text-gray-500 opacity-60 animate-pulse">
              Hover to flip
            </div>
          </div>
        </div>

        <div
          className={`absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br ${theme.iconGradient} p-6 text-white flex flex-col justify-center backface-hidden rotate-y-180 shadow-2xl opacity-95`}
        >
          <div className="text-center mb-6">
            <div className="w-12 h-12 mx-auto rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
          </div>
          <p className="text-white/90 leading-relaxed text-center text-sm">
            {description}
          </p>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white font-bold text-lg">
              {letter}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const MissionVisionBox = ({
  icon: Icon,
  title,
  children,
  color,
}: {
  icon: ElementType;
  title: string;
  children: React.ReactNode;
  color: ColorTheme;
}) => {
  const theme = colorConfig[color];
  return (
    <div
      className={cn(
        "bg-white/60 backdrop-blur-md p-8 rounded-3xl border h-full",
        theme.border
      )}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={cn(
            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white shadow-md",
            theme.iconGradient
          )}
        >
          <Icon className="w-6 h-6" />
        </div>
        <h3 className={cn("text-3xl font-bold", theme.text)}>{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </div>
  );
};

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className="text-center mb-12 md:mb-16"
  >
    <GradientUnderline underlineWidth={40} spacing={4}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
        {children}
      </h2>
    </GradientUnderline>
  </motion.div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 relative">
      <HeroBg image="/about.png" video="/about.mp4">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Klimalogia is a globally trusted provider of climate and
              sustainability solutions.
            </motion.p>
          </div>
        </section>
      </HeroBg>

      <div id="nav-trigger" />

      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 -right-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse [animation-delay:1200ms]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeader>About Klimalogia</SectionHeader>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 text-justify">
              <p>
                Klimalogia is an international climate change and sustainability
                firm, dedicated to helping organizations navigate the transition
                to a low-carbon, climate-resilient future. Inspired by the Greek
                term klimatologia – the study of climate, our name reflects our
                mission to translate climate science into practical, actionable
                solutions for organizations worldwide.
              </p>
              <p>
                We are a multidisciplinary team with global insight, delivering
                end-to-end sustainability and climate change solutions, through
                technical depth and strategic insight to help you integrate
                climate action into business decisions and future-proof their
                operations. Trusted by corporations, governments, and
                institutions, we are known for quality, impact, and partnerships
                that drive sustainable solutions, climate-smart strategies, and
                credible ESG leadership.
              </p>
              <p>
                We bring deep expertise across sectors and regions to help
                businesses integrate sustainability into their core strategy,
                operations, and investment decisions. Whether you aim to
                accelerate decarbonization, meet regulatory requirements,
                enhance ESG performance, or access sustainable finance, we
                deliver custom, data-driven solutions that transform ambition
                into measurable results.
              </p>
              <p>
                At Klimalogia, we view sustainability as a driver of innovation,
                resilience, and long-term value, far beyond compliance. Our
                approach is built on strategic alignment with global frameworks,
                meaningful stakeholder engagement, and data-driven decision
                making, helping organizations lead with purpose and impact in a
                rapidly evolving landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-16"
          >
            <div className="bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-2xl p-8 max-w-3xl mx-auto shadow-lg text-center">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-gray-800">Klimalogia</span>{" "}
                derives from <strong>Climatology</strong> (from Greek{" "}
                <em>κλίμα</em>, klima, &quot;slope&quot;; and <em>-λογία</em>,
                -logia).
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <SectionHeader>Our Mission & Vision</SectionHeader>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <MissionVisionBox icon={Rocket} title="Mission" color="blue">
                To help organizations take meaningful climate action by
                delivering practical, impactful, and result-oriented
                sustainability solutions that enhance competitiveness, reduce
                risk, and create long-term value for people, business, and the
                planet.
              </MissionVisionBox>
              <MissionVisionBox icon={Eye} title="Vision" color="green">
                To create an inclusive, resilient and regenerative future by
                enabling businesses, communities, and institutions to drive
                positive change, integrate sustainability into core strategy,
                respond effectively to climate challenges, and generate
                long-term environmental, social, and economic value.
              </MissionVisionBox>
            </div>
          </motion.div>

          <div>
            <SectionHeader>Our Core Values</SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <RiseCard key={value.letter} {...value} delay={0.2 * index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about-end.jpg"
            alt="Partnership background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <GradientUnderline
                underlineWidth={80}
                underlineHeight={7}
                spacing={10}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Ready?
                </h1>
              </GradientUnderline>

              <p className="text-xl text-gray-200 text-justify">
                Ready to lead with purpose and drive real climate impact?
                Let&apos;s shape a sustainable future, together.
              </p>

              <div>
                <Link href="/contact-us">
                  <ShimmerButton
                    background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                    className="px-8 py-3 group"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </ShimmerButton>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
