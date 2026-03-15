"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InstagramFollowerGrowthCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Instagram Follower Growth Calculator"
        inputs={[
          { label: "Starting followers", key: "start", placeholder: "Followers at start" },
          { label: "Ending followers", key: "end", placeholder: "Followers at end" },
          { label: "Days in period", key: "days", placeholder: "e.g. 30" },
        ]}
        calculate={(v) => {
          const start = v.start || 0
          const end = v.end || 0
          const days = v.days || 1
          if (start === 0) return 0
          const totalGrowthPct = ((end - start) / start) * 100
          return days > 0 ? totalGrowthPct * (30 / days) : 0
        }}
        howItWorks="This calculator converts your Instagram follower change over a given period into an approximate monthly growth rate (percentage). Use it to track growth trends and set goals."
        exampleCalculation="Start 20,000, End 22,000, 30 days → (22,000 − 20,000) ÷ 20,000 × 100 = 10% over 30 days ≈ 10% monthly"
        formula="Monthly Growth % ≈ ((End − Start) ÷ Start) × 100 × (30 ÷ Days)"
        faq={[
          { question: "Should I exclude unfollows?", answer: "Use net follower count (what Instagram shows). That already includes unfollows and gives a realistic growth rate." },
          { question: "What’s a good Instagram growth rate?", answer: "Depends on size and niche. 2–8% monthly is often considered strong for established accounts; micro-influencers can see higher rates." },
        ]}
        formatResult={(n) => `${n.toFixed(2)}% monthly growth`}
        relatedCalculators={[
          { name: "Instagram Earnings Calculator", path: "/instagram-earnings-calculator" },
          { name: "Social Media Growth Rate Calculator", path: "/social-media-growth-rate-calculator" },
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
        ]}
      />
    </main>
  )
}
