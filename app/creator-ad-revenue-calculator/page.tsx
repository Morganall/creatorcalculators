"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function CreatorAdRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Creator Ad Revenue Calculator"
        calculatorKey="/creator-ad-revenue-calculator"
        inputs={[
          { label: "Impressions (or views)", key: "impressions", placeholder: "Monetized impressions" },
          { label: "CPM ($ per 1,000)", key: "cpm", placeholder: "e.g. 5" },
        ]}
        howItWorks="This calculator estimates ad revenue from total impressions (or views) and CPM. Works for YouTube, podcasts, display ads, or any channel where revenue is sold or earned on a CPM basis."
        exampleCalculation="200,000 impressions ÷ 1,000 × $5 CPM = $1,000 ad revenue"
        formula="Ad Revenue = (Impressions ÷ 1,000) × CPM"
        faq={[
          { question: "What’s the difference between CPM and RPM?", answer: "CPM is often what advertisers pay; RPM is what the creator receives after the platform takes a share. Use RPM when you’re estimating your own earnings from a platform." },
          { question: "Can I use this for podcast ads?", answer: "Yes. Use download or listen numbers as 'impressions' and your podcast CPM (often $15–$50+ depending on niche and audience) to estimate sponsorship revenue." },
        ]}
        relatedCalculators={[
          { name: "YouTube Revenue Calculator", path: "/youtube-revenue-calculator" },
          { name: "YouTube CPM Calculator", path: "/youtube-cpm-calculator" },
          { name: "Podcast Sponsorship Revenue Calculator", path: "/podcast-sponsorship-revenue-calculator" },
        ]}
      />
    </main>
  )
}
