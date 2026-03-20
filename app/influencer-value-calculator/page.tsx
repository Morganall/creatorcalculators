import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pagePath = "/influencer-value-calculator"
const pageUrl = `${baseUrl}${pagePath}`

const metaTitle = "Influencer Value Calculator | Creator Calculators"
const metaDescription =
  "Estimate influencer value using followers, engagement rate, platform multiplier, and posts per month. Get a real-time estimated account value in USD."

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
  name: "Influencer Value Calculator",
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

export default function InfluencerValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Influencer Value Calculator"
        calculatorKey="/influencer-value-calculator"
        autoCalculate
        resultLabel="Estimated Account Value"
        intro="Use this influencer value calculator to estimate how much your audience could be worth for collaborations. Enter followers and engagement, choose a platform multiplier, and update posts per month."
        inputs={[
          { label: "Followers", key: "followers", placeholder: "e.g. 80,000" },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 2.5",
          },
          {
            label: "Platform multiplier",
            key: "platform_multiplier",
            placeholder: "Select platform",
            type: "select",
            options: [
              { label: "Instagram", value: "1.2" },
              { label: "TikTok", value: "1.3" },
              { label: "YouTube", value: "1.5" },
            ],
          },
          {
            label: "Posts per month",
            key: "posts",
            placeholder: "e.g. 6",
          },
        ]}
        howItWorks="This calculator multiplies your follower base by your engagement rate, then scales the estimate based on the platform multiplier and your posting frequency."
        formula="Estimated Account Value = Followers × Engagement Rate × Platform Multiplier × Posts per Month"
        exampleCalculation="80,000 followers × 2.5 × 1.3 × 6 = $1,560,000 estimated influencer account value"
        faq={[
          {
            question: "What does “platform multiplier” mean?",
            answer:
              "The platform multiplier reflects how different platforms can price engagement and brand exposure. Higher multipliers typically indicate stronger monetization demand.",
          },
          {
            question: "Should I enter engagement rate as a percent?",
            answer:
              "Yes. Enter your engagement rate as a percent value (for example, enter 2.5 for 2.5%). This tool uses the formula exactly as shown.",
          },
          {
            question: "What counts as a “post” for this calculator?",
            answer:
              "Use your best estimate of how many sponsored posts, reels, or content pieces you can deliver per month.",
          },
          {
            question: "How accurate are results?",
            answer:
              "It’s an estimate based on simple multipliers. Actual influencer value depends on niche, audience geography, content format, and campaign terms.",
          },
        ]}
        relatedCalculators={[
          { name: "Social Media Value Calculator", path: "/social-media-value-calculator" },
          { name: "Influencer Money Calculator", path: "/influencer-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
          { name: "Creator Brand Deal ROI Calculator", path: "/creator-brand-deal-roi-calculator" },
        ]}
      />
    </main>
  )
}

