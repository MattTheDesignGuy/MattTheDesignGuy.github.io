import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      setSubmitted(true)
    } catch {
      alert('Something went wrong. Please try again or email directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Thanks!</h2>
          <p className="text-lg text-brand-gray">
            Your message has been sent. I'll be in touch soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in touch</h2>
        <form
          action="https://formspree.io/f/TODO"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/10 text-white placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/10 text-white placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="business" className="block text-sm font-medium mb-2">
              Business name
            </label>
            <input
              type="text"
              id="business"
              name="business"
              className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/10 text-white placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
              placeholder="Optional"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-brand-navy border border-white/10 text-white placeholder:text-brand-gray/50 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-y"
              placeholder="Tell me about your project"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-brand-purple/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
