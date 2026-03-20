import type { Metadata } from "next"
import CalculatorTemplate from "../components/CalculatorTemplate"

const baseUrl = "https://creatorcalculators.com"
const pageUrl = `${baseUrl}/blog-earnings-calculator`

const metaTitle = "Blog Earnings Calculator - Estimate RPM Income"
const metaDescription =
  "Use this blog earnings calculator to estimate monthly income from pageviews and RPM. Enter views and RPM to see your estimate."

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    url: pageUrl,
    siteName: "Creator Calculators",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Blog Earnings Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: metaDescription,
  url: pageUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
}

export default function BlogEarningsCalculator() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-10">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CalculatorTemplate
        title="Blog Earnings Calculator (Free Tool)"
        calculatorKey="/blog-earnings-calculator"
        autoCalculate
        intro="This blog earnings calculator estimates monthly income from your pageviews using RPM ($ per 1,000 views). Enter your monthly views and RPM to see an instant estimate."
        inputs={[
          {
            label: "Monthly views (pageviews)",
            key: "views",
            placeholder: "e.g. 250,000",
          },
          {
            label: "RPM ($ per 1,000 views)",
            key: "rpm",
            placeholder: "e.g. 12",
          },
        ]}
        howItWorks="It estimates blog revenue by converting your monthly views into groups of 1,000, then multiplying by your RPM."
        formula="Earnings = (Monthly Views ÷ 1,000) × RPM"
        exampleCalculation="250,000 views ÷ 1,000 × $12 RPM = $3,000 estimated monthly earnings"
        faq={[
          {
            question: "What is RPM?",
            answer:
              "RPM means revenue per 1,000 views. It represents how much money you typically earn for every thousand views.",
          },
          {
            question: "Should I use pageviews or sessions?",
            answer:
              "Use the number that best matches your monetization (often pageviews for display ads and RPM-style payouts).",
          },
          {
            question: "Does this include affiliate or sponsorship income?",
            answer:
              "This calculator focuses on RPM-style ad revenue. Add affiliate/sponsorship separately if you want a full total.",
          },
          {
            question: "How accurate is it?",
            answer:
              "It's an estimate based on your inputs. Real earnings vary with traffic quality, niche, and ad demand.",
          },
        ]}
        relatedCalculators={[
          { name: "YouTube Money Calculator", path: "/youtube-money-calculator" },
          { name: "TikTok Money Per 1,000 Views", path: "/tiktok-money-per-1000-views" },
          { name: "Instagram Money Calculator", path: "/instagram-money-calculator" },
          { name: "Influencer Payment Calculator", path: "/influencer-payment-calculator" },
          { name: "Creator Earnings Calculator", path: "/creator-earnings-calculator" },
        ]}
      />
    </main>
  )
}

