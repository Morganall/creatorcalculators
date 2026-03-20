import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/social-media-value-calculator`

const metaTitle = "Social Media Value Calculator - Estimate Your Earnings"
const metaDescription =
  "Estimate social media value using followers, engagement rate, and a platform multiplier. This free tool helps you forecast income."

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
  name: "Social Media Value Calculator",
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

export default function SocialMediaValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Social Media Value Calculator (Free Tool)"
        calculatorKey="/social-media-value-calculator"
        autoCalculate
        intro="This social media value calculator estimates the value of your audience using followers, engagement rate, and a platform multiplier. Enter your inputs to get a quick earnings estimate."
        inputs={[
          {
            label: "Followers",
            key: "followers",
            placeholder: "e.g. 80,000",
          },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 2.5",
          },
          {
            label: "Platform multiplier",
            key: "platform_multiplier",
            placeholder: "e.g. 0.20",
            helper:
              "This is your estimated $ value per engaged follower (relative to typical payout).",
          },
        ]}
        howItWorks="It converts engagement rate into estimated engaged followers, then multiplies by your platform multiplier to estimate potential earnings."
        formula="Earnings = Followers × (Engagement Rate ÷ 100) × Platform Multiplier"
        exampleCalculation="80,000 followers × 2.5% engagement = 2,000 engaged followers; 2,000 × $0.20 = $400 estimated earnings"
        faq={[
          {
            question: "What is the platform multiplier?",
            answer:
              "It's a simple payout factor representing how much value you estimate per engaged follower.",
          },
          {
            question: "Should I use reach or engagement?",
            answer:
              "Use engagement rate. Reach is harder to monetize directly unless you have a known CPM/RPM.",
          },
          {
            question: "Does this work for brand deals?",
            answer:
              "Yes. Many creators use engagement-based pricing, and this calculator helps you estimate a fair range.",
          },
          {
            question: "How accurate is it?",
            answer:
              "Results are approximate. Campaign performance and audience quality can change outcomes a lot.",
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

