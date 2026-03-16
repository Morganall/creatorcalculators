"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InfluencerCostPerPostCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Influencer Cost Per Post Calculator"
        calculatorKey="/influencer-cost-per-post-calculator"
        inputs={[
          { label: "Total campaign fee ($)", key: "fee", placeholder: "Total paid to creator" },
          { label: "Number of posts", key: "posts", placeholder: "e.g. 3" },
        ]}
        howItWorks="This calculator divides total campaign or contract value by the number of posts to get cost per post. Useful for brands to compare creator pricing and for creators to price multi-post packages."
        exampleCalculation="$1,500 total fee ÷ 3 posts = $500 cost per post"
        formula="Cost Per Post = Total Fee ÷ Number of Posts"
        faq={[
          { question: "Should the fee include production?", answer: "Yes—use the total amount the brand pays (including any production, usage rights, or exclusivity) so cost per post reflects true investment." },
          { question: "What if deliverables include Stories and Reels?", answer: "You can count each deliverable as a 'post' or weight them (e.g. 1 Reel = 2 posts). Use whatever matches your pricing structure." },
        ]}
        relatedCalculators={[
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
          { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
          { name: "Influencer Campaign ROI Calculator", path: "/influencer-campaign-roi-calculator" },
        ]}
      />
    </main>
  )
}
