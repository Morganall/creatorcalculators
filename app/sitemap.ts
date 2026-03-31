import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://creatorcalculators.com";

export const runtime = "nodejs";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getStaticAppRoutes();
  const now = new Date();

  return routes.map((route) => {
    const isHome = route === "/";
    const isCalculator = route.includes("calculator");
    const changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] =
      isHome ? "monthly" : isCalculator ? "weekly" : "monthly";

    return {
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency,
      priority: isHome ? 1 : isCalculator ? 0.8 : 0.6,
    };
  });
}

function getStaticAppRoutes(): string[] {
  // `app/sitemap.ts` runs server-side; ensure we're in Node (fs/path are used).
  const appDir = path.join(process.cwd(), "app");
  const pageExtensions = new Set([".tsx", ".ts", ".jsx", ".js", ".mdx", ".md"]);
  const pages: string[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      // Skip hidden/system folders
      if (entry.name.startsWith(".")) continue;

      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        // Skip Next internals and private dirs
        if (entry.name === "api") continue;
        walk(fullPath);
        continue;
      }

      if (!entry.isFile()) continue;

      const ext = path.extname(entry.name);
      if (!pageExtensions.has(ext)) continue;
      if (!entry.name.startsWith("page.")) continue;

      const relative = path.relative(appDir, fullPath);
      const route = routeFromAppPagePath(relative);
      if (!route) continue;
      pages.push(route);
    }
  }

  walk(appDir);

  // If a blog section exists, try to enumerate static blog slugs from common
  // content directories (so /blog/* can be included in the sitemap).
  const blogDir = path.join(appDir, "blog");
  if (fs.existsSync(blogDir)) {
    pages.push(...getContentBackedBlogRoutes());
  }

  // Always include homepage, even if discovery ever changes.
  pages.push("/");

  return Array.from(new Set(pages)).sort((a, b) => a.localeCompare(b));
}

function getContentBackedBlogRoutes(): string[] {
  const root = process.cwd();
  const candidateDirs = [
    path.join(root, "content", "blog"),
    path.join(root, "content", "posts"),
    path.join(root, "posts"),
  ];

  const routes: string[] = [];
  for (const dir of candidateDirs) {
    if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) continue;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (ext !== ".md" && ext !== ".mdx") continue;
      const slug = path.basename(entry.name, ext);
      if (!slug) continue;
      routes.push(`/blog/${slug}`);
    }
  }
  return routes;
}

function routeFromAppPagePath(relativePathFromApp: string): string | null {
  // Example: "about/page.tsx" -> "/about"
  // Example: "page.tsx" -> "/"
  const noExt = relativePathFromApp.replace(/\.[^.]+$/, "");
  const withoutPage = noExt.endsWith("/page") ? noExt.slice(0, -"/page".length) : noExt;
  const rawSegments = withoutPage.length ? withoutPage.split(path.sep) : [];

  // Remove route groups like "(marketing)"
  const segments = rawSegments.filter((seg) => !(seg.startsWith("(") && seg.endsWith(")")));

  // Skip dynamic routes since we can't enumerate their params here.
  if (segments.some((seg) => seg.includes("[") || seg.includes("]"))) return null;

  const joined = segments.join("/");
  return joined ? `/${joined}` : "/";
}
