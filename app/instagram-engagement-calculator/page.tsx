"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function InstagramEngagementCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Instagram Engagement Calculator"
        calculatorKey="/instagram-engagement-calculator"
        inputs={[
          { label: "Likes", key: "likes", placeholder: "Number of likes" },
          { label: "Comments", key: "comments", placeholder: "Number of comments" },
          { label: "Followers", key: "followers", placeholder: "Number of followers" },
        ]}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates your Instagram engagement rate by combining
          likes and comments, then dividing by your follower count and
          expressing the result as a percentage.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          If a post receives 1,200 likes, 80 comments, and you have 50,000
          followers:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          ((1,200 + 80) ÷ 50,000) × 100 = 2.56% engagement rate
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Engagement Rate (%) = ((Likes + Comments) ÷ Followers) × 100
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What is a good Instagram engagement rate?</strong>
            <p>
              Typically 1–3% is average, 3–6% is good, and above 6% is considered
              high. Micro-influencers often see higher rates than large accounts.
            </p>
          </div>
          <div>
            <strong>Why use likes and comments only?</strong>
            <p>
              Saves and shares are harder to track consistently. Likes and
              comments are standard metrics brands use to compare engagement
              across accounts.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
