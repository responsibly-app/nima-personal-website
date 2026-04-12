"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { socialLinks } from "@/config"

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section
      id="connect"
      ref={ref}
      className="relative py-36 overflow-hidden bg-[#f2ebe0]"
    >
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

      {/* Background Nima image with parallax */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: imageY }}
      >
        <div className="absolute right-0 bottom-0 w-[50%] h-full hidden lg:block">
          <Image
            src="/nima-attar-color.png"
            alt="Nima Attar"
            fill
            className="object-contain object-bottom"
            quality={90}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#f2ebe0] via-[#f2ebe0]/70 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-[#f2ebe0] via-transparent to-[#f2ebe0]/30" />
        </div>
      </motion.div>

      {/* Subtle gold orb */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#c9a84c]/8 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
              Your Next Chapter
            </span>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] mt-4 leading-none mb-7">
              Ready to Write
              <span className="block italic text-[#c9a84c]">Your Story?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#9b8b74] text-lg leading-relaxed mb-10"
          >
            Whether you&apos;re a seasoned professional looking for your next level, or someone
            who has never worked in finance but has the drive to succeed — there is a place for
            you in Nima Attar&apos;s agency. Bring your ambition. He&apos;ll bring everything else.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href={socialLinks.calendlyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c9a84c] text-white font-bold tracking-widest uppercase text-sm hover:bg-[#8b6914] transition-all duration-300 shadow-lg shadow-[#c9a84c]/25"
            >
              Book a Discovery Call
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
              href={`mailto:${socialLinks.email}`}
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#c9a84c]/40 text-[#8b6914] font-medium tracking-widest uppercase text-sm hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300 bg-white/50 backdrop-blur-sm"
            >
              Send a Message
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 border-t border-[#c9a84c]/15 pt-8"
          >
            <p className="text-[#9b8b74] text-xs tracking-widest uppercase mb-1">Direct Contact</p>
            <div className="flex items-center gap-3 text-[#5a4832]">
              <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href={`mailto:${socialLinks.email}`} className="hover:text-[#c9a84c] transition-colors text-sm">
                {socialLinks.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-[#5a4832]">
              <svg className="w-4 h-4 text-[#c9a84c] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <a
                href={socialLinks.calendlyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#c9a84c] transition-colors text-sm"
              >
                Schedule via Calendly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
