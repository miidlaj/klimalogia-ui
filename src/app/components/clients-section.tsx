"use client"

import { Building2, Landmark, Users, Factory, Home, Banknote } from "lucide-react"
import { BoxReveal } from "./box-reveal"
import { BentoGrid, BentoCard } from "./bento-grid"
import { ShinyButton } from "./shiny-button"

const clientCards = [
  {
    name: "Corporations",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Building2,
    description:
      "Global enterprises and regional leaders across multiple industries seeking to integrate sustainability into core strategy and operations.",
    href: "/clients",
    cta: "View Clients",
  },
  {
    name: "Governments",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Landmark,
    description:
      "Public sector organizations and agencies working to implement climate policies and sustainable development initiatives.",
    href: "/clients",
    cta: "View Clients",
  },
  {
    name: "Institutions",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    Icon: Users,
    description:
      "Educational institutions, non-profits, and international organizations driving climate action and sustainability transformation.",
    href: "/clients",
    cta: "View Clients",
  },
]

const industryCards = [
  {
    name: "Manufacturing & Industrial",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Factory,
    description: "Comprehensive sustainability solutions for manufacturing and industrial sectors.",
    href: "/clients",
    cta: "Learn More",
  },
  {
    name: "Real Estate & Construction",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Home,
    description: "Green building certifications and sustainable construction practices.",
    href: "/clients",
    cta: "Learn More",
  },
  {
    name: "Financial Services",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    Icon: Banknote,
    description: "ESG reporting and sustainable finance solutions for financial institutions.",
    href: "/clients",
    cta: "Learn More",
  },
]

export function ClientsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by corporations, governments, and institutions worldwide to deliver quality, impact, and
              partnerships that drive sustainable solutions and credible ESG leadership.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="mb-12">
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {clientCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">Industries We Serve</h3>
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {industryCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#f59e0b" duration={0.8}>
          <div className="text-center">
            <ShinyButton onClick={() => (window.location.href = "/clients")}>
              View Our Clients
            </ShinyButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
