"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function BrandDealValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Brand Deal Value Calculator"
        inputs={[
          { label: "Followers", key: "followers", placeholder: "Number of followers" },
          { label: "Engagement Rate (%)", key: "engagement_rate", placeholder: "Engagement rate (e.g. 3)" },
        ]}
        calculate={(values) => {
          const followers = values.followers || 0
          const engagement_rate = values.engagement_rate || 0
          return followers * (engagement_rate / 100) * 0.15
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates the value of a brand deal or sponsored post
          based on your follower count and engagement rate, using a standard
          industry multiplier.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          For 80,000 followers and a 5% engagement rate:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          80,000 × (5 ÷ 100) × 0.15 = $600 estimated brand deal value
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Brand Deal Value = Followers × (Engagement Rate ÷ 100) × 0.15
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>Why use 0.15 instead of 0.1?</strong>
            <p>
              Brand deals often include usage rights, multiple deliverables, or
              higher production value, so the multiplier is typically higher
              than a simple post rate.
            </p>
          </div>
          <div>
            <strong>What factors affect actual deal value?</strong>
            <p>
              Niche, audience demographics, exclusivity, content type, and
              platform all influence what brands are willing to pay. Use this as
              a baseline for discussions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
