"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const links = [
  { label: "Story", href: "#story" },
  { label: "Agency", href: "#agency" },
  { label: "Team", href: "#team" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Connect", href: "#connect" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#c9a84c]/15 shadow-sm shadow-[#c9a84c]/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full border border-[#c9a84c]/60 flex items-center justify-center group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]/5 transition-all">
              <span className="text-[#c9a84c] text-xs font-bold font-heading">N</span>
            </div>
            <span className="font-heading text-[#1c1409] text-lg font-semibold tracking-wide">
              Nima Attar
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#9b8b74] hover:text-[#c9a84c] transition-colors tracking-wider uppercase font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#connect"
              className="px-5 py-2 border border-[#c9a84c] text-[#8b6914] text-sm font-medium tracking-wider uppercase hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
            >
              Join Agency
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#c9a84c] origin-center transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-[#c9a84c]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-[#c9a84c] origin-center transition-all"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-heading text-[#1c1409] hover:text-[#c9a84c] transition-colors tracking-wider"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#connect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.08 }}
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 border border-[#c9a84c] text-[#8b6914] text-sm font-medium tracking-widest uppercase hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
            >
              Join Agency
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
