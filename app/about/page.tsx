export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#1F2937]">
      <section className="px-4 pt-24 pb-28 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-3xl space-y-8">
          <header>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-[1.15]">
              About Creator Calculators
            </h1>
          </header>

          <section className="space-y-4">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              CreatorCalculators.com provides free tools for creators, influencers, and content
              marketers to estimate earnings, engagement, and growth across major social platforms
              like YouTube, TikTok, Instagram, and more.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Our calculators are designed to help you understand potential revenue, campaign
              performance, and audience growth using simple inputs such as views, CPM, RPM,
              followers, and engagement rates. They are intended to support content strategy,
              pricing, and planning in a quick and approachable way.
            </p>
          </section>

          <section aria-labelledby="how-we-work-heading" className="space-y-3">
            <h2
              id="how-we-work-heading"
              className="font-serif text-2xl font-semibold tracking-tight text-gray-900"
            >
              Educational estimates, not guarantees
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              The numbers you see in our calculators are{" "}
              <strong>estimates for educational and informational purposes only</strong>. Actual
              earnings and results can vary widely based on factors such as audience location,
              advertiser demand, niche, platform policies, seasonality, and individual creator
              agreements.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              CreatorCalculators.com does not guarantee any specific income, performance, or
              outcome. Always combine these estimates with your own data, platform analytics, and
              professional advice when making business or financial decisions.
            </p>
          </section>

          <section aria-labelledby="mission-heading" className="space-y-3">
            <h2
              id="mission-heading"
              className="font-serif text-2xl font-semibold tracking-tight text-gray-900"
            >
              Our mission
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our goal is to make it easier for creators and marketers to quickly benchmark ideas,
              communicate value to partners, and explore &quot;what if&quot; scenarios without
              needing complex spreadsheets or paid tools.
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
