import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/tiktok-follower-earnings-calculator`

const metaTitle =
  "TikTok Follower Earnings Calculator - Estimate Monthly Revenue"
const metaDescription =
  "Estimate TikTok follower earnings with this free tool. Enter follower count, engagement rate, and earnings per engaged follower to get a monthly estimate."

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
  name: "TikTok Follower Earnings Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function TikTokFollowerEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="TikTok Follower Earnings Calculator (Free Tool)"
        calculatorKey="/tiktok-follower-earnings-calculator"
        autoCalculate
        intro="This TikTok follower earnings calculator estimates revenue using your follower count and engagement rate, then applies your earnings per engaged follower."
        inputs={[
          { label: "TikTok followers", key: "followers", placeholder: "e.g. 100,000" },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 1.5",
          },
          {
            label: "Earnings per engaged follower ($)",
            key: "earnings_per_engaged_follower",
            placeholder: "e.g. 0.04",
            helper:
              "How much you estimate you earn for each engaged follower (modeled as a simple payout factor).",
          },
        ]}
        howItWorks="It estimates engaged followers from your engagement rate, then multiplies by your earnings per engaged follower to estimate earnings."
        formula="Earnings = Followers × (Engagement Rate ÷ 100) × Earnings per Engaged Follower"
        exampleCalculation="100,000 followers × 1.5% engagement = 1,500 engaged followers; 1,500 × $0.04 = $60 estimated earnings"
        faq={[
          {
            question: "What is 'engaged' followers?",
            answer:
              "Engaged followers are an estimated count derived from your engagement rate (followers × engagement rate).",
          },
          {
            question: "Is this only for brand deals?",
            answer:
              "It's mostly an engagement-based estimate. For ad-like RPM-style revenue, use the TikTok money per views calculator instead.",
          },
          {
            question: "How should I choose earnings per engaged follower?",
            answer:
              "If you have past data, divide deal earnings by estimated engagements to get an effective $ per engaged follower.",
          },
          {
            question: "How accurate are the estimates?",
            answer:
              "They are approximate. Results depend on content niche, audience quality, and campaign terms.",
          },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

