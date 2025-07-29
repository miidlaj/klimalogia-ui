"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ContentTransition({ children }: { children: React.ReactNode }) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const windowHeight = window.innerHeight

            // Start transition when user scrolls past 80% of viewport height
            if (scrollY > windowHeight * 0.8) {
                setIsVisible(true)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                staggerChildren: 0.1,
            }}
            className="relative z-10"
        >
            {/* Gradient overlay for smooth transition */}
            <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none" />

            {children}
        </motion.div>
    )
}

