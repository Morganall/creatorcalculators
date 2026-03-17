"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function YouTubeShortsRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="YouTube Shorts Revenue Calculator"
        calculatorKey="/youtube-shorts-revenue-calculator"
        inputs={[
          {
            label: "Shorts Views",
            key: "views",
            placeholder: "e.g. 2,000,000 views",
            helper: "Enter the total number of monetized Shorts views for the period you want to estimate.",
          },
          {
            label: "RPM ($ per 1,000 views)",
            key: "rpm",
            placeholder: "e.g. $0.50",
            helper: "Your average revenue per 1,000 Shorts views. Use your YouTube Analytics RPM if available.",
          },
        ]}
        howItWorks="This calculator estimates revenue from YouTube Shorts using your Shorts views and an RPM (revenue per 1,000 views). Shorts RPM is typically lower than long-form video due to different ad products and watch time."
        exampleCalculation="2,000,000 Shorts views ÷ 1,000 × $0.50 RPM = $1,000 estimated revenue"
        formula="Revenue = (Shorts Views ÷ 1,000) × RPM"
        faq={[
          { question: "Why is Shorts RPM lower than long-form?", answer: "Shorts use a different revenue pool and ad format; watch time per view is shorter, so RPM is often $0.05–$2 compared to $2–$15+ for long-form in many niches." },
          { question: "Do all Shorts views count for revenue?", answer: "Only monetized views in the Shorts feed count. You must be in the YouTube Partner Program and have Shorts monetization enabled." },
        ]}
        relatedCalculators={[
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
          { name: "YouTube Channel Revenue Calculator", path: "/youtube-channel-revenue-calculator" },
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
        ]}
      />
    </main>
  )
}
