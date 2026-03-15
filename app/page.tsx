"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import {
  calculators,
  CALCULATOR_CATEGORIES,
  type Calculator,
} from "./lib/calculators"

function groupByCategory(calcs: Calculator[]) {
  const map = new Map<string, Calculator[]>()
  for (const category of CALCULATOR_CATEGORIES) {
    const inCategory = calcs.filter((c) => c.category === category)
    if (inCategory.length > 0) map.set(category, inCategory)
  }
  return map
}

function CalculatorCard({ calc }: { calc: Calculator }) {
  return (
    <li>
      <Link
        href={calc.path}
        className="block h-full rounded-lg border border-gray-200 bg-white p-6 text-left transition-colors hover:border-gray-300 hover:bg-gray-50"
      >
        <h2 className="font-semibold text-gray-900">{calc.name}</h2>
        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {calc.description}
        </p>
        <span className="mt-3 inline-block text-sm font-medium text-gray-500 hover:text-gray-700">
          Open calculator →
        </span>
      </Link>
    </li>
  )
}

export default function Home() {
  const [search, setSearch] = useState("")

  const filteredCalculators = useMemo(() => {
    if (!search.trim()) return calculators
    const q = search.trim().toLowerCase()
    return calculators.filter(
      (calc) =>
        calc.name.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q)
    )
  }, [search])

  const byCategory = useMemo(
    () => groupByCategory(filteredCalculators),
    [filteredCalculators]
  )

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="pt-16 pb-12 px-6 sm:pt-20 sm:pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Creator Calculators
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
            Free tools for creators, influencers, and content marketers to
            estimate earnings, engagement, and growth.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="px-6 pb-6">
        <div className="max-w-2xl mx-auto">
          <label htmlFor="search" className="sr-only">
            Search calculators
          </label>
          <input
            id="search"
            type="search"
            placeholder="Search calculators..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
            aria-label="Search calculators by name or description"
          />
        </div>
      </section>

      {/* SEO intro */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
            Use these free creator calculators to estimate ad revenue, brand
            deal rates, engagement metrics, and growth across YouTube, TikTok,
            Instagram, and other platforms. No sign-up required.
          </p>
        </div>
      </section>

      {/* Category sections */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl space-y-14">
          {filteredCalculators.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No calculators match &quot;{search}&quot;. Try a different search.
            </p>
          ) : (
            Array.from(byCategory.entries()).map(([category, calcs]) => (
              <div key={category}>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {category}
                </h2>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {calcs.map((calc) => (
                    <CalculatorCard key={calc.path} calc={calc} />
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
