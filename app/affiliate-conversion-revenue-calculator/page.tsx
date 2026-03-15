"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function AffiliateConversionRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Affiliate Conversion Revenue Calculator"
        inputs={[
          { label: "Clicks", key: "clicks", placeholder: "Number of clicks" },
          { label: "Conversion rate (%)", key: "conv_rate", placeholder: "e.g. 2.5" },
          { label: "Commission per sale ($)", key: "commission", placeholder: "e.g. 25" },
        ]}
        calculate={(v) => {
          const clicks = v.clicks || 0
          const rate = (v.conv_rate || 0) / 100
          const commission = v.commission || 0
          return clicks * rate * commission
        }}
        howItWorks="This calculator estimates affiliate revenue by multiplying clicks by conversion rate (as a decimal) and commission per sale. It helps you project earnings from affiliate links or landing pages."
        exampleCalculation="1,000 clicks × 2.5% conversion × $25 commission = 25 sales × $25 = $625 revenue"
        formula="Revenue = Clicks × (Conversion Rate ÷ 100) × Commission Per Sale"
        faq={[
          { question: "What’s a typical affiliate conversion rate?", answer: "Rates vary by niche and product; 1–5% is common for consideration products. High-intent or low-friction offers can convert higher." },
          { question: "Should I use commission or sale price?", answer: "Use the commission you earn per sale (your cut), not the product price, to estimate your actual affiliate revenue." },
        ]}
        relatedCalculators={[
          { name: "Affiliate Earnings Calculator", path: "/affiliate-earnings-calculator" },
          { name: "Creator Monthly Income Calculator", path: "/creator-monthly-income-calculator" },
          { name: "Influencer Campaign ROI Calculator", path: "/influencer-campaign-roi-calculator" },
        ]}
      />
    </main>
  )
}
