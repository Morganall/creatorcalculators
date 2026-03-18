export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F7FB] text-[#1F2937]">
      <section className="px-4 pt-24 pb-28 sm:px-6 sm:pt-28 sm:pb-32">
        <div className="mx-auto max-w-2xl space-y-8">
          <header>
            <h1 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-[1.15]">
              Contact
            </h1>
          </header>

          <section
            aria-labelledby="contact-details-heading"
            className="space-y-3"
          >
            <h2
              id="contact-details-heading"
              className="font-serif text-2xl font-semibold tracking-tight text-gray-900"
            >
              Get in touch
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              If you have questions, feedback, or suggestions for new calculators,
              you can reach the Creator Calculators team by email.
            </p>
            <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
              Email:{" "}
              <a
                href="mailto:contacts@creatorcalculators.com"
                className="text-blue-600 hover:underline break-all"
              >
                contacts@creatorcalculators.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  )
}
