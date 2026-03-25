import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"
import {
  RELATED_EARNINGS_AND_TAX_CALCULATORS,
  TAX_DISCLAIMER,
} from "../lib/tax-calculator-content"

const calculator = calculators.find(
  (c) => c.path === "/self-employed-tax-calculator",
)

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /self-employed-tax-calculator",
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

export default function SelfEmployedTaxCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Self-Employed Tax Calculator (Self-Employed Taxes)"
        calculatorKey="/self-employed-tax-calculator"
        intro="Estimate self-employed taxes with a lightweight self-employment + federal + state tax model. Enter your annual income and expenses to see estimated total taxes and net income after taxes."
        inputs={[
          {
            label: "Annual Income ($)",
            key: "income",
            placeholder: "Annual income",
          },
          {
            label: "Annual Expenses ($)",
            key: "expenses",
            placeholder: "Annual expenses",
          },
          {
            label: "Self-Employment Tax Rate (%)",
            key: "self_employment_tax_rate",
            placeholder: "15.3",
            helper: "Enter your estimated self-employment tax rate as a percentage",
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
        secondaryCalculatorKey="/self-employed-tax-calculator-net"
        secondaryResultLabel="Net Income After Taxes"
        resultSubtext="Estimated total taxes based on your inputs. Actual results may vary."
        secondaryResultSubtext="Net income after taxes based on your inputs. Actual results may vary."
        disclaimer={TAX_DISCLAIMER}
        howItWorks="This calculator estimates taxable income as income minus expenses. It then calculates self-employment tax, federal tax, and state tax using the rates you enter, adds them into total taxes, and subtracts total taxes to estimate net income after taxes."
        exampleCalculation="Example: Annual income $120,000 and expenses $30,000 with a 15.3% self-employment rate, 22% federal rate, and New York (8%) state tax. Taxable income = $90,000. Self-employment tax = $90,000 × 0.153 = $13,770. Federal tax = $90,000 × 0.22 = $19,800. State tax = $90,000 × 0.08 = $7,200. Total taxes = $13,770 + $19,800 + $7,200 = $40,770. Net income after taxes = $90,000 − $40,770 = $49,230."
        formula="Taxable Income = Income − Expenses; Self-Employment Tax = Taxable Income × (Self-Employment Rate / 100); Federal Tax = Taxable Income × (Federal Rate / 100); State Tax = Taxable Income × State Rate; Total Tax = Self-Employment Tax + Federal Tax + State Tax; Net Income After Taxes = Taxable Income − Total Tax"
        faq={[
          {
            question: "How much tax do creators pay if they are self-employed?",
            answer: "In this estimate, self-employed taxes include self-employment tax plus federal tax plus a selected state tax rate, all applied to taxable income (income minus expenses). Your real tax depends on many details.",
          },
          {
            question: "What is the self-employment tax rate here?",
            answer: "It is the input self-employment tax rate (%) you enter. The calculator converts it to a decimal fraction and applies it to taxable income to estimate self-employment taxes.",
          },
          {
            question: "Do state taxes get added on top of federal taxes?",
            answer: "Yes. This calculator models total tax as self-employment tax + federal tax + state tax, where state tax is taxable income multiplied by your selected state rate.",
          },
          {
            question: "Why is net income lower than taxable income?",
            answer: "Because net income is computed by subtracting estimated total taxes from taxable income in this model.",
          },
        ]}
        relatedCalculators={RELATED_EARNINGS_AND_TAX_CALCULATORS}
      />
    </main>
  )
}

