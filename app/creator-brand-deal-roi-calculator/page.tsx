"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function CreatorBrandDealROICalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Creator Brand Deal ROI Calculator"
        inputs={[
          { label: "Deal cost / fee paid ($)", key: "cost", placeholder: "What you or brand paid" },
          { label: "Revenue from campaign ($)", key: "revenue", placeholder: "Attributed sales or value" },
        ]}
        calculate={(v) => {
          const cost = v.cost || 0
          const revenue = v.revenue || 0
          return cost === 0 ? 0 : ((revenue - cost) / cost) * 100
        }}
        howItWorks="This calculator computes ROI for a creator brand deal: (Revenue − Cost) ÷ Cost × 100. Use it to evaluate whether a deal was profitable for the brand or to estimate the value a creator drove."
        exampleCalculation="Revenue $8,000 − Cost $2,000 = $6,000 profit; $6,000 ÷ $2,000 × 100 = 300% ROI"
        formula="ROI (%) = ((Revenue − Cost) ÷ Cost) × 100"
        faq={[
          { question: "How do I measure revenue from a brand deal?", answer: "Use trackable links, promo codes, or UTM parameters to attribute sales. For awareness deals, use estimated value of impressions or engagement if direct revenue isn’t available." },
          { question: "What’s a good ROI for a brand deal?", answer: "Brands often aim for 200%+ ROI on performance deals. For awareness, success might be measured in reach or engagement rather than direct ROI." },
        ]}
        formatResult={(n) => `${n.toFixed(1)}% ROI`}
        relatedCalculators={[
          { name: "Influencer Campaign ROI Calculator", path: "/influencer-campaign-roi-calculator" },
          { name: "Brand Deal Value Calculator", path: "/brand-deal-value-calculator" },
          { name: "Influencer Rate Calculator", path: "/influencer-rate-calculator" },
        ]}
      />
    </main>
  )
}
