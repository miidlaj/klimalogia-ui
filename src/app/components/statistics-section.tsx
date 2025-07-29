"use client";

import { BoxReveal } from "./box-reveal";
import NumberTicker from "./number-ticker";
import { OrbitingCircles } from "./orbiting-circles";
import { Building2, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successful sustainability projects delivered globally",
  },
  {
    icon: Users,
    value: 150,
    suffix: "+",
    label: "Expert Team Members",
    description: "Climate professionals and sustainability experts",
  },
  {
    icon: Globe,
    value: 25,
    suffix: "+",
    label: "Countries Served",
    description: "Global reach across multiple continents",
  },
  {
    icon: Award,
    value: 50,
    suffix: "+",
    label: "Certifications Issued",
    description: "Green building and sustainability certifications",
  },
];

export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Orbiting Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-96 h-96">
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={20}
            radius={80}
          >
            <Globe className="h-6 w-6 text-blue-500" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[30px] border-none bg-transparent"
            duration={20}
            delay={10}
            radius={80}
          >
            <Building2 className="h-6 w-6 text-green-500" />
          </OrbitingCircles>
          <OrbitingCircles
            className="size-[50px] border-none bg-transparent"
            radius={190}
            duration={20}
            reverse
          >
            <Award className="h-8 w-8 text-purple-500" />
          </OrbitingCircles>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <BoxReveal width="100%" boxColor="#3b82f6" duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving measurable change in climate action and sustainability across the globe
            </p>
          </div>
        </BoxReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <BoxReveal key={index} width="100%" boxColor="#10b981" duration={0.8}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-green-100 rounded-full">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-800">
                    <NumberTicker
                      value={stat.value}
                      delay={0.5 + index * 0.1}
                      className="text-4xl font-bold text-gray-800"
                    />
                    {stat.suffix}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </BoxReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
