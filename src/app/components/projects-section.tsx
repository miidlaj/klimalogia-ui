"use client"

import { FileText, BarChart3, Award, Leaf, Zap, Building } from "lucide-react"
import { BoxReveal } from "./box-reveal"
import { BentoGrid, BentoCard } from "./bento-grid"
import { ShinyButton } from "./shiny-button"

const projectCards = [
  {
    name: "Case Studies",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: FileText,
    description: "In-depth analysis of successful sustainability transformations and climate action implementations.",
    href: "/projects",
    cta: "View Studies",
  },
  {
    name: "Impact Metrics",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: BarChart3,
    description:
      "Quantified results demonstrating emissions reductions, cost savings, and sustainability improvements.",
    href: "/projects",
    cta: "View Metrics",
  },
  {
    name: "Recognition",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    Icon: Award,
    description: "Awards and certifications achieved through our collaborative sustainability initiatives.",
    href: "/projects",
    cta: "View Awards",
  },
]

const focusAreaCards = [
  {
    name: "Green Buildings & Infrastructure",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Building,
    description: "Sustainable building design and green infrastructure solutions.",
    href: "/projects",
    cta: "Learn More",
  },
  {
    name: "Carbon Neutrality & Net-Zero",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Leaf,
    description: "Comprehensive carbon reduction and neutrality strategies.",
    href: "/projects",
    cta: "Learn More",
  },
  {
    name: "Renewable Energy Solutions",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50" />,
    Icon: Zap,
    description: "Clean energy implementation and optimization projects.",
    href: "/projects",
    cta: "Learn More",
  },
]

export function ProjectsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable impact through innovative sustainability solutions across diverse industries and
              regions.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="mb-12">
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projectCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Project Focus Areas</h3>
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {focusAreaCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#f59e0b" duration={0.8}>
          <div className="text-center">
            <ShinyButton onClick={() => (window.location.href = "/projects")}>
              View Our Projects
            </ShinyButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
