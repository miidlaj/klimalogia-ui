"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

interface Service {
  quote: string;
  name: string;
  designation?: string;
  src: string;
}

export const SolutionsOverview: React.FC = () => {
  const services: Service[] = [
    {
      quote: "The attention to detail and innovative features.",
      name: "Strategy & Advisory",
      designation: "",
      src: "/service/strategy.png",
    },
    {
      quote: "Third-party verification and certification you can trust.",
      name: "Assurance & Compliance",
      designation: "",
      src: "/service/assurance.png",
    },
    {
      quote: "Implementing tangible changes for real-world impact.",
      name: "Action & Transformation",
      designation: "",
      src: "/service/action.png",
    },
    {
      quote: "Data-driven insights and advanced modeling tools.",
      name: "Digital Solutions",
      designation: "",
      src: "/service/digital.png",
    },
  ];

  return (
    <div className="bg-white">
      {services.map((service, idx) => (
        <TextParallaxContent
          key={idx}
          imgUrl={service.src}
          subheading={service.name}
          heading={service.quote}
        >
          <ServiceContent service={service} />
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl max-w-5xl px-4">
        {heading}
      </p>
    </motion.div>
  );
};

interface ServiceContentProps {
  service: Service;
}

const ServiceContent: React.FC<ServiceContentProps> = ({ service }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      {service.name}
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-6 text-xl text-neutral-600 md:text-2xl">
        {service.quote}
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
