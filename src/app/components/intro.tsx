/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { ShimmerButton } from "./shimmer-button";

export function Intro() {
  return (
    <section className="relative flex flex-col lg:flex-row overflow-hidden min-h-screen">
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 xl:w-2/5 lg:flex-shrink-0 relative"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1.0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-full lg:min-h-screen"
        >
          <img
            src="/masked-about.png"
            alt="Team working on sustainability projects"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Optional gradient overlay for better text contrast on mobile */}
          <div className="absolute inset-0 lg:hidden" />
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-full mx-auto lg:mx-0 p-6 sm:p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            {/* Heading */}
            <div>
              <GradientUnderline
                underlineWidth={80}
                spacing={0}
                className="mb-4"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                  About Us
                </h2>
              </GradientUnderline>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Klimalogia is an international climate change and sustainability
              firm, dedicated to helping organizations navigate the transition
              to a low-carbon, climate-resilient future. Inspired by the Greek
              term klimatologia, the study of climate, our name reflects our
              mission to translate climate science into practical, actionable
              solutions for organizations worldwide.
            </p>

            {/* Etymology Box */}
            <div className="bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base text-gray-700">
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

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-end pt-4">
              <Link href={"/mission-vision"}>
                <ShimmerButton
                  background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                  className="cursor-pointer px-6 sm:px-8 py-3"
                >
                  Learn More
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
