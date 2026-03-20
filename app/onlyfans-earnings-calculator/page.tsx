import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/onlyfans-earnings-calculator`

const metaTitle = "OnlyFans Earnings Calculator - Estimate Your Income"
const metaDescription =
  "Use this OnlyFans earnings calculator to estimate monthly income from subscribers, subscription price, and optional tips. Get a quick range now."

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
  name: "OnlyFans Earnings Calculator",
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

export default function OnlyFansEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="OnlyFans Earnings Calculator (Free Tool)"
        calculatorKey="/onlyfans-earnings-calculator"
        autoCalculate
        intro="Estimate how much you could earn on OnlyFans each month. This calculator uses your subscriber count, subscription price, and optional tips to produce an instant income estimate."
        inputs={[
          {
            label: "Monthly subscribers",
            key: "subscribers",
            placeholder: "e.g. 2,500",
          },
          {
            label: "Subscription price (per month)",
            key: "price",
            placeholder: "e.g. $15",
          },
          {
            label: "Tips percentage (optional)",
            key: "tips_percentage",
            placeholder: "e.g. 5",
            helper: "Optional: your estimated % of subscription revenue earned from tips.",
          },
        ]}
        howItWorks="This OnlyFans earnings calculator estimates monthly income by multiplying your subscribers by your subscription price, then adding any optional tips percentage."
        formula="Earnings = Subscribers × Price × (1 + Tips ÷ 100)"
        exampleCalculation="2,000 subscribers × $15 = $30,000. Tips: $30,000 × 5% = $1,500. Estimated monthly total = $31,500."
        faq={[
          {
            question: "What does this OnlyFans calculator estimate?",
            answer: "It estimates your monthly earnings from subscriptions, plus an optional tips percentage.",
          },
          {
            question: "Do I include discounts or refunds?",
            answer: "This tool assumes your listed subscription price and active subscribers. If you expect discounts/refunds, lower your inputs to match your typical net revenue.",
          },
          {
            question: "Is tips percentage required?",
            answer: "No. Leave it at 0 if you don't track tips or want to estimate subscription income only.",
          },
          {
            question: "How accurate are the results?",
            answer: "It's a simple estimate based on your inputs. Actual earnings vary by churn, retention, and how tips perform over time.",
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

