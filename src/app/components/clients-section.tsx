"use client";

import {
  Building2,
  Landmark,
  Users,
  Factory,
  Home,
  Banknote,
} from "lucide-react";
import { BoxReveal } from "./box-reveal";
import { BentoGrid, BentoCard } from "./bento-grid";
import { ShinyButton } from "./shiny-button";

export function ClientsSection() {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <BoxReveal delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by corporations, governments, and institutions worldwide
              to deliver quality, impact, and partnerships that drive
              sustainable solutions and credible ESG leadership.
            </p>
          </div>
        </BoxReveal>

        <BentoGrid className="mb-12">
          <BoxReveal delay={0.4}>
            <BentoCard>
              <>
                <Building2 className="h-16 w-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Corporations</h3>
                <p className="text-gray-600">
                  Global enterprises and regional leaders across multiple
                  industries seeking to integrate sustainability into core
                  strategy and operations.
                </p>
              </>
            </BentoCard>
          </BoxReveal>

          <BoxReveal delay={0.6}>
            <BentoCard>
              <Landmark className="h-16 w-16 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Governments</h3>
              <p className="text-gray-600">
                Public sector organizations and agencies working to implement
                climate policies and sustainable development initiatives.
              </p>
            </BentoCard>
          </BoxReveal>

          <BoxReveal delay={0.8}>
            <BentoCard>
              <Users className="h-16 w-16 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Institutions</h3>
              <p className="text-gray-600">
                Educational institutions, non-profits, and international
                organizations driving climate action and sustainability
                transformation.
              </p>
            </BentoCard>
          </BoxReveal>
        </BentoGrid>

        <BoxReveal delay={1.0}>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              Industries We Serve
            </h3>
            <BentoGrid>
              <BentoCard>
                <Factory className="h-8 w-8 text-blue-600 mb-3" />
                <span className="font-medium">Manufacturing & Industrial</span>
              </BentoCard>

              <BentoCard>
                <Home className="h-8 w-8 text-green-600 mb-3" />
                <span className="font-medium">Real Estate & Construction</span>
              </BentoCard>

              <BentoCard>
                <Banknote className="h-8 w-8 text-purple-600 mb-3" />
                <span className="font-medium">Financial Services</span>
              </BentoCard>
            </BentoGrid>
          </div>
        </BoxReveal>

        <BoxReveal delay={1.2}>
          <div className="text-center">
            <ShinyButton
              variant="secondary"
              onClick={() => (window.location.href = "/clients")}
            >
              View Our Clients
            </ShinyButton>
          </div>
        </BoxReveal>
      </div>
    </section>
  );
}
