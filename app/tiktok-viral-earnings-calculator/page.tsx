"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokViralEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="TikTok Viral Earnings Calculator"
        inputs={[
          { label: "Viral video views", key: "views", placeholder: "Total views on video" },
          { label: "RPM for viral content ($)", key: "rpm", placeholder: "e.g. 0.02" },
        ]}
        calculate={(v) => ((v.views || 0) / 1000) * (v.rpm || 0)}
        howItWorks="This calculator estimates earnings when a TikTok video goes viral. Enter the view count and an estimated RPM (revenue per 1,000 views). Viral content may have different RPM due to watch time and region mix."
        exampleCalculation="5,000,000 views ÷ 1,000 × $0.02 RPM = $100 estimated earnings from this video"
        formula="Earnings = (Views ÷ 1,000) × RPM"
        faq={[
          { question: "Does viral content earn more per view?", answer: "Not always. Viral videos can skew toward younger or international audiences where CPM/rates are often lower. Use your account’s historical RPM if available." },
          { question: "What about Creator Fund vs brand deals?", answer: "This formula is for ad/Creator Fund–style earnings. A viral video can also lead to brand deal opportunities; those are separate from this estimate." },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
          { name: "TikTok Creator Fund Calculator", path: "/tiktok-creator-fund-calculator" },
          { name: "TikTok Earnings Per View Calculator", path: "/tiktok-earnings-per-view-calculator" },
        ]}
      />
    </main>
  )
}
