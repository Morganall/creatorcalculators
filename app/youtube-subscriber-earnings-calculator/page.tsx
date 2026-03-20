import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/youtube-subscriber-earnings-calculator`

const metaTitle = "YouTube Subscriber Earnings Calculator - Estimate Revenue"
const metaDescription =
  "Estimate YouTube subscriber earnings with this free tool. Enter your subscriber count and estimated monthly revenue per subscriber to see a quick estimate."

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
  name: "YouTube Subscriber Earnings Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function YouTubeSubscriberEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Subscriber Earnings Calculator (Free Tool)"
        calculatorKey="/youtube-subscriber-earnings-calculator"
        autoCalculate
        intro="This YouTube subscriber earnings calculator estimates monthly revenue based on subscriber count. Enter how many subscribers you have and your estimated revenue per subscriber to see an instant income estimate."
        inputs={[
          {
            label: "Subscribers",
            key: "subscribers",
            placeholder: "e.g. 25,000",
          },
          {
            label: "Revenue per subscriber ($ per month)",
            key: "revenue_per_subscriber",
            placeholder: "e.g. 0.15",
            helper: "Your estimated average monthly revenue generated per subscriber.",
          },
        ]}
        howItWorks="It estimates earnings by multiplying your subscriber count by your estimated revenue per subscriber."
        formula="Earnings = Subscribers × Revenue per Subscriber"
        exampleCalculation="25,000 subscribers × $0.15 = $3,750 estimated monthly earnings"
        faq={[
          {
            question: "What counts as revenue per subscriber?",
            answer:
              "An estimated average that can include ad revenue, memberships, and other subscriber-driven income (modeled simply).",
          },
          {
            question: "Does this include views?",
            answer:
              "Not directly. This is a subscriber-based estimate. If you want view-based revenue, use a YouTube CPM/RPM calculator.",
          },
          {
            question: "How accurate are estimates?",
            answer:
              "They are approximate. Actual earnings depend on views, watch time, audience location, and monetization mix.",
          },
          {
            question: "Can I use this for Shorts too?",
            answer:
              "Yes as a high-level estimate, but Shorts revenue usually depends more on views than subscriber count.",
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

