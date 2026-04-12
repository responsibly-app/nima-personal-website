import { Inter, Geist_Mono, Playfair_Display } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Nima Attar | Financial Leader & Agency Founder",
  description:
    "Nima Attar — Founder and visionary leader of a premier financial agency with over 1,000 agents. Empowering financial professionals to achieve extraordinary success.",
  openGraph: {
    title: "Nima Attar | Financial Leader & Agency Founder",
    description:
      "Visionary entrepreneur leading 1,000+ financial agents toward unprecedented excellence and prosperity.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${fontMono.variable}`}
    >
      <body className="bg-[#05050a] text-[#f5f0e8] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
