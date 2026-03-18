"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  calculators,
  type Calculator as CalculatorMeta,
} from "../lib/calculators"

type CalculatorValues = Record<string, number>

type CalculatorKey =
  | "/tiktok-money-calculator"
  | "/youtube-revenue-calculator"
  | "/youtube-cpm-calculator"
  | "/youtube-channel-revenue-calculator"
  | "/tiktok-viral-earnings-calculator"
  | "/creator-brand-deal-roi-calculator"
  | "/newsletter-subscriber-value-calculator"
  | "/podcast-sponsorship-revenue-calculator"
  | "/creator-ad-revenue-calculator"
  | "/influencer-cost-per-post-calculator"
  | "/affiliate-conversion-revenue-calculator"
  | "/creator-monthly-income-calculator"
  | "/instagram-follower-growth-calculator"
  | "/tiktok-engagement-value-calculator"
  | "/youtube-subscriber-growth-calculator"
  | "/social-media-growth-rate-calculator"
  | "/influencer-campaign-roi-calculator"
  | "/instagram-earnings-calculator"
  | "/instagram-reel-earnings-calculator"
  | "/tiktok-creator-fund-calculator"
  | "/youtube-shorts-revenue-calculator"
  | "/tiktok-earnings-per-view-calculator"
  | "/creator-earnings-calculator"
  | "/sponsorship-value-calculator"
  | "/course-revenue-calculator"
  | "/newsletter-revenue-calculator"
  | "/podcast-cpm-calculator"
  | "/affiliate-earnings-calculator"
  | "/brand-deal-value-calculator"
  | "/influencer-rate-calculator"
  | "/tiktok-engagement-calculator"
  | "/instagram-engagement-calculator"

type CalculatorLogic = {
  calculate: (values: CalculatorValues) => number
  formatResult?: (value: number) => string
}

type CalculatorInputConfig = {
  label: string
  key: string
  placeholder: string
  helper?: string
}

const calculatorLogic: Record<CalculatorKey, CalculatorLogic> = {
  "/tiktok-money-calculator": {
    calculate: (values) => {
      const views = values.views || 0
      const rpm = values.rpm || 0
      return (views / 1000) * rpm
    },
  },
  "/youtube-revenue-calculator": {
    calculate: (values) => {
      const views = values.views || 0
      const cpm = values.cpm || 0
      return (views / 1000) * cpm
    },
  },
  "/youtube-cpm-calculator": {
    calculate: (v) => {
      const rev = v.revenue || 0
      const views = v.views || 0
      return views === 0 ? 0 : (rev / views) * 1000
    },
    formatResult: (n) => `$${n.toFixed(2)} CPM`,
  },
  "/youtube-channel-revenue-calculator": {
    calculate: (v) => ((v.views || 0) / 1000) * (v.cpm || 0),
  },
  "/tiktok-viral-earnings-calculator": {
    calculate: (v) => ((v.views || 0) / 1000) * (v.rpm || 0),
  },
  "/creator-brand-deal-roi-calculator": {
    calculate: (v) => {
      const cost = v.cost || 0
      const revenue = v.revenue || 0
      return cost === 0 ? 0 : ((revenue - cost) / cost) * 100
    },
    formatResult: (n) => `${n.toFixed(2)}%`,
  },
  "/newsletter-subscriber-value-calculator": {
    calculate: (v) => {
      const subs = v.subscribers || 0
      const revenue = v.revenue || 0
      return subs === 0 ? 0 : revenue / subs
    },
  },
  "/podcast-sponsorship-revenue-calculator": {
    calculate: (v) => {
      const downloads = v.downloads || 0
      const cpm = v.cpm || 0
      const slots = v.slots || 1
      return ((downloads / 1000) * cpm) * slots
    },
  },
  "/creator-ad-revenue-calculator": {
    calculate: (v) => ((v.impressions || 0) / 1000) * (v.cpm || 0),
  },
  "/influencer-cost-per-post-calculator": {
    calculate: (v) => {
      const fee = v.fee || 0
      const posts = v.posts || 1
      return posts <= 0 ? 0 : fee / posts
    },
  },
  "/affiliate-conversion-revenue-calculator": {
    calculate: (v) => {
      const clicks = v.clicks || 0
      const rate = (v.conv_rate || 0) / 100
      const commission = v.commission || 0
      return clicks * rate * commission
    },
  },
  "/creator-monthly-income-calculator": {
    calculate: (v) =>
      (v.ad_revenue || 0) +
      (v.brand_deals || 0) +
      (v.affiliate || 0) +
      (v.other || 0),
  },
  "/instagram-follower-growth-calculator": {
    calculate: (v) => {
      const start = v.start || 0
      const end = v.end || 0
      const days = v.days || 1
      if (days <= 0) return 0
      return (end - start) / days
    },
    formatResult: (n) => `${n.toFixed(2)} followers/day`,
  },
  "/tiktok-engagement-value-calculator": {
    calculate: (v) => {
      const likes = v.likes || 0
      const comments = (v.comments || 0) * 2
      const shares = (v.shares || 0) * 3
      const valuePerEng = v.value_per_eng || 0
      return (likes + comments + shares) * valuePerEng
    },
  },
  "/youtube-subscriber-growth-calculator": {
    calculate: (v) => {
      const start = v.start || 0
      const end = v.end || 0
      const days = v.days || 1
      if (days <= 0) return 0
      return (end - start) / days
    },
    formatResult: (n) => `${n.toFixed(2)} subs/day`,
  },
  "/social-media-growth-rate-calculator": {
    calculate: (v) => {
      const start = v.start || 0
      const end = v.end || 0
      const days = v.days || 1
      if (days <= 0 || start === 0) return 0
      const growthRate = ((end - start) / start) * 100
      return growthRate / days
    },
    formatResult: (n) => `${n.toFixed(2)}% per day`,
  },
  "/influencer-campaign-roi-calculator": {
    calculate: (v) => {
      const cost = v.cost || 0
      const revenue = v.revenue || 0
      return cost === 0 ? 0 : ((revenue - cost) / cost) * 100
    },
    formatResult: (n) => `${n.toFixed(2)}%`,
  },
  "/instagram-earnings-calculator": {
    calculate: (v) => {
      const f = v.followers || 0
      const engPct = (v.engagement || 0) / 100
      const rate = v.rate_per_k || 0
      const engaged = f * engPct
      return (engaged / 1000) * rate
    },
  },
  "/instagram-reel-earnings-calculator": {
    calculate: (v) => ((v.views || 0) / 1000) * (v.rpm || 0),
  },
  "/tiktok-creator-fund-calculator": {
    calculate: (v) => ((v.views || 0) / 1000) * (v.rate || 0),
  },
  "/youtube-shorts-revenue-calculator": {
    calculate: (v) => ((v.views || 0) / 1000) * (v.rpm || 0),
  },
  "/tiktok-earnings-per-view-calculator": {
    calculate: (v) => (v.views || 0) * (v.epv || 0),
  },
  "/creator-earnings-calculator": {
    calculate: (values) => {
      const views = values.views || 0
      const rpm = values.rpm || 0
      return (views / 1000) * rpm
    },
  },
  "/sponsorship-value-calculator": {
    calculate: (values) => {
      const views = values.views || 0
      const cpm = values.cpm || 0
      return (views / 1000) * cpm
    },
  },
  "/course-revenue-calculator": {
    calculate: (values) => {
      const visitors = values.visitors || 0
      const conversion_rate = values.conversion_rate || 0
      const price = values.price || 0
      return visitors * (conversion_rate / 100) * price
    },
  },
  "/newsletter-revenue-calculator": {
    calculate: (values) => {
      const subscribers = values.subscribers || 0
      const conversion_rate = values.conversion_rate || 0
      const price = values.price || 0
      return subscribers * (conversion_rate / 100) * price
    },
  },
  "/podcast-cpm-calculator": {
    calculate: (values) => {
      const downloads = values.downloads || 0
      const cpm = values.cpm || 0
      return (downloads / 1000) * cpm
    },
  },
  "/affiliate-earnings-calculator": {
    calculate: (values) => {
      const clicks = values.clicks || 0
      const conversion_rate = values.conversion_rate || 0
      const commission = values.commission || 0
      return clicks * (conversion_rate / 100) * commission
    },
  },
  "/brand-deal-value-calculator": {
    calculate: (values) => {
      const followers = values.followers || 0
      const engagement_rate = values.engagement_rate || 0
      return followers * (engagement_rate / 100) * 0.15
    },
  },
  "/influencer-rate-calculator": {
    calculate: (values) => {
      const followers = values.followers || 0
      const engagement_rate = values.engagement_rate || 0
      return followers * (engagement_rate / 100) * 0.1
    },
  },
  "/tiktok-engagement-calculator": {
    calculate: (values) => {
      const likes = values.likes || 0
      const comments = values.comments || 0
      const shares = values.shares || 0
      const views = values.views || 0
      if (views === 0) return 0
      return ((likes + comments + shares) / views) * 100
    },
    formatResult: (n) => `${n.toFixed(2)}%`,
  },
  "/instagram-engagement-calculator": {
    calculate: (values) => {
      const likes = values.likes || 0
      const comments = values.comments || 0
      const followers = values.followers || 0
      if (followers === 0) return 0
      return ((likes + comments) / followers) * 100
    },
    formatResult: (n) => `${n.toFixed(2)}%`,
  },
}

function getDefaultValues(
  inputs: CalculatorInputConfig[],
  _calculatorKey: CalculatorKey,
): Record<string, string> {
  const defaults: Record<string, string> = {}

  for (const input of inputs) {
    const key = input.key

    if (key === "followers") {
      defaults[key] = "50000"
      continue
    }

    if (key === "engagement_rate" || key === "engagement") {
      defaults[key] = "3.5"
      continue
    }

    if (key === "posts" || key === "posts_per_month") {
      defaults[key] = "4"
      continue
    }
  }

  return defaults
}

function calculateResult(
  calculatorKey: CalculatorKey,
  values: Record<string, string>,
): number | null {
  const logic = calculatorLogic[calculatorKey]
  if (!logic) return null

  const numericValues: CalculatorValues = {}
  for (const [key, value] of Object.entries(values)) {
    const parsed = parseFloat(value)
    numericValues[key] = Number.isNaN(parsed) ? 0 : parsed
  }

  return logic.calculate(numericValues)
}

export type CalculatorTemplateProps = {
  title: string
  inputs: CalculatorInputConfig[]
  /** Identifier used to select calculation logic inside this component */
  calculatorKey: CalculatorKey
  howItWorks?: string
  exampleCalculation?: string
  formula?: string
  faq?: { question: string; answer: string }[]
  relatedCalculators?: { name: string; path: string }[]
}

const defaultHowItWorks = "This calculator estimates creator earnings based on views and revenue per thousand views (RPM or CPM depending on the platform)."
const defaultExample = "If a video receives 100,000 views and the RPM is $5, the estimated revenue would be: (100,000 ÷ 1,000) × $5 = $500 estimated earnings"
const defaultFormula = "Revenue = (Views ÷ 1,000) × RPM"
const defaultFaq: { question: string; answer: string }[] = [
  { question: "What is RPM?", answer: "RPM stands for Revenue Per Mille (per 1,000 views). It represents how much money creators earn for every thousand views." },
  { question: "Is this estimate accurate?", answer: "Actual creator earnings vary based on audience location, ad demand, niche, and platform monetization programs." },
]
const defaultRelated: { name: string; path: string }[] = []

export default function CalculatorTemplate({
  title,
  inputs,
  calculatorKey,
  howItWorks = defaultHowItWorks,
  exampleCalculation = defaultExample,
  formula = defaultFormula,
  faq = defaultFaq,
  relatedCalculators = defaultRelated,
}: CalculatorTemplateProps) {
  const defaultValuesRef = useRef<Record<string, string>>(
    getDefaultValues(inputs, calculatorKey),
  )

  const [values, setValues] = useState<Record<string, string>>(
    defaultValuesRef.current,
  )
  const [result, setResult] = useState<number | null>(null)

  useEffect(() => {
    // When the calculator key or inputs change, refresh defaults and auto-calculate once.
    const newDefaults = getDefaultValues(inputs, calculatorKey)
    defaultValuesRef.current = newDefaults
    setValues(newDefaults)

    const output = calculateResult(calculatorKey, newDefaults)
    if (output !== null) {
      setResult(output)
    }
  }, [calculatorKey, inputs])

  function handleChange(key: string, value: string) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleCalculate() {
    const output = calculateResult(calculatorKey, values)
    if (output !== null) {
      setResult(output)
    }
  }

  function handleReset() {
    const defaults = defaultValuesRef.current
    setValues(defaults)

    const output = calculateResult(calculatorKey, defaults)
    if (output !== null) {
      setResult(output)
    } else {
      setResult(null)
    }
  }

  const currentCalculator: CalculatorMeta | undefined = calculators.find(
    (c) => c.path === calculatorKey,
  )

  let resolvedRelated: CalculatorMeta[] = []

  if (relatedCalculators && relatedCalculators.length > 0) {
    resolvedRelated = relatedCalculators
      .map((rc) => {
        const byPath = calculators.find((c) => c.path === rc.path)
        if (byPath) return byPath
        const byName = calculators.find((c) => c.name === rc.name)
        return byName ?? null
      })
      .filter((c): c is CalculatorMeta => Boolean(c))
  } else if (currentCalculator) {
    resolvedRelated = calculators.filter(
      (c) =>
        c.category === currentCalculator.category &&
        c.path !== currentCalculator.path,
    )
  }

  resolvedRelated = resolvedRelated.slice(0, 5)

  return (
    <div className="min-h-screen bg-[#F7F7FB] -m-10 px-4 py-20 text-[#1F2937] sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-center font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl leading-[1.1]">
            {title}
          </h1>

          <div className="mt-8 rounded-2xl bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-6 sm:p-7">
            <div className="space-y-6">
              {inputs.map((input) => {
                const id = `${calculatorKey}-${input.key}`
                const helperText =
                  input.helper ?? `Enter your ${input.label.toLowerCase()}`

                return (
                  <div key={input.key} className="space-y-1 text-left">
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-800"
                    >
                      {input.label}
                    </label>
                    <input
                      id={id}
                      type="number"
                      inputMode="decimal"
                      placeholder={input.placeholder}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 transition-all duration-200 focus:border-[#5B5FFF] focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]/30"
                      value={values[input.key] ?? ""}
                      onChange={(e) => handleChange(input.key, e.target.value)}
                    />
                    <p className="text-xs text-gray-500">{helperText}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              type="button"
              onClick={handleCalculate}
              className="inline-flex items-center justify-center rounded-full bg-[#5B5FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4A4AE0] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:bg-[#F7F7FB] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF]/30 focus-visible:ring-offset-2"
            >
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-gradient-to-b from-[#F0F2FF] to-[#FFF7ED]/70 px-6 py-6 text-center ring-1 ring-[#5B5FFF]/10 editorial-fade-in-up">
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-600">
                Estimated Result
              </div>
              <div className="mt-3 text-5xl font-semibold tracking-tight text-[#5B5FFF] leading-[1.05]">
                {calculatorLogic[calculatorKey]?.formatResult
                  ? calculatorLogic[calculatorKey]?.formatResult?.(result)
                  : `$${result.toFixed(2)}`}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Estimated monthly earnings based on your inputs. Actual results
                may vary.
              </p>
            </div>
          )}
        </div>
      </div>

      <section className="mx-auto mt-16 max-w-3xl space-y-8 text-left">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900">
          How This Calculator Works
        </h2>
        <p className="text-gray-700 leading-relaxed">{howItWorks}</p>

        <h3 className="font-serif text-2xl font-semibold tracking-tight text-gray-900">
          Example Calculation
        </h3>
        <div className="rounded-xl border border-gray-200/70 bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-5 text-gray-800 leading-relaxed">
          {exampleCalculation}
        </div>

        <h3 className="font-serif text-2xl font-semibold tracking-tight text-gray-900">
          Formula
        </h3>
        <div className="rounded-xl border border-gray-200/70 bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-5 text-gray-800 leading-relaxed">
          {formula}
        </div>

        <h3 className="font-serif text-2xl font-semibold tracking-tight text-gray-900">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {faq.map((item, i) => (
            <div key={i}>
              <strong className="font-medium text-gray-900">
                {item.question}
              </strong>
              <p className="mt-2 text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
      {resolvedRelated.length > 0 && (
        <section className="mx-auto mt-16 max-w-6xl px-0 text-left">
          <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4 text-gray-900">
            Related Calculators
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedRelated.map((calc) => (
              <li key={calc.path}>
                <Link
                  href={calc.path}
                  className="block h-full rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                >
                  <h3 className="font-serif font-semibold text-gray-900 text-lg tracking-tight">
                    {calc.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {calc.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
                    Calculate now →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}