"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { socialLinks } from "@/config"

const channelStats = [
  { label: "YouTube Subscribers", value: "3.8K+", icon: "▶" },
  { label: "Instagram Followers", value: "50K+", icon: "◉" },
  { label: "X Followers", value: "90+", icon: "X" },
  { label: "Total Video Views", value: "8M+", icon: "◈" },
]

export function SocialStories() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-28 bg-[#faf7f2] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
            Online Presence
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] mt-3 leading-none">
            Follow the
            <span className="block italic text-[#c9a84c]">Journey.</span>
          </h2>
          <p className="text-[#9b8b74] text-lg mt-5 max-w-xl">
            From keynote speeches to weekly financial education — Nima shares his knowledge,
            his journey, and his mission with the world.
          </p>
        </motion.div>

        {/* Channel stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
        >
          {channelStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 border border-[#c9a84c]/15 bg-white/60 backdrop-blur-sm text-center hover:border-[#c9a84c]/35 hover:bg-white/80 transition-all duration-300"
            >
              <div className="text-[#c9a84c] text-lg font-bold mb-2 font-heading">{stat.icon}</div>
              <div className="font-heading text-3xl font-black text-[#c9a84c] mb-1">
                {stat.value}
              </div>
              <div className="text-[#9b8b74] text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <a
            href={socialLinks.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#c9a84c]/8 border border-[#c9a84c]/30 text-[#8b6914] text-sm font-medium tracking-wider uppercase hover:bg-[#c9a84c]/15 hover:border-[#c9a84c]/60 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow on Instagram
          </a>
          <a
            href={socialLinks.xLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#c9a84c]/8 border border-[#c9a84c]/30 text-[#8b6914] text-sm font-medium tracking-wider uppercase hover:bg-[#c9a84c]/15 hover:border-[#c9a84c]/60 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow on X
          </a>
          <a
            href={socialLinks.facebookLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#c9a84c]/8 border border-[#c9a84c]/30 text-[#8b6914] text-sm font-medium tracking-wider uppercase hover:bg-[#c9a84c]/15 hover:border-[#c9a84c]/60 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow on Facebook
          </a>
          <a
            href={socialLinks.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-[#c9a84c]/8 border border-[#c9a84c]/30 text-[#8b6914] text-sm font-medium tracking-wider uppercase hover:bg-[#c9a84c]/15 hover:border-[#c9a84c]/60 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  )
}
