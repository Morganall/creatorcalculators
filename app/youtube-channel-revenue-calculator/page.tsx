"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function YouTubeChannelRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="YouTube Channel Revenue Calculator"
        calculatorKey="/youtube-channel-revenue-calculator"
        inputs={[
          { label: "Total channel views (monthly)", key: "views", placeholder: "Monetized views" },
          { label: "Average CPM ($)", key: "cpm", placeholder: "e.g. 4" },
        ]}
        howItWorks="This calculator estimates total channel revenue for a period by multiplying total monetized views by your average CPM. Use monthly or yearly views to project ad revenue for the whole channel."
        exampleCalculation="1,000,000 monthly views ÷ 1,000 × $4 CPM = $4,000 estimated monthly channel revenue"
        formula="Channel Revenue = (Total Views ÷ 1,000) × Average CPM"
        faq={[
          { question: "Should I use CPM or RPM?", answer: "Use RPM (revenue per mille) if you want your take-home after YouTube’s share; use CPM if you’re using gross figures from YouTube Studio or industry benchmarks." },
          { question: "How do I get my average CPM?", answer: "In YouTube Studio, check Revenue and then CPM over the last 3–6 months. Blend long-form and Shorts if both are monetized, or calculate separately." },
        ]}
        relatedCalculators={[
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
          { name: "YouTube CPM Calculator", path: "/youtube-cpm-calculator" },
          { name: "YouTube Shorts Revenue Calculator", path: "/youtube-shorts-revenue-calculator" },
        ]}
      />
    </main>
  )
}
