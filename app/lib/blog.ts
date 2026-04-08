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

export type BlogLinksListBlock = {
  type: "linksList"
  items: Array<{
    label: string
    href: string
  }>
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
  | BlogLinksListBlock
  | BlogLinkCardBlock

export type BlogFaqItem = {
  question: string
  answer: string
}

type BlogToolLink = {
  title: string
  description: string
  href: string
  cta: string
}

type StandardBlogContentInput = {
  intro: string
  mainTopicExplanation: string[]
  breakdown: {
    explanation: string
    bullets: string[]
  }
  factorsAffectingResults: string[]
  whatThisMeansForCreators: string[]
  realExample: string[]
  commonMistakesToAvoid: string[]
  tipsToIncreaseEarnings: string[]
  tryCalculator: BlogToolLink
  relatedCalculators: Array<{
    label: string
    href: string
  }>
  summary: string[]
  faq: BlogFaqItem[]
}

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
    content: buildStandardBlogContent({
      intro:
        "YouTube revenue depends on RPM, audience quality, and consistency, not just total views. If you estimate income the right way, you can plan content and budgets with less guesswork.",
      mainTopicExplanation: [
        "Use RPM as your core metric because it reflects what you keep after YouTube's revenue share. CPM alone can make projections look higher than real payouts.",
        "A practical estimate starts with your last 60-90 days of performance, then adjusts for expected monthly views and upload consistency.",
      ],
      breakdown: {
        explanation:
          "Simple scenario planning gives you realistic low, base, and high outcomes so you can avoid overcommitting on expenses.",
        bullets: [
          "Low case: 200,000 monthly views x $2.50 RPM = about $500",
          "Base case: 200,000 monthly views x $4.00 RPM = about $800",
          "High case: 200,000 monthly views x $6.00 RPM = about $1,200",
        ],
      },
      factorsAffectingResults: [
        "Niche and advertiser demand have a large impact on RPM.",
        "Audience geography can raise or lower ad rates significantly.",
        "Seasonality (Q4 vs slower months) shifts earnings even with similar views.",
      ],
      whatThisMeansForCreators: [
        "Revenue swings are normal, so monthly ranges are safer than single-number forecasts.",
        "When you understand expected ranges, you can decide how aggressively to reinvest in editing, thumbnails, or content production.",
      ],
      realExample: [
        "A finance creator with 300,000 monthly views at a $7 RPM could earn around $2,100 from AdSense. In a slower month with a $4.50 RPM, the same views may produce around $1,350.",
        "That gap shows why creators should track performance trends and plan cash flow based on conservative assumptions.",
      ],
      commonMistakesToAvoid: [
        "Using CPM instead of RPM for forecasting.",
        "Basing a 12-month plan on one unusually strong month.",
        "Ignoring audience geography when comparing channels.",
        "Assuming every view is monetized equally.",
      ],
      tipsToIncreaseEarnings: [
        "Focus on topics with stronger advertiser demand in your niche.",
        "Improve watch time and retention to increase monetization quality.",
        "Publish consistently so revenue is less dependent on one viral upload.",
        "Layer in sponsorships and affiliates instead of relying only on AdSense.",
      ],
      tryCalculator: {
        title: "Try the YouTube Revenue Calculator",
        description: "Plug in your expected views and RPM assumptions to model monthly and annual ranges.",
        href: "/youtube-revenue-calculator",
        cta: "Open calculator",
      },
      relatedCalculators: [
        { label: "YouTube Revenue Calculator", href: "/youtube-revenue-calculator" },
        { label: "TikTok Money Calculator", href: "/tiktok-money-calculator" },
        { label: "Brand Deal Value Calculator", href: "/brand-deal-value-calculator" },
        { label: "All Calculators", href: "/" },
      ],
      summary: [
        "YouTube earnings are best estimated with RPM-based low, base, and high scenarios.",
        "Better estimates help you make smarter publishing and spending decisions.",
      ],
      faq: [
        {
          question: "Is RPM or CPM better for YouTube income estimates?",
          answer:
            "RPM is better for creator planning because it is closer to what you actually receive after platform revenue share and non-monetized views.",
        },
        {
          question: "How often should I update my estimate?",
          answer:
            "Update monthly using your latest analytics, especially after content strategy changes or seasonal shifts.",
        },
        {
          question: "Why does revenue change even when views are stable?",
          answer:
            "Ad demand, geography mix, audience behavior, and seasonality can shift RPM without major view changes.",
        },
        {
          question: "Should new creators use benchmarks?",
          answer:
            "Yes, but use conservative ranges and refine once you have your own channel data.",
        },
        {
          question: "Can I rely on AdSense alone?",
          answer:
            "Most creators are safer with mixed income streams like sponsorships, affiliates, and digital products.",
        },
      ],
    }),
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
    content: buildStandardBlogContent({
      intro:
        "TikTok earnings come from multiple streams, and each stream behaves differently. Understanding the mix helps you set realistic income goals and negotiate better deals.",
      mainTopicExplanation: [
        "Platform payouts, brand deals, and affiliate revenue should be modeled separately. They scale on different signals and have different levels of predictability.",
        "Creators who track these streams independently can make better decisions about content strategy and monetization focus.",
      ],
      breakdown: {
        explanation:
          "A blended model gives clearer monthly expectations than relying on one payout source.",
        bullets: [
          "Platform payouts: $250/month baseline from eligible views",
          "Affiliate revenue: $400/month from consistent product intent content",
          "Brand deals: $1,200 from one sponsored post",
          "Estimated total: about $1,850 for that month",
        ],
      },
      factorsAffectingResults: [
        "Niche fit and audience trust affect sponsorship rates.",
        "Watch-through, saves, and profile clicks often matter more than raw reach.",
        "Posting consistency impacts both algorithmic distribution and inbound opportunities.",
      ],
      whatThisMeansForCreators: [
        "A creator with moderate reach can still earn well by improving conversion-focused metrics.",
        "You do not need constant viral videos if your audience intent and engagement quality are strong.",
      ],
      realExample: [
        "A beauty creator with 80,000 followers and steady engagement lands one $900 monthly brand deal and earns an extra $300 from affiliate links, plus a small platform payout.",
        "Even without viral spikes, that can produce stable monthly income through consistent execution.",
      ],
      commonMistakesToAvoid: [
        "Assuming views alone determine sponsorship value.",
        "Undervaluing affiliate content because it grows more slowly.",
        "Not tracking conversion signals for campaign reporting.",
        "Accepting one-off low rates without a pricing framework.",
      ],
      tipsToIncreaseEarnings: [
        "Create repeatable content formats tied to purchase intent.",
        "Track saves, clicks, and conversion-focused metrics in a monthly report.",
        "Build a media kit with recent campaign outcomes and audience fit.",
        "Pitch package deals to increase average campaign value.",
      ],
      tryCalculator: {
        title: "Estimate TikTok income scenarios",
        description: "Use follower count, engagement, and payout assumptions to map low/base/high monthly outcomes.",
        href: "/tiktok-money-calculator",
        cta: "Use TikTok calculator",
      },
      relatedCalculators: [
        { label: "TikTok Money Calculator", href: "/tiktok-money-calculator" },
        { label: "YouTube Revenue Calculator", href: "/youtube-revenue-calculator" },
        { label: "Brand Deal Value Calculator", href: "/brand-deal-value-calculator" },
        { label: "All Calculators", href: "/" },
      ],
      summary: [
        "TikTok income is strongest when modeled as a blended system, not one number.",
        "Engagement quality and conversion intent often unlock better earnings than raw reach alone.",
      ],
      faq: [
        {
          question: "What is the most reliable TikTok income source?",
          answer:
            "Brand partnerships are often the largest source, but reliability improves when combined with affiliate and platform payouts.",
        },
        {
          question: "How many income streams should I track?",
          answer:
            "At minimum, track platform payouts, brand deals, and affiliate revenue separately each month.",
        },
        {
          question: "Do follower counts determine rates?",
          answer:
            "Follower count matters, but engagement quality, niche fit, and conversion potential usually matter more in pricing discussions.",
        },
        {
          question: "How can I make my TikTok earnings more stable?",
          answer:
            "Use recurring content formats, maintain posting consistency, and diversify monetization sources.",
        },
        {
          question: "When should I raise my rates?",
          answer:
            "Raise rates when your campaign results improve, your content quality increases, or demand for your audience fit grows.",
        },
      ],
    }),
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
    content: buildStandardBlogContent({
      intro:
        "Most creators undercharge when they price only the post itself. A better approach breaks pricing into deliverables, rights, and business impact.",
      mainTopicExplanation: [
        "Set a base rate first, then add clear line items for usage rights, exclusivity, and production complexity.",
        "This structure helps you justify pricing professionally and protects long-term earning power.",
      ],
      breakdown: {
        explanation:
          "A simple pricing breakdown turns negotiation into clear scope decisions instead of random discounts.",
        bullets: [
          "Base content fee: $1,000",
          "Paid usage rights (30 days): +$500",
          "Category exclusivity (60 days): +$400",
          "Total quote: $1,900",
        ],
      },
      factorsAffectingResults: [
        "Audience trust and niche value influence base rates.",
        "Usage rights increase deal value because brands can repurpose your content.",
        "Turnaround speed, revisions, and deliverable complexity affect production pricing.",
      ],
      whatThisMeansForCreators: [
        "Clear pricing prevents undercharging and reduces negotiation friction.",
        "Separating fees by scope helps creators grow from occasional deals into sustainable brand income.",
      ],
      realExample: [
        "A creator initially offered $1,100 for one integrated video. After adding 90-day paid usage and category exclusivity, the final agreement reached $2,000.",
        "The creator did not need more views, only a clearer pricing framework tied to business value.",
      ],
      commonMistakesToAvoid: [
        "Charging one flat fee without rights breakdown.",
        "Agreeing to broad usage terms without added compensation.",
        "Ignoring exclusivity restrictions on future campaigns.",
        "Discounting too early before scope is finalized.",
      ],
      tipsToIncreaseEarnings: [
        "Use a standard pricing sheet with base and add-on line items.",
        "Ask how and where content will be used before sending final rates.",
        "Offer packages for multi-deliverable campaigns.",
        "Track campaign outcomes to strengthen future negotiations.",
      ],
      tryCalculator: {
        title: "Check your sponsorship valuation",
        description: "Model brand deal value using audience metrics and campaign inputs.",
        href: "/brand-deal-value-calculator",
        cta: "Open brand deal calculator",
      },
      relatedCalculators: [
        { label: "Brand Deal Value Calculator", href: "/brand-deal-value-calculator" },
        { label: "TikTok Money Calculator", href: "/tiktok-money-calculator" },
        { label: "YouTube Revenue Calculator", href: "/youtube-revenue-calculator" },
        { label: "All Calculators", href: "/" },
      ],
      summary: [
        "Strong brand deal pricing separates content production from usage and exclusivity value.",
        "A structured framework protects margins and improves long-term earnings consistency.",
      ],
      faq: [
        {
          question: "How do I set a base brand deal rate?",
          answer:
            "Start from expected reach, engagement quality, niche value, and your production effort, then adjust with real campaign outcomes.",
        },
        {
          question: "Should usage rights always cost extra?",
          answer:
            "Yes, because paid usage gives brands additional business value beyond the organic post.",
        },
        {
          question: "How should I price exclusivity?",
          answer:
            "Price exclusivity based on the category, time period, and the opportunity cost of campaigns you may decline.",
        },
        {
          question: "Is it okay to share a rate range first?",
          answer:
            "Yes, a range keeps negotiations flexible while you confirm scope and rights requirements.",
        },
        {
          question: "What if a brand says my rate is too high?",
          answer:
            "Adjust scope before price when possible, and remove non-essential add-ons rather than discounting core value immediately.",
        },
      ],
    }),
  },
]

function buildStandardBlogContent(input: StandardBlogContentInput): BlogContentBlock[] {
  const faqItems = input.faq.slice(0, 7)

  return [
    { type: "p", text: input.intro },
    { type: "h2", text: "Main topic explanation" },
    ...input.mainTopicExplanation.map((text): BlogParagraphBlock => ({ type: "p", text })),
    { type: "h2", text: "Breakdown (numbers, examples)" },
    { type: "p", text: input.breakdown.explanation },
    { type: "ul", items: input.breakdown.bullets },
    { type: "h2", text: "Factors affecting results" },
    ...input.factorsAffectingResults.map((text): BlogParagraphBlock => ({ type: "p", text })),
    { type: "h2", text: "What This Means for Creators" },
    ...input.whatThisMeansForCreators.map((text): BlogParagraphBlock => ({ type: "p", text })),
    { type: "h2", text: "Real Example" },
    ...input.realExample.map((text): BlogParagraphBlock => ({ type: "p", text })),
    { type: "h2", text: "Common Mistakes to Avoid" },
    { type: "ul", items: input.commonMistakesToAvoid },
    { type: "h2", text: "Tips to Increase Earnings" },
    { type: "ul", items: input.tipsToIncreaseEarnings },
    { type: "h2", text: "Try the Calculator" },
    {
      type: "linkCard",
      title: input.tryCalculator.title,
      description: input.tryCalculator.description,
      href: input.tryCalculator.href,
      cta: input.tryCalculator.cta,
    },
    { type: "h2", text: "Summary" },
    ...input.summary.map((text): BlogParagraphBlock => ({ type: "p", text })),
    { type: "h2", text: "Related Calculators" },
    { type: "linksList", items: input.relatedCalculators },
    { type: "h2", text: "FAQ" },
    ...faqItems.flatMap((item): BlogContentBlock[] => [
      { type: "h3", text: item.question },
      { type: "p", text: item.answer },
    ]),
  ]
}

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
