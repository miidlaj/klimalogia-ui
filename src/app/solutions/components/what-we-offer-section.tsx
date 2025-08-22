"use client";

import { LayoutGrid } from "@/components/ace-ui/layout-grid";
import { GradientUnderline } from "@/components/custom/gradient-underline";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  thumbnail: string;
}

interface WhatWeOfferSectionProps {
  title: string;
  description: string;
  services: Service[];
}

export function WhatWeOfferSection({
  title,
  description,
  services,
}: WhatWeOfferSectionProps) {
  const cards = services.map((service, index) => ({
    id: index + 1,
    content: (
      <div>
        <p className="font-bold md:text-4xl text-xl text-white">
          {service.title}
        </p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {service.description}
        </p>

        <KnowMoreButton />
      </div>
    ),
    className:
      index % 4 === 0 || index % 4 === 3 ? "md:col-span-2" : "col-span-1",
    thumbnail: service.thumbnail,
    title: service.title,
  }));

  return (
    <div className="min-h-screen w-full bg-white py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <GradientUnderline underlineWidth={80} spacing={0} className="mb-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-2">{title}</h2>
          </GradientUnderline>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl text-justify [text-align-last:center] mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="h-screen w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </div>
  );
}

const KnowMoreButton = () => {
  return (
    <Link href="/cotact-us">
      <Button variant="link" asChild>
        Know More
      </Button>
    </Link>
  );
};
