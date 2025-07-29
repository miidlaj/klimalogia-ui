"use client";

import { Globe, Users, Target, Award } from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { BentoGrid, BentoCard } from "./bento-grid";
import { ShinyButton } from "./shiny-button";
import { ShimmerButton } from "./shimmer-button";

const introCards = [
  {
    name: "Global Reach",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-blue-100/60" />
    ),
    Icon: Globe,
    description:
      "International presence with local expertise across multiple regions",
    href: "/about-us",
    cta: "Learn More",
  },
  {
    name: "Expert Team",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 to-green-100/60" />
    ),
    Icon: Users,
    description: "Multidisciplinary professionals with deep climate expertise",
    href: "/about-us",
    cta: "Meet Our Team",
  },
  {
    name: "Results-Driven",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 to-purple-100/60" />
    ),
    Icon: Target,
    description: "Measurable outcomes and tangible environmental impact",
    href: "/projects",
    cta: "View Results",
  },
  {
    name: "Trusted Partner",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/60 to-orange-100/60" />
    ),
    Icon: Award,
    description: "Quality, integrity, and long-term partnerships",
    href: "/clients",
    cta: "Our Clients",
  },
];

export function Intro() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Klimalogia
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
                Your Global Partner in Climate Action and Sustainable
                Transformation
              </h2>
            </div>

            <div className="text-lg text-gray-700 leading-relaxed space-y-6 max-w-4xl mx-auto">
              <p className="text-left">
                Klimalogia is an international climate change and sustainability
                firm, dedicated to helping organizations navigate the transition
                to a low-carbon, climate-resilient future. Inspired by the Greek
                term klimatologia, the study of climate, our name reflects our
                mission to translate climate science into practical, actionable
                solutions for organizations worldwide.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                <div className="text-left">
                  <p className="mb-6">
                    We are a multidisciplinary team with global insight,
                    delivering end-to-end sustainability and climate change
                    solutions, through technical depth and strategic insight to
                    help you integrate climate action into business decisions
                    and future-proof their operations.
                  </p>

                  <p>
                    We bring deep expertise across sectors and regions to help
                    businesses integrate sustainability into their core
                    strategy, operations, and investment decisions.
                  </p>
                </div>

                <div className="text-left">
                  <p className="mb-6">
                    Trusted by corporations, governments, and institutions, we
                    are known for quality, impact, and partnerships that drive
                    sustainable solutions, climate-smart strategies, and
                    credible ESG leadership.
                  </p>

                  <p>
                    At Klimalogia, we view sustainability as a driver of
                    innovation, resilience, and long-term value, far beyond
                    compliance.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <p className="text-xl font-semibold text-blue-600 mb-8 max-w-2xl mx-auto">
                Ready to lead with purpose and drive real climate impact?
                Let&apos;s shape a sustainable future, together.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <ShinyButton
                  onClick={() => (window.location.href = "/contact-us")}
                >
                  <span className="text-black">Get Started</span>
                </ShinyButton>

                <ShimmerButton
                  onClick={() => (window.location.href = "/about-us")}
                >
                  <span className="text-white">Learn More</span>
                </ShimmerButton>
              </div>
            </div>
          </div>
        </BoxReveal>

        {/* Feature Cards */}
        <BoxReveal width="100%" boxColor="#10b981" duration={0.8}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">
              Why Choose Klimalogia
            </h3>

            <BentoGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {introCards.map((card) => (
                <BentoCard
                  key={card.name}
                  {...card}
                  className={`${card.className} backdrop-blur-sm bg-white/70 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
                />
              ))}
            </BentoGrid>
          </div>
        </BoxReveal>

        {/* Etymology Section */}
        <BoxReveal width="100%" boxColor="#8b5cf6" duration={0.8}>
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto border border-gray-200 backdrop-blur-sm bg-white/50">
              <h4 className="text-2xl font-bold mb-4 text-gray-800">
                Etymology
              </h4>
              <p className="text-lg text-gray-700">
                <strong className="text-blue-600">Klimalogia</strong> derives
                from the Greek word for climatology (<em>κλίμα</em>, klima,
                &quot;slope&quot;; and <em>-λογία</em>, -logia)
              </p>
              <p className="mt-4 text-gray-600 italic">
                Our name embodies our commitment to the scientific study of
                climate and its practical applications
              </p>
            </div>
          </div>
        </BoxReveal>
      </div>

      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-green-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-40 w-72 h-72 bg-teal-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
}
