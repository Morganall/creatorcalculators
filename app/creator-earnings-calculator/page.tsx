"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function CreatorEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Creator Earnings Calculator"
        inputs={[
          { label: "Views", key: "views", placeholder: "Number of views" },
          { label: "RPM ($)", key: "rpm", placeholder: "RPM ($ per 1000 views)" },
        ]}
        calculate={(values) => {
          const views = values.views || 0
          const rpm = values.rpm || 0
          return (views / 1000) * rpm
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates creator earnings based on total views and
          revenue per thousand views (RPM), commonly used for ad-supported
          platforms like YouTube.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          If your content receives 150,000 views and your RPM is $6:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          (150,000 ÷ 1,000) × $6 = $900 estimated earnings
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Earnings = (Views ÷ 1,000) × RPM
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What is RPM?</strong>
            <p>
              RPM stands for Revenue Per Mille (per 1,000 views). It represents
              how much you earn for every thousand views, after the platform
              takes its share.
            </p>
          </div>
          <div>
            <strong>Why do RPMs vary?</strong>
            <p>
              RPM depends on audience location, ad demand, content category,
              watch time, and platform policies. Use your actual dashboard RPM
              when possible for accurate estimates.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
