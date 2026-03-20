import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/instagram-money-calculator`

const metaTitle = "Instagram Money Calculator - Estimate Earnings"
const metaDescription =
  "Use this Instagram money calculator to estimate earnings from followers, engagement rate, and rate per post for sponsored content."

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
  name: "Instagram Money Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

export default function InstagramMoneyCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Instagram Money Calculator (Free Tool)"
        calculatorKey="/instagram-money-calculator"
        autoCalculate
        intro="This Instagram money calculator helps estimate earnings based on your follower count, engagement rate, and a typical rate per post. Enter your numbers to get a quick sponsored-post estimate."
        inputs={[
          {
            label: "Followers",
            key: "followers",
            placeholder: "e.g. 50,000",
          },
          {
            label: "Engagement rate (%)",
            key: "engagement_rate",
            placeholder: "e.g. 3",
          },
          {
            label: "Rate per post ($)",
            key: "rate_per_post",
            placeholder: "e.g. 0.50",
            helper: "Estimated $ value per engaged follower for a single post/reel.",
          },
        ]}
        howItWorks="It estimates engaged followers from your engagement rate, then multiplies by your estimated rate per post."
        formula="Earnings = Followers × (Engagement Rate ÷ 100) × Rate per Post"
        exampleCalculation="50,000 followers × 3% engagement = 1,500 engaged; 1,500 × $0.50 = $750 estimated earnings per post"
        faq={[
          {
            question: "What engagement rate should I use?",
            answer:
              "Use your average engagement rate from recent posts (likes + comments) divided by followers, expressed as a percent.",
          },
          {
            question: "Is this only for sponsored posts?",
            answer:
              "This focuses on sponsored-content style estimates. Ad revenue and affiliate income are separate.",
          },
          {
            question: "How do I pick a rate per post?",
            answer:
              "Use past brand deals or your pricing targets. If your pricing varies, run a few scenarios to find a range.",
          },
          {
            question: "How accurate are the results?",
            answer:
              "It's an estimate using averages. Real earnings depend on niche, audience quality, and campaign terms.",
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

