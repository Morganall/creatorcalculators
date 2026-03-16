import type { MetadataRoute } from "next";
import { calculators } from "@/app/lib/calculators";

function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "https://creatorcalculators.com";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();

  const homepage: MetadataRoute.Sitemap[number] = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  };

  const staticPages: MetadataRoute.Sitemap = [
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const calculatorPages: MetadataRoute.Sitemap = calculators.map((calc) => ({
  url: `${baseUrl}${calc.path}`,
  lastModified: new Date(),
    changeFrequency: "weekly" as const,
  priority: 0.8,
  }));

  return [homepage, ...staticPages, ...calculatorPages];
}
