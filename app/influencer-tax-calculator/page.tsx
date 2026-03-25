import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"
import {
  RELATED_EARNINGS_AND_TAX_CALCULATORS,
  TAX_DISCLAIMER,
} from "../lib/tax-calculator-content"

const calculator = calculators.find(
  (c) => c.path === "/influencer-tax-calculator",
)

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /influencer-tax-calculator",
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

export default function InfluencerTaxCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Influencer Tax Calculator (Influencer Taxes)"
        calculatorKey="/influencer-tax-calculator"
        intro="Estimate influencer taxes using a simple federal + state tax dropdown. Enter your monthly influencer income and expenses to calculate estimated taxes and net income after taxes."
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
        secondaryCalculatorKey="/influencer-tax-calculator-net"
        secondaryResultLabel="Net Income After Taxes"
        resultSubtext="Estimated taxes based on your inputs. Actual results may vary."
        secondaryResultSubtext="Net income after taxes based on your inputs. Actual results may vary."
        disclaimer={TAX_DISCLAIMER}
        howItWorks="This calculator uses taxable income defined as income minus expenses. It then applies the federal tax rate plus your selected state tax rate to estimate total taxes, and subtracts those taxes to calculate net income after taxes."
        exampleCalculation="Example: Monthly income $12,000 and expenses $3,000 with a 22% federal rate and California (10%) state tax. Taxable income = $9,000. Total tax rate = 0.22 + 0.10 = 0.32. Estimated taxes = $9,000 × 0.32 = $2,880. Net income after taxes = $9,000 − $2,880 = $6,120."
        formula="Taxable Income = Income − Expenses; Total Tax Rate = (Federal Rate / 100) + State Rate; Estimated Taxes = Taxable Income × Total Tax Rate; Net Income After Taxes = Taxable Income − Estimated Taxes"
        faq={[
          {
            question: "What counts as expenses for influencer taxes?",
            answer: "Common expenses include production costs, editing software, equipment, marketing, and other costs that relate to earning influencer income. Enter whatever you use to estimate your taxable income.",
          },
          {
            question: "Are these influencer taxes the same as creator taxes?",
            answer: "The structure is similar (taxable income times a combined rate), but your exact tax situation depends on your income type, deductions, and location. This calculator is an estimate for planning influencer taxes.",
          },
          {
            question: "How much tax do creators pay when state taxes apply?",
            answer: "In this calculator, state taxes increase the total tax rate by adding state_rate to (federal_rate/100). That increases estimated taxes and lowers net income after taxes.",
          },
          {
            question: "Can net income be negative?",
            answer: "Yes, if expenses are greater than income or if your entered rates produce a tax estimate that exceeds taxable income. Negative results generally indicate offset or low taxable income in this simplified model.",
          },
        ]}
        relatedCalculators={RELATED_EARNINGS_AND_TAX_CALCULATORS}
      />
    </main>
  )
}

