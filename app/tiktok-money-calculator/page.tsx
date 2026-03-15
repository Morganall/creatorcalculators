"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function TikTokMoneyCalculator() {

  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">

      <CalculatorTemplate
        title="TikTok Money Calculator"
        inputs={[
          { label: "Views", key: "views", placeholder: "Number of views" },
          { label: "RPM", key: "rpm", placeholder: "RPM ($ per 1000 views)" }
        ]}
        calculate={(values) => {
          const views = values.views || 0
          const rpm = values.rpm || 0
          return (views / 1000) * rpm
        }}
      />

    </main>
  )
}