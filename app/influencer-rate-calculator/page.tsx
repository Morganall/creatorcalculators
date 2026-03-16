"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InfluencerRateCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Influencer Rate Calculator"
        calculatorKey="/influencer-rate-calculator"
        inputs={[
          { label: "Followers", key: "followers", placeholder: "Number of followers" },
          { label: "Engagement Rate (%)", key: "engagement_rate", placeholder: "Engagement rate (e.g. 3)" },
        ]}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates a suggested post rate for influencers based
          on follower count and engagement rate, using a common industry
          multiplier.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          For 100,000 followers and a 4% engagement rate:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          100,000 × (4 ÷ 100) × 0.1 = $400 suggested rate per post
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Rate = Followers × (Engagement Rate ÷ 100) × 0.1
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>Is the 0.1 multiplier standard?</strong>
            <p>
              It is a common baseline. Actual rates vary by niche, platform,
              exclusivity, and deliverables. Use this as a starting point for
              negotiation.
            </p>
          </div>
          <div>
            <strong>What engagement rate should I use?</strong>
            <p>
              Use your actual average engagement rate from recent posts. You can
              calculate it with our Instagram or TikTok engagement calculators.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
