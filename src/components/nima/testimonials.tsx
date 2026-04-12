"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    quote:
      "Working with Nima transformed my entire career. In just 18 months, I went from struggling to close a single policy to managing a book of business worth $8M. He doesn't just teach you to fish — he hands you the ocean.",
    author: "Sarah K.",
    role: "Senior Financial Advisor",
    rating: 5,
    category: "Agent",
  },
  {
    quote:
      "Nima's agency is the single best decision I've ever made professionally. The training is world-class, the support is unmatched, and the culture of excellence is contagious. I've tripled my income in 14 months.",
    author: "Michael T.",
    role: "Agency Partner",
    rating: 5,
    category: "Agent",
  },
  {
    quote:
      "As a client, the level of care and expertise I receive from Nima's agency is genuinely unlike anything I've experienced elsewhere in 20 years. My family's financial future is in the best hands possible.",
    author: "David R.",
    role: "Business Owner & Client",
    rating: 5,
    category: "Client",
  },
  {
    quote:
      "I had zero background in finance when I joined. Nima's systems and mentorship gave me the confidence and skills to become a top-10 producer in my region. He sees potential in people before they see it themselves.",
    author: "Jennifer L.",
    role: "Financial Agent",
    rating: 5,
    category: "Agent",
  },
  {
    quote:
      "Nima leads by example every single day. His energy, commitment, and genuine care for every person on his team creates something you rarely find in any industry — a culture where people truly lift each other up.",
    author: "Alex M.",
    role: "Regional Director",
    rating: 5,
    category: "Agent",
  },
  {
    quote:
      "I was skeptical at first. But after watching Nima's YouTube channel for three months, I knew this was different. Six months in, I've already surpassed what I made in two years at my previous job.",
    author: "Tanya W.",
    role: "Financial Agent",
    rating: 5,
    category: "Agent",
  },
  {
    quote:
      "The financial plan Nima's team built for our family changed everything. Retirement that once felt impossible is now a concrete plan. These people actually care about your outcome, not just the sale.",
    author: "Robert & Mary H.",
    role: "Retired Clients",
    rating: 5,
    category: "Client",
  },
  {
    quote:
      "I relocated from overseas and within 90 days of joining Nima's agency, I had closed more business than I had in 2 years back home. The systems and mentorship here are simply extraordinary.",
    author: "Carlos M.",
    role: "International Market Specialist",
    rating: 5,
    category: "Agent",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#c9a84c]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="group flex-shrink-0 w-[380px] mx-3 p-8 border border-[#c9a84c]/10 bg-[#0d0d18] hover:border-[#c9a84c]/30 transition-all duration-500 relative overflow-hidden">
      {/* Category badge */}
      <div
        className="absolute top-6 right-6 px-2 py-0.5 text-xs tracking-widest uppercase"
        style={{
          color: t.category === "Client" ? "#a0c0e8" : "#c9a84c",
          backgroundColor: t.category === "Client" ? "#a0c0e815" : "#c9a84c15",
        }}
      >
        {t.category}
      </div>

      {/* Quote mark */}
      <div className="font-[family-name:var(--font-heading)] text-6xl text-[#c9a84c]/20 leading-none mb-4 select-none">
        &ldquo;
      </div>

      <Stars count={t.rating} />

      <p className="text-[#b8a98f] text-sm leading-relaxed mt-4 mb-6 italic">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="flex items-center gap-3 border-t border-[#c9a84c]/10 pt-6">
        <div className="w-9 h-9 rounded-full bg-[#c9a84c]/15 flex items-center justify-center text-[#c9a84c] text-xs font-bold">
          {t.author.charAt(0)}
        </div>
        <div>
          <div className="text-[#f5f0e8] font-semibold text-sm">{t.author}</div>
          <div className="text-[#8a7a6a] text-xs">{t.role}</div>
        </div>
      </div>

      {/* Bottom hover line */}
      <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#c9a84c] to-transparent transition-all duration-500" />
    </div>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 bg-[#0d0d18] overflow-hidden"
    >
      {/* Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_#c9a84c05_0%,_transparent_70%)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
              Social Proof
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl font-black text-[#f5f0e8] mt-3 leading-none">
              What They
              <span className="italic text-[#c9a84c]"> Say.</span>
            </h2>
          </motion.div>
        </div>

        {/* Row 1 — scroll left */}
        <div className="relative overflow-hidden mb-6">
          <div className="flex marquee-left">
            {[...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0d0d18] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0d0d18] to-transparent pointer-events-none z-10" />
        </div>

        {/* Row 2 — scroll right */}
        <div className="relative overflow-hidden">
          <div className="flex marquee-right">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
          {/* Edge fades */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0d0d18] to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0d0d18] to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
