/* eslint-disable @next/next/no-img-element */
"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Logo {
  src: string;
  name: string;
}

interface CarouselSlideProps extends Logo {
  isActive: boolean;
  autoplayDelay: number;
}

interface ClientCarouselProps {
  logos: Logo[];
  autoplayDelay?: number;
  slidesToShow?: {
    mobile: number;
    tablet: number;
    desktop: number;
    large: number;
  };
}

const CarouselSlide: React.FC<CarouselSlideProps> = React.memo(
  ({ src, name, isActive, autoplayDelay }) => (
    <div className="relative flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] xl:flex-[0_0_20%] pl-4">
      <div className="group relative flex h-32 sm:h-36 md:h-40 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl p-4 sm:p-6 shadow-lg border border-white/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-white/90 hover:-translate-y-1">
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/60 overflow-hidden">
          {isActive && (
            <div
              className="h-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-teal origin-left"
              style={{
                animation: `progress ${autoplayDelay}ms linear forwards`,
              }}
            />
          )}
        </div>
      </div>
    </div>
  )
);

CarouselSlide.displayName = "CarouselSlide";

export function ClientCarousel({
  logos,
  autoplayDelay = 3000,
}: ClientCarouselProps) {
  const autoplayRef = useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      stopOnFocusIn: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: true,
      containScroll: "trimSnaps",
      skipSnaps: false,
    },
    [autoplayRef.current]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // Create multiple copies for true infinite scrolling
  const logoChunks = useMemo(() => {
    if (logos.length === 0) return [];
    // Create enough copies to ensure smooth infinite scrolling
    const copies = Math.max(3, Math.ceil(20 / logos.length));
    return Array(copies).fill(logos).flat();
  }, [logos]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Initialize carousel
  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!logos.length) {
    return (
      <div className="flex items-center justify-center h-40 text-gray-500">
        No client logos available
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto group">
      {/* Main carousel */}
      <div
        className="overflow-hidden py-4 cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex -ml-4">
          {logoChunks.map((logo, index) => (
            <CarouselSlide
              key={`${logo.name}-${index}`}
              {...logo}
              isActive={index === activeIndex}
              autoplayDelay={autoplayDelay}
            />
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg border border-white/40 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-brand-navy hover:via-brand-blue hover:to-brand-teal hover:text-white hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/90 disabled:hover:text-gray-800 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous client"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm text-gray-800 shadow-lg border border-white/40 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-brand-navy hover:via-brand-blue hover:to-brand-teal hover:text-white hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-white/90 disabled:hover:text-gray-800 opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next client"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Progress dots */}
      <div className="flex justify-center mt-6 gap-2">
        {logos.slice(0, Math.min(logos.length, 8)).map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex % logos.length
                ? "bg-gradient-to-r from-brand-navy to-brand-blue w-6"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Add CSS keyframe for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}
