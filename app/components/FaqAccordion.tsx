"use client"

import React, { useState } from "react"

export type FaqItem = { question: string; answer: string }

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.51a.75.75 0 0 1-1.08 0l-4.25-4.51a.75.75 0 0 1 .02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function FaqAccordion({
  items,
}: {
  items: FaqItem[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx

        return (
          <div key={idx} className="rounded-2xl border border-gray-200/70 bg-white/70">
            <button
              type="button"
              className="flex min-h-[44px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              onClick={() => setOpenIndex(open ? null : idx)}
              aria-expanded={open}
            >
              <span className="font-serif text-sm font-medium tracking-tight text-gray-900">
                {item.question}
              </span>
              <Chevron open={open} />
            </button>
            {open && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-gray-700 sm:px-6">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

