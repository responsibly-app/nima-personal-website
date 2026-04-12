"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { VideoPlayer } from "@/components/ui/video-thumbnail-player"
import { heroVideoUrl } from "@/config"

const videoId = heroVideoUrl.replace("https://youtu.be/", "")
const videoEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`
const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

const milestones = [
  { year: "2014", title: "The Beginning", desc: "Started WFG one day before his 20th birthday — no mentorship, no team. Worked 12–14 hours a day, 7 days a week, earning ~$1,200/month. Recruited 104 people with almost none sticking around." },
  { year: "2018", title: "The Restart", desc: "Joined Dave's office part-time, driving a beat-up 2005 Honda Odyssey with a duct-taped mirror — kept on purpose as fuel. At his first convention declared: \"Next year I'm taking all the awards.\" Became #1 personal recruiter 8 months later." },
  { year: "2020", title: "The Turning Point", desc: "Asked himself: \"If someone put a gun to my head, would I find a way?\" Became SMD in May. That December — sick with COVID and recovering from wisdom tooth surgery — he committed to $60K in a month and hit $70K. Became #1 SMD." },
  { year: "2021–23", title: "The Climb", desc: "$750K ring · #1 SMD MVP · $330K passive income · $862K cash flow · EMD · CEO rank · $1M ring earner · 523 team members." },
  { year: "2024", title: "EVC", desc: "634 convention attendees. On track for $1.5M. Built entirely from belief, grit, and refusing to quit." },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" })

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-28 bg-[#faf7f2] overflow-hidden"
    >
      {/* Soft gold glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#c9a84c]/6 blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">The Origin Story</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] mt-3 leading-none">
            From rock bottom
            <span className="block italic text-[#c9a84c]">to the top.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Video — left column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-[#c9a84c]/40 z-10 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-[#c9a84c]/40 z-10 pointer-events-none" />

            <VideoPlayer
              videoUrl={videoEmbedUrl}
              thumbnailUrl={videoThumbnailUrl}
              title="Nema Attar — My Life Story"
              description="From $1,200/month and near-zero results to EVC rank and $1M+ earned"
              aspectRatio="16/9"
              className="rounded-none shadow-xl shadow-[#c9a84c]/10"
            />

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 bg-white/70 backdrop-blur-sm border border-[#c9a84c]/20 p-5"
            >
              <p className="text-[#5a4832] text-sm italic font-heading leading-relaxed mb-2">
                &ldquo;If I don&rsquo;t believe in me, who will?&rdquo;
              </p>
              <span className="text-[#c9a84c] text-xs tracking-widest uppercase">— Nema Attar</span>
            </motion.div>
          </motion.div>

          {/* Story content + Timeline — right column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-10"
            >
              <p className="text-[#5a4832] text-lg leading-relaxed mb-5">
                Nima started WFG the day before he turned 20 — no mentor, no team, and no results
                for years. He battled anxiety, depression, and constant rejection, yet kept showing
                up every single day. Cut from soccer teams, failed academically, failed at Forex,
                Amazon FBA, and every side business he tried.
              </p>
              <p className="text-[#9b8b74] leading-relaxed">
                One question changed everything: <em>&ldquo;If someone put a gun to my head, would I find a way?&rdquo;</em>{" "}
                The answer was always yes. Today, over 634 team members attend his conventions,
                he&apos;s a $1M ring earner at CEO/EVC rank, and he credits every setback as the
                fuel that built it all.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="space-y-5">
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border-2 border-[#c9a84c] bg-[#faf7f2] shrink-0 group-hover:bg-[#c9a84c] transition-colors duration-300 mt-1" />
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-linear-to-b from-[#c9a84c]/40 to-transparent mt-2 min-h-5" />
                    )}
                  </div>
                  <div className="pb-3">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[#c9a84c] text-sm font-bold font-mono">{milestone.year}</span>
                      <span className="text-[#1c1409] font-semibold">{milestone.title}</span>
                    </div>
                    <p className="text-[#9b8b74] text-sm leading-relaxed">{milestone.desc}</p>
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
