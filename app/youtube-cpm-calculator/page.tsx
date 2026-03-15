"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function YouTubeCPMCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="YouTube CPM Calculator"
        inputs={[
          { label: "Total revenue ($)", key: "revenue", placeholder: "Revenue earned" },
          { label: "Total views", key: "views", placeholder: "Monetized views" },
        ]}
        calculate={(v) => {
          const rev = v.revenue || 0
          const views = v.views || 0
          return views === 0 ? 0 : (rev / views) * 1000
        }}
        howItWorks="This calculator computes your effective CPM (cost per mille, or revenue per 1,000 views) by dividing total revenue by total views and scaling to per thousand. Use it to understand your real CPM from past performance."
        exampleCalculation="$800 revenue ÷ 200,000 views × 1,000 = $4.00 CPM"
        formula="CPM = (Total Revenue ÷ Total Views) × 1,000"
        faq={[
          { question: "Why is my CPM different from YouTube Studio?", answer: "YouTube Studio often shows gross CPM before revenue share. This calculator uses your actual revenue, so it reflects net CPM after YouTube’s cut." },
          { question: "What’s a good CPM on YouTube?", answer: "CPM varies by niche and region; $2–$15 is common. Finance, tech, and certain demographics often see higher CPMs than entertainment or gaming." },
        ]}
        formatResult={(n) => `$${n.toFixed(2)} CPM`}
        relatedCalculators={[
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
          { name: "YouTube Channel Revenue Calculator", path: "/youtube-channel-revenue-calculator" },
          { name: "YouTube Shorts Revenue Calculator", path: "/youtube-shorts-revenue-calculator" },
        ]}
      />
    </main>
  )
}
