"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function CreatorMonthlyIncomeCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Creator Monthly Income Calculator"
        calculatorKey="/creator-monthly-income-calculator"
        inputs={[
          { label: "Ad revenue ($)", key: "ad_revenue", placeholder: "e.g. 500" },
          { label: "Brand deals ($)", key: "brand_deals", placeholder: "e.g. 1000" },
          { label: "Affiliate income ($)", key: "affiliate", placeholder: "e.g. 200" },
          { label: "Other income ($)", key: "other", placeholder: "e.g. 100" },
        ]}
        howItWorks="This calculator sums your estimated monthly income from common creator revenue streams: ad revenue, brand deals, affiliate earnings, and other (courses, tips, etc.). Use it to project or track total monthly earnings."
        exampleCalculation="$500 ads + $1,000 brand deals + $200 affiliate + $100 other = $1,800 total monthly income"
        formula="Monthly Income = Ad Revenue + Brand Deals + Affiliate + Other"
        faq={[
          { question: "What counts as 'other' income?", answer: "Include courses, digital products, Patreon, tips, newsletter revenue, podcast sponsorships, or any other recurring or one-off creator income for the month." },
          { question: "Should I use before or after tax?", answer: "This is typically gross (before tax). Plan to set aside a portion for taxes depending on your jurisdiction and structure." },
        ]}
        relatedCalculators={[
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
          { name: "Creator Ad Revenue Calculator", path: "/creator-ad-revenue-calculator" },
          { name: "Affiliate Conversion Revenue Calculator", path: "/affiliate-conversion-revenue-calculator" },
        ]}
      />
    </main>
  )
}
