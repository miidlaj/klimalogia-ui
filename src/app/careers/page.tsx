"use client";

import HeroBg from "@/components/hero-bg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Heart, 
  Lightbulb,
  Target,
  Briefcase,
  GraduationCap,
  Coffee,
  Zap,
  Shield
} from "lucide-react";

const benefits = [
  {
    title: "Meaningful Impact",
    description: "Work on projects that directly contribute to climate action and sustainable transformation globally.",
    icon: Target
  },
  {
    title: "Global Opportunities",
    description: "Join a team with international presence and work with clients across diverse industries and regions.",
    icon: Globe
  },
  {
    title: "Professional Growth",
    description: "Continuous learning opportunities, skill development, and career advancement in the growing sustainability sector.",
    icon: TrendingUp
  },
  {
    title: "Expert Team",
    description: "Collaborate with multidisciplinary professionals and industry experts in climate change and sustainability.",
    icon: Users
  },
  {
    title: "Innovation Culture",
    description: "Be part of cutting-edge solutions and innovative approaches to complex sustainability challenges.",
    icon: Lightbulb
  },
  {
    title: "Work-Life Balance",
    description: "Flexible working arrangements and supportive environment that values personal well-being.",
    icon: Heart
  }
];

const positions = [
  {
    title: "Sustainability Consultant",
    department: "Strategy & Advisory",
    location: "Dubai / Kochi",
    type: "Full-time",
    icon: Briefcase
  },
  {
    title: "ESG Analyst",
    department: "Strategy & Advisory", 
    location: "Remote / Hybrid",
    type: "Full-time",
    icon: TrendingUp
  },
  {
    title: "Climate Risk Specialist",
    department: "Strategy & Advisory",
    location: "Dubai",
    type: "Full-time",
    icon: Shield
  },
  {
    title: "Green Building Consultant",
    department: "Assurance & Compliance",
    location: "Kochi / Mumbai",
    type: "Full-time",
    icon: Award
  },
  {
    title: "Energy Auditor",
    department: "Action & Transformation",
    location: "Dubai / Kochi",
    type: "Full-time",
    icon: Zap
  },
  {
    title: "Digital Solutions Developer",
    department: "Digital Solutions",
    location: "Remote",
    type: "Full-time",
    icon: Lightbulb
  }
];

const values = [
  {
    title: "Respect",
    description: "We champion inclusivity, collaboration, and care for people and the planet.",
    icon: Users
  },
  {
    title: "Integrity", 
    description: "We uphold the highest ethical standards with transparency and accountability.",
    icon: Shield
  },
  {
    title: "Sustainability",
    description: "We embed long-term thinking into every action and decision we make.",
    icon: Target
  },
  {
    title: "Excellence",
    description: "We strive for the highest quality in everything we do.",
    icon: Award
  }
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <HeroBg video="/about.mp4" image="/about.png">
        <div className="text-center space-y-6 pt-20">
          <h1 className="text-white text-5xl md:text-7xl font-bold">
            Careers<span className="text-primary">.</span>
          </h1>
          <p className="text-gray-200 text-xl md:text-2xl max-w-4xl mx-auto">
            Join our mission to drive climate action and sustainable transformation worldwide
          </p>
        </div>
      </HeroBg>

      {/* Why Choose Klimalogia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Klimalogia?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Be part of a globally trusted team that&apos;s making a real difference in climate action and sustainability. We offer more than just a job – we offer the opportunity to shape the future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6 h-full flex flex-col">
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 flex-grow">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Values (RISE)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core values guide everything we do and shape the culture we&apos;ve built at Klimalogia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore current opportunities to join our team and make a meaningful impact in the sustainability sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {positions.map((position, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <position.icon className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold">{position.title}</h3>
                      <p className="text-sm text-gray-500">{position.department}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Location:</strong> {position.location}</p>
                    <p><strong>Type:</strong> {position.type}</p>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              Don&apos;t see a position that fits? We&apos;re always looking for talented individuals to join our team.
            </p>
            <Button asChild size="lg">
              <Link href="/contact-us">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">What We Offer</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Learning & Development</h3>
                <p className="text-gray-600 text-sm">Continuous training, certifications, and skill development opportunities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Coffee className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Flexible Work</h3>
                <p className="text-gray-600 text-sm">Remote and hybrid work options with flexible schedules</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Health & Wellness</h3>
                <p className="text-gray-600 text-sm">Comprehensive health benefits and wellness programs</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Global Exposure</h3>
                <p className="text-gray-600 text-sm">Work with international clients and diverse project teams</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Klimalogia and be part of the solution to climate change. Together, we can create a sustainable future for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact-us">Apply Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}