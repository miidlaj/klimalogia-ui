"use client"

import { Target, Eye, Shield, Scale, Heart, Lightbulb } from "lucide-react"
import { BoxReveal } from "./box-reveal"
import { BentoGrid, BentoCard } from "./bento-grid"
import { ShinyButton } from "./shiny-button"

const missionCard = {
  name: "Mission",
  className: "col-span-3 lg:col-span-2",
  background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
  Icon: Target,
  description:
    "To help organizations take meaningful climate action by delivering practical, impactful, and result-oriented sustainability solutions that enhance competitiveness, reduce risk, and create long-term value for people, business, and the planet.",
  href: "/mission-vision",
  cta: "Learn More",
}

const visionCard = {
  name: "Vision",
  className: "col-span-3 lg:col-span-2",
  background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
  Icon: Eye,
  description:
    "To create an inclusive, resilient and regenerative future by enabling businesses, communities, and institutions to drive positive change, integrate sustainability into core strategy, respond effectively to climate challenges, and generate long-term environmental, social, and economic value.",
  href: "/mission-vision",
  cta: "Learn More",
}

const valueCards = [
  {
    name: "Respect",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-50" />,
    Icon: Shield,
    description: "Championing inclusivity, collaboration, and care for people and the planet.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Integrity",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Scale,
    description: "Upholding the highest ethical standards with transparency and accountability.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Sustainability",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Heart,
    description: "Embedding long-term thinking into every action and decision.",
    href: "/mission-vision",
    cta: "Our Values",
  },
  {
    name: "Excellence",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-50" />,
    Icon: Lightbulb,
    description: "Striving for the highest quality in everything we do.",
    href: "/mission-vision",
    cta: "Our Values",
  },
]

export function MissionVisionPreview() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving meaningful climate action through practical solutions and strategic partnerships
            </p>
          </div>
        </BoxReveal>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
            <div>
              <BentoGrid className="grid-cols-1">
                <BentoCard {...missionCard} />
              </BentoGrid>
            </div>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
            <div>
              <BentoGrid className="grid-cols-1">
                <BentoCard {...visionCard} />
              </BentoGrid>
            </div>
          </BoxReveal>
        </div>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8">Core Values (RISE)</h3>
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {valueCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#f59e0b" duration={0.8}>
          <div className="text-center">
            <ShinyButton onClick={() => (window.location.href = "/mission-vision")}>
              Learn More About Our Values
            </ShinyButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
