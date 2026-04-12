"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Roman K.",
    title: "Senior Marketing Director",
    initials: "RK",
    accent: "#c9a84c",
    achievement: "$0 to $600K AUM",
    detail: "in just 3 years",
    story:
      "A former carpenter, Roman joined with no finance background. Under Nima's mentorship, he built a $600K+ book of business and now mentors 20+ agents himself.",
    tag: "Top Producer 2023",
  },
  {
    name: "Stori F.",
    title: "Senior Marketing Director",
    initials: "SF",
    accent: "#8b7355",
    achievement: "Built a Team of 80",
    detail: "agents in 4 years",
    story:
      "Stori came from HR and became one of Nima's first recruits. She now leads an 80-agent regional team generating $300K in annual premium.",
    tag: "Team Leader of the Year",
  },
  {
    name: "Alexis T.",
    title: "Senior Marketing Director",
    initials: "AT",
    accent: "#c9a84c",
    achievement: "Top 10 Producer",
    detail: "nationally, year 2",
    story:
      "A first-generation immigrant who arrived with $200 in her pocket. Alexis is now a regional top-10 producer and an inspiration to many of agents.",
    tag: "Rising Star Award",
  },
  {
    name: "Moji GH.",
    title: "Senior Agency Director",
    initials: "MG",
    accent: "#8b7355",
    achievement: "6-Figure Income",
    detail: "from $0 in year one",
    story:
      "Started out working as a coffee shop owner before transitioning into finance through Nima’s agency. Today, he earns a seven-figure income and is actively building a long-term legacy in the financial services industry.",
    tag: "Leadership Excellence",
  },
  {
    name: "Mariane C.",
    title: "Senior Agency Director",
    initials: "MC",
    accent: "#c9a84c",
    achievement: "300% Growth",
    detail: "in client portfolio YoY",
    story:
      "Mariane grew her business 300% year-over-year and now owns a thriving practice supporting her family.",
    tag: "Most Inspiring Agent",
  },
  {
    name: "Yash J.",
    title: "Senior Agency Director",
    initials: "YJ",
    accent: "#8b7355",
    achievement: "Opened 3 Markets",
    detail: "across North America",
    story:
      "Yash pioneered the agency's international growth strategy, opening three new markets and building cross-cultural teams that are redefining the industry.",
    tag: "Innovation Award",
  },
]

export function Team() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="team"
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
          className="text-center mb-16"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">The People</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] mt-3 leading-none">
            Success
            <span className="italic text-[#c9a84c]"> Stories.</span>
          </h2>
          <p className="text-[#9b8b74] text-lg mt-5 max-w-2xl mx-auto">
            Every agent in this agency has a story worth telling. Here are just a few of the
            extraordinary people who have transformed their lives through Nima&apos;s mentorship.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="group relative border border-[#c9a84c]/15 hover:border-[#c9a84c]/35 transition-all duration-500 overflow-hidden bg-white/70 backdrop-blur-sm hover:bg-white/90"
            >
              {/* Card header */}
              <div className="relative p-7 bg-[#f2ebe0]/60 border-b border-[#c9a84c]/10 flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold shrink-0 border"
                  style={{
                    borderColor: `${member.accent}40`,
                    backgroundColor: `${member.accent}12`,
                    color: member.accent,
                  }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-[#1c1409] font-bold text-base">{member.name}</h3>
                  <p className="text-[#9b8b74] text-sm">{member.title}</p>
                  <span
                    className="inline-block mt-1.5 px-2 py-0.5 text-xs font-medium tracking-wider rounded"
                    style={{ backgroundColor: `${member.accent}15`, color: member.accent }}
                  >
                    {member.tag}
                  </span>
                </div>
              </div>

              {/* Achievement */}
              <div className="px-7 pt-5 pb-1">
                <div className="text-2xl font-heading font-black" style={{ color: member.accent }}>
                  {member.achievement}
                </div>
                <div className="text-[#9b8b74] text-xs mt-0.5">{member.detail}</div>
              </div>

              {/* Story */}
              <div className="px-7 pb-7 pt-3">
                <p className="text-[#9b8b74] text-sm leading-relaxed">{member.story}</p>
              </div>

              {/* Hover bottom line */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${member.accent}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-14"
        >
          <p className="text-[#9b8b74] mb-5">Your success story starts here.</p>
          <a
            href="#connect"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#8b6914] transition-all duration-300 shadow-lg shadow-[#c9a84c]/20"
          >
            Write Your Story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
