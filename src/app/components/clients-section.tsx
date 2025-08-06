"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerButton } from "./shimmer-button";
import { ClientCarousel } from "@/components/custom/client-carousel";

const clientLogos = [
  {
    name: "IKEA",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/IKEA.svg",
  },
  {
    name: "DMCC",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/DMCC.svg",
  },
  {
    name: "Landmark Group",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Landmark-group.svg",
  },
  {
    name: "Etihad",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Etihad.svg",
  },
  {
    name: "Sharjah",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Sharjah.svg",
  },
];

export function ClientsSection() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 -left-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-blue)]/10 to-[var(--brand-teal)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-gradient-to-r from-[var(--brand-green)]/10 to-[var(--brand-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-light-teal">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by corporations, governments, and institutions worldwide to
            deliver impactful and credible ESG leadership.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ClientCarousel logos={clientLogos} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center flex justify-center items-center mt-24"
        >
          <Link href={"/clients"}>
            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="cursor-pointer"
            >
              View Our Client Stories
            </ShimmerButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
