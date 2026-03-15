"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokEngagementCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="TikTok Engagement Calculator"
        inputs={[
          { label: "Likes", key: "likes", placeholder: "Number of likes" },
          { label: "Comments", key: "comments", placeholder: "Number of comments" },
          { label: "Shares", key: "shares", placeholder: "Number of shares" },
          { label: "Views", key: "views", placeholder: "Number of views" },
        ]}
        calculate={(values) => {
          const likes = values.likes || 0
          const comments = values.comments || 0
          const shares = values.shares || 0
          const views = values.views || 0
          if (views === 0) return 0
          return ((likes + comments + shares) / views) * 100
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates your TikTok engagement rate by combining
          likes, comments, and shares, then dividing by total views and
          expressing the result as a percentage.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          If a video has 10,000 views with 800 likes, 50 comments, and 120
          shares:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          ((800 + 50 + 120) ÷ 10,000) × 100 = 9.7% engagement rate
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Engagement Rate (%) = ((Likes + Comments + Shares) ÷ Views) × 100
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What is a good TikTok engagement rate?</strong>
            <p>
              TikTok tends to have higher engagement than other platforms. Rates
              of 4–9% are common; above 9% is considered strong.
            </p>
          </div>
          <div>
            <strong>Why include shares?</strong>
            <p>
              Shares indicate strong audience connection and viral potential, so
              including them gives a fuller picture of engagement on TikTok.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
