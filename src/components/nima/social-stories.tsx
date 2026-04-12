"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"

const stories = [
  {
    platform: "YouTube",
    title: "Keynote Speech",
    subtitle: "Financial Freedom Summit 2024",
    views: "245K views",
    color: "#FF0000",
    bgGradient: "from-red-950/80 to-red-900/40",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    title: "Team Awards Night",
    subtitle: "Celebrating 1,000 Agents",
    views: "89K likes",
    color: "#E1306C",
    bgGradient: "from-pink-950/80 to-purple-900/40",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    title: "The Mindset Series",
    subtitle: "Episode 47 — Building Resilience",
    views: "182K views",
    color: "#FF0000",
    bgGradient: "from-red-950/80 to-orange-900/40",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    title: "Charity Drive",
    subtitle: "Giving Back to Our Community",
    views: "54K likes",
    color: "#E1306C",
    bgGradient: "from-purple-950/80 to-blue-900/40",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    title: "Live Training",
    subtitle: "Agent Bootcamp — Day 1",
    views: "98K views",
    color: "#FF0000",
    bgGradient: "from-amber-950/80 to-yellow-900/30",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
  },
  {
    platform: "LinkedIn",
    title: "Industry Insights",
    subtitle: "The Future of Financial Services",
    views: "32K impressions",
    color: "#0A66C2",
    bgGradient: "from-blue-950/80 to-cyan-900/30",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const channelStats = [
  { label: "YouTube Subscribers", value: "125K+", icon: "🎬" },
  { label: "Instagram Followers", value: "89K+", icon: "📸" },
  { label: "LinkedIn Connections", value: "45K+", icon: "💼" },
  { label: "Total Video Views", value: "8M+", icon: "▶️" },
]

export function SocialStories() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStory, setActiveStory] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="relative py-32 bg-[#05050a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,#c9a84c04_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
            Online Presence
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#f5f0e8] mt-3 leading-none">
            Follow the
            <span className="block italic text-[#c9a84c]">Journey.</span>
          </h2>
          <p className="text-[#8a7a6a] text-lg mt-6 max-w-2xl">
            From keynote speeches to weekly financial education — Nima shares his knowledge,
            his journey, and his mission with the world. Subscribe, follow, and be part of the movement.
          </p>
        </motion.div>

        {/* Channel stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {channelStats.map((stat, i) => (
            <div
              key={stat.label}
              className="p-6 border border-[#c9a84c]/10 bg-[#0d0d18] text-center hover:border-[#c9a84c]/30 transition-colors duration-300"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-heading text-3xl font-black text-[#c9a84c] mb-1">
                {stat.value}
              </div>
              <div className="text-[#8a7a6a] text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Story cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className={`group relative overflow-hidden cursor-pointer border transition-all duration-500 ${
                activeStory === i
                  ? "border-[#c9a84c]/60"
                  : "border-[#c9a84c]/10 hover:border-[#c9a84c]/30"
              }`}
              onClick={() => setActiveStory(activeStory === i ? null : i)}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-linear-to-br ${story.bgGradient} opacity-60`} />
              <div className="absolute inset-0 bg-[#0d0d18]/60" />

              {/* Content */}
              <div className="relative p-8">
                {/* Platform badge */}
                <div
                  className="flex items-center gap-2 mb-6 w-fit px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${story.color}20`, color: story.color }}
                >
                  {story.icon}
                  <span className="text-xs font-semibold tracking-wider uppercase">
                    {story.platform}
                  </span>
                </div>

                {/* Story title */}
                <h3 className="font-heading text-xl font-bold text-[#f5f0e8] mb-2">
                  {story.title}
                </h3>
                <p className="text-[#8a7a6a] text-sm mb-4">{story.subtitle}</p>

                {/* Views/engagement */}
                <div className="flex items-center justify-between">
                  <span className="text-[#c9a84c] text-sm font-medium">{story.views}</span>
                  <div className="flex items-center gap-2 text-[#8a7a6a] text-xs group-hover:text-[#c9a84c] transition-colors">
                    <span>Watch Now</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Animated bottom line */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${story.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA to subscribe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-12 items-center justify-center"
        >
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-[#FF0000]/10 border border-[#FF0000]/30 text-[#FF0000] text-sm font-medium tracking-wider uppercase hover:bg-[#FF0000]/20 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
            Subscribe on YouTube
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C] text-sm font-medium tracking-wider uppercase hover:bg-[#E1306C]/20 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
