import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/how-much-can-i-earn-with-x-followers`

const metaTitle = "How Much Can I Earn With X Followers Calculator - Estimate Earnings"
const metaDescription =
  "Use this how much can I earn with X followers calculator to estimate earnings from followers, engagement rate, and earnings per 1,000 engaged."

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
  name: "How Much Can I Earn With X Followers Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function HowMuchCanIEarnWithXFollowersCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="How Much Can I Earn With X Followers (Free Tool)"
        calculatorKey="/how-much-can-i-earn-with-x-followers"
        autoCalculate
        intro="This how much can I earn with X followers calculator estimates earnings using follower count, engagement rate, and an earnings estimate per 1,000 engaged followers. Enter your inputs to see a quick monthly estimate."
        inputs={[
          { label: "Followers", key: "followers", placeholder: "e.g. 60,000" },
          { label: "Engagement rate (%)", key: "engagement_rate", placeholder: "e.g. 2.5" },
          {
            label: "Earnings per 1,000 engaged ($)",
            key: "earnings_per_1000_engaged",
            placeholder: "e.g. 250",
            helper: "Estimate how much you earn from 1,000 engaged followers (per month or per campaign period).",
          },
        ]}
        howItWorks="It estimates how many followers you might have reach engagement from, then scales that number by your earnings per 1,000 engaged followers."
        formula="Earnings = (Followers × Engagement Rate ÷ 100 ÷ 1,000) × Earnings per 1,000 Engaged"
        exampleCalculation="60,000 followers × 2.5% = 1,500 engaged; (1,500 ÷ 1,000) × $250 = $375 estimated earnings"
        faq={[
          {
            question: "What does 'engaged' mean here?",
            answer:
              "Engaged represents an estimated number of followers who engage on your posts (based on your engagement rate).",
          },
          {
            question: "How do I pick an earnings-per-1,000-engaged number?",
            answer:
              "Use past deals: compare a campaign's earnings to your estimated engagements to get an effective $ per 1,000 engaged.",
          },
          {
            question: "Is this for ads or brand deals?",
            answer:
              "This model is more aligned with engagement-based monetization (sponsorships, deals, and similar). For ad CPM/RPM, use platform calculators.",
          },
          {
            question: "How accurate is this?",
            answer:
              "It's an estimate. Real results vary based on your niche, audience quality, and campaign terms.",
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

