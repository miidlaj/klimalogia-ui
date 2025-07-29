"use client"

import { Handshake, Globe, TrendingUp, Users } from "lucide-react"
import { BoxReveal } from "./box-reveal"
import { BentoGrid, BentoCard } from "./bento-grid"
import { ShimmerButton } from "./shimmer-button"

const partnershipCards = [
  {
    name: "Strategic Alliances",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Handshake,
    description: "Long-term partnerships built on shared values and mutual success",
    href: "/partner-with-us",
    cta: "Partner Now",
  },
  {
    name: "Global Reach",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Globe,
    description: "Expand your impact through our international network and expertise",
    href: "/partner-with-us",
    cta: "Learn More",
  },
  {
    name: "Scalable Impact",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    Icon: TrendingUp,
    description: "Amplify collective impact through combined capabilities and resources",
    href: "/partner-with-us",
    cta: "Explore",
  },
  {
    name: "Collaborative Innovation",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50" />,
    Icon: Users,
    description: "Co-create innovative solutions for complex sustainability challenges",
    href: "/partner-with-us",
    cta: "Collaborate",
  },
]

export function PartnershipSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Partnership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join forces with Klimalogia to create transformative impact through strategic collaboration and shared
              commitment to climate action.
            </p>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="mb-12">
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {partnershipCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center border border-blue-100">
            <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Whether you're looking to advance sustainability goals, strengthen ESG leadership, or create shared
              impact, we're ready to collaborate and build something meaningful together.
            </p>
            <ShimmerButton onClick={() => (window.location.href = "/partner-with-us")}>
              Explore Partnership Opportunities
            </ShimmerButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
