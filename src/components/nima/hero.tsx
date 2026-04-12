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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-[#05050a] flex items-center"
    >
      {/* Background animated gradient orbs */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 left-1/4 w-150 h-150 rounded-full bg-[#c9a84c]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 rounded-full bg-[#c9a84c]/3 blur-[100px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Nima's color image — right side */}
      <motion.div
        className="absolute right-0 bottom-0 w-[55%] h-full pointer-events-none hidden md:block"
        style={{ y: imageY }}
      >
        {/* Golden atmospheric glow behind image */}
        <div className="absolute bottom-0 right-1/4 w-125 h-175 rounded-full bg-[#c9a84c]/8 blur-[80px]" />
        {/* Fade gradient left edge */}
        <div className="absolute inset-0 bg-linear-to-r from-[#05050a] via-[#05050a]/30 to-transparent z-10" />
        {/* Fade gradient bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#05050a] to-transparent z-10" />
        <Image
          src="/nima-attar-color.png"
          alt="Nima Attar"
          fill
          className="object-contain object-bottom"
          priority
          quality={95}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-linear-to-r from-[#c9a84c] to-transparent" />
            <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
              Founder & CEO · Financial Visionary
            </span>
          </motion.div>

          {/* Main title */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[10rem] leading-none text-[#f5f0e8] font-black"
            >
              NIMA
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[18vw] sm:text-[14vw] md:text-[11vw] lg:text-[10rem] leading-none font-black gold-shimmer"
            >
              ATTAR
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[#8a7a6a] text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            Leading over{" "}
            <span className="text-[#c9a84c] font-semibold">1,000 financial agents</span>{" "}
            toward unprecedented excellence, prosperity, and generational wealth creation.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#story"
              className="group px-8 py-4 bg-[#c9a84c] text-[#05050a] text-sm font-bold tracking-widest uppercase hover:bg-[#e8c97a] transition-all duration-300 flex items-center gap-3"
            >
              Discover My Story
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#agency"
              className="px-8 py-4 border border-[#c9a84c]/40 text-[#c9a84c] text-sm font-medium tracking-widest uppercase hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300"
            >
              Explore Agency
            </a>
          </motion.div>

          {/* Social quick links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex items-center gap-6 mt-12"
          >
            <span className="text-[#8a7a6a] text-xs tracking-widest uppercase">Follow</span>
            <div className="w-8 h-px bg-[#c9a84c]/30" />
            {[
              {
                label: "Instagram",
                href: "#",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                href: "#",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                href: "#",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[#8a7a6a] hover:text-[#c9a84c] transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[#8a7a6a] text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-linear-to-b from-[#c9a84c] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
