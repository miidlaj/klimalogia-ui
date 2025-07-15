"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, BarChart3, Award, Leaf, Zap, Building } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable impact through innovative sustainability solutions across diverse industries and regions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-gray-600">
                In-depth analysis of successful sustainability transformations and climate action implementations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact Metrics</h3>
              <p className="text-gray-600">
                Quantified results demonstrating emissions reductions, cost savings, and sustainability improvements.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Award className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-gray-600">
                Awards and certifications achieved through our collaborative sustainability initiatives.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Project Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Building className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Green Buildings & Infrastructure</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Leaf className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Carbon Neutrality & Net-Zero</span>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
              <Zap className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Renewable Energy Solutions</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">View Our Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}