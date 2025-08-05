/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "./shimmer-button";

export function Intro() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/intro.jpg"
              alt="Intro Image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-navy to-brand-teal tracking-tight">
                About Us
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Klimalogia is an international climate change and sustainability
              firm, dedicated to helping organizations navigate the transition
              to a low-carbon, climate-resilient future. Inspired by the Greek
              term for climatology, our name reflects our mission to translate
              climate science into practical, actionable solutions for
              organizations worldwide.
            </p>

            <div className="bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-6 text-left mb-12">
              <p className="text-base text-gray-700">
                Derives from the Greek word for climatology (
                <em className="text-brand-teal font-semibold not-italic">
                  κλίμα, klima, &quot;slope&quot;
                </em>
                ; and{" "}
                <em className="text-brand-teal font-semibold not-italic">
                  -λογία, -logia
                </em>
                )
              </p>
            </div>

            <Link href={"/mission-vision"}>
              <ShimmerButton
                background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                className="cursor-pointer"
              >
                Our Mission & Vision
              </ShimmerButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
