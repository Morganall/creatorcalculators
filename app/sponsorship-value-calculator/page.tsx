"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function SponsorshipValueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Sponsorship Value Calculator"
        inputs={[
          { label: "Views", key: "views", placeholder: "Number of views" },
          { label: "CPM ($)", key: "cpm", placeholder: "CPM ($ per 1000 views)" },
        ]}
        calculate={(values) => {
          const views = values.views || 0
          const cpm = values.cpm || 0
          return (views / 1000) * cpm
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates sponsorship or ad value based on expected
          or actual views and the CPM (cost per thousand views) rate.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          If a video or piece of content gets 200,000 views and the CPM is $20:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          (200,000 ÷ 1,000) × $20 = $4,000 sponsorship value
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Sponsorship Value = (Views ÷ 1,000) × CPM
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What CPM should I use for sponsorships?</strong>
            <p>
              CPMs depend on platform, niche, and audience quality. Research
              rates in your category or use $10–$30 as a starting range for
              many verticals.
            </p>
          </div>
          <div>
            <strong>Views vs. impressions—which to use?</strong>
            <p>
              Use the metric you and the sponsor agree on (e.g. video views,
              page views, or impressions). Keep CPM defined the same way for
              consistency.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
