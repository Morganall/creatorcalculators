"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function YouTubeSubscriberGrowthCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="YouTube Subscriber Growth Calculator"
        calculatorKey="/youtube-subscriber-growth-calculator"
        inputs={[
          { label: "Starting subscribers", key: "start", placeholder: "Subs at start" },
          { label: "Ending subscribers", key: "end", placeholder: "Subs at end" },
          { label: "Days in period", key: "days", placeholder: "e.g. 30" },
        ]}
        howItWorks="This calculator estimates your YouTube subscriber growth rate over a period and expresses it as an approximate monthly percentage increase. Useful for tracking channel growth trends."
        exampleCalculation="Start 50,000, End 55,000, 30 days → (55,000 − 50,000) ÷ 50,000 × 100 = 10% monthly growth"
        formula="Monthly Growth % ≈ ((End − Start) ÷ Start) × 100 × (30 ÷ Days)"
        faq={[
          { question: "Why use subscribers instead of views?", answer: "Subscribers indicate audience commitment and recurring reach. Views can spike on single videos; subs show sustained growth." },
          { question: "What’s healthy subscriber growth?", answer: "Varies by niche and size. Consistent 2–5% monthly is solid for established channels; newer channels often see higher percentages." },
        ]}
        relatedCalculators={[
          { name: "YouTube Channel Revenue Calculator", path: "/youtube-channel-revenue-calculator" },
          { name: "Social Media Growth Rate Calculator", path: "/social-media-growth-rate-calculator" },
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
        ]}
      />
    </main>
  )
}
