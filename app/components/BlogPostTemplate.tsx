import Link from "next/link"
import Script from "next/script"
import {
  type BlogPost,
  formatBlogDate,
  slugifyHeading,
} from "@/app/lib/blog"

type BlogPostTemplateProps = {
  post: BlogPost
}

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "CreatorCalculators",
      url: "https://creatorcalculators.com",
    },
    publisher: {
      "@type": "Organization",
      name: "CreatorCalculators",
      url: "https://creatorcalculators.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://creatorcalculators.com/blog/${post.slug}`,
    },
  }

  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#1F2937]">
      <Script
        id={`article-schema-${post.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-14 sm:px-6 sm:pt-20">
        <header className="space-y-4 border-b border-gray-200/70 pb-8 sm:space-y-5">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-[1.04]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
            <span>By {post.author}</span>
            <span aria-hidden="true">•</span>
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
          </div>
        </header>

        <div className="mt-10 space-y-5 text-base leading-8 text-gray-700 sm:text-lg sm:leading-9">
          {post.content.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2
                  id={slugifyHeading(block.text)}
                  key={`${block.type}-${index}`}
                  className="scroll-mt-24 border-t border-gray-200/60 pt-8 font-serif text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
                >
                  {block.text}
                </h2>
              )
            }

            if (block.type === "h3") {
              return (
                <h3
                  id={slugifyHeading(block.text)}
                  key={`${block.type}-${index}`}
                  className="scroll-mt-24 pt-2 font-serif text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl"
                >
                  {block.text}
                </h3>
              )
            }

            if (block.type === "ul") {
              return (
                <ul key={`${block.type}-${index}`} className="list-disc space-y-2 pl-6 marker:text-gray-500">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )
            }

            if (block.type === "linksList") {
              return (
                <ul key={`${block.type}-${index}`} className="list-disc space-y-2 pl-6 marker:text-gray-500">
                  {block.items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="hover:text-gray-900 transition-colors">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            }

            if (block.type === "linkCard") {
              return (
                <aside
                  key={`${block.type}-${index}`}
                  className="mt-4 rounded-2xl border border-gray-200/80 bg-white px-5 py-5 sm:px-6"
                >
                  <h3 className="font-serif text-xl text-gray-900">{block.title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">{block.description}</p>
                  <Link
                    href={block.href}
                    className="mt-4 inline-flex items-center text-sm font-medium text-[#5B5FFF] hover:text-[#4A4AE0]"
                  >
                    {block.cta} →
                  </Link>
                </aside>
              )
            }

            if (block.type === "highlight") {
              return (
                <aside
                  key={`${block.type}-${index}`}
                  className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-5 py-4 text-[15px] leading-7 text-indigo-900 sm:px-6 sm:text-base"
                >
                  {block.text}
                </aside>
              )
            }

            if (block.type === "table") {
              return (
                <div
                  key={`${block.type}-${index}`}
                  className="overflow-x-auto rounded-2xl border border-gray-200/80 bg-white"
                >
                  <table className="min-w-full text-left text-sm text-gray-700 sm:text-base">
                    <thead className="bg-gray-50 text-gray-900">
                      <tr>
                        {block.headers.map((header) => (
                          <th key={header} className="px-4 py-3 font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={`${row.join("-")}-${rowIndex}`} className="border-t border-gray-200/70">
                          {row.map((cell, cellIndex) => (
                            <td key={`${cell}-${cellIndex}`} className="px-4 py-3 align-top">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )
            }

            return <p key={`${block.type}-${index}`}>{block.text}</p>
          })}
        </div>
      </article>
    </main>
  )
}
