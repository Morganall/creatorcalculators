"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function CourseRevenueCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Course Revenue Calculator"
        calculatorKey="/course-revenue-calculator"
        inputs={[
          {
            label: "Monthly Visitors",
            key: "visitors",
            placeholder: "e.g. 10,000 visitors",
            helper: "Enter how many people visit your course sales page or funnel in a typical month.",
          },
          {
            label: "Conversion Rate (%)",
            key: "conversion_rate",
            placeholder: "e.g. 2.0%",
            helper: "What percentage of visitors buy your course? Many funnels convert between 1%–5%.",
          },
          {
            label: "Course Price ($)",
            key: "price",
            placeholder: "e.g. $199",
            helper: "Enter the price a student pays for one course purchase.",
          },
        ]}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates course revenue by multiplying landing page
          or funnel visitors by your conversion rate and course price.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          With 10,000 visitors, a 2% conversion rate, and a $199 course:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          10,000 × (2 ÷ 100) × $199 = $39,800 estimated revenue
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Revenue = Visitors × (Conversion Rate ÷ 100) × Price
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What conversion rate should I expect for courses?</strong>
            <p>
              Course conversion varies by price and audience. 1–3% for cold
              traffic is common; warm audiences and launch sequences can achieve
              higher rates.
            </p>
          </div>
          <div>
            <strong>Should I use one-time or cohort revenue?</strong>
            <p>
              This formula gives revenue for a single funnel or campaign. For
              recurring cohorts, run the calculation per launch or use average
              monthly visitors.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
