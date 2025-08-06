/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Logo {
  src: string;
  name: string;
}

interface CarouselSlideProps extends Logo {
  id?: string;
}

interface ClientCarouselProps {
  logos: Logo[];
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ src, name }) => (
  <div className="relative flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_40%] lg:flex-[0_0_30%] mx-4">
    <div className="relative flex h-40 items-center justify-center rounded-2xl bg-white/70 backdrop-blur-lg p-6 shadow-lg border border-gray-200/50">
      <img src={src} alt={name} className="h-full max-w-full object-contain" />
    </div>
  </div>
);

export function ClientCarousel({ logos }: ClientCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="overflow-hidden py-4" ref={emblaRef}>
        <div className="flex">
          {logos.map((logo) => (
            <CarouselSlide key={logo.name} {...logo} />
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-800 shadow-md transition-all hover:scale-110 hover:bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal hover:text-white"
        aria-label="Previous client"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm text-gray-800 shadow-md transition-all hover:scale-110 hover:bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal hover:text-white"
        aria-label="Next client"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xs h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          key={activeIndex}
          className="h-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal animate-progress"
        />
      </div>
    </div>
  );
}
