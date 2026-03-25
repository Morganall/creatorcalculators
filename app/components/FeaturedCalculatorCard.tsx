import Link from "next/link"
import React from "react"
import type { Calculator } from "../lib/calculators"
import {
  IconHandshake,
  IconInstagram,
  IconTikTok,
  IconSparkles,
  IconYouTube,
} from "./icons"

function getIconForCalculator(calc: Calculator) {
  // Ensure every calculator card always renders an icon.
  if (calc.path.includes("tiktok")) return <IconTikTok className="h-6 w-6" />
  if (calc.path.includes("youtube")) return <IconYouTube className="h-6 w-6" />
  if (calc.path.includes("instagram"))
    return <IconInstagram className="h-6 w-6" />
  if (calc.path.includes("influencer"))
    return <IconHandshake className="h-6 w-6" />

  return <IconSparkles className="h-6 w-6" />
}

export function FeaturedCalculatorCard({ calc }: { calc: Calculator }) {
  const icon = getIconForCalculator(calc)

  return (
    <li>
      <Link
        href={calc.path}
        className="group block h-full rounded-2xl border border-gray-200 bg-white/70 p-6 text-left shadow-sm backdrop-blur transition-all duration-200 hover:shadow-md hover:-translate-y-1 sm:p-8"
      >
        <div className="flex items-start gap-4">
          <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#5B5FFF]/20 via-[#5B5FFF]/10 to-[#FFF7ED]/40 text-[#5B5FFF] shadow-[0_12px_30px_rgba(91,95,255,0.12)] ring-1 ring-[#5B5FFF]/15 sm:h-11 sm:w-11">
            {icon}
          </div>
          <div className="min-w-0">
            <h2 className="font-serif text-lg font-semibold tracking-tight text-gray-900 sm:text-xl">
              {calc.name}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              {calc.description}
            </p>
          </div>
        </div>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-gray-500 transition-colors transition-transform duration-200 group-hover:text-gray-700 group-hover:translate-x-0.5">
          Calculate now →
        </span>
      </Link>
    </li>
  )
}

