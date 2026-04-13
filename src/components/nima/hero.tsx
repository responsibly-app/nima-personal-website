"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#faf7f2] dark:bg-[#0f0d0a]"
    >
      {/* Prominent image — takes up 72% from right, barely any overlay */}
      <motion.div
        className="absolute right-0 top-0 w-[72%] h-full pointer-events-none hidden md:block"
        style={{ y: imageY }}
      >
        {/* Glow behind image */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 80% at 60% 85%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)",
          }}
        />
        {/* Thin left-edge blend only — no heavy fog */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--bg), var(--bg) 6%, transparent 20%)" }}
        />
        {/* Very slim bottom edge */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
          style={{ height: "5rem", background: "linear-gradient(to top, var(--bg), transparent)" }}
        />
        <Image
          src="/nima-attar-color.png"
          alt="Nima Attar"
          fill
          className="object-contain object-bottom"
          priority
          quality={100}
        />
      </motion.div>

      {/* Content — anchored to bottom-left, large name naturally overlays image */}
      <motion.div
        className="relative z-20 min-h-screen flex flex-col justify-end max-w-7xl mx-auto px-6 pb-20 pt-32 w-full"
        style={{ y: textY, opacity: contentOpacity }}
      >
        {/* Tag line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-10 h-px bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
            Founder & CEO · Financial Visionary
          </span>
        </motion.div>

        {/* Large name — extends naturally over image */}
        <div className="overflow-hidden mb-0.5">
          <motion.h1
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[21vw] sm:text-[16vw] md:text-[13vw] lg:text-[11.5rem] leading-none text-[#1c1409] dark:text-[#f5f0e8] font-black"
          >
            NIMA
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-[21vw] sm:text-[16vw] md:text-[13vw] lg:text-[11.5rem] leading-none font-black gold-shimmer"
          >
            ATTAR
          </motion.h1>
        </div>

        {/* Subtitle + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8"
        >
          <p className="text-[#9b8b74] dark:text-[#7a6a58] text-sm md:text-base leading-relaxed max-w-xs">
            Leading over{" "}
            <span className="text-[#c9a84c] font-semibold">1,000 financial agents</span>{" "}
            toward unprecedented excellence and generational wealth creation.
          </p>

          <div className="hidden sm:block w-px h-8 bg-[#c9a84c]/25 shrink-0" />

          <a
            href="#story"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#c9a84c] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#8b6914] transition-colors duration-300 shrink-0 self-start sm:self-auto"
          >
            Discover My Story
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        style={{ opacity: contentOpacity }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[#9b8b74]/60 text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-linear-to-b from-[#c9a84c]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
