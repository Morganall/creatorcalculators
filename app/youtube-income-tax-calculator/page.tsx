import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"
import {
  RELATED_EARNINGS_AND_TAX_CALCULATORS,
  TAX_DISCLAIMER,
} from "../lib/tax-calculator-content"

const calculator = calculators.find(
  (c) => c.path === "/youtube-income-tax-calculator",
)

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /youtube-income-tax-calculator",
  )
}

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}${calculator.path}`
const title = `${calculator.name} | Creator Calculators`
const description = calculator.description

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Creator Calculators",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: calculator.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description,
  url: pageUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

export default function YouTubeIncomeTaxCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Income Tax Calculator (YouTube Taxes)"
        calculatorKey="/youtube-income-tax-calculator"
        intro="Calculate YouTube taxes with a simple federal + state model. Enter your monthly YouTube income and expenses to estimate taxes and net income after taxes."
        inputs={[
          {
            label: "Monthly Income ($)",
            key: "income",
            placeholder: "Monthly income",
          },
          {
            label: "Monthly Expenses ($)",
            key: "expenses",
            placeholder: "Monthly expenses",
          },
          {
            label: "Federal Tax Rate (%)",
            key: "federal_rate",
            placeholder: "22",
            helper: "Enter your federal income tax rate as a percentage",
          },
          {
            label: "State Tax",
            key: "state_rate",
            type: "select",
            placeholder: "Select a state tax rate",
            options: [
              { label: "None (0%)", value: "0" },
              { label: "California (10%)", value: "0.10" },
              { label: "New York (8%)", value: "0.08" },
              { label: "Texas (0%)", value: "0" },
              { label: "Florida (0%)", value: "0" },
            ],
          },
        ]}
        resultLabel="Estimated Taxes"
        secondaryCalculatorKey="/youtube-income-tax-calculator-net"
        secondaryResultLabel="Net Income After Taxes"
        resultSubtext="Estimated taxes based on your inputs. Actual results may vary."
        secondaryResultSubtext="Net income after taxes based on your inputs. Actual results may vary."
        disclaimer={TAX_DISCLAIMER}
        howItWorks="This calculator estimates taxable income as income minus expenses, then applies your federal rate plus the selected state tax rate to estimate total taxes. Net income after taxes is computed by subtracting estimated taxes from taxable income."
        exampleCalculation="Example: Monthly income $8,000 and expenses $1,500 with a 22% federal rate and New York (8%) state tax. Taxable income = $6,500. Total tax rate = 0.22 + 0.08 = 0.30. Estimated taxes = $6,500 × 0.30 = $1,950. Net income after taxes = $6,500 − $1,950 = $4,550."
        formula="Taxable Income = Income − Expenses; Total Tax Rate = (Federal Rate / 100) + State Rate; Estimated Taxes = Taxable Income × Total Tax Rate; Net Income After Taxes = Taxable Income − Estimated Taxes"
        faq={[
          {
            question: "How much tax do creators pay on YouTube?",
            answer: "It varies, but this calculator estimates YouTube taxes by applying your federal rate and the state rate you select to your taxable income (income minus expenses). Use it for planning rather than exact tax filing.",
          },
          {
            question: "Is this calculator for YouTube taxes or all creator taxes?",
            answer: "This tool is tailored for YouTube income, but the tax math is the same structure as other creator tax calculators: taxable income times federal + state rates.",
          },
          {
            question: "Do state taxes get added to federal taxes?",
            answer: "In this calculator, yes. Your total tax rate is modeled as (federal_rate/100) + state_rate, then multiplied by taxable income.",
          },
          {
            question: "What happens if expenses are higher than income?",
            answer: "Taxable income becomes negative in the formula. If that produces a negative estimate, it generally indicates you may have low or offset taxable income relative to your entered expenses.",
          },
        ]}
        relatedCalculators={RELATED_EARNINGS_AND_TAX_CALCULATORS}
      />
    </main>
  )
}

