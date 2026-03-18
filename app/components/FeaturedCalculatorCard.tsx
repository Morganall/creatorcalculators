import Link from "next/link"
import React from "react"
import type { Calculator } from "../lib/calculators"
import {
  IconHandshake,
  IconInstagram,
  IconTikTok,
  IconYouTube,
} from "./icons"

function getIconForCalculator(calc: Calculator) {
  switch (calc.path) {
    case "/tiktok-money-calculator":
      return <IconTikTok className="h-6 w-6" />
    case "/youtube-revenue-calculator":
      return <IconYouTube className="h-6 w-6" />
    case "/instagram-earnings-calculator":
      return <IconInstagram className="h-6 w-6" />
    case "/influencer-rate-calculator":
      return <IconHandshake className="h-6 w-6" />
    default:
      return null
  }
}

export function FeaturedCalculatorCard({ calc }: { calc: Calculator }) {
  const icon = getIconForCalculator(calc)

  return (
    <li>
      <Link
        href={calc.path}
        className="block h-full rounded-2xl border border-gray-200/70 bg-white/70 p-8 text-left shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-b from-[#5B5FFF]/15 to-[#FFF7ED]/40 text-[#5B5FFF]">
            {icon}
          </div>
          <div className="min-w-0">
            <h2 className="font-serif text-xl font-semibold tracking-tight text-gray-900">
              {calc.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {calc.description}
            </p>
          </div>
        </div>
        <span className="mt-4 inline-block text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
          Calculate now →
        </span>
      </Link>
    </li>
  )
}

