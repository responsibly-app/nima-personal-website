"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 1000, suffix: "+", label: "Financial Agents", description: "Empowered across the country" },
  { value: 1, suffix: "B+", prefix: "$", label: "Assets Under Guidance", description: "Managed by our network" },
  { value: 8, suffix: "+", label: "Years of Excellence", description: "Industry leadership" },
  { value: 100, suffix: "%", label: "Agent Satisfaction", description: "Rate within our agency" },
]

function AnimatedCounter({
  value,
  suffix,
  prefix,
  started,
}: {
  value: number
  suffix: string
  prefix?: string
  started: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const duration = 2000

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [started, value])

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 bg-[#f2ebe0] dark:bg-[#130f08] overflow-hidden">
      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="relative text-center group"
            >
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#c9a84c]/20 hidden md:block" />
              )}
              <div className="font-heading text-5xl md:text-6xl font-black text-[#c9a84c] mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  started={isInView}
                />
              </div>
              <div className="text-[#1c1409] dark:text-[#f5f0e8] font-semibold text-sm tracking-wider uppercase mb-1">
                {stat.label}
              </div>
              <div className="text-[#9b8b74] text-xs tracking-wide">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
