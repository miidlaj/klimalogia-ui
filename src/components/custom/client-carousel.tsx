"use client";

import type React from "react";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type Logo = { name: string; src: string };
type Props = {
  logos?: Logo[];
  itemMinWidth?: number;
  gap?: number;
  autoScrollInterval?: number; // Auto-scroll interval in milliseconds
  pauseOnHover?: boolean; // Whether to pause auto-scroll on hover
};

export function ClientCarousel({
  logos = [],
  itemMinWidth = 220,
  gap = 24,
  autoScrollInterval = 3000, // Default 3 seconds
  pauseOnHover = true,
}: Props) {
  const railRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [progress, setProgress] = useState(0);
  const [thumbW, setThumbW] = useState(0);
  const [snapSize, setSnapSize] = useState(itemMinWidth + gap);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const lastSnapAtRef = useRef(0);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  const throttleMs = 260;

  // compute snap size based on first item width at runtime
  const recomputeMeasures = useCallback(() => {
    const rail = railRef.current;
    const wrapper = wrapperRef.current;
    if (!rail || !wrapper) return;

    const firstItem = rail.querySelector<HTMLElement>(
      "[data-item='client-card']"
    );
    if (firstItem) {
      const rect = firstItem.getBoundingClientRect();
      const style = window.getComputedStyle(rail);
      const gapPx = Number.parseFloat(style.columnGap || style.gap || `${gap}`);
      const newSnapSize = Math.round(rect.width + (isNaN(gapPx) ? gap : gapPx));
      setSnapSize(newSnapSize);

      // Calculate max index
      const newMaxIndex = Math.round(
        (wrapper.scrollWidth - wrapper.clientWidth) / newSnapSize
      );
      setMaxIndex(newMaxIndex);
    }

    // progress thumb width
    if (wrapper) {
      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      const ratio =
        maxScroll > 0 ? wrapper.clientWidth / wrapper.scrollWidth : 1;
      const trackInner = Math.max(0, wrapper.clientWidth - 64); // 32px margins on both sides
      setThumbW(Math.max(40, trackInner * ratio));
    }
  }, [gap]);

  // Auto-scroll function
  const autoScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const nextIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    wrapper.scrollTo({ left: nextIndex * snapSize, behavior: "smooth" });
  }, [currentIndex, maxIndex, snapSize]);

  // Start/stop auto-scroll timer
  const startAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) clearInterval(autoScrollTimerRef.current);
    autoScrollTimerRef.current = setInterval(autoScroll, autoScrollInterval);
  }, [autoScroll, autoScrollInterval]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
      autoScrollTimerRef.current = null;
    }
  }, []);

  // progress tracking - don't interfere with cursor
  const onScroll = useCallback(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const max = wrapper.scrollWidth - wrapper.clientWidth;
    const p = max > 0 ? wrapper.scrollLeft / max : 0;
    setProgress(p);

    // Update current index based on scroll position
    const newIndex = Math.round(wrapper.scrollLeft / snapSize);
    setCurrentIndex(newIndex);
  }, [snapSize]);

  useEffect(() => {
    recomputeMeasures();
    const onResize = () => recomputeMeasures();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [recomputeMeasures]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    wrapper.addEventListener("scroll", onScroll, { passive: true });
    return () => wrapper.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  // Auto-scroll effect
  useEffect(() => {
    if (logos.length > 1 && maxIndex > 0) {
      if (pauseOnHover && hovering) {
        stopAutoScroll();
      } else {
        startAutoScroll();
      }
    }

    return () => stopAutoScroll();
  }, [
    logos.length,
    maxIndex,
    hovering,
    pauseOnHover,
    startAutoScroll,
    stopAutoScroll,
  ]);

  // convert vertical wheel to horizontal step when hovering
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const handleWheel = (e: WheelEvent) => {
      if (!hovering) return;
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      const now = performance.now();
      if (now - lastSnapAtRef.current < throttleMs) return;

      // Stop auto-scroll when manually scrolling
      stopAutoScroll();

      const dir = e.deltaY > 0 ? 1 : -1;
      const newCurrentIndex = Math.round(wrapper.scrollLeft / snapSize);
      const nextIndex = Math.min(maxIndex, Math.max(0, newCurrentIndex + dir));
      setCurrentIndex(nextIndex);
      wrapper.scrollTo({ left: nextIndex * snapSize, behavior: "smooth" });
      lastSnapAtRef.current = now;

      // Restart auto-scroll after a delay
      setTimeout(() => {
        if (!hovering || !pauseOnHover) {
          startAutoScroll();
        }
      }, 2000);
    };
    wrapper.addEventListener("wheel", handleWheel, { passive: false });
    return () => wrapper.removeEventListener("wheel", handleWheel);
  }, [
    hovering,
    snapSize,
    maxIndex,
    stopAutoScroll,
    startAutoScroll,
    pauseOnHover,
  ]);

  // keyboard accessibility
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();

        // Stop auto-scroll when manually navigating
        stopAutoScroll();

        const dir = e.key === "ArrowRight" ? 1 : -1;
        const nextIndex = Math.min(maxIndex, Math.max(0, currentIndex + dir));
        setCurrentIndex(nextIndex);
        wrapper.scrollTo({ left: nextIndex * snapSize, behavior: "smooth" });

        // Restart auto-scroll after a delay
        setTimeout(() => {
          if (!hovering || !pauseOnHover) {
            startAutoScroll();
          }
        }, 2000);
      }
    },
    [
      snapSize,
      currentIndex,
      maxIndex,
      stopAutoScroll,
      startAutoScroll,
      hovering,
      pauseOnHover,
    ]
  );

  // Persistent mouse tracking - don't let scroll interfere
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  // Stable hover handlers
  const handleMouseEnter = useCallback(() => {
    setHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovering(false);
  }, []);

  const trackStyle = useMemo(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return { transform: "translateX(0px)" };
    const trackInner = Math.max(0, wrapper.clientWidth - 64);
    const maxTranslate = Math.max(0, trackInner - thumbW);
    const translate = maxTranslate * progress;
    return { transform: `translateX(${translate}px)` };
  }, [progress, thumbW]);

  return (
    <div className="relative">
      <div
        ref={wrapperRef}
        role="region"
        aria-label="Client Logos"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={onMouseMove}
        onKeyDown={onKeyDown}
        className="group relative overflow-x-auto overflow-y-hidden pl-6 md:pl-8 pr-0 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: "x mandatory",
          cursor: hovering ? "none" : "default",
        }}
      >
        <div ref={railRef} className="flex gap-6 md:gap-8 items-stretch">
          {logos.map((logo, i) => (
            <Card
              key={`${logo.name}-${i}`}
              data-item="client-card"
              className="min-w-[220px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] h-[120px] sm:h-[140px] md:h-[160px] flex items-center justify-center scroll-ml-6 md:scroll-ml-8 transition-shadow hover:shadow-lg bg-white select-none"
              style={{
                scrollSnapAlign: "start",
                scrollSnapStop: "always",
              }}
            >
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  layout="fill"
                  objectFit="contain"
                  className="max-h-24 w-auto object-contain opacity-90"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Custom cursor overlay - positioned relative to viewport, not scroll container */}
      {hovering && (
        <div
          className="pointer-events-none fixed z-50"
          style={{
            left:
              cursor.x +
              (wrapperRef.current?.getBoundingClientRect().left || 0) -
              40,
            top:
              cursor.y +
              (wrapperRef.current?.getBoundingClientRect().top || 0) -
              40,
          }}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white/60 shadow-2xl backdrop-blur-sm bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-blue)] flex items-center justify-between text-white px-1">
            <ChevronLeft className="size-6 opacity-90" />
            <ChevronRight className="size-6 opacity-90" />
          </div>
        </div>
      )}

      <div className="mt-6 px-8">
        <div className="relative h-1 rounded-full bg-[var(--brand-navy)] overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 h-3 -top-0.5 bg-[var(--brand-teal)]"
            style={{
              width: `${thumbW}px`,
              ...trackStyle,
            }}
          />
        </div>
      </div>
    </div>
  );
}
