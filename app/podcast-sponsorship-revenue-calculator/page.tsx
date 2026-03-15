"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function PodcastSponsorshipRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Podcast Sponsorship Revenue Calculator"
        inputs={[
          { label: "Downloads per episode", key: "downloads", placeholder: "Average downloads" },
          { label: "CPM ($ per 1,000 downloads)", key: "cpm", placeholder: "e.g. 25" },
          { label: "Number of ad slots", key: "slots", placeholder: "e.g. 2" },
        ]}
        calculate={(v) => {
          const downloads = v.downloads || 0
          const cpm = v.cpm || 0
          const slots = v.slots || 1
          return (downloads / 1000) * cpm * slots
        }}
        howItWorks="This calculator estimates podcast sponsorship revenue by multiplying downloads per episode by CPM and number of ad slots. Use it to price sponsorships or project revenue."
        exampleCalculation="50,000 downloads ÷ 1,000 × $25 CPM × 2 slots = $2,500 per episode"
        formula="Revenue = (Downloads ÷ 1,000) × CPM × Number of Ad Slots"
        faq={[
          { question: "What CPM do podcasts typically get?", answer: "CPM varies by niche and audience; $18–$50 per 1,000 downloads is common. Premium or niche shows can command higher CPMs." },
          { question: "Should I use downloads or listens?", answer: "Many sponsors still buy on downloads (IAB standard). If you have listen-through data, you can use that and adjust CPM to reflect engagement." },
        ]}
        relatedCalculators={[
          { name: "Podcast CPM Calculator", path: "/podcast-cpm-calculator" },
          { name: "Creator Ad Revenue Calculator", path: "/creator-ad-revenue-calculator" },
          { name: "Creator Monthly Income Calculator", path: "/creator-monthly-income-calculator" },
        ]}
      />
    </main>
  )
}
