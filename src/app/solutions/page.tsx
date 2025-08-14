/* eslint-disable @next/next/no-img-element */
"use client";
import { SolutionsOverview } from "../components/solution-overview";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen ">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/solution.jpg"
            alt="A modern office environment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
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

      <div id="nav-trigger" />

      <div className="min-h-screen w-full relative bg-white">
        <SolutionsOverview page />
      </div>
    </div>
  );
}
