import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/influencer-money-calculator`

const metaTitle = "Influencer Money Calculator - Estimate Monthly Earnings"
const metaDescription =
  "Use this influencer money calculator to estimate monthly earnings from followers, engagement rate, price per engagement, and posts per month."

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
  name: "Influencer Money Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function InfluencerMoneyCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Influencer Money Calculator (Free Tool)"
        calculatorKey="/influencer-money-calculator"
        autoCalculate
        intro="This influencer money calculator estimates potential monthly earnings from brand deals. It uses your followers, engagement rate, price per engagement, and how many sponsored posts you expect each month."
        inputs={[
          { label: "Followers", key: "followers", placeholder: "e.g. 40,000" },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 4",
          },
          {
            label: "Price per engagement ($)",
            key: "price_per_engagement",
            placeholder: "e.g. 0.18",
          },
          {
            label: "Posts per month",
            key: "posts_per_month",
            placeholder: "e.g. 6",
            helper: "How many sponsored posts/reels you expect per month.",
          },
        ]}
        howItWorks="It estimates the number of engagements from your engagement rate, multiplies by your price per engagement, then scales by posts per month."
        formula="Earnings = Followers × (Engagement Rate ÷ 100) × Price per Engagement × Posts per Month"
        exampleCalculation="40,000 followers × 4% engagement = 1,600 engagements; 1,600 × $0.18 = $288 per post; 6 posts/month => $1,728 estimated monthly earnings"
        faq={[
          {
            question: "How do I estimate price per engagement?",
            answer:
              "Look at past brand deals: divide the deal fee by estimated engagements for that campaign to get an effective price per engagement.",
          },
          {
            question: "Can I use this for Reels and Stories too?",
            answer:
              "Yes. Use your best estimate of engagements for each format, then run different scenarios if your rates vary.",
          },
          {
            question: "Does this include ad revenue?",
            answer:
              "No. This is focused on sponsored engagement-based pricing. Add ad/affiliate income separately in other calculators if needed.",
          },
          {
            question: "How accurate are results?",
            answer:
              "It's an estimate using averages. Campaign terms, audience quality, and seasonality can change outcomes.",
          },
        ]}
        relatedCalculators={[
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

