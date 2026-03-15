"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function NewsletterRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Newsletter Revenue Calculator"
        inputs={[
          { label: "Subscribers", key: "subscribers", placeholder: "Number of subscribers" },
          { label: "Conversion Rate (%)", key: "conversion_rate", placeholder: "Conversion to paid (e.g. 5)" },
          { label: "Price ($)", key: "price", placeholder: "Price per subscription ($)" },
        ]}
        calculate={(values) => {
          const subscribers = values.subscribers || 0
          const conversion_rate = values.conversion_rate || 0
          const price = values.price || 0
          return subscribers * (conversion_rate / 100) * price
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates newsletter revenue from paid subscriptions
          by multiplying subscribers by your conversion rate to paid and your
          subscription price.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          With 20,000 subscribers, a 3% conversion to paid, and $10/month
          price:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          20,000 × (3 ÷ 100) × $10 = $6,000 monthly revenue
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Revenue = Subscribers × (Conversion Rate ÷ 100) × Price
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What conversion rate is realistic for paid newsletters?</strong>
            <p>
              Free-to-paid conversion varies widely. 1–5% is common; strong
              value and audience trust can push it higher. Use your own data
              when available.
            </p>
          </div>
          <div>
            <strong>Should I use monthly or annual price?</strong>
            <p>
              Use the price you want to project (e.g. monthly for MRR or
              annual for yearly revenue). Keep conversion and price in the
              same time period.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
