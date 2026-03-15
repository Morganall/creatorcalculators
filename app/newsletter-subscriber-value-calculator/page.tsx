"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function NewsletterSubscriberValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Newsletter Subscriber Value Calculator"
        inputs={[
          { label: "Total subscribers", key: "subscribers", placeholder: "Number of subscribers" },
          { label: "Monthly revenue from newsletter ($)", key: "revenue", placeholder: "Sponsorship + other" },
        ]}
        calculate={(v) => {
          const subs = v.subscribers || 0
          const revenue = v.revenue || 0
          return subs === 0 ? 0 : revenue / subs
        }}
        howItWorks="This calculator divides your newsletter revenue (sponsorship, ads, paid subs) by total subscribers to get revenue per subscriber per month. Use it to value your list or set sponsorship rates."
        exampleCalculation="$2,000 monthly revenue ÷ 20,000 subscribers = $0.10 per subscriber per month"
        formula="Subscriber Value = Monthly Revenue ÷ Total Subscribers"
        faq={[
          { question: "What revenue should I include?", answer: "Include all revenue tied to the newsletter: sponsorship, ad revenue, paid subscription revenue, and affiliate revenue from the newsletter. Exclude other business income." },
          { question: "How do sponsors use subscriber value?", answer: "Sponsors often pay on a CPM basis (cost per 1,000 subscribers). Your per-subscriber value helps you set a floor: e.g. $0.10/sub × 1,000 = $100 CPM minimum." },
        ]}
        formatResult={(n) => `$${n.toFixed(2)} per subscriber/month`}
        relatedCalculators={[
          { name: "Newsletter Revenue Calculator", path: "/newsletter-revenue-calculator" },
          { name: "Creator Monthly Income Calculator", path: "/creator-monthly-income-calculator" },
          { name: "Creator Ad Revenue Calculator", path: "/creator-ad-revenue-calculator" },
        ]}
      />
    </main>
  )
}
