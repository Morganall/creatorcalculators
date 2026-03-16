"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokEngagementValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="TikTok Engagement Value Calculator"
        calculatorKey="/tiktok-engagement-value-calculator"
        inputs={[
          { label: "Likes", key: "likes", placeholder: "Number of likes" },
          { label: "Comments", key: "comments", placeholder: "Number of comments" },
          { label: "Shares", key: "shares", placeholder: "Number of shares" },
          { label: "Value per engagement ($)", key: "value_per_eng", placeholder: "e.g. 0.001" },
        ]}
        howItWorks="This calculator assigns weighted engagement (comments and shares count more than likes) and multiplies total engagement by an estimated value per engagement to approximate the monetary value of that engagement."
        exampleCalculation="10,000 likes + (500 × 2) comments + (200 × 3) shares = 11,100 weighted engagements × $0.001 = $11.10 estimated value"
        formula="Value = (Likes + Comments×2 + Shares×3) × Value Per Engagement"
        faq={[
          { question: "Why weight comments and shares higher?", answer: "Comments and shares indicate stronger intent and reach beyond the original post. Brands often value them more when evaluating partnerships." },
          { question: "How do I set value per engagement?", answer: "Use past deal data (fee ÷ total engagements) or industry benchmarks. It’s an estimate; actual value depends on niche and campaign goals." },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
          { name: "Instagram Earnings Calculator", path: "/instagram-earnings-calculator" },
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
        ]}
      />
    </main>
  )
}
