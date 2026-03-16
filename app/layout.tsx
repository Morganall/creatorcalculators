import type { Metadata } from "next"
import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
              <Link
                href="/"
                className="text-base font-semibold tracking-tight text-gray-900 sm:text-lg"
              >
                CreatorCalculators
              </Link>
              <nav aria-label="Main navigation">
                <ul className="flex items-center gap-4 text-sm sm:gap-6 sm:text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-gray-700 hover:text-gray-900"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <main className="flex-1">
            {children}
          </main>

          <footer className="border-t border-gray-100 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs sm:text-sm">
                © {new Date().getFullYear()} CreatorCalculators.com
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-gray-700"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-gray-700"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="hover:text-gray-700"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      className="hover:text-gray-700"
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
