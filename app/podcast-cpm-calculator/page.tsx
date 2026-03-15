"use client"

import CalculatorTemplate from "../components/CalculatorTemplate"

export default function PodcastCPMCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <CalculatorTemplate
        title="Podcast CPM Calculator"
        inputs={[
          { label: "Downloads", key: "downloads", placeholder: "Number of downloads" },
          { label: "CPM ($)", key: "cpm", placeholder: "CPM ($ per 1000 downloads)" },
        ]}
        calculate={(values) => {
          const downloads = values.downloads || 0
          const cpm = values.cpm || 0
          return (downloads / 1000) * cpm
        }}
      />

      <section className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-bold">How This Calculator Works</h2>
        <p>
          This calculator estimates podcast ad revenue based on download numbers
          and the CPM (cost per thousand) rate you charge or receive from
          advertisers.
        </p>

        <h3 className="text-xl font-semibold">Example Calculation</h3>
        <p>
          If an episode gets 50,000 downloads and your CPM is $25:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg">
          (50,000 ÷ 1,000) × $25 = $1,250 estimated revenue
        </div>

        <h3 className="text-xl font-semibold">Formula</h3>
        <div className="bg-gray-100 p-4 rounded-lg">
          Revenue = (Downloads ÷ 1,000) × CPM
        </div>

        <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div>
            <strong>What CPM do podcasters typically get?</strong>
            <p>
              CPMs vary by niche and audience. $15–$50 per thousand downloads is
              common; premium or highly targeted shows can command more.
            </p>
          </div>
          <div>
            <strong>Should I use downloads or listens?</strong>
            <p>
              Advertisers usually buy on download or unique listen metrics. Use
              the metric your host or network reports for consistency.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
