import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/viral-video-earnings-calculator`

const metaTitle = "Viral Video Earnings Calculator - Estimate RPM/CPM"
const metaDescription =
  "Estimate viral video earnings across TikTok, YouTube, and Instagram. Enter views and an estimated RPM/CPM ($ per 1,000 views) for a quick forecast."

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
  name: "Viral Video Earnings Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function ViralVideoEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Viral Video Earnings Calculator (Free Tool)"
        calculatorKey="/viral-video-earnings-calculator"
        autoCalculate
        intro="This viral video earnings calculator estimates ad-like RPM/CPM revenue for TikTok, YouTube, and Instagram. Choose your platform, enter views, and add an estimated payout per 1,000 views to get an instant earnings estimate."
        inputs={[
          {
            label: "Platform",
            key: "platform",
            placeholder: "Select platform",
            type: "select",
            options: [
              { label: "TikTok", value: "TikTok" },
              { label: "YouTube", value: "YouTube" },
              { label: "Instagram", value: "Instagram" },
            ],
          },
          { label: "Views", key: "views", placeholder: "e.g. 2,000,000" },
          {
            label: "Estimated RPM/CPM ($ per 1,000 views)",
            key: "payout_per_1000",
            placeholder: "e.g. 4",
          },
        ]}
        howItWorks="It converts your views into groups of 1,000, then multiplies by your estimated payout per 1,000 views (RPM/CPM)."
        formula="Earnings = (Views ÷ 1,000) × Estimated RPM/CPM"
        exampleCalculation="2,000,000 views ÷ 1,000 = 2,000; 2,000 × $4 RPM/CPM = $8,000 estimated earnings"
        faq={[
          {
            question: "Is the platform dropdown required?",
            answer:
              "It mainly helps you choose whether to think in RPM or CPM terms. The math uses your payout-per-1,000 input either way.",
          },
          {
            question: "What should I enter for RPM/CPM?",
            answer:
              "Use an estimate from your analytics or a blended average for similar content. If you are unsure, try a low, mid, and high scenario.",
          },
          {
            question: "Does this include sponsorship deals?",
            answer:
              "No. This calculator focuses on view-based RPM/CPM-style revenue. Sponsorships vary independently.",
          },
          {
            question: "How accurate is this estimate?",
            answer:
              "It's a simplified forecast. Real earnings depend on audience, watch time, content niche, and ad demand.",
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

