"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Globe, Users, Target, Award } from "lucide-react";

export function Intro() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Welcome to <span className="text-primary">Klimalogia</span>
          </h2>
          <h3 className="text-2xl text-gray-600 mb-8">
            Your Global Partner in Climate Action and Sustainable Transformation
          </h3>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              Klimalogia is an international climate change and sustainability firm, dedicated to helping organizations navigate the transition to a low-carbon, climate-resilient future. Inspired by the Greek term klimatologia, the study of climate, our name reflects our mission to translate climate science into practical, actionable solutions for organizations worldwide.
            </p>
            
            <p>
              We are a multidisciplinary team with global insight, delivering end-to-end sustainability and climate change solutions, through technical depth and strategic insight to help you integrate climate action into business decisions and future-proof their operations. Trusted by corporations, governments, and institutions, we are known for quality, impact, and partnerships that drive sustainable solutions, climate-smart strategies, and credible ESG leadership.
            </p>
            
            <p>
              We bring deep expertise across sectors and regions to help businesses integrate sustainability into their core strategy, operations, and investment decisions. Whether you aim to accelerate decarbonization, meet regulatory requirements, enhance ESG performance, or access sustainable finance, we deliver custom, data-driven solutions that transform ambition into measurable results.
            </p>
            
            <p>
              At Klimalogia, we view sustainability as a driver of innovation, resilience, and long-term value, far beyond compliance. Our approach is built on strategic alignment with global frameworks, meaningful stakeholder engagement, and data-driven decision making, helping organizations lead with purpose and impact in a rapidly evolving landscape.
            </p>
          </div>
          
          <div className="mt-12">
            <p className="text-xl font-semibold text-primary mb-6">
              Ready to lead with purpose and drive real climate impact? Let&apos;s shape a sustainable future, together.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contact-us">Get Started</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">International presence with local expertise</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Multidisciplinary professionals with deep expertise</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-gray-600">Measurable outcomes and tangible impact</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Partner</h3>
              <p className="text-gray-600">Quality, integrity, and long-term partnerships</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold mb-4">Etymology</h4>
            <p className="text-lg text-gray-700">
              <strong className="text-primary">Klimalogia</strong> derives from the Greek word for climatology 
              (<em>κλίμα</em>, klima, &quot;slope&quot;; and <em>-λογία</em>, -logia)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}