"use client"

import { useState } from "react"

export type CalculatorTemplateProps = {
  title: string
  inputs: { label: string; key: string; placeholder: string }[]
  calculate: (values: Record<string, number>) => number
  howItWorks?: string
  exampleCalculation?: string
  formula?: string
  faq?: { question: string; answer: string }[]
  relatedCalculators?: { name: string; path: string }[]
  /** Custom format for result (e.g. for percentages). Default: $X.XX */
  formatResult?: (value: number) => string
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
  calculate,
  howItWorks = defaultHowItWorks,
  exampleCalculation = defaultExample,
  formula = defaultFormula,
  faq = defaultFaq,
  relatedCalculators = defaultRelated,
  formatResult = (v) => `$${v.toFixed(2)}`,
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
    const output = calculate(values)
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
          Result: {formatResult(result)}
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