"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Building2, Landmark, Users, Factory, Home, Banknote } from "lucide-react";

export function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by corporations, governments, and institutions worldwide to deliver quality, impact, and partnerships that drive sustainable solutions and credible ESG leadership.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Building2 className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Corporations</h3>
              <p className="text-gray-600">
                Global enterprises and regional leaders across multiple industries seeking to integrate sustainability into core strategy and operations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Landmark className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Governments</h3>
              <p className="text-gray-600">
                Public sector organizations and agencies working to implement climate policies and sustainable development initiatives.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Institutions</h3>
              <p className="text-gray-600">
                Educational institutions, non-profits, and international organizations driving climate action and sustainability transformation.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Industries We Serve</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Factory className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Manufacturing & Industrial</span>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Home className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Real Estate & Construction</span>
            </div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <Banknote className="h-8 w-8 text-primary mr-3" />
              <span className="font-medium">Financial Services</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/clients">View Our Clients</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}