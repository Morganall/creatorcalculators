import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/youtube-money-calculator`

const metaTitle = "YouTube Money Calculator - Estimate CPM Earnings"
const metaDescription =
  "Use this YouTube money calculator to estimate earnings from views and CPM. Enter video views and CPM to get an instant estimate."

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
  name: "YouTube Money Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function YouTubeMoneyCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Money Calculator (Free Tool)"
        calculatorKey="/youtube-money-calculator"
        autoCalculate
        intro="This YouTube money calculator estimates your earnings using video views and CPM ($ per 1,000 views). Enter your views and CPM to get a quick income estimate."
        inputs={[
          { label: "Views", key: "views", placeholder: "e.g. 300,000" },
          { label: "CPM ($ per 1,000 views)", key: "cpm", placeholder: "e.g. 6" },
        ]}
        howItWorks="It converts views into groups of 1,000 and multiplies by your CPM to estimate earnings."
        formula="Earnings = (Views ÷ 1,000) × CPM"
        exampleCalculation="300,000 views ÷ 1,000 × $6 CPM = $1,800 estimated earnings"
        faq={[
          {
            question: "What CPM should I use?",
            answer:
              "Use a realistic CPM based on your last videos or analytics. Many creators estimate using a blended CPM across recent traffic.",
          },
          {
            question: "Is this for ads only?",
            answer:
              "This focuses on CPM-style ad revenue. Sponsorships, memberships, and affiliates are separate.",
          },
          {
            question: "Why can earnings differ?",
            answer:
              "CPM varies by audience location, watch time, niche, and ad demand. Real payouts are not fixed.",
          },
          {
            question: "How accurate is the calculator?",
            answer:
              "It provides a simple estimate. Use it to plan revenue ranges, not predict exact income.",
          },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "YouTube Money Per 1,000 Views", path: "/youtube-money-per-1000-views" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

