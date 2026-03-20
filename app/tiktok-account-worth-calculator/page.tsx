import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pagePath = "/tiktok-account-worth-calculator"
const pageUrl = `${baseUrl}${pagePath}`

const metaTitle = "TikTok Account Worth Calculator | Creator Calculators"
const metaDescription =
  "Estimate TikTok account value using followers, engagement rate, average views, and a niche multiplier. Get a fast USD estimate."

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
  name: "TikTok Account Worth Calculator",
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

export default function TikTokAccountWorthCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="TikTok Account Worth Calculator"
        calculatorKey="/tiktok-account-worth-calculator"
        autoCalculate
        resultLabel="Estimated Account Value"
        intro="Estimate your TikTok account value using your follower count, engagement rate, and a niche multiplier. Adjust inputs to see a new estimate in real time."
        inputs={[
          { label: "Followers", key: "followers", placeholder: "e.g. 50,000" },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 3.5",
          },
          {
            label: "Average views",
            key: "average_views",
            placeholder: "e.g. 120,000",
          },
          {
            label: "Niche multiplier",
            key: "niche_multiplier",
            placeholder: "Select niche",
            type: "select",
            options: [
              { label: "General", value: "1" },
              { label: "Beauty", value: "1.2" },
              { label: "Finance", value: "1.5" },
              { label: "Fitness", value: "1.1" },
            ],
          },
        ]}
        howItWorks="This calculator uses the follower + engagement model, then applies your niche multiplier. (Average views are included as context, but the estimate uses the formula shown below.)"
        formula="Estimated Account Value = Followers × Engagement Rate × Niche Multiplier × 0.1"
        exampleCalculation="50,000 followers × 3.5 × 1.2 × 0.1 = $21,000 estimated account value"
        faq={[
          {
            question: "What engagement rate input should I use?",
            answer:
              "Enter your average engagement rate as a percent value (for example, enter 3.5 for 3.5%). Use a recent mix of posts for the most realistic estimate.",
          },
          {
            question: "Does average views change the result?",
            answer:
              "Average views are shown for context, but this calculator’s estimate follows the formula above. If your views are much higher than average, you can use it to sanity-check the result.",
          },
          {
            question: "How do niche multipliers work?",
            answer:
              "The niche multiplier adjusts how brands value your content category. Finance typically earns more, while general niches are closer to 1.0.",
          },
          {
            question: "Is this estimate the same as brand deal pricing?",
            answer:
              "No. This is a simplified account-value estimate. Actual brand deal pricing depends on audience location, content formats, and campaign goals.",
          },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "TikTok Engagement Value Calculator", path: "/tiktok-engagement-value-calculator" },
          { name: "Social Media Value Calculator", path: "/social-media-value-calculator" },
          { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
        ]}
      />
    </main>
  )
}

