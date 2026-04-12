"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

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
      className="relative py-40 overflow-hidden bg-[#0d0d18]"
    >
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d18] via-[#0d0d18]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d18] via-transparent to-[#0d0d18]/30" />
        </div>
      </motion.div>

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-heading)] text-[18vw] font-black text-[#c9a84c]/3 pointer-events-none select-none whitespace-nowrap">
        SUCCESS
      </div>

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
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-black text-[#f5f0e8] mt-4 leading-none mb-8">
              Ready to Write
              <span className="block italic text-[#c9a84c]">Your Story?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#8a7a6a] text-lg leading-relaxed mb-12"
          >
            Whether you&apos;re a seasoned professional looking for your next level, or someone
            who has never worked in finance but has the drive to succeed — there is a place for
            you in Nima Attar&apos;s agency. Bring your ambition. He&apos;ll bring everything else.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <a
              href="mailto:join@nimaattar.com"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-[#c9a84c] text-[#05050a] font-bold tracking-widest uppercase text-sm hover:bg-[#e8c97a] transition-all duration-300"
            >
              Join the Agency
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
              href="mailto:hello@nimaattar.com"
              className="inline-flex items-center gap-3 px-10 py-5 border border-[#c9a84c]/40 text-[#c9a84c] font-medium tracking-widest uppercase text-sm hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-all duration-300"
            >
              Connect with Nima
            </a>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 border-t border-[#c9a84c]/10 pt-10"
          >
            <p className="text-[#8a7a6a] text-xs tracking-widest uppercase mb-2">Get in Touch</p>
            <div className="flex items-center gap-3 text-[#b8a98f]">
              <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:join@nimaattar.com" className="hover:text-[#c9a84c] transition-colors">
                join@nimaattar.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-[#b8a98f]">
              <svg className="w-4 h-4 text-[#c9a84c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Book a Discovery Call →</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
