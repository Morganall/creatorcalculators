import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/youtube-money-per-1000-views`

const metaTitle = "YouTube Money Per 1,000 Views Calculator - Estimate CPM"
const metaDescription =
  "Estimate YouTube earnings per 1,000 views with this calculator. Enter total views and CPM ($ per 1,000 views) to get instant results."

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
  name: "YouTube Money Per 1,000 Views Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function YouTubeMoneyPer1000ViewsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="YouTube Money Per 1,000 Views Calculator (Free Tool)"
        calculatorKey="/youtube-money-per-1000-views"
        autoCalculate
        intro="This YouTube money per 1,000 views calculator estimates earnings from views using CPM ($ per 1,000 views). Enter your total views and CPM to get a quick result."
        inputs={[
          { label: "Total views", key: "views", placeholder: "e.g. 300,000" },
          {
            label: "CPM ($ per 1,000 views)",
            key: "cpm",
            placeholder: "e.g. 6",
          },
        ]}
        howItWorks="It multiplies how many groups of 1,000 views you have by your CPM to estimate earnings."
        formula="Earnings = (Views ÷ 1,000) × CPM"
        exampleCalculation="300,000 views ÷ 1,000 × $6 CPM = $1,800 estimated earnings"
        faq={[
          {
            question: "What is CPM?",
            answer:
              "CPM stands for cost per mille, but in creator analytics it typically means estimated revenue per 1,000 views.",
          },
          {
            question: "Does CPM include sponsorships?",
            answer:
              "No. CPM-style revenue is usually ad-related. Sponsorships and memberships are separate.",
          },
          {
            question: "How accurate is this estimate?",
            answer:
              "It's an approximation. Actual earnings vary depending on audience and ad market demand.",
          },
          {
            question: "Can I use this for Shorts?",
            answer:
              "You can use it for Shorts estimates as long as your CPM input matches your expectations for that format.",
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

