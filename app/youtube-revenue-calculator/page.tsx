import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"

const calculator = calculators.find(
  (c) => c.path === "/youtube-revenue-calculator"
)

if (!calculator) {
  throw new Error(
    "Calculator definition not found for /youtube-revenue-calculator"
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

export default function YouTubeRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Revenue Calculator"
        calculatorKey="/youtube-revenue-calculator"
        inputs={[
          { label: "Views", key: "views", placeholder: "Number of views" },
          {
            label: "CPM",
            key: "cpm",
            placeholder: "CPM ($ per 1000 views)",
          },
        ]}
      />
    </main>
  )
}
