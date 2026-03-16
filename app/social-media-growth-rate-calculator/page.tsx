"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function SocialMediaGrowthRateCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Social Media Growth Rate Calculator"
        calculatorKey="/social-media-growth-rate-calculator"
        inputs={[
          { label: "Starting followers", key: "start", placeholder: "Followers at start" },
          { label: "Ending followers", key: "end", placeholder: "Followers at end" },
          { label: "Days in period", key: "days", placeholder: "e.g. 30" },
        ]}
        howItWorks="This calculator converts your follower change over a period into an approximate monthly growth rate (percentage). It assumes linear growth for simplicity."
        exampleCalculation="Start 10,000, End 11,500, 30 days → (11,500 − 10,000) ÷ 10,000 × 100 = 15% total; monthly rate ≈ 15%"
        formula="Monthly Growth % ≈ ((End − Start) ÷ Start) × 100 × (30 ÷ Days)"
        faq={[
          { question: "Is linear growth accurate?", answer: "Growth is often not linear; this gives a simple average. For compound growth over long periods, use a CAGR formula instead." },
          { question: "What’s a good monthly growth rate?", answer: "It depends on account size and niche. Newer accounts often see higher percentages; 2–10% monthly can be strong for established accounts." },
        ]}
        relatedCalculators={[
          { name: "Instagram Follower Growth Calculator", path: "/instagram-follower-growth-calculator" },
          { name: "YouTube Subscriber Growth Calculator", path: "/youtube-subscriber-growth-calculator" },
          { name: "TikTok Engagement Value Calculator", path: "/tiktok-engagement-value-calculator" },
        ]}
      />
    </main>
  )
}
