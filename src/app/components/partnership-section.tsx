"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Handshake, Globe, TrendingUp, Users } from "lucide-react";

export function PartnershipSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partnership</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join forces with Klimalogia to create transformative impact through strategic collaboration and shared commitment to climate action.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Strategic Alliances</h3>
              <p className="text-gray-600 text-sm">
                Long-term partnerships built on shared values and mutual success
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Expand your impact through our international network and expertise
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Scalable Impact</h3>
              <p className="text-gray-600 text-sm">
                Amplify collective impact through combined capabilities and resources
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Collaborative Innovation</h3>
              <p className="text-gray-600 text-sm">
                Co-create innovative solutions for complex sustainability challenges
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re looking to advance sustainability goals, strengthen ESG leadership, or create shared impact, we&apos;re ready to collaborate and build something meaningful together.
          </p>
          <Button asChild size="lg">
            <Link href="/partner-with-us">Explore Partnership Opportunities</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}