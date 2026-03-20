import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pagePath = "/youtube-channel-worth-calculator"
const pageUrl = `${baseUrl}${pagePath}`

const metaTitle = "YouTube Channel Worth Calculator | Creator Calculators"
const metaDescription =
  "Estimate YouTube channel value using monthly views and CPM. This calculator computes estimated annual revenue in USD."

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
    siteName: "Creator Calculators",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: metaTitle, description: metaDescription },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "YouTube Channel Worth Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

export default function YouTubeChannelWorthCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Channel Worth Calculator"
        calculatorKey="/youtube-channel-worth-calculator"
        autoCalculate
        resultLabel="Estimated Account Value"
        intro="Use this YouTube channel worth calculator to estimate annual revenue from your monthly views and CPM. Enter values to update the estimate instantly."
        inputs={[
          { label: "Subscribers", key: "subscribers", placeholder: "e.g. 100,000" },
          {
            label: "Monthly views",
            key: "monthly_views",
            placeholder: "e.g. 200,000",
          },
          {
            label: "CPM ($)",
            key: "cpm",
            placeholder: "e.g. 5",
          },
        ]}
        howItWorks="This estimator uses your monthly views and CPM (dollars per 1,000 views) to calculate estimated annual revenue. Subscribers are included as a reference input."
        formula="Estimated Account Value = (Monthly Views ÷ 1,000 × CPM) × 12"
        exampleCalculation="If monthly views are 200,000 and CPM is $5: (200,000 ÷ 1,000 × $5) × 12 = $12,000 estimated annual channel value"
        faq={[
          {
            question: "What CPM should I use?",
            answer:
              "Use your typical CPM from recent analytics or a realistic industry average. CPM varies by audience location, seasonality, and ad demand.",
          },
          {
            question: "Does this include sponsorships or affiliate income?",
            answer:
              "No. This calculation focuses on ad revenue based on views and CPM. Add brand deals separately if you want a fuller estimate.",
          },
          {
            question: "How accurate is the annual estimate?",
            answer:
              "It’s an approximation based on averages. If your views or CPM change over time, the true value will differ.",
          },
          {
            question: "Why include subscribers if the formula uses views?",
            answer:
              "Subscribers help you track channel stage, but the worth estimate here is calculated from monthly views and CPM using the provided formula.",
          },
        ]}
        relatedCalculators={[
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
          { name: "YouTube CPM Calculator", path: "/youtube-cpm-calculator" },
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "YouTube Money Per 1,000 Views", path: "/youtube-money-per-1000-views" },
          { name: "YouTube Channel Revenue Calculator", path: "/youtube-channel-revenue-calculator" },
          { name: "Creator Ad Revenue Calculator", path: "/creator-ad-revenue-calculator" },
        ]}
      />
    </main>
  )
}

