import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/influencer-payment-calculator`

const metaTitle = "Influencer Payment Calculator - Estimate Your Earnings"
const metaDescription =
  "Use this influencer payment calculator to estimate earnings from followers, engagement rate, and your price per engagement."

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
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Influencer Payment Calculator",
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

export default function InfluencerPaymentCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Influencer Payment Calculator (Free Tool)"
        calculatorKey="/influencer-payment-calculator"
        autoCalculate
        intro="This influencer payment calculator estimates your potential earnings based on your follower count, engagement rate, and how much you charge per engagement."
        inputs={[
          {
            label: "Followers",
            key: "followers",
            placeholder: "e.g. 50,000",
          },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 3.5",
          },
          {
            label: "Price per engagement ($)",
            key: "price_per_engagement",
            placeholder: "e.g. 0.12",
          },
        ]}
        howItWorks="It estimates earnings by converting your engagement rate into an expected number of engagements, then multiplying by your price per engagement."
        formula="Earnings = Followers × (Engagement Rate ÷ 100) × Price per Engagement"
        exampleCalculation="50,000 followers × 3.5% engagement = 1,750 engagements; 1,750 × $0.12 = $210 estimated earnings"
        faq={[
          {
            question: "What engagement rate should I use?",
            answer:
              "Use your average engagement rate from recent posts (typically likes + comments divided by followers).",
          },
          {
            question: "Does this include brand deal bonuses?",
            answer:
              "No. This is a simple engagement-based estimate. Add any flat fees or bonuses separately in your own pricing.",
          },
          {
            question: "Is the price per engagement fixed?",
            answer:
              "It can be. Many creators reverse-engineer an effective price per engagement based on past deals.",
          },
          {
            question: "How accurate is this calculator?",
            answer:
              "It's an estimate using averages. Real earnings can vary by niche, audience location, and campaign terms.",
          },
        ]}
        relatedCalculators={[
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Money Calculator", path: "/influencer-money-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

