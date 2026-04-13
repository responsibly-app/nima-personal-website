"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const pillars = [
  {
    number: "01",
    title: "Elite Training",
    description:
      "Our proprietary training system has produced hundreds of top producers. Every agent gets access to the same playbook that took Nima 15 years to perfect.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Proven Systems",
    description:
      "From lead generation to client retention, our battle-tested systems remove the guesswork. Focus on serving clients — we handle the rest.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Unlimited Growth",
    description:
      "There are no ceilings here. Build your own team, lead your own agency, and create the income and legacy you've always dreamed of.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Community & Culture",
    description:
      "Join a brotherhood and sisterhood of driven professionals who celebrate each other's wins. Culture eats strategy for breakfast — and ours is unmatched.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
]

export function Agency() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="agency"
      ref={ref}
      className="relative py-28 bg-[#f2ebe0] dark:bg-[#130f08] overflow-hidden"
    >
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">The Powerhouse</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] dark:text-[#f5f0e8] mt-3 leading-none">
              The Agency
              <span className="block italic text-[#c9a84c]">Behind the Mission.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-[#9b8b74] leading-relaxed mb-5">
              What Nima has built is more than an agency — it&apos;s a movement. A place where
              financial professionals from all walks of life come to build something extraordinary.
              Where your background doesn&apos;t define your ceiling. Where your work ethic does.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-[#c9a84c]/50" />
              <span className="text-[#8b6914] text-sm font-medium italic font-heading">
                &ldquo;We don&rsquo;t hire agents. We build leaders.&rdquo;
              </span>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
              className="group relative p-7 bg-white/60 dark:bg-[#1a1611]/60 backdrop-blur-sm border border-[#c9a84c]/15 hover:border-[#c9a84c]/40 hover:bg-white/80 dark:hover:bg-[#1a1611]/80 transition-all duration-500 overflow-hidden"
            >
              {/* Number */}
              <span className="font-heading text-5xl font-black text-[#c9a84c]/12 group-hover:text-[#c9a84c]/20 transition-colors duration-300 block mb-4">
                {pillar.number}
              </span>

              {/* Icon */}
              <div className="text-[#c9a84c] mb-4">{pillar.icon}</div>

              {/* Title */}
              <h3 className="text-[#1c1409] dark:text-[#f5f0e8] font-bold text-lg mb-2">{pillar.title}</h3>

              {/* Description */}
              <p className="text-[#9b8b74] text-sm leading-relaxed">{pillar.description}</p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-linear-to-r from-[#c9a84c] to-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
