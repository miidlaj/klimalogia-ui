/* eslint-disable @next/next/no-img-element */
"use client";

import { GlowingEffect } from "@/components/ace-ui/glowing-effect";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { motion } from "framer-motion";

interface Point {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

interface HowItMattersSectionProps {
  title: string;
  description: string;
  points: Point[];
  image?: string;
  imageDescription?: string;
}

export function HowItMattersSection({
  title,
  description,
  points,
  image,
  imageDescription,
}: HowItMattersSectionProps) {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{title}</h2>
          </GradientUnderline>
          <p className="text-xl text-gray-600 max-w-3xl text-justify [text-align-last:center] mx-auto">
            {description}
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mb-12">
          {points.map((point, index) => {
            const gridAreas = [
              "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
              "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
              "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
              "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
              "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
            ];

            return (
              <li
                key={point.title}
                className={`min-h-[14rem] list-none ${gridAreas[index] || ""}`}
              >
                <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                  />
                  <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 bg-white/80 backdrop-blur-sm">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                      <div className="w-fit rounded-lg border border-primary/20 bg-primary/10 p-2">
                        <point.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-gray-900 md:text-2xl/[1.875rem]">
                          {point.title}
                        </h3>
                        <p className="font-sans text-sm/[1.125rem] text-gray-600 md:text-base/[1.375rem] [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-8 text-center"
          >
            <img
              src={image || "/placeholder.svg"}
              alt="ESG impact visualization"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-600">{imageDescription}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
