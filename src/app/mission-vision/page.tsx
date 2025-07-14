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
                  To create transformative climate solutions that empower
                  businesses to achieve measurable sustainability goals, foster
                  resilient communities, and contribute to a thriving,
                  sustainable future for our planet.
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-white">
              Our Vision
            </h2>
            <div className="max-w-3xl mx-auto">
              <Card className="bg-transparent bg-gradient-to-br from-[#FCB20E]/10 via-primary/10 to-[#FCB20E]/10 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center text-base md:text-lg leading-relaxed text-white">
                  To inspire and lead a global shift toward sustainable and
                  resilient businesses, envisioning a future where innovation,
                  collaboration, and bold action create a net-zero world that
                  thrives in harmony with the planet and ensures prosperity for
                  generations to come.
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-primary/5 to-transparent opacity-50" />
        <Spotlight />
        <div className="mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center text-white mb-12 md:mb-16">
            Core Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Respect",
                description:
                  "We honor the environment, our clients, and all stakeholders by fostering inclusivity, collaboration, and mutual understanding in every step toward sustainability.",
              },
              {
                icon: Scale,
                title: "Integrity",
                description:
                  "We uphold the highest ethical standards, ensuring transparency, accountability, and trust in all our actions and solutions.",
              },
              {
                icon: Heart,
                title: "Trust",
                description:
                  "We build lasting relationships by delivering reliable, tailored solutions that clients can depend on to meet their sustainability goals.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We drive progress with forward-thinking strategies and creative solutions, leveraging cutting-edge technology to address complex climate challenges effectively.",
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
