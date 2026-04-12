"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"

const milestones = [
  { year: "2009", title: "The Beginning", desc: "Started as a solo financial advisor with a single desk and an unshakeable belief in people's potential." },
  { year: "2013", title: "First Agency", desc: "Founded his first agency, recruiting 50 agents in the first year through relentless mentorship." },
  { year: "2017", title: "National Expansion", desc: "Expanded nationally with offices in 5 major cities and a network exceeding 300 agents." },
  { year: "2020", title: "Industry Recognition", desc: "Named one of the Top 10 Financial Agency Leaders in North America." },
  { year: "2024", title: "1,000+ Agents Strong", desc: "Crossed the milestone of 1,000 active agents, with $2B+ in assets under agency guidance." },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" })
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-32 bg-[#05050a] overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(45deg,#c9a84c_0px,#c9a84c_1px,transparent_1px,transparent_60px)]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">The Origin Story</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#f5f0e8] mt-3 leading-none">
            Built from the
            <span className="block italic text-[#c9a84c]">Ground Up.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* B&W Image with parallax */}
          <div ref={imageRef} className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isImageInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Decorative frame */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-[#c9a84c]/40" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#c9a84c]/40" />

              <motion.div style={{ y: imageY }} className="relative overflow-hidden">
                <div className="relative aspect-3/4 bg-[#0d0d18]">
                  <Image
                    src="/nima-attar-bw.png"
                    alt="Nima Attar — Black & White"
                    fill
                    className="object-contain object-center"
                    quality={95}
                  />
                  {/* Subtle gold overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#05050a]/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-[#c9a84c]/5 mix-blend-overlay" />
                </div>
              </motion.div>

              {/* Quote block on image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isImageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute bottom-8 -right-8 bg-[#0d0d18] border border-[#c9a84c]/20 p-6 max-w-65"
              >
                <p className="text-[#f5f0e8] text-sm italic font-heading leading-relaxed mb-3">
                  &ldquo;Success is not for the chosen few — it&rsquo;s for those who choose it.&rdquo;
                </p>
                <span className="text-[#c9a84c] text-xs tracking-widest uppercase">— Nima Attar</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Story content + Timeline */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-[#b8a98f] text-lg leading-relaxed mb-6">
                Nima Attar&apos;s story is one of relentless pursuit. Starting with nothing but a
                vision and an unwavering commitment to his clients, he built one of the most
                respected financial agencies in the country — brick by brick, agent by agent.
              </p>
              <p className="text-[#8a7a6a] leading-relaxed mb-6">
                What began as a passion for helping families achieve financial security quickly
                evolved into a movement. Nima realized that by empowering other agents — giving
                them the systems, training, and mentorship he never had — he could multiply his
                impact a thousandfold.
              </p>
              <p className="text-[#8a7a6a] leading-relaxed">
                Today, over 1,000 financial professionals call Nima their leader, mentor, and
                partner in success. His agency has helped tens of thousands of families protect
                their futures and build lasting wealth across North America.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
                  className="flex gap-5 group"
                >
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#c9a84c] bg-[#05050a] shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-300 mt-1" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-linear-to-b from-[#c9a84c]/40 to-transparent mt-2 min-h-6" />
                    )}
                  </div>

                  <div className="pb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#c9a84c] text-sm font-bold font-mono">
                        {milestone.year}
                      </span>
                      <span className="text-[#f5f0e8] font-semibold">{milestone.title}</span>
                    </div>
                    <p className="text-[#8a7a6a] text-sm leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
