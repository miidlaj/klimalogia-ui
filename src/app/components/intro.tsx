"use client";

import Link from "next/link";
import { ShimmerButton } from "./shimmer-button";

export function Intro() {
  return (
    <section className="py-16 md:py-24 bg-transparent relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-light-teal">
              About Us
            </h1>
          </div>

          <div className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            <p className="text-justify [text-align-last:center]">
              Klimalogia is an international climate change and sustainability
              firm, dedicated to helping organizations navigate the transition
              to a low-carbon, climate-resilient future. Inspired by the Greek
              term klimatologia, the study of climate, our name reflects our
              mission to translate climate science into practical, actionable
              solutions for organizations worldwide.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <Link href={"/about-us"}>
              <ShimmerButton
                background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
                className="cursor-pointer"
              >
                Learn More
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
