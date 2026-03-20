import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/tiktok-money-per-1000-views`

const metaTitle = "TikTok Money Per 1,000 Views Calculator - Estimate RPM"
const metaDescription =
  "Estimate TikTok earnings with this money per 1,000 views calculator. Enter total views and RPM ($ per 1,000 views) to see your estimated earnings."

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
  name: "TikTok Money Per 1,000 Views Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function TikTokMoneyPer1000ViewsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="TikTok Money Per 1,000 Views Calculator (Free Tool)"
        calculatorKey="/tiktok-money-per-1000-views"
        autoCalculate
        intro="This TikTok money per 1,000 views calculator estimates earnings from your views. Enter your total views and your estimated RPM ($ per 1,000 views) to get an instant revenue estimate."
        inputs={[
          {
            label: "Total views",
            key: "views",
            placeholder: "e.g. 500,000",
            helper: "Your total video views you want to estimate earnings for.",
          },
          {
            label: "RPM ($ per 1,000 views)",
            key: "rpm",
            placeholder: "e.g. 0.05",
          },
        ]}
        howItWorks="It estimates earnings by converting your total views into groups of 1,000, then multiplying by your RPM."
        formula="Earnings = (Views ÷ 1,000) × RPM"
        exampleCalculation="500,000 views ÷ 1,000 = 500; 500 × $0.05 RPM = $25 estimated earnings"
        faq={[
          {
            question: "What does RPM mean?",
            answer:
              "RPM stands for revenue per mille, meaning estimated earnings per 1,000 views.",
          },
          {
            question: "Is RPM the same everywhere?",
            answer:
              "No. RPM depends on audience location, content niche, seasonality, and ad demand.",
          },
          {
            question: "Does this include sponsorship deals?",
            answer:
              "No. This is for ad/RPM-style revenue estimates. Sponsorships are separate.",
          },
          {
            question: "How accurate are estimates?",
            answer:
              "It's a rough estimate based on your RPM input. Your actual earnings may differ.",
          },
        ]}
        relatedCalculators={[
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "YouTube Money Per 1,000 Views", path: "/youtube-money-per-1000-views" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

