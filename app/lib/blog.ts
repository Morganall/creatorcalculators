export type BlogHeadingBlock = {
  type: "h2" | "h3"
  text: string
}

export type BlogParagraphBlock = {
  type: "p"
  text: string
}

export type BlogListBlock = {
  type: "ul"
  items: string[]
}

export type BlogLinkCardBlock = {
  type: "linkCard"
  title: string
  description: string
  href: string
  cta: string
}

export type BlogContentBlock =
  | BlogHeadingBlock
  | BlogParagraphBlock
  | BlogListBlock
  | BlogLinkCardBlock

export type BlogPost = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  publishedAt: string
  author: "CreatorCalculators"
  content: BlogContentBlock[]
}

export type TocItem = {
  id: string
  text: string
  level: 2 | 3
}

const blogPosts: BlogPost[] = [
  {
    slug: "how-to-estimate-youtube-revenue",
    title: "How to Estimate YouTube Revenue in 2026",
    metaTitle: "How to Estimate YouTube Revenue (2026 Guide)",
    metaDescription:
      "Learn how YouTube revenue estimates work using RPM, views, and content niche. Includes practical benchmarks and calculator tips.",
    excerpt:
      "A practical framework for estimating YouTube income with better assumptions around RPM, upload consistency, and niche.",
    publishedAt: "2026-04-06",
    author: "CreatorCalculators",
    content: [
      { type: "p", text: "YouTube income is never a single fixed number. The same channel can see very different revenue from one month to the next because RPM changes with niche, seasonality, and viewer geography." },
      { type: "h2", text: "Start with RPM, not CPM" },
      { type: "p", text: "CPM is the advertiser-facing metric, while RPM reflects what creators actually keep after YouTube's revenue share and non-monetized views. For planning, RPM is usually the better anchor." },
      { type: "ul", items: ["Use recent channel analytics when available.", "Run a low, base, and high RPM scenario.", "Treat spikes from seasonal campaigns as temporary."] },
      { type: "h2", text: "Build three realistic scenarios" },
      { type: "p", text: "A strong estimate includes downside and upside ranges. This keeps budgeting grounded when ad rates fluctuate." },
      { type: "h3", text: "Low case" },
      { type: "p", text: "Assume weaker ad demand, lower watch time quality, or more views from countries with lower ad spend." },
      { type: "h3", text: "Base case" },
      { type: "p", text: "Use trailing 90-day channel RPM and expected monthly views from your publishing cadence." },
      { type: "h3", text: "High case" },
      { type: "p", text: "Model a month with stronger ad inventory, higher retention, and a higher share of monetized long-form views." },
      { type: "h2", text: "Turn estimates into decisions" },
      { type: "p", text: "Forecasting is useful only when it informs action. Use your estimate to decide publishing pace, ad reinvestment, and sponsorship targets." },
      {
        type: "linkCard",
        title: "Try the YouTube Revenue Calculator",
        description: "Plug in your expected views and RPM assumptions to model monthly and annual ranges.",
        href: "/youtube-revenue-calculator",
        cta: "Open calculator",
      },
    ],
  },
  {
    slug: "tiktok-creator-earnings-benchmarks",
    title: "TikTok Creator Earnings Benchmarks: What Actually Moves Income",
    metaTitle: "TikTok Creator Earnings Benchmarks (2026)",
    metaDescription:
      "A creator-first breakdown of TikTok earnings drivers, including views, engagement quality, and brand deal layering.",
    excerpt:
      "Understand the levers behind TikTok earnings and how to model realistic outcomes with multiple revenue streams.",
    publishedAt: "2026-04-04",
    author: "CreatorCalculators",
    content: [
      { type: "p", text: "TikTok payouts vary more than most creators expect. Platform funds, affiliate links, and sponsorships create very different income profiles." },
      { type: "h2", text: "Separate platform payouts from brand revenue" },
      { type: "p", text: "Platform-driven earnings are usually volume-based, while brand revenue depends more on audience fit and conversion potential." },
      { type: "ul", items: ["Platform payouts: driven by views and eligibility.", "Brand deals: driven by niche alignment and trust.", "Affiliate sales: driven by offer quality and intent."] },
      { type: "h2", text: "Track engagement quality, not just reach" },
      { type: "p", text: "High impressions with weak saves, comments, or profile clicks can underperform in sponsorship negotiations." },
      { type: "h3", text: "Signals brands watch" },
      { type: "ul", items: ["Comment depth and sentiment quality.", "Consistency of watch-through rate.", "Profile visits and outbound clicks."] },
      { type: "h2", text: "Model monthly earnings with a blended approach" },
      { type: "p", text: "A blended model combines predictable baseline income and occasional campaign upside. This avoids overestimating best-case months." },
      {
        type: "linkCard",
        title: "Estimate TikTok income scenarios",
        description: "Use follower count, engagement, and payout assumptions to map low/base/high monthly outcomes.",
        href: "/tiktok-money-calculator",
        cta: "Use TikTok calculator",
      },
    ],
  },
  {
    slug: "brand-deal-pricing-framework-for-creators",
    title: "A Simple Brand Deal Pricing Framework for Creators",
    metaTitle: "Brand Deal Pricing Framework for Creators",
    metaDescription:
      "Use a practical framework to price brand deals based on audience value, deliverables, and usage rights.",
    excerpt:
      "A straightforward way to price creator sponsorships without undercharging for usage, exclusivity, or production time.",
    publishedAt: "2026-04-02",
    author: "CreatorCalculators",
    content: [
      { type: "p", text: "Many creators underprice partnerships because they charge only for posting. A better framework prices strategy, production, and rights separately." },
      { type: "h2", text: "Define your base deliverable value" },
      { type: "p", text: "Start with a base rate tied to expected reach and engagement. This is your anchor before any add-ons." },
      { type: "h2", text: "Add fees for rights and exclusivity" },
      { type: "p", text: "If a brand can reuse your content in ads, email, or paid social, that creates extra value and should be priced separately." },
      { type: "h3", text: "Common pricing add-ons" },
      { type: "ul", items: ["Paid usage window length.", "Category exclusivity period.", "Additional revision rounds or rush timelines."] },
      { type: "h2", text: "Use ranges, then tighten with data" },
      { type: "p", text: "Lead with a defensible range, then narrow after campaign scope and rights are finalized. This keeps negotiations flexible while protecting margins." },
      {
        type: "linkCard",
        title: "Check your sponsorship valuation",
        description: "Model brand deal value using audience metrics and campaign inputs.",
        href: "/brand-deal-value-calculator",
        cta: "Open brand deal calculator",
      },
    ],
  },
]

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
}

export function getAllBlogSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostToc(post: BlogPost): TocItem[] {
  return post.content
    .filter((block): block is BlogHeadingBlock => block.type === "h2" || block.type === "h3")
    .map((block) => ({
      id: slugifyHeading(block.text),
      text: block.text,
      level: block.type === "h2" ? 2 : 3,
    }))
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}
