"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Eye, Heart, Shield, Scale, Lightbulb } from "lucide-react";

export function MissionVisionPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving meaningful climate action through practical solutions and strategic partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To help organizations take meaningful climate action by delivering practical, impactful, and result-oriented sustainability solutions that enhance competitiveness, reduce risk, and create long-term value for people, business, and the planet.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To create an inclusive, resilient and regenerative future by enabling businesses, communities, and institutions to drive positive change, integrate sustainability into core strategy, respond effectively to climate challenges, and generate long-term environmental, social, and economic value.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Core Values (RISE)</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Respect</h4>
                <p className="text-gray-600">
                  Championing inclusivity, collaboration, and care for people and the planet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Integrity</h4>
                <p className="text-gray-600">
                  Upholding the highest ethical standards with transparency and accountability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
                <p className="text-gray-600">
                  Embedding long-term thinking into every action and decision.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Excellence</h4>
                <p className="text-gray-600">
                  Striving for the highest quality in everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/mission-vision">Learn More About Our Values</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}