"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { ShimmerButton } from "./shimmer-button"
import { Particles } from "./particles"
import { AnimatedGradientText } from "./animated-gradient-text"
import { BlurFade } from "./blur-fade"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {!isVideoLoaded && (
        <Image
          src="/placeholder.svg?height=1080&width=1920"
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
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Particles Effect */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        refresh={false}
      />

      <div className="relative flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center text-white">
          <BlurFade delay={0.25} inView>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <BlurFade delay={0.5} inView>
                Welcome to{" "}
              </BlurFade>
              <BlurFade delay={0.75} inView>
                <AnimatedGradientText className="inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent font-bold">
                    Klimalogia
                  </span>
                </AnimatedGradientText>
              </BlurFade>
            </h1>
          </BlurFade>

          <BlurFade delay={1.0} inView>
            <p className="mb-8 text-lg sm:text-xl md:text-2xl font-light">
              Your partner in driving climate action and sustainability
            </p>
          </BlurFade>

          <BlurFade delay={1.25} inView>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShimmerButton
                onClick={() => (window.location.href = "/partner-with-us")}
              >
                Partner with us
              </ShimmerButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white/30 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-200"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
              >
                Learn More
              </motion.button>
            </div>
          </BlurFade>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-300 transition-colors"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </div>
  )
}
