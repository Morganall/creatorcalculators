"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function AffiliateEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Affiliate Earnings Calculator"
        calculatorKey="/affiliate-earnings-calculator"
        inputs={[
          { label: "Clicks", key: "clicks", placeholder: "Number of clicks" },
          { label: "Conversion Rate (%)", key: "conversion_rate", placeholder: "Conversion rate (e.g. 2.5)" },
          { label: "Commission ($)", key: "commission", placeholder: "Commission per sale ($)" },
        ]}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates affiliate earnings by multiplying clicks by
          your conversion rate and your commission per sale.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          With 5,000 clicks, a 2% conversion rate, and $20 commission per sale:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          5,000 × (2 ÷ 100) × $20 = $2,000 estimated earnings
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Earnings = Clicks × (Conversion Rate ÷ 100) × Commission
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What is a typical affiliate conversion rate?</strong>
            <p>
              Rates vary by niche and product. 1–3% is common for many programs;
              high-intent or loyal audiences can see higher rates.
            </p>
          </div>
          <div>
            <strong>Should I use commission per sale or per click?</strong>
            <p>
              This formula uses commission per sale (CPA). If your program pays
              per click (CPC), use Clicks × CPC instead.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
