"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CircularTestimonials } from "@/components/ui/circular-testimonials"

const testimonials = [
  {
    name: "Roman K.",
    designation: "Senior Marketing Director",
    quote:
      "I was working as a carpenter before joining Nima’s agency. Within a short time, I built a business earning over $600K annually. The systems and mentorship completely changed my trajectory.",
    src: "/people/roman-k.jpg",
  },
  {
    name: "Alexis T.",
    designation: "Senior Marketing Director",
    quote:
      "Joining Nima’s agency was the best career decision I’ve made. The training, support, and culture helped me triple my income in just 14 months.",
    src: "/people/lexy-t.jpeg",
  },
  {
    name: "Stori F.",
    designation: "Senior Marketing Director",
    quote:
      "I came from an HR background with no experience in this industry. Today, I’m earning over $300K annually thanks to Nima’s systems and mentorship.",
    src: "/people/stori-f.jpeg",
  },
  {
    name: "Mariane C.",
    designation: "Senior Marketing Director",
    quote:
      "The level of care and expertise I’ve received from Nima’s agency is unmatched!",
    src: "/people/mariane-c.jpeg",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-28 bg-[#f2ebe0] overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#c9a84c]/50 to-transparent" />

      {/* Soft gold orb */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#c9a84c]/8 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase font-medium">
            Social Proof
          </span>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1c1409] mt-3 leading-none">
            What They
            <span className="italic text-[#c9a84c]"> Say.</span>
          </h2>
        </motion.div>

        {/* Circular Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#1c1409",
              designation: "#9b8b74",
              testimony: "#5a4832",
              arrowBackground: "#c9a84c",
              arrowForeground: "#ffffff",
              arrowHoverBackground: "#8b6914",
            }}
            fontSizes={{
              name: "1.25rem",
              designation: "0.875rem",
              quote: "1rem",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
