"use client"

import { useState } from "react"
import {
  calculators,
  CALCULATOR_CATEGORIES,
  type Calculator,
} from "./lib/calculators"
import { FeaturedCalculatorCard } from "./components/FeaturedCalculatorCard"
import FaqAccordion from "./components/FaqAccordion"

function groupByCategory(calcs: Calculator[]) {
  const map = new Map<string, Calculator[]>()
  for (const category of CALCULATOR_CATEGORIES) {
    const inCategory = calcs.filter((c) => c.category === category)
    if (inCategory.length > 0) map.set(category, inCategory)
  }
  return map
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

  const filteredCalculators = (() => {
    if (!search.trim()) return calculators
    const q = search.trim().toLowerCase()
    return calculators.filter(
      (calc) =>
        calc.name.toLowerCase().includes(q) ||
        calc.description.toLowerCase().includes(q),
    )
  })()

  const byCategory = groupByCategory(filteredCalculators)

  const faqItems = (faqJsonLd.mainEntity as unknown as Array<{
    name: string
    acceptedAnswer?: { text: string }
  }>).map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer?.text ?? "",
  }))

  const visibleFaqItems = faqItems.slice(0, 3)

  const faqJsonLdForUI = {
    ...faqJsonLd,
    mainEntity: faqJsonLd.mainEntity.slice(0, 3),
  }

  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#1F2937]">
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10">
        {/* Hero + Search */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-gradient-to-r from-purple-50/60 via-blue-50/40 to-pink-50/30 px-5 py-10 sm:px-10 sm:py-14 shadow-lg">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute -left-16 top-8 h-48 w-48 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/30 blur-3xl opacity-20" />
            <div className="absolute -right-16 top-2 h-40 w-40 rounded-full bg-gradient-to-br from-blue-200/40 to-purple-200/30 blur-3xl opacity-20" />
            <div className="absolute left-1/2 top-20 h-px w-[520px] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent blur-sm opacity-60" />
            <svg
              viewBox="0 0 100 100"
              className="absolute bottom-24 left-6 h-28 w-28 text-purple-300/70 blur-2xl opacity-20"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M58.8,13.3C71.8,22.6,82,32.4,84.1,44.4C86.2,56.4,80.2,70.6,68,79.3C55.8,88,37.4,91.2,25,82.4C12.6,73.6,6.2,52.8,12.7,37.7C19.2,22.6,38.5,13,58.8,13.3Z"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-[2.6rem] sm:text-[3.25rem] md:text-[4rem] font-bold tracking-tight text-gray-900 leading-[1.05]">
              Creator Calculators
            </h1>
            <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
              Free Creator Calculators for Income, Engagement, and Growth
            </p>
            <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              Estimate how much you can earn on YouTube, TikTok, Instagram, and more using these free creator tools. Calculate revenue, engagement rates, brand deals, and growth potential in seconds.
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-10 max-w-2xl">
            <div className="flex min-h-[44px] items-center gap-3 rounded-full border border-gray-200/80 bg-white/70 px-4 py-2 shadow-sm backdrop-blur transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
              <label htmlFor="search" className="sr-only">
                Search calculators
              </label>
              <div className="relative flex-1">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 2a6.5 6.5 0 1 0 4.07 11.57l3.43 3.43a1 1 0 0 0 1.41-1.41l-3.43-3.43A6.5 6.5 0 0 0 8.5 2Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  id="search"
                  type="search"
                  placeholder="Search calculators..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full min-h-[44px] rounded-full border border-transparent bg-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-[#5B5FFF]/50"
                  aria-label="Search calculators by name or description"
                />
              </div>
              <button
                type="button"
                className="inline-flex min-h-[44px] w-24 items-center justify-center rounded-full bg-[#5B5FFF] text-white shadow-sm transition-all duration-200 hover:bg-[#4A4AE0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2"
                onClick={() => {}}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.5 2a6.5 6.5 0 1 0 4.07 11.57l3.43 3.43a1 1 0 0 0 1.41-1.41l-3.43-3.43A6.5 6.5 0 0 0 8.5 2Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="absolute -bottom-32 left-0 h-64 w-full"
            >
              <path
                fill="#FFF7ED"
                opacity="0.35"
                d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,138.7C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              />
            </svg>
          </div>
        </section>

        {/* Featured Calculators */}
        <section id="featured" className="mt-12 sm:mt-14">
          <div className="mb-8 flex items-center justify-center">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-gray-900">
              Popular Calculators
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {[
              "TikTok Account Worth Calculator",
              "YouTube Channel Worth Calculator",
              "Influencer Value Calculator",
              "TikTok Money Calculator",
              "YouTube Revenue Calculator",
              "Instagram Earnings Calculator",
              "Influencer Rate Calculator",
              "Affiliate Earnings Calculator",
              "Newsletter Revenue Calculator",
            ]
              .map((name) => calculators.find((c) => c.name === name))
              .filter((calc): calc is Calculator => Boolean(calc))
              .slice(0, 4)
              .map((calc) => (
                <FeaturedCalculatorCard key={calc.path} calc={calc} />
              ))}
          </ul>
        </section>

        {/* Category sections */}
        <section className="mt-14 sm:mt-16">
          <div className="space-y-14">
            {filteredCalculators.length === 0 ? (
              <p className="py-12 text-center text-gray-500">
                No calculators match &quot;{search}&quot;. Try a different search.
              </p>
            ) : (
              Array.from(byCategory.entries()).map(([category, calcs]) => (
                <div key={category}>
                  <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 mb-4">
                    {category}
                  </h2>
                  <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {calcs.map((calc) => (
                      <FeaturedCalculatorCard key={calc.path} calc={calc} />
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14 sm:mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 text-center sm:text-left">
              Frequently Asked Questions
            </h2>
            <div className="mt-10">
              <FaqAccordion items={visibleFaqItems} />
            </div>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdForUI) }}
      />
    </main>
  )
}
