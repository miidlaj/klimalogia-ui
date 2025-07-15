"use client";

import HeroBg from "@/components/hero-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FileText, 
  BarChart3, 
  Award, 
  Building, 
  Leaf, 
  Zap,
  Factory,
  Home,
  Banknote,
  Users,
  Target} from "lucide-react";

const projectCategories = [
  {
    title: "Case Studies",
    description: "In-depth analysis of successful sustainability transformations and climate action implementations across various industries and regions.",
    icon: FileText,
    count: "50+ Projects"
  },
  {
    title: "Impact Metrics",
    description: "Quantified results demonstrating emissions reductions, cost savings, energy efficiency improvements, and sustainability performance enhancements.",
    icon: BarChart3,
    count: "Measurable Results"
  },
  {
    title: "Recognition & Awards",
    description: "Certifications, awards, and recognition achieved through our collaborative sustainability initiatives and innovative solutions.",
    icon: Award,
    count: "Industry Recognition"
  }
];

const focusAreas = [
  {
    title: "Green Buildings & Infrastructure",
    description: "LEED, BREEAM, WELL certified projects with sustainable design and operational excellence.",
    icon: Building,
    projects: "25+ Buildings Certified"
  },
  {
    title: "Carbon Neutrality & Net-Zero",
    description: "Organizations achieving carbon neutrality and net-zero targets through comprehensive decarbonization strategies.",
    icon: Leaf,
    projects: "15+ Net-Zero Commitments"
  },
  {
    title: "Renewable Energy Solutions",
    description: "Solar PV installations, energy audits, and clean energy transitions across commercial and industrial sectors.",
    icon: Zap,
    projects: "100+ MW Renewable Capacity"
  }
];

const industries = [
  {
    title: "Manufacturing & Industrial",
    description: "Energy efficiency, waste reduction, and decarbonization projects in manufacturing facilities.",
    icon: Factory,
    highlight: "40% Average Energy Savings"
  },
  {
    title: "Real Estate & Construction",
    description: "Green building certifications, sustainable design, and operational optimization projects.",
    icon: Home,
    highlight: "LEED Platinum Achievements"
  },
  {
    title: "Financial Services",
    description: "ESG reporting, climate risk assessments, and sustainable finance initiatives.",
    icon: Banknote,
    highlight: "ESG Rating Improvements"
  }
];

const impactStats = [
  {
    title: "CO₂ Emissions Reduced",
    value: "500,000+",
    unit: "tonnes",
    icon: Leaf
  },
  {
    title: "Energy Savings Achieved",
    value: "50+",
    unit: "GWh annually",
    icon: Zap
  },
  {
    title: "Green Buildings Certified",
    value: "100+",
    unit: "projects",
    icon: Building
  },
  {
    title: "Organizations Served",
    value: "200+",
    unit: "clients",
    icon: Users
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <HeroBg video="/service.mp4" image="/service.jpg">
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Our Projects<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto">
            Delivering measurable impact through innovative sustainability solutions across diverse industries and regions
          </p>
        </div>
      </HeroBg>

      {/* Impact Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to driving real change in sustainability and climate action.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-500 mb-2">{stat.unit}</div>
                  <h3 className="text-lg font-semibold">{stat.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Project Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive portfolio of sustainability projects and their transformative impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <category.icon className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{category.description}</p>
                  <div className="text-primary font-semibold">{category.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Project Focus Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across key sustainability domains, delivering specialized solutions for complex challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <area.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{area.description}</p>
                  <div className="text-primary font-semibold text-sm">{area.projects}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cross-sector expertise delivering tailored sustainability solutions for diverse industry challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <industry.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                  <p className="text-gray-600 flex-grow mb-4">{industry.description}</p>
                  <div className="bg-primary/10 rounded-lg p-3 text-center">
                    <div className="text-primary font-semibold text-sm">{industry.highlight}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Detailed Case Studies Coming Soon</h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re preparing comprehensive case studies showcasing our most impactful projects. These will include detailed methodologies, results, and lessons learned from our sustainability transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Discuss Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Sustainability Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the growing number of organizations achieving measurable sustainability impact with Klimalogia&apos;s expertise and proven methodologies.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">Let&apos;s Create Impact Together</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}