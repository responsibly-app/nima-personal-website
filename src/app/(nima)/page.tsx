import { Nav } from "@/components/nima/nav"
import { Hero } from "@/components/nima/hero"
import { Stats } from "@/components/nima/stats"
import { About } from "@/components/nima/about"
import { Agency } from "@/components/nima/agency"
import { Team } from "@/components/nima/team"
import { Testimonials } from "@/components/nima/testimonials"
import { SocialStories } from "@/components/nima/social-stories"
import { CTA } from "@/components/nima/cta"
import { Footer } from "@/components/nima/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <About />
        <Agency />
        <Team />
        <Testimonials />
        <SocialStories />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
