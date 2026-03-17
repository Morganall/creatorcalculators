"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokCreatorFundCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="TikTok Creator Fund Calculator"
        calculatorKey="/tiktok-creator-fund-calculator"
        inputs={[
          {
            label: "Total Views",
            key: "views",
            placeholder: "e.g. 1,500,000 views",
            helper: "Enter the total number of eligible TikTok views during the payout period.",
          },
          {
            label: "Fund Rate ($ per 1,000 views)",
            key: "rate",
            placeholder: "e.g. $0.02",
            helper: "Your estimated Creator Fund payout per 1,000 views based on past earnings.",
          },
        ]}
        howItWorks="This calculator estimates earnings from the TikTok Creator Fund (or similar programs) by multiplying your views by an estimated rate per 1,000 views. Actual payouts depend on region, watch time, and program terms."
        exampleCalculation="1,500,000 views ÷ 1,000 × $0.02 = $30 estimated Creator Fund earnings"
        formula="Earnings = (Views ÷ 1,000) × Rate Per 1,000 Views"
        faq={[
          { question: "How do I know my Creator Fund rate?", answer: "TikTok doesn’t publish a fixed rate. Use your past payouts (total earnings ÷ views × 1,000) to get an effective rate for your account and region." },
          { question: "Who qualifies for the Creator Fund?", answer: "Requirements vary by region (e.g. age, follower count, video views in last 30 days). Check TikTok’s Creator Fund page in your country for current eligibility." },
        ]}
        relatedCalculators={[
          { name: "TikTok Money Calculator", path: "/tiktok-money-calculator" },
          { name: "TikTok Earnings Per View Calculator", path: "/tiktok-earnings-per-view-calculator" },
          { name: "TikTok Viral Earnings Calculator", path: "/tiktok-viral-earnings-calculator" },
        ]}
      />
    </main>
  )
}
