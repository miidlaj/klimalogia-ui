/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ShimmerButton } from "./shimmer-button";
import { GradientUnderline } from "@/components/custom/gradient-underline";

export function PartnershipSection() {
  return (
    <section className="relative z-50 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/partner.png"
          alt="Partnership background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <GradientUnderline
              underlineWidth={80}
              underlineHeight={7}
              spacing={10}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                Ready to Partner with Us?
              </h1>
            </GradientUnderline>

            <p className="text-xl text-gray-200 text-justify">
              Whether you&apos;re looking to advance sustainability goals,
              strengthen ESG leadership, or create shared impact, we&apos;re
              ready to collaborate and build something meaningful together.
            </p>

            <div>
              <Link href="/partner-with-us">
                <ShimmerButton background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)">
                  <span className="text-white font-semibold flex items-center gap-2 px-6 py-2">
                    Explore Partnership Opportunities
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <GradientBlend />

      {/* <div className="z-90 absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-brand-teal/75 from-[1%] to-transparent pointer-events-none" /> */}
    </section>
  );
}

function GradientBlend() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
  );
}
