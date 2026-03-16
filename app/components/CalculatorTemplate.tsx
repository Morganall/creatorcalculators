"use client"

import { useState } from "react"

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

export type CalculatorTemplateProps = {
  title: string
  inputs: { label: string; key: string; placeholder: string }[]
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
const defaultRelated = [
  { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
  { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
  { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
  { name: "Affiliate Earnings Calculator", path: "/affiliate-earnings-calculator" },
]

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
  const [values, setValues] = useState<Record<string, number>>({})
  const [result, setResult] = useState<number | null>(null)

  function handleChange(key: string, value: string) {
    setValues({
      ...values,
      [key]: Number(value),
    })
  }

  function handleCalculate() {
    const logic = calculatorLogic[calculatorKey]
    if (!logic) {
      // If no matching calculator logic is found, do nothing
      return
    }
    const output = logic.calculate(values)
    setResult(output)
  }

  return (
    <div className="max-w-xl mx-auto text-center space-y-6">

      <h1 className="text-3xl font-bold">{title}</h1>

      {inputs.map((input) => (
        <input
          key={input.key}
          type="number"
          placeholder={input.placeholder}
          className="w-full border rounded-lg p-3"
          onChange={(e) => handleChange(input.key, e.target.value)}
        />
      ))}

      <button
        onClick={handleCalculate}
        className="bg-black text-white px-6 py-2 rounded-lg"
      >
        Calculate
      </button>

      {result !== null && (
        <div className="text-xl font-semibold">
          Result:{" "}
          {calculatorLogic[calculatorKey]?.formatResult
            ? calculatorLogic[calculatorKey]?.formatResult?.(result)
            : `$${result.toFixed(2)}`}
        </div>
      )}

      <section className="max-w-3xl mx-auto mt-12 space-y-6 text-left">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>{howItWorks}</p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          {exampleCalculation}
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          {formula}
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i}>
              <strong>{item.question}</strong>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 text-left">
        <h2 className="text-xl font-semibold mb-4">Related Calculators</h2>
        <div className="space-y-2">
          {relatedCalculators.map((calc) => (
            <a key={calc.path} href={calc.path} className="text-blue-600 hover:underline block">
              {calc.name}
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}