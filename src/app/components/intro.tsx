"use client"

import { Globe, Users, Target, Award } from "lucide-react"
import { BoxReveal } from "./box-reveal"
import { BentoGrid, BentoCard } from "./bento-grid"
import { ShinyButton } from "./shiny-button"

const introCards = [
  {
    name: "Global Reach",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-50" />,
    Icon: Globe,
    description: "International presence with local expertise across multiple regions",
    href: "/about-us",
    cta: "Learn More",
  },
  {
    name: "Expert Team",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-50" />,
    Icon: Users,
    description: "Multidisciplinary professionals with deep climate expertise",
    href: "/about-us",
    cta: "Meet Our Team",
  },
  {
    name: "Results-Driven",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-50" />,
    Icon: Target,
    description: "Measurable outcomes and tangible environmental impact",
    href: "/projects",
    cta: "View Results",
  },
  {
    name: "Trusted Partner",
    className: "col-span-3 lg:col-span-1",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-50" />,
    Icon: Award,
    description: "Quality, integrity, and long-term partnerships",
    href: "/clients",
    cta: "Our Clients",
  },
]

export function Intro() {
  return (
    <section className="py-20 bg-transparent relative">
      <div className="container mx-auto px-4">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Welcome to <span className="text-blue-600">Klimalogia</span>
            </h2>

            <h3 className="text-2xl text-gray-600 mb-8">
              Your Global Partner in Climate Action and Sustainable Transformation
            </h3>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Klimalogia is an international climate change and sustainability firm, dedicated to helping
                organizations navigate the transition to a low-carbon, climate-resilient future. Inspired by the Greek
                term klimatologia, the study of climate, our name reflects our mission to translate climate science into
                practical, actionable solutions for organizations worldwide.
              </p>

              <p>
                We are a multidisciplinary team with global insight, delivering end-to-end sustainability and climate
                change solutions, through technical depth and strategic insight to help you integrate climate action
                into business decisions and future-proof their operations. Trusted by corporations, governments, and
                institutions, we are known for quality, impact, and partnerships that drive sustainable solutions,
                climate-smart strategies, and credible ESG leadership.
              </p>

              <p>
                We bring deep expertise across sectors and regions to help businesses integrate sustainability into
                their core strategy, operations, and investment decisions. Whether you aim to accelerate
                decarbonization, meet regulatory requirements, enhance ESG performance, or access sustainable finance,
                we deliver custom, data-driven solutions that transform ambition into measurable results.
              </p>

              <p>
                At Klimalogia, we view sustainability as a driver of innovation, resilience, and long-term value, far
                beyond compliance. Our approach is built on strategic alignment with global frameworks, meaningful
                stakeholder engagement, and data-driven decision making, helping organizations lead with purpose and
                impact in a rapidly evolving landscape.
              </p>
            </div>

            <div className="mt-12">
              <p className="text-xl font-semibold text-blue-600 mb-6">
                Ready to lead with purpose and drive real climate impact? Let's shape a sustainable future, together.
              </p>
              <ShinyButton onClick={() => (window.location.href = "/contact-us")}>Get Started</ShinyButton>
            </div>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="mt-16">
            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {introCards.map((card) => (
                <BentoCard key={card.name} {...card} />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-2xl mx-auto border border-blue-100">
              <h4 className="text-2xl font-bold mb-4">Etymology</h4>
              <p className="text-lg text-gray-700">
                <strong className="text-blue-600">Klimalogia</strong> derives from the Greek word for climatology (
                <em>κλίμα</em>, klima, "slope"; and <em>-λογία</em>, -logia)
              </p>
            </div>
          </div>
        </BoxReveal>
      </div>
    </section>
  )
}
