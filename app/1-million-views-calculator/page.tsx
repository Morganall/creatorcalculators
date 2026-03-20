import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/1-million-views-calculator`

const metaTitle = "1 Million Views Calculator - Estimate Earnings"
const metaDescription =
  "Use this 1 million views calculator to estimate how much 1,000,000 views could earn using CPM or RPM ($ per 1,000 views)."

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
  name: "1 Million Views Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function MillionViewsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="1 Million Views Calculator (Free Tool)"
        calculatorKey="/1-million-views-calculator"
        autoCalculate
        intro="This 1 million views calculator estimates how much 1,000,000 views could earn using your CPM or RPM rate ($ per 1,000 views). Enter your payout and get an instant estimate."
        inputs={[
          {
            label: "CPM or RPM ($ per 1,000 views)",
            key: "payout_per_1000",
            placeholder: "e.g. 5",
          },
        ]}
        howItWorks="It scales your CPM/RPM payout to 1,000,000 views by multiplying your per-1,000-view payout by 1,000."
        formula="Earnings = (1,000,000 ÷ 1,000) × Payout per 1,000 views"
        exampleCalculation="If your payout per 1,000 views is $5, then 1,000 × $5 = $5,000 estimated earnings."
        faq={[
          {
            question: "Is this CPM or RPM?",
            answer:
              "Either can work as long as it represents dollars earned per 1,000 views (RPM for ad-like revenue, CPM for ad pricing).",
          },
          {
            question: "Does this include sponsorships?",
            answer:
              "No. This calculator is for CPM/RPM-style view monetization. Sponsorship income varies separately.",
          },
          {
            question: "Why do payouts vary?",
            answer:
              "Earnings differ by audience location, content niche, watch time, and advertiser demand. Your input rate may not match every period.",
          },
          {
            question: "How accurate are the results?",
            answer:
              "It's an estimate based on your payout rate. Use it for planning revenue ranges, not exact predictions.",
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

