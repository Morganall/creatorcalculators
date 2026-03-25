import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"
import {
  RELATED_EARNINGS_AND_TAX_CALCULATORS,
  TAX_DISCLAIMER,
} from "../lib/tax-calculator-content"

const calculator = calculators.find((c) => c.path === "/creator-tax-calculator")

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /creator-tax-calculator",
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

export default function CreatorTaxCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Creator Tax Calculator (Creator Taxes)"
        calculatorKey="/creator-tax-calculator"
        intro="Estimate creator taxes by combining your federal tax rate with a simple state tax dropdown. Enter your monthly income and expenses to see estimated taxes and net income after taxes."
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
        secondaryCalculatorKey="/creator-tax-calculator-net"
        secondaryResultLabel="Net Income After Taxes"
        resultSubtext="Estimated taxes based on your inputs. Actual results may vary."
        secondaryResultSubtext="Net income after taxes based on your inputs. Actual results may vary."
        disclaimer={TAX_DISCLAIMER}
        howItWorks="This calculator estimates your taxable income (income minus expenses), then applies your federal rate and selected state tax rate to estimate total taxes. Finally, it subtracts estimated taxes to show your net income after taxes."
        exampleCalculation="Example: Monthly income $10,000 and expenses $2,000 with a 22% federal rate and California (10%) state tax. Taxable income = $8,000. Total tax rate = 0.22 + 0.10 = 0.32. Estimated taxes = $8,000 × 0.32 = $2,560. Net income after taxes = $8,000 − $2,560 = $5,440."
        formula="Taxable Income = Income − Expenses; Total Tax Rate = (Federal Rate / 100) + State Rate; Estimated Taxes = Taxable Income × Total Tax Rate; Net Income After Taxes = Taxable Income − Estimated Taxes"
        faq={[
          {
            question: "How much tax do creators pay?",
            answer: "Tax depends on your taxable income and the tax rates you enter here. This calculator estimates your federal and state taxes using a simple rate model, so it should be used for informational planning.",
          },
          {
            question: "What are “creator taxes” in this calculator?",
            answer: "“Creator taxes” here refers to an estimated total tax based on taxable income (income minus expenses) multiplied by your combined federal + state tax rates.",
          },
          {
            question: "Do I enter income before or after expenses?",
            answer: "Enter income and expenses separately. The calculator computes taxable income as income minus expenses, then applies the tax rates to that taxable amount.",
          },
          {
            question: "Why can my net income change when I adjust my state tax?",
            answer: "Because the selected state tax rate is added to your federal tax rate to form the total tax rate. Higher state rates increase estimated taxes and reduce net income after taxes.",
          },
        ]}
        relatedCalculators={RELATED_EARNINGS_AND_TAX_CALCULATORS}
      />
    </main>
  )
}

