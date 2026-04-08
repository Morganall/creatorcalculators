import type { Metadata } from "next"
import Link from "next/link"
import { formatBlogDate, getAllBlogPosts } from "@/app/lib/blog"

export const metadata: Metadata = {
  title: "Creator Blog",
  description:
    "Creator-focused guides on revenue, growth, and pricing strategies for YouTube, TikTok, Instagram, and more.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#1F2937]">
      <section className="mx-auto max-w-4xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <header className="max-w-2xl space-y-4">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-[1.05]">
            Creator Blog
          </h1>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            Actionable articles on creator earnings, pricing, and growth planning.
          </p>
        </header>

        <ul className="mt-10 space-y-5">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="rounded-2xl border border-gray-200/70 bg-white/70 p-6 sm:p-7">
                <p className="text-sm text-gray-500">
                  By {post.author} •{" "}
                  <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                </p>
                <h2 className="mt-2 font-serif text-2xl font-semibold tracking-tight text-gray-900">
                  <Link href={`/blog/${post.slug}`} className="hover:text-gray-700 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-base leading-7 text-gray-600">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#5B5FFF] hover:text-[#4A4AE0]"
                >
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
