/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Marquee } from "./marquee";
import { ShimmerButton } from "./shimmer-button";

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
  {
    name: "IKEA-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/IKEA.svg",
  },
  {
    name: "DMCC-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/DMCC.svg",
  },
  {
    name: "Landmark Group-2",
    src: "https://cdn.aldar.com/-/media/Project/Pactive/Pactive/Images/Home/Landmark-group.svg",
  },
];

const firstRow = clientLogos.slice(0, clientLogos.length / 2);
const secondRow = clientLogos.slice(clientLogos.length / 2);

const LogoCard = ({ src, name }: { src: string; name: string }) => {
  return (
    <figure
      className={cn(
        "relative flex h-24 w-48 items-center justify-center rounded-xl border p-4 transition-all duration-300",
        "border-gray-200/50 bg-white/60 backdrop-blur-sm shadow-md",
        "hover:shadow-xl hover:-translate-y-1"
      )}
    >
      <img
        src={src}
        alt={name.replace("-2", "")}
        className="h-full w-full object-contain"
      />
    </figure>
  );
};

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
          className="text-center mb-16"
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
          <div className="relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden">
            <Marquee pauseOnHover className="[--duration:40s]">
              {firstRow.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:40s]">
              {secondRow.map((logo) => (
                <LogoCard key={logo.name} {...logo} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-gray-50"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-gray-50"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center flex justify-center items-center mt-16"
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
