"use client";

import {
  Target,
  Eye,
  Shield,
  Scale,
  Heart,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { BentoGrid, BentoCard } from "./bento-grid";
import { ShinyButton } from "./shiny-button";
import { motion } from "framer-motion";

const missionCard = {
  name: "Mission",
  className: "col-span-3 lg:col-span-2",
  background: (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-blue-100/70" />
  ),
  Icon: Target,
  description:
    "To help organizations take meaningful climate action by delivering practical, impactful, and result-oriented sustainability solutions that enhance competitiveness, reduce risk, and create long-term value for people, business, and the planet.",
  href: "/mission-vision",
  cta: "Learn More",
};

const visionCard = {
  name: "Vision",
  className: "col-span-3 lg:col-span-2",
  background: (
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-green-100/70" />
  ),
  Icon: Eye,
  description:
    "To create an inclusive, resilient and regenerative future by enabling businesses, communities, and institutions to drive positive change, integrate sustainability into core strategy, respond effectively to climate challenges, and generate long-term environmental, social, and economic value.",
  href: "/mission-vision",
  cta: "Learn More",
};

const valueCards = [
  {
    name: "Respect",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 to-red-100/70" />
    ),
    Icon: Shield,
    description:
      "Championing inclusivity, collaboration, and care for people and the planet.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Integrity",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-blue-100/70" />
    ),
    Icon: Scale,
    description:
      "Upholding the highest ethical standards with transparency and accountability.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Sustainability",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-green-100/70" />
    ),
    Icon: Heart,
    description: "Embedding long-term thinking into every action and decision.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Excellence",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/70 to-yellow-100/70" />
    ),
    Icon: Lightbulb,
    description: "Striving for the highest quality in everything we do.",
    href: "/mission-vision",
    cta: "Our Values",
  },
];

export function MissionVisionPreview() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/4 right-20 w-72 h-72 bg-green-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
                Our Mission & Vision
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Driving meaningful climate action through practical solutions
                and strategic partnerships
              </p>
            </motion.div>
          </div>
        </BoxReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <BentoGrid className="grid-cols-1 h-full">
                <BentoCard
                  {...missionCard}
                  className="backdrop-blur-sm bg-white/70 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                />
              </BentoGrid>
            </motion.div>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
            <motion.div whileHover={{ y: -5 }} className="h-full">
              <BentoGrid className="grid-cols-1 h-full">
                <BentoCard
                  {...visionCard}
                  className="backdrop-blur-sm bg-white/70 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                />
              </BentoGrid>
            </motion.div>
          </BoxReveal>
        </div>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-bold mb-2 text-gray-800">
                Core Values <span className="text-blue-600">(RISE)</span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our guiding principles that shape every decision and action we
                take
              </p>
            </motion.div>

            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueCards.map((card) => (
                <motion.div
                  key={card.name}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <BentoCard
                    key={card.name}
                    {...card}
                    className="backdrop-blur-sm bg-white/70 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full"
                  />
                </motion.div>
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <ShinyButton
            onClick={() => (window.location.href = "/mission-vision")}
            className="group"
          >
            <span className="text-black">Explore Our Values Journey</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </ShinyButton>
        </motion.div>
      </div>
    </section>
  );
}
