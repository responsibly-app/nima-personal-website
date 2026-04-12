"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const teamMembers = [
  {
    name: "Sarah Chen",
    title: "Senior Financial Advisor",
    initials: "SC",
    color: "from-rose-900/60 to-rose-950",
    accent: "#e8a0a0",
    achievement: "$0 to $50M AUM",
    detail: "in just 3 years",
    story:
      "A former teacher, Sarah joined with no finance background. Under Nima's mentorship, she built a $50M book of business and now mentors 15 agents herself.",
    tag: "Top Producer 2023",
  },
  {
    name: "Marcus Johnson",
    title: "Regional Director",
    initials: "MJ",
    color: "from-blue-900/60 to-blue-950",
    accent: "#a0c0e8",
    achievement: "Built a Team of 80",
    detail: "agents in 4 years",
    story:
      "Marcus came from retail banking and became one of Nima's first recruits. He now leads an 80-agent regional team generating $12M in annual premium.",
    tag: "Team Leader of the Year",
  },
  {
    name: "Priya Sharma",
    title: "Agency Manager",
    initials: "PS",
    color: "from-purple-900/60 to-purple-950",
    accent: "#c0a0e8",
    achievement: "Top 10 Producer",
    detail: "nationally, year 2",
    story:
      "A first-generation immigrant who arrived with $200 in her pocket. Priya is now a national top-10 producer and an inspiration to thousands of agents.",
    tag: "Rising Star Award",
  },
  {
    name: "James Wilson",
    title: "Senior Agency Director",
    initials: "JW",
    color: "from-emerald-900/60 to-emerald-950",
    accent: "#a0e8c0",
    achievement: "7-Figure Income",
    detail: "from $0 in year one",
    story:
      "Retired military officer who transitioned into finance through Nima's agency. Now earns a 7-figure income and is building his legacy in financial services.",
    tag: "Leadership Excellence",
  },
  {
    name: "Lisa Park",
    title: "Agency Partner",
    initials: "LP",
    color: "from-amber-900/60 to-amber-950",
    accent: "#e8d0a0",
    achievement: "300% Growth",
    detail: "in client portfolio YoY",
    story:
      "A single mother who bet on herself and this agency. Lisa grew her business 300% year-over-year and now owns a thriving practice supporting her family.",
    tag: "Most Inspiring Agent",
  },
  {
    name: "Ahmed Al-Hassan",
    title: "International Market Director",
    initials: "AA",
    color: "from-teal-900/60 to-teal-950",
    accent: "#a0e8e8",
    achievement: "Opened 3 Markets",
    detail: "across North America",
    story:
      "Ahmed pioneered the agency's international growth strategy, opening three new markets and building cross-cultural teams that are redefining the industry.",
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
      className="relative py-32 bg-[#05050a] overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/40 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-[#c9a84c]/3 blur-[80px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-[#c9a84c]/3 blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">The People</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#f5f0e8] mt-3 leading-none">
            Success
            <span className="italic text-[#c9a84c]"> Stories.</span>
          </h2>
          <p className="text-[#8a7a6a] text-lg mt-6 max-w-2xl mx-auto">
            Every agent in this agency has a story worth telling. Here are just a few of the
            extraordinary people who have transformed their lives through Nima&apos;s mentorship.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="group relative border border-[#c9a84c]/10 hover:border-[#c9a84c]/30 transition-all duration-500 overflow-hidden bg-[#0d0d18]"
            >
              {/* Card header with avatar */}
              <div className={`relative p-8 bg-linear-to-br ${member.color} flex items-start gap-5`}>
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold shrink-0 border-2"
                  style={{ borderColor: `${member.accent}40`, backgroundColor: `${member.accent}15`, color: member.accent }}
                >
                  {member.initials}
                </div>
                <div>
                  <h3 className="text-[#f5f0e8] font-bold text-lg">{member.name}</h3>
                  <p className="text-[#8a7a6a] text-sm">{member.title}</p>
                  <span
                    className="inline-block mt-2 px-2 py-0.5 text-xs font-medium rounded tracking-wider"
                    style={{ backgroundColor: `${member.accent}15`, color: member.accent }}
                  >
                    {member.tag}
                  </span>
                </div>
              </div>

              {/* Achievement */}
              <div className="px-8 pt-6 pb-2">
                <div
                  className="text-3xl font-heading font-black"
                  style={{ color: member.accent }}
                >
                  {member.achievement}
                </div>
                <div className="text-[#8a7a6a] text-sm">{member.detail}</div>
              </div>

              {/* Story */}
              <div className="px-8 pb-8 pt-3">
                <p className="text-[#8a7a6a] text-sm leading-relaxed">{member.story}</p>
              </div>

              {/* Hover glow bottom border */}
              <div
                className="absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, ${member.accent}, transparent)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA below grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-[#8a7a6a] mb-6">Your success story starts here.</p>
          <a
            href="#connect"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#c9a84c] text-[#05050a] text-sm font-bold tracking-widest uppercase hover:bg-[#e8c97a] transition-all duration-300"
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
