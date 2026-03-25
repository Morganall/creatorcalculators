"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import {
  calculators,
  type Calculator as CalculatorMeta,
} from "../lib/calculators"

type CalculatorValues = Record<string, number>

function sanitizeToRawNumber(input: string): string {
  // Accept user typing with commas, currency symbols, and percent symbols.
  // Store a raw numeric string internally (no commas, no $/%).
  const cleaned = input.replace(/[$,%\s]/g, "").trim()
  if (!cleaned) return ""

  const negative = cleaned.startsWith("-")
  // Keep digits and dots only; remove any other characters.
  const digitsAndDotsOnly = cleaned.replace(/[^0-9.]/g, "")
  if (!digitsAndDotsOnly) return ""

  const firstDotIndex = digitsAndDotsOnly.indexOf(".")
  if (firstDotIndex === -1) return `${negative ? "-" : ""}${digitsAndDotsOnly}`

  const intPart = digitsAndDotsOnly.slice(0, firstDotIndex)
  const fracPart = digitsAndDotsOnly.slice(firstDotIndex + 1).replace(/\./g, "")
  return `${negative ? "-" : ""}${intPart}.${fracPart}`
}

function parseRawNumber(raw: string): number {
  // Treat empty/incomplete inputs as 0 so calculators never hit NaN.
  if (!raw) return 0
  if (raw === "-" || raw === "." || raw === "-.") return 0
  const n = parseFloat(raw)
  return Number.isFinite(n) && !Number.isNaN(n) ? n : 0
}

function formatRawNumberWithCommas(raw: string): string {
  if (!raw) return ""
  if (raw === "-") return ""

  const negative = raw.startsWith("-")
  const unsigned = negative ? raw.slice(1) : raw

  if (unsigned.includes(".")) {
    const [intPartRaw, fracPartRaw = ""] = unsigned.split(".", 2)
    const intPart = intPartRaw === "" ? "0" : Number(intPartRaw).toLocaleString(
      "en-US",
    )
    return `${negative ? "-" : ""}${intPart}.${fracPartRaw}`
  }

  const intPart = unsigned === "" ? "" : Number(unsigned).toLocaleString("en-US")
  return `${negative ? "-" : ""}${intPart}`
}

function formatUsd(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function formatFixed(value: number, fractionDigits: number): string {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  })
}

function formatPercent(value: number, fractionDigits: number): string {
  return `${formatFixed(value, fractionDigits)}%`
}

function isPercentInputKey(key: string) {
  return (
    key === "engagement_rate" ||
    key === "engagement" ||
    key === "conversion_rate" ||
    key === "conv_rate" ||
    key === "tips_percentage" ||
    key === "federal_rate" ||
    key === "self_employment_tax_rate" ||
    key === "tax_rate"
  )
}

function isMoneyInputKey(key: string) {
  // These are generally CPM/RPM, prices, and currency-like inputs.
  return (
    key === "income" ||
    key === "expenses" ||
    key === "cpm" ||
    key === "rpm" ||
    key === "price" ||
    key === "cost" ||
    key === "fee" ||
    key === "commission" ||
    key === "revenue" ||
    key === "rate" ||
    key === "rate_per_post" ||
    key === "rate_per_engagement" ||
    key === "rate_per_k" ||
    key.includes("price_per_") ||
    key.includes("revenue_per_") ||
    key.includes("payout")
  )
}

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
  | "/onlyfans-earnings-calculator"
  | "/influencer-payment-calculator"
  | "/social-media-value-calculator"
  | "/blog-earnings-calculator"
  | "/youtube-money-calculator"
  | "/instagram-money-calculator"
  | "/influencer-money-calculator"
  | "/tiktok-money-per-1000-views"
  | "/youtube-money-per-1000-views"
  | "/how-much-can-i-earn-with-x-followers"
  | "/1-million-views-calculator"
  | "/tiktok-follower-earnings-calculator"
  | "/youtube-subscriber-earnings-calculator"
  | "/viral-video-earnings-calculator"
  | "/tiktok-account-worth-calculator"
  | "/youtube-channel-worth-calculator"
  | "/influencer-value-calculator"
  | "/creator-tax-calculator"
  | "/creator-tax-calculator-net"
  | "/youtube-income-tax-calculator"
  | "/youtube-income-tax-calculator-net"
  | "/influencer-tax-calculator"
  | "/influencer-tax-calculator-net"
  | "/self-employed-tax-calculator"
  | "/self-employed-tax-calculator-net"
  | "/net-income-after-tax-calculator"
  | "/net-income-after-tax-calculator-net"

type CalculatorLogic = {
  calculate: (values: CalculatorValues) => number
  formatResult?: (value: number) => string
}

type CalculatorInputConfig = {
  label: string
  key: string
  placeholder: string
  helper?: string
  type?: "number" | "select"
  options?: Array<{ label: string; value: string }>
}

function standardTaxResult(v: CalculatorValues) {
  const income = v.income || 0
  const expenses = v.expenses || 0
  const federalRate = v.federal_rate || 0
  const stateRate = v.state_rate || 0
  const taxableIncome = income - expenses
  const totalTaxRate = federalRate / 100 + stateRate
  const tax = taxableIncome * totalTaxRate
  return { tax, net: taxableIncome - tax }
}

function selfEmployedTaxResult(v: CalculatorValues) {
  const income = v.income || 0
  const expenses = v.expenses || 0
  const selfEmploymentRate = v.self_employment_tax_rate || 0
  const federalRate = v.federal_rate || 0
  const stateRate = v.state_rate || 0
  const taxableIncome = income - expenses

  const selfEmploymentTax = taxableIncome * (selfEmploymentRate / 100)
  const federalTax = taxableIncome * (federalRate / 100)
  const stateTax = taxableIncome * stateRate
  const tax = selfEmploymentTax + federalTax + stateTax
  return { tax, net: taxableIncome - tax }
}

function netIncomeAfterTaxResult(v: CalculatorValues) {
  const income = v.income || 0
  const taxRate = v.tax_rate || 0
  const tax = income * (taxRate / 100)
  return { tax, net: income - tax }
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
    formatResult: (n) => `${formatUsd(n)} CPM`,
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
    formatResult: (n) => formatPercent(n, 2),
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
    formatResult: (n) => `${formatFixed(n, 2)} followers/day`,
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
    formatResult: (n) => `${formatFixed(n, 2)} subs/day`,
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
    formatResult: (n) => `${formatFixed(n, 2)}% per day`,
  },
  "/influencer-campaign-roi-calculator": {
    calculate: (v) => {
      const cost = v.cost || 0
      const revenue = v.revenue || 0
      return cost === 0 ? 0 : ((revenue - cost) / cost) * 100
    },
    formatResult: (n) => formatPercent(n, 2),
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
    formatResult: (n) => formatPercent(n, 2),
  },
  "/instagram-engagement-calculator": {
    calculate: (values) => {
      const likes = values.likes || 0
      const comments = values.comments || 0
      const followers = values.followers || 0
      if (followers === 0) return 0
      return ((likes + comments) / followers) * 100
    },
    formatResult: (n) => formatPercent(n, 2),
  },
  "/onlyfans-earnings-calculator": {
    calculate: (v) => {
      const subscribers = v.subscribers || 0
      const price = v.price || 0
      const tipsPct = v.tips_percentage || 0
      return subscribers * price + subscribers * price * (tipsPct / 100)
    },
  },
  "/influencer-payment-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const pricePerEngagement = v.price_per_engagement || 0
      return followers * engagementPct * pricePerEngagement
    },
  },
  "/social-media-value-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const platformMultiplier = v.platform_multiplier || 0
      return followers * engagementPct * platformMultiplier
    },
  },
  "/blog-earnings-calculator": {
    calculate: (v) => {
      const views = v.views || 0
      const rpm = v.rpm || 0
      return (views / 1000) * rpm
    },
  },
  "/youtube-money-calculator": {
    calculate: (v) => {
      const views = v.views || 0
      const cpm = v.cpm || 0
      return (views / 1000) * cpm
    },
  },
  "/instagram-money-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const ratePerPost = v.rate_per_post || 0
      return followers * engagementPct * ratePerPost
    },
  },
  "/influencer-money-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const pricePerEngagement = v.price_per_engagement || 0
      const postsPerMonth = v.posts_per_month || 0
      return followers * engagementPct * pricePerEngagement * postsPerMonth
    },
  },
  "/tiktok-money-per-1000-views": {
    calculate: (v) => {
      const views = v.views || 0
      const rpm = v.rpm || 0
      return (views / 1000) * rpm
    },
  },
  "/youtube-money-per-1000-views": {
    calculate: (v) => {
      const views = v.views || 0
      const cpm = v.cpm || 0
      return (views / 1000) * cpm
    },
  },
  "/how-much-can-i-earn-with-x-followers": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const earningsPer1000Engaged = v.earnings_per_1000_engaged || 0
      const engaged = followers * engagementPct
      return (engaged / 1000) * earningsPer1000Engaged
    },
  },
  "/1-million-views-calculator": {
    calculate: (v) => {
      const payoutPer1000 = v.payout_per_1000 || 0
      return (1000000 / 1000) * payoutPer1000
    },
  },
  "/tiktok-follower-earnings-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementPct = (v.engagement_rate || 0) / 100
      const earningsPerEngagedFollower = v.earnings_per_engaged_follower || 0
      return followers * engagementPct * earningsPerEngagedFollower
    },
  },
  "/youtube-subscriber-earnings-calculator": {
    calculate: (v) => {
      const subscribers = v.subscribers || 0
      const revenuePerSubscriber = v.revenue_per_subscriber || 0
      return subscribers * revenuePerSubscriber
    },
  },
  "/viral-video-earnings-calculator": {
    calculate: (v) => {
      // Platform selection only helps label RPM/CPM; payout math is the same.
      const views = v.views || 0
      const payoutPer1000 = v.payout_per_1000 || 0
      return (views / 1000) * payoutPer1000
    },
  },
  "/tiktok-account-worth-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementRate = v.engagement_rate || 0
      const nicheMultiplier = v.niche_multiplier || 0
      return followers * engagementRate * nicheMultiplier * 0.1
    },
  },
  "/youtube-channel-worth-calculator": {
    calculate: (v) => {
      const monthlyViews = v.monthly_views || 0
      const cpm = v.cpm || 0
      return (monthlyViews / 1000 * cpm) * 12
    },
  },
  "/influencer-value-calculator": {
    calculate: (v) => {
      const followers = v.followers || 0
      const engagementRate = v.engagement_rate || 0
      const platformMultiplier = v.platform_multiplier || 0
      const posts = v.posts || 0
      return followers * engagementRate * platformMultiplier * posts
    },
  },
  "/creator-tax-calculator": {
    calculate: (v) => standardTaxResult(v).tax,
  },
  "/creator-tax-calculator-net": {
    calculate: (v) => standardTaxResult(v).net,
  },
  "/youtube-income-tax-calculator": {
    calculate: (v) => standardTaxResult(v).tax,
  },
  "/youtube-income-tax-calculator-net": {
    calculate: (v) => standardTaxResult(v).net,
  },
  "/influencer-tax-calculator": {
    calculate: (v) => standardTaxResult(v).tax,
  },
  "/influencer-tax-calculator-net": {
    calculate: (v) => standardTaxResult(v).net,
  },
  "/self-employed-tax-calculator": {
    calculate: (v) => selfEmployedTaxResult(v).tax,
  },
  "/self-employed-tax-calculator-net": {
    calculate: (v) => selfEmployedTaxResult(v).net,
  },
  "/net-income-after-tax-calculator": {
    calculate: (v) => netIncomeAfterTaxResult(v).tax,
  },
  "/net-income-after-tax-calculator-net": {
    calculate: (v) => netIncomeAfterTaxResult(v).net,
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

    if (key === "average_views") {
      defaults[key] = "200000"
      continue
    }

    if (key === "monthly_views") {
      defaults[key] = "250000"
      continue
    }

    if (key === "cpm") {
      defaults[key] = "5"
      continue
    }

    if (key === "niche_multiplier") {
      defaults[key] = "1"
      continue
    }

    if (key === "platform_multiplier") {
      defaults[key] = "1.2"
      continue
    }

    if (key === "posts" || key === "posts_per_month") {
      defaults[key] = "4"
      continue
    }

    if (key === "federal_rate") {
      defaults[key] = "22"
      continue
    }

    if (key === "self_employment_tax_rate") {
      defaults[key] = "15.3"
      continue
    }

    if (key === "state_rate") {
      defaults[key] = "0"
      continue
    }

    if (key === "tax_rate") {
      defaults[key] = "22"
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
    numericValues[key] = parseRawNumber(sanitizeToRawNumber(value))
  }

  return logic.calculate(numericValues)
}

export type CalculatorTemplateProps = {
  title: string
  inputs: CalculatorInputConfig[]
  /** Identifier used to select calculation logic inside this component */
  calculatorKey: CalculatorKey
  autoCalculate?: boolean
  intro?: string
  howItWorks?: string
  exampleCalculation?: string
  formula?: string
  resultLabel?: string
  secondaryCalculatorKey?: CalculatorKey
  secondaryResultLabel?: string
  disclaimer?: string
  resultSubtext?: string
  secondaryResultSubtext?: string
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
  autoCalculate = false,
  intro,
  howItWorks = defaultHowItWorks,
  exampleCalculation = defaultExample,
  formula = defaultFormula,
  resultLabel = "Estimated Result",
  secondaryCalculatorKey,
  secondaryResultLabel = "Net Income After Taxes",
  disclaimer,
  resultSubtext,
  secondaryResultSubtext,
  faq = defaultFaq,
  relatedCalculators = defaultRelated,
}: CalculatorTemplateProps) {
  const initialDefaults = getDefaultValues(inputs, calculatorKey)
  const defaultValuesRef = useRef<Record<string, string>>(
    initialDefaults,
  )

  const [values, setValues] = useState<Record<string, string>>(
    initialDefaults,
  )
  const [result, setResult] = useState<number | null>(null)
  const [secondaryResult, setSecondaryResult] = useState<number | null>(null)

  const defaultResultSubtext =
    "Estimated earnings based on your inputs. Actual results may vary."

  useEffect(() => {
    // When the calculator key or inputs change, refresh defaults and auto-calculate once.
    const newDefaults = getDefaultValues(inputs, calculatorKey)
    defaultValuesRef.current = newDefaults
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setValues(newDefaults)

    const output = calculateResult(calculatorKey, newDefaults)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(output)

    if (secondaryCalculatorKey) {
      const outputSecondary = calculateResult(
        secondaryCalculatorKey,
        newDefaults,
      )
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSecondaryResult(outputSecondary)
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSecondaryResult(null)
    }
  }, [calculatorKey, inputs, secondaryCalculatorKey])

  useEffect(() => {
    if (!autoCalculate) return
    const output = calculateResult(calculatorKey, values)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResult(output)

    if (secondaryCalculatorKey) {
      const outputSecondary = calculateResult(
        secondaryCalculatorKey,
        values,
      )
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSecondaryResult(outputSecondary)
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSecondaryResult(null)
    }
  }, [autoCalculate, calculatorKey, secondaryCalculatorKey, values])

  function handleChange(key: string, value: string) {
    const raw = sanitizeToRawNumber(value)
    setValues({
      ...values,
      [key]: raw,
    })
  }

  function handleCalculate() {
    const output = calculateResult(calculatorKey, values)
    setResult(output)

    if (secondaryCalculatorKey) {
      const outputSecondary = calculateResult(
        secondaryCalculatorKey,
        values,
      )
      setSecondaryResult(outputSecondary)
    } else {
      setSecondaryResult(null)
    }
  }

  function handleReset() {
    const defaults = defaultValuesRef.current
    setValues(defaults)

    const output = calculateResult(calculatorKey, defaults)
    setResult(output)

    if (secondaryCalculatorKey) {
      const outputSecondary = calculateResult(
        secondaryCalculatorKey,
        defaults,
      )
      setSecondaryResult(outputSecondary)
    } else {
      setSecondaryResult(null)
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
    <div className="min-h-screen bg-[#F7F7FB] px-4 py-20 text-[#1F2937] sm:-mt-10 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-center font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-[1.05]">
            {title}
          </h1>

          {intro ? (
            <p className="mt-4 text-center text-gray-700 leading-relaxed">
              {intro}
            </p>
          ) : null}

          <div
            className={`${
              intro ? "mt-6" : "mt-8"
            } rounded-2xl bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-6 sm:p-7`}
          >
            <div className="space-y-6">
              {inputs.map((input) => {
                const id = `${calculatorKey}-${input.key}`
                const helperText =
                  input.helper ?? `Enter your ${input.label.toLowerCase()}`

                const rawValue = values[input.key] ?? ""
                const displayedValue = (() => {
                  if (!rawValue) return ""
                  const base = formatRawNumberWithCommas(rawValue)
                  if (isPercentInputKey(input.key)) return `${base}%`
                  if (isMoneyInputKey(input.key)) return `$${base}`
                  return base
                })()

                return (
                  <div key={input.key} className="space-y-1 text-left">
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-800"
                    >
                      {input.label}
                    </label>
                    {input.type === "select" && input.options && input.options.length > 0 ? (
                      <select
                        id={id}
                        value={values[input.key] ?? ""}
                        onChange={(e) => handleChange(input.key, e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 transition-all duration-200 focus:border-[#5B5FFF] focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]/30"
                      >
                        <option value="" disabled>
                          {input.placeholder || "Select an option"}
                        </option>
                        {input.options.map((opt, index) => (
                          <option
                            key={`${opt.value}-${index}`}
                            value={opt.value}
                          >
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        id={id}
                        type="text"
                        inputMode="decimal"
                        placeholder={input.placeholder}
                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 transition-all duration-200 focus:border-[#5B5FFF] focus:outline-none focus:ring-2 focus:ring-[#5B5FFF]/30"
                        value={displayedValue}
                        onChange={(e) => handleChange(input.key, e.target.value)}
                      />
                    )}
                    <p className="text-xs text-gray-500">{helperText}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-6">
            <button
              type="button"
              onClick={handleCalculate}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#5B5FFF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#4A4AE0] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF] focus-visible:ring-offset-2 sm:w-auto"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-800 shadow-sm transition-all duration-200 hover:bg-[#F7F7FB] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B5FFF]/30 focus-visible:ring-offset-2 sm:w-auto"
            >
              Reset
            </button>
          </div>

          {result !== null && (
            <div className="mt-8 rounded-2xl bg-gradient-to-b from-[#F0F2FF] to-[#FFF7ED]/70 px-6 py-6 text-center ring-1 ring-[#5B5FFF]/10 editorial-fade-in-up">
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-600">
                {resultLabel}
              </div>
              <div className="mt-3 text-4xl font-semibold tracking-tight text-[#5B5FFF] leading-[1.05] sm:text-5xl">
                {calculatorLogic[calculatorKey]?.formatResult
                  ? calculatorLogic[calculatorKey]?.formatResult?.(result)
                  : formatUsd(result)}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {resultSubtext ?? defaultResultSubtext}
              </p>
            </div>
          )}

          {secondaryCalculatorKey && secondaryResult !== null && (
            <div className="mt-4 rounded-2xl bg-gradient-to-b from-[#F0F2FF] to-[#FFF7ED]/70 px-6 py-6 text-center ring-1 ring-[#5B5FFF]/10 editorial-fade-in-up">
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-600">
                {secondaryResultLabel}
              </div>
              <div className="mt-3 text-4xl font-semibold tracking-tight text-[#5B5FFF] leading-[1.05] sm:text-5xl">
                {calculatorLogic[secondaryCalculatorKey]?.formatResult
                  ? calculatorLogic[secondaryCalculatorKey]?.formatResult?.(
                      secondaryResult,
                    )
                  : formatUsd(secondaryResult)}
              </div>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {secondaryResultSubtext ?? defaultResultSubtext}
              </p>
            </div>
          )}

          {disclaimer ? (
            <p className="mt-4 text-xs leading-relaxed text-gray-500">
              {disclaimer}
            </p>
          ) : null}
        </div>
      </div>

      <section className="mx-auto mt-16 max-w-3xl space-y-8 text-left">
        <h2 className="font-serif text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          How This Calculator Works
        </h2>
        <p className="text-gray-700 leading-relaxed">{howItWorks}</p>

        <h3 className="font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Example Calculation
        </h3>
        <div className="rounded-xl border border-gray-200/70 bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-5 text-gray-800 leading-relaxed">
          {exampleCalculation}
        </div>

        <h3 className="font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          Formula
        </h3>
        <div className="rounded-xl border border-gray-200/70 bg-gradient-to-b from-[#F7F7FB] to-[#FFF7ED]/60 p-5 text-gray-800 leading-relaxed">
          {formula}
        </div>

        <h3 className="font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
          FAQs
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
        <section className="mx-auto mt-16 max-w-6xl px-4 sm:px-6 text-left">
          <h2 className="font-serif text-xl font-semibold tracking-tight mb-4 text-gray-900 sm:text-2xl">
            Related Calculators: Explore More Creator Calculators
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedRelated.map((calc) => (
              <li key={calc.path}>
                <Link
                  href={calc.path}
                  className="block h-full rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
                >
                  <h3 className="font-serif font-semibold text-gray-900 text-base tracking-tight sm:text-lg">
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