"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Logo from "@/components/logo";
import { TypingAnimation } from "@/components/magic-ui/typing-animation";
import Link from "next/link";
import { ShimmerButton } from "./shimmer-button";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {!isVideoLoaded && (
        <Image
          src="/background.png"
          alt="Nature background"
          fill
          className="object-cover"
          priority
        />
      )}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative flex h-full items-center justify-center">
        <div className="container flex justify-center flex-col items-center mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold flex justify-center items-center flex-col leading-tight sm:text-5xl md:text-6xl">
            <TypingAnimation className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Welcome to
            </TypingAnimation>
            <Logo variant="white" height={85} width={280} />
          </h1>
          <p className="mb-4 text-lg sm:text-xl">
            Your Global Partner in Climate Action and Sustainable Transformation
          </p>

          <Link href={"/our-solutions"}>
            <ShimmerButton
              background="linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-blue) 50%, var(--brand-teal) 100%)"
              className="cursor-pointer"
            >
              Explore Now
            </ShimmerButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
