"use client";

import React from "react";
import HeroBg from "@/components/hero-bg";
import { Shield, Scale, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Spotlight } from "@/components/spotlight";

export default function MissionPage() {
  return (
    <div className="mx-auto">
      <HeroBg
        video="/mission.mp4"
        image="/mission.jpg"
        overlayClass="bg-gradient-to-b from-transparent via-black/50 to-black"
      >
        <div className="text-center space-y-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Mission<span className="text-primary"> & </span>Vision
          </h1>
        </div>
      </HeroBg>

      <section className="relative bg-black py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto px-4 py-12 md:py-24 lg:py-32">
          <section className="space-y-6 mb-12 md:mb-24">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tighter text-center">
              Our Mission
            </h1>
            <div className="max-w-3xl mx-auto">
              <Card className="text-white bg-transparent bg-gradient-to-br from-[#FCB20E]/10 via-primary/10 to-[#FCB20E]/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center text-base md:text-lg leading-relaxed">
                  To help organizations take meaningful climate action by delivering practical, impactful, and result-oriented sustainability solutions that enhance competitiveness, reduce risk, and create long-term value for people, business, and the planet.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6 mb-12 md:mb-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-white">
              Our Vision
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-transparent bg-gradient-to-br from-[#FCB20E]/10 via-primary/10 to-[#FCB20E]/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center text-base md:text-lg leading-relaxed text-white">
                  To create an inclusive, resilient and regenerative future by enabling businesses, communities, and institutions to drive positive change, integrate sustainability into core strategy, respond effectively to climate challenges, and generate long-term environmental, social, and economic value.
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent opacity-50" />
        <Spotlight />
        <div className="mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-white mb-12 md:mb-16">
            Core Values (RISE)
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Respect",
                description:
                  "Championing inclusivity, collaboration, and care for people and the planet. Valuing diverse perspectives and honoring all stakeholders in the sustainability journey.",
              },
              {
                icon: Scale,
                title: "Integrity",
                description:
                  "Upholding the highest ethical standards with transparency, honesty, and accountability at the heart of every solution and relationship.",
              },
              {
                icon: Heart,
                title: "Sustainability",
                description:
                  "Embedding long-term thinking into every action, balancing environmental, social, and economic priorities to create resilient systems and future-ready businesses.",
              },
              {
                icon: Lightbulb,
                title: "Excellence",
                description:
                  "Striving for the highest quality in everything we do, delivering impactful, data-driven solutions with precision, innovation, and professionalism.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="relative overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 shadow-lg group hover:shadow-primary/20 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-56 h-56 bg-primary/30 rounded-full blur-3xl group-hover:h-72 transition-all duration-500" />
                <CardContent className="relative p-6 space-y-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20 shadow-inner">
                    {value.icon && (
                      <value.icon className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}