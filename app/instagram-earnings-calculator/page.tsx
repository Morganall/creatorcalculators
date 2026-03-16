"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InstagramEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Instagram Earnings Calculator"
        calculatorKey="/instagram-earnings-calculator"
        inputs={[
          { label: "Followers", key: "followers", placeholder: "Number of followers" },
          { label: "Engagement rate (%)", key: "engagement", placeholder: "e.g. 3" },
          { label: "Rate per 1,000 engaged ($)", key: "rate_per_k", placeholder: "e.g. 50" },
        ]}
        howItWorks="This calculator estimates potential Instagram earnings by combining follower count, engagement rate, and a typical rate per 1,000 engaged users. It reflects what brands might pay for reach and engagement."
        exampleCalculation="100,000 followers × 3% engagement = 3,000 engaged; (3,000 ÷ 1,000) × $50 = $150 per post"
        formula="Earnings ≈ (Followers × Engagement Rate ÷ 1000) × Rate Per 1K Engaged"
        faq={[
          { question: "What engagement rate should I use?", answer: "Use your average rate from recent posts (likes + comments ÷ followers × 100). Instagram engagement often ranges from 1% to 6% depending on niche and account size." },
          { question: "Does this include Reels bonuses?", answer: "No. This is for sponsored post/reel rates. Add Reels bonus or ad revenue separately if you use those products." },
        ]}
        relatedCalculators={[
          { name: "Instagram Reel Earnings Calculator", path: "/instagram-reel-earnings-calculator" },
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
          { name: "Instagram Follower Growth Calculator", path: "/instagram-follower-growth-calculator" },
        ]}
      />
    </main>
  )
}
