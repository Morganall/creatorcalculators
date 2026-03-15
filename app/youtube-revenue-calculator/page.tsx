"use client"

import { useState } from "react"
import CalculatorTemplate from "../components/CalculatorTemplate"

export default function YouTubeRevenueCalculator() {

  const [views, setViews] = useState("")
  const [cpm, setCpm] = useState("")
  const [revenue, setRevenue] = useState<number | null>(null)

  function calculateRevenue() {
    const v = parseFloat(views)
    const c = parseFloat(cpm)

    if (!isNaN(v) && !isNaN(c)) {
      const result = (v / 1000) * c
      setRevenue(result)
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">

  <CalculatorTemplate
    title="YouTube Revenue Calculator"
    inputs={[
      { label: "Views", key: "views", placeholder: "Number of views" },
      { label: "CPM", key: "cpm", placeholder: "CPM ($ per 1000 views)" }
    ]}
    calculate={(values) => {
      const views = values.views || 0
      const cpm = values.cpm || 0
      return (views / 1000) * cpm
    }}
  />

</main>
  )
}
