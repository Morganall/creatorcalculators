"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InfluencerCampaignROICalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Influencer Campaign ROI Calculator"
        inputs={[
          { label: "Campaign cost ($)", key: "cost", placeholder: "Total spend" },
          { label: "Revenue from campaign ($)", key: "revenue", placeholder: "Attributed revenue" },
        ]}
        calculate={(v) => {
          const cost = v.cost || 0
          const revenue = v.revenue || 0
          return cost === 0 ? 0 : ((revenue - cost) / cost) * 100
        }}
        howItWorks="This calculator computes return on investment (ROI) for an influencer campaign as a percentage: (Revenue − Cost) ÷ Cost × 100. Positive ROI means the campaign generated more revenue than it cost."
        exampleCalculation="Revenue $5,000 − Cost $2,000 = $3,000 profit; $3,000 ÷ $2,000 × 100 = 150% ROI"
        formula="ROI (%) = ((Revenue − Cost) ÷ Cost) × 100"
        faq={[
          { question: "How do I attribute revenue to a campaign?", answer: "Use trackable links, promo codes, or UTM parameters. For brand awareness, use estimated value of impressions or engagement instead of direct sales." },
          { question: "What’s a good ROI for influencer marketing?", answer: "It varies by goal. For direct response, 200–400% or higher is often cited as strong. For awareness, brands may accept lower or non-sales metrics." },
        ]}
        formatResult={(n) => `${n.toFixed(1)}% ROI`}
        relatedCalculators={[
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
          { name: "Creator Brand Deal ROI Calculator", path: "/creator-brand-deal-roi-calculator" },
          { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
        ]}
      />
    </main>
  )
}
