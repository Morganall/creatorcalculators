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
          Calculate now →
        </span>
      </Link>
    </li>
  )
}

export default function Home() {
  const [search, setSearch] = useState("")

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do creator calculators work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Creator calculators estimate earnings using inputs like views, engagement rate, and typical platform payouts. They use industry averages to give a rough estimate.",
        },
      },
      {
        "@type": "Question",
        name: "Are these earnings estimates accurate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "These are estimates based on averages. Actual earnings can vary depending on niche, audience, and monetization strategy.",
        },
      },
      {
        "@type": "Question",
        name: "How do influencers make money?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Influencers earn through brand deals, ads, affiliate marketing, subscriptions, and digital products depending on their platform and audience.",
        },
      },
      {
        "@type": "Question",
        name: "What affects social media earnings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Factors include audience size, engagement rate, niche, platform, and how you monetize your content.",
        },
      },
      {
        "@type": "Question",
        name: "Which platform pays creators the most?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends, but YouTube typically pays the most through ads, while TikTok and Instagram often rely more on brand deals and partnerships.",
        },
      },
    ],
  }

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
            Free Creator Calculators for Income, Engagement, and Growth
          </p>
          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            Estimate how much you can earn on YouTube, TikTok, Instagram, and more using these free creator tools. Calculate revenue, engagement rates, brand deals, and growth potential in seconds.
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

      {/* Popular Calculators */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 flex items-center justify-between gap-2">
            <h2 className="text-lg font-semibold text-gray-900">
              Popular Calculators
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "TikTok Money Calculator",
              "YouTube Revenue Calculator",
              "Instagram Earnings Calculator",
              "Influencer Rate Calculator",
              "Affiliate Earnings Calculator",
              "Newsletter Revenue Calculator",
            ]
              .map((name) => calculators.find((c) => c.name === name))
              .filter((calc): calc is Calculator => Boolean(calc))
              .map((calc) => (
                <CalculatorCard key={calc.path} calc={calc} />
              ))}
          </ul>
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

      {/* FAQ */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6 text-sm sm:text-base text-gray-700">
            <div>
              <h3 className="font-medium text-gray-900">
                How do creator calculators work?
              </h3>
              <p className="mt-2 leading-relaxed">
                Creator calculators estimate earnings using inputs like views, engagement rate, and typical platform payouts. They use industry averages to give a rough estimate.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Are these earnings estimates accurate?
              </h3>
              <p className="mt-2 leading-relaxed">
                These are estimates based on averages. Actual earnings can vary depending on niche, audience, and monetization strategy.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                How do influencers make money?
              </h3>
              <p className="mt-2 leading-relaxed">
                Influencers earn through brand deals, ads, affiliate marketing, subscriptions, and digital products depending on their platform and audience.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                What affects social media earnings?
              </h3>
              <p className="mt-2 leading-relaxed">
                Factors include audience size, engagement rate, niche, platform, and how you monetize your content.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Which platform pays creators the most?
              </h3>
              <p className="mt-2 leading-relaxed">
                It depends, but YouTube typically pays the most through ads, while TikTok and Instagram often rely more on brand deals and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  )
}
