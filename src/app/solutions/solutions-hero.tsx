"use client";
import HeroBg from "@/components/hero-bg";
import React from "react";
import { motion } from "framer-motion";

function SolutionsHero() {
  return (
    <div className="min-h-screen ">
      <HeroBg image="/solution.png" video="/solution.mp4">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            >
              Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              At Klimalogia, we deliver end-to-end climate and sustainability
              solutions designed to help your business meet its goals.
            </motion.p>
          </div>
        </section>
      </HeroBg>

      <div id="nav-trigger" />
    </div>
  );
}

export default SolutionsHero;
