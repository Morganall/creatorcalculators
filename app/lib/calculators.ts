export const CALCULATOR_CATEGORIES = [
  "YouTube Calculators",
  "TikTok Calculators",
  "Instagram Calculators",
  "Influencer Marketing Calculators",
  "Creator Monetization Calculators",
  "Growth Calculators",
] as const

export type CalculatorCategory = (typeof CALCULATOR_CATEGORIES)[number]

export type Calculator = {
  name: string
  path: string
  description: string
  category: CalculatorCategory
}

export const calculators: Calculator[] = [
  {
    name: "YouTube Revenue Calculator",
    path: "/youtube-revenue-calculator",
    description: "Estimate how much a YouTube video can earn based on views and CPM.",
    category: "YouTube Calculators",
  },
  {
    name: "YouTube CPM Calculator",
    path: "/youtube-cpm-calculator",
    description: "Calculate CPM from total revenue and views.",
    category: "YouTube Calculators",
  },
  {
    name: "YouTube Shorts Revenue Calculator",
    path: "/youtube-shorts-revenue-calculator",
    description: "Estimate revenue from YouTube Shorts views and RPM.",
    category: "YouTube Calculators",
  },
  {
    name: "YouTube Channel Revenue Calculator",
    path: "/youtube-channel-revenue-calculator",
    description: "Estimate total channel revenue from views and average CPM.",
    category: "YouTube Calculators",
  },
  {
    name: "TikTok Money Calculator",
    path: "/tiktok-money-calculator",
    description: "Estimate TikTok earnings based on views and RPM.",
    category: "TikTok Calculators",
  },
  {
    name: "TikTok Engagement Rate Calculator",
  path: "/tiktok-engagement-calculator",
    description: "Estimate engagement rate for TikTok posts.",
    category: "TikTok Calculators",
  },
  {
    name: "TikTok Earnings Per View Calculator",
    path: "/tiktok-earnings-per-view-calculator",
    description: "Estimate TikTok earnings based on views and earnings per view.",
    category: "TikTok Calculators",
  },
  {
    name: "TikTok Creator Fund Calculator",
    path: "/tiktok-creator-fund-calculator",
    description: "Estimate earnings from the TikTok Creator Fund.",
    category: "TikTok Calculators",
  },
  {
    name: "TikTok Viral Earnings Calculator",
    path: "/tiktok-viral-earnings-calculator",
    description: "Estimate earnings when a TikTok video goes viral.",
    category: "TikTok Calculators",
  },
  {
    name: "TikTok Engagement Value Calculator",
    path: "/tiktok-engagement-value-calculator",
    description: "Estimate the monetary value of TikTok engagement.",
    category: "TikTok Calculators",
  },
  {
    name: "Instagram Engagement Calculator",
    path: "/instagram-engagement-calculator",
    description: "Calculate your Instagram engagement rate based on likes and followers.",
    category: "Instagram Calculators",
  },
  {
    name: "Instagram Earnings Calculator",
    path: "/instagram-earnings-calculator",
    description: "Estimate Instagram creator earnings from followers and engagement.",
    category: "Instagram Calculators",
  },
  {
    name: "Instagram Reel Earnings Calculator",
    path: "/instagram-reel-earnings-calculator",
    description: "Estimate earnings from Instagram Reels based on views and RPM.",
    category: "Instagram Calculators",
  },
  {
    name: "Influencer Rate Calculator",
    path: "/influencer-rate-calculator",
    description: "Estimate how much influencers should charge for brand deals.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Brand Deal Value Calculator",
    path: "/brand-deal-value-calculator",
    description: "Estimate the value of a social media brand partnership.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Influencer Campaign ROI Calculator",
    path: "/influencer-campaign-roi-calculator",
    description: "Calculate return on investment for influencer marketing campaigns.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Influencer Cost Per Post Calculator",
    path: "/influencer-cost-per-post-calculator",
    description: "Calculate cost per post for influencer campaigns.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Creator Brand Deal ROI Calculator",
    path: "/creator-brand-deal-roi-calculator",
    description: "Calculate return on investment for creator brand deals.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Affiliate Earnings Calculator",
    path: "/affiliate-earnings-calculator",
    description: "Estimate affiliate income based on traffic and conversion rate.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Affiliate Conversion Revenue Calculator",
    path: "/affiliate-conversion-revenue-calculator",
    description: "Estimate affiliate revenue from clicks, conversion rate, and commission.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Podcast CPM Calculator",
    path: "/podcast-cpm-calculator",
    description: "Estimate podcast sponsorship revenue using CPM pricing.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Podcast Sponsorship Revenue Calculator",
    path: "/podcast-sponsorship-revenue-calculator",
    description: "Estimate podcast sponsorship revenue from downloads and CPM.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Newsletter Revenue Calculator",
    path: "/newsletter-revenue-calculator",
    description: "Estimate newsletter sponsorship revenue.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Newsletter Subscriber Value Calculator",
    path: "/newsletter-subscriber-value-calculator",
    description: "Calculate the value of each newsletter subscriber.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Course Revenue Calculator",
    path: "/course-revenue-calculator",
    description: "Estimate revenue from selling online courses.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Sponsorship Value Calculator",
    path: "/sponsorship-value-calculator",
    description: "Calculate the potential value of sponsorship placements.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Creator Earnings Calculator",
    path: "/creator-earnings-calculator",
    description: "Estimate total creator income from multiple monetization streams.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Creator Monthly Income Calculator",
    path: "/creator-monthly-income-calculator",
    description: "Estimate total monthly income from multiple creator revenue streams.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Creator Ad Revenue Calculator",
    path: "/creator-ad-revenue-calculator",
    description: "Estimate ad revenue from impressions and CPM.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Social Media Growth Rate Calculator",
    path: "/social-media-growth-rate-calculator",
    description: "Calculate follower growth rate over time.",
    category: "Growth Calculators",
  },
  {
    name: "YouTube Subscriber Growth Calculator",
    path: "/youtube-subscriber-growth-calculator",
    description: "Track and project YouTube subscriber growth.",
    category: "Growth Calculators",
  },
  {
    name: "Instagram Follower Growth Calculator",
    path: "/instagram-follower-growth-calculator",
    description: "Calculate Instagram follower growth rate over time.",
    category: "Growth Calculators",
  },
  {
    name: "OnlyFans Earnings Calculator",
    path: "/onlyfans-earnings-calculator",
    description:
      "Estimate OnlyFans earnings based on subscribers, subscription price, and tips.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "Influencer Payment Calculator",
    path: "/influencer-payment-calculator",
    description:
      "Estimate influencer payments based on followers, engagement rate, and price per engagement.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Social Media Value Calculator",
    path: "/social-media-value-calculator",
    description:
      "Estimate social media value using followers, engagement rate, and a payout multiplier.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "Blog Earnings Calculator",
    path: "/blog-earnings-calculator",
    description:
      "Estimate blog earnings based on monthly views and RPM (revenue per 1,000 views).",
    category: "Creator Monetization Calculators",
  },
  {
    name: "YouTube Money Calculator",
    path: "/youtube-money-calculator",
    description: "Estimate YouTube earnings from views and CPM.",
    category: "YouTube Calculators",
  },
  {
    name: "Instagram Money Calculator",
    path: "/instagram-money-calculator",
    description:
      "Estimate Instagram earnings based on followers, engagement rate, and rate per post.",
    category: "Instagram Calculators",
  },
  {
    name: "Influencer Money Calculator",
    path: "/influencer-money-calculator",
    description:
      "Estimate influencer earnings using followers, engagement, rate per engagement, and posts per month.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "TikTok Money Per 1,000 Views",
    path: "/tiktok-money-per-1000-views",
    description: "Estimate TikTok earnings from views and RPM ($ per 1,000 views).",
    category: "TikTok Calculators",
  },
  {
    name: "YouTube Money Per 1,000 Views",
    path: "/youtube-money-per-1000-views",
    description: "Estimate YouTube earnings from views and CPM ($ per 1,000 views).",
    category: "YouTube Calculators",
  },
  {
    name: "How Much Can I Earn With X Followers",
    path: "/how-much-can-i-earn-with-x-followers",
    description:
      "Estimate your earnings with a follower count using engagement rate and payout per engagement.",
    category: "Influencer Marketing Calculators",
  },
  {
    name: "1 Million Views Calculator",
    path: "/1-million-views-calculator",
    description: "Calculate how much 1,000,000 views earns using CPM/RPM.",
    category: "Creator Monetization Calculators",
  },
  {
    name: "TikTok Follower Earnings Calculator",
    path: "/tiktok-follower-earnings-calculator",
    description:
      "Estimate TikTok earnings from followers using engagement and earnings per engaged follower.",
    category: "TikTok Calculators",
  },
  {
    name: "YouTube Subscriber Earnings Calculator",
    path: "/youtube-subscriber-earnings-calculator",
    description:
      "Estimate YouTube subscriber earnings using monthly revenue per subscriber.",
    category: "YouTube Calculators",
  },
  {
    name: "Viral Video Earnings Calculator",
    path: "/viral-video-earnings-calculator",
    description:
      "Estimate earnings for viral videos across TikTok, YouTube, and Instagram using views and CPM/RPM.",
    category: "Creator Monetization Calculators",
  },
]