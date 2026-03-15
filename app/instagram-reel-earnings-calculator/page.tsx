"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InstagramReelEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Instagram Reel Earnings Calculator"
        inputs={[
          { label: "Reel views", key: "views", placeholder: "Number of views" },
          { label: "RPM ($ per 1,000 views)", key: "rpm", placeholder: "e.g. 0.30" },
        ]}
        calculate={(v) => ((v.views || 0) / 1000) * (v.rpm || 0)}
        howItWorks="This calculator estimates earnings from Instagram Reels based on total views and an RPM (revenue per 1,000 views). Use it for Reels Play bonuses, ad revenue, or sponsored Reel rates expressed as RPM."
        exampleCalculation="500,000 Reel views ÷ 1,000 × $0.30 RPM = $150 estimated earnings"
        formula="Earnings = (Reel Views ÷ 1,000) × RPM"
        faq={[
          { question: "Does Instagram pay for Reels views?", answer: "Instagram has run Reels Play bonus programs in some regions, paying creators for Reels performance. Terms and availability vary by country and time period." },
          { question: "What RPM should I use for sponsored Reels?", answer: "For sponsored content, convert your flat fee to an effective RPM (fee ÷ views × 1,000) to compare with other platforms, or use typical CPMs ($5–$25) as a reference." },
        ]}
        relatedCalculators={[
          { name: "Instagram Earnings Calculator", path: "/instagram-earnings-calculator" },
          { name: "YouTube Shorts Revenue Calculator", path: "/youtube-shorts-revenue-calculator" },
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
        ]}
      />
    </main>
  )
}
