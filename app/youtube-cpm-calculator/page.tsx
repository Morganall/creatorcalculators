import type { Metadata } from "next"
import { calculators } from "../lib/calculators"
import CalculatorTemplate from "../components/CalculatorTemplate"

const calculator = calculators.find((c) => c.path === "/youtube-cpm-calculator")

if (!calculator) {
  throw new Error("Calculator definition not found for /youtube-cpm-calculator")
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

export default function YouTubeCPMCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube CPM Calculator"
        calculatorKey="/youtube-cpm-calculator"
        inputs={[
          {
            label: "Total revenue ($)",
            key: "revenue",
            placeholder: "Revenue earned",
          },
          {
            label: "Total views",
            key: "views",
            placeholder: "Monetized views",
          },
        ]}
        howItWorks="This calculator computes your effective CPM (cost per mille, or revenue per 1,000 views) by dividing total revenue by total views and scaling to per thousand. Use it to understand your real CPM from past performance."
        exampleCalculation="$800 revenue ÷ 200,000 views × 1,000 = $4.00 CPM"
        formula="CPM = (Total Revenue ÷ Total Views) × 1,000"
        faq={[
          {
            question: "Why is my CPM different from YouTube Studio?",
            answer:
              "YouTube Studio often shows gross CPM before revenue share. This calculator uses your actual revenue, so it reflects net CPM after YouTube’s cut.",
          },
          {
            question: "What’s a good CPM on YouTube?",
            answer:
              "CPM varies by niche and region; $2–$15 is common. Finance, tech, and certain demographics often see higher CPMs than entertainment or gaming.",
          },
        ]}
        relatedCalculators={[
          {
            name: "YouTube Revenue Calculator",
            path: "/youtube-revenue-calculator",
          },
          {
            name: "YouTube Channel Revenue Calculator",
            path: "/youtube-channel-revenue-calculator",
          },
          {
            name: "YouTube Shorts Revenue Calculator",
            path: "/youtube-shorts-revenue-calculator",
          },
        ]}
      />
    </main>
  )
}
