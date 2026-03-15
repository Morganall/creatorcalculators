"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokEarningsPerViewCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="TikTok Earnings Per View Calculator"
        inputs={[
          { label: "Views", key: "views", placeholder: "Total views" },
          { label: "Earnings per view ($)", key: "epv", placeholder: "e.g. 0.01" },
        ]}
        calculate={(v) => (v.views || 0) * (v.epv || 0)}
        howItWorks="This calculator estimates total TikTok earnings by multiplying total views by your average earnings per view. Earnings per view vary by region, content type, and Creator Fund eligibility."
        exampleCalculation="500,000 views × $0.012 per view = $6,000 estimated earnings"
        formula="Total Earnings = Views × Earnings Per View"
        faq={[
          { question: "What is a typical earnings-per-view rate on TikTok?", answer: "Rates vary widely; $0.01–$0.03 per 1,000 views is common for Creator Fund. Actual EPV depends on audience location, watch time, and program rules." },
          { question: "Does this include brand deals and gifts?", answer: "No. This formula is for ad/Creator Fund–style payouts. Add brand deals and live gifts separately for total income." },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
          { name: "TikTok Creator Fund Calculator", path: "/tiktok-creator-fund-calculator" },
          { name: "TikTok Viral Earnings Calculator", path: "/tiktok-viral-earnings-calculator" },
        ]}
      />
    </main>
  )
}
