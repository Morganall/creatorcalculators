import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"
import {
  RELATED_EARNINGS_AND_TAX_CALCULATORS,
  TAX_DISCLAIMER,
} from "../lib/tax-calculator-content"

const calculator = calculators.find(
  (c) => c.path === "/net-income-after-tax-calculator",
)

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /net-income-after-tax-calculator",
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

export default function NetIncomeAfterTaxCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Net Income After Tax Calculator (How Much Tax Do Creators Pay)"
        calculatorKey="/net-income-after-tax-calculator"
        intro="Estimate how much tax do creators pay using a single tax rate. Enter your income and a tax rate (%) to calculate estimated taxes and net income after taxes."
        inputs={[
          {
            label: "Income ($)",
            key: "income",
            placeholder: "Income",
          },
          {
            label: "Tax Rate (%)",
            key: "tax_rate",
            placeholder: "22",
            helper: "Enter an estimated combined tax rate as a percentage",
          },
        ]}
        resultLabel="Estimated Taxes"
        secondaryCalculatorKey="/net-income-after-tax-calculator-net"
        secondaryResultLabel="Net Income After Taxes"
        resultSubtext="Estimated taxes based on your tax rate input. Actual results may vary."
        secondaryResultSubtext="Net income after taxes based on your inputs. Actual results may vary."
        disclaimer={TAX_DISCLAIMER}
        howItWorks="This calculator estimates taxes as income × (tax_rate / 100) and then computes net income as income minus estimated taxes."
        exampleCalculation="Example: Income $5,000 with a tax rate of 22%. Estimated taxes = $5,000 × 0.22 = $1,100. Net income after taxes = $5,000 − $1,100 = $3,900."
        formula="Estimated Taxes = Income × (Tax Rate / 100); Net Income After Taxes = Income − Estimated Taxes"
        faq={[
          {
            question: "How much tax do creators pay with this calculator?",
            answer: "You enter a tax rate (%) and the calculator estimates taxes as income × (tax_rate/100). Your actual tax can differ based on deductions, credits, and your situation.",
          },
          {
            question: "Is this calculator only for creator taxes?",
            answer: "It can be used for any situation where you want to estimate net income from a single tax rate. It helps you think about creator taxes in a simple way.",
          },
          {
            question: "What does the tax rate represent?",
            answer: "In this tool, tax rate is your estimated combined tax rate (federal + state and any other modeled taxes). Enter a number that matches your planning assumptions.",
          },
          {
            question: "Why are my results lower than expected?",
            answer: "If you entered a higher tax rate than your real effective rate, the calculator will estimate higher taxes and lower net income after taxes.",
          },
        ]}
        relatedCalculators={RELATED_EARNINGS_AND_TAX_CALCULATORS}
      />
    </main>
  )
}

