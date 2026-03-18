import type { Metadata } from "next"
import Link from "next/link"
import { Geist_Mono, Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Creator Calculators",
  description:
    "Free calculators for creators, influencers, and content marketers to estimate earnings, engagement, and growth.",
  verification: {
    google: "h-pOPORtn14SmLXEozxCFAOoW0CV-mTOf9RPOtHCxEc",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className={`${geistMono.variable} font-sans antialiased bg-[#F7F7FB] text-[#1F2937]`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-200/60 bg-[#F7F7FB]/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-5">
              <Link
                href="/"
                className="font-serif font-semibold tracking-tight text-gray-900 text-base sm:text-lg"
              >
                CreatorCalculators
              </Link>
              <nav aria-label="Main navigation" className="flex-1 min-w-0">
                <ul className="flex flex-wrap items-center justify-center gap-2 text-sm sm:gap-6">
                  <li>
                    <Link
                      href="/#featured"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="block sm:block">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#5B5FFF] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4A4AE0] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2"
                >
                  Contact
                </Link>
              </div>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-gray-200/60 bg-[#F7F7FB]/80 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} CreatorCalculators.com
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-gray-700 transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-gray-700 transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-gray-700 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-gray-700 transition-colors"
                    >
                      Terms
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
