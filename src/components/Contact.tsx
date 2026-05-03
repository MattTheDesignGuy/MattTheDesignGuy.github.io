import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('mbdwdoaq')

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 px-6 scroll-mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-block px-10 py-12 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Thanks!
            </h2>
            <p className="text-lg text-brand-gray">
              Your message has been sent. I'll be in touch soon.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get in touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot — hidden from real users */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Custom subject so emails arrive with context */}
          <input
            type="hidden"
            name="_subject"
            value="New enquiry from thedesignguy.com.au"
          />

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
            <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-sm text-red-400" />
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
            <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-sm text-red-400" />
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
            <ValidationError prefix="Business" field="business" errors={state.errors} className="mt-2 text-sm text-red-400" />
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
            <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-sm text-red-400" />
          </div>

          <ValidationError errors={state.errors} className="text-sm text-red-400" />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold rounded-full hover:scale-[1.02] transition-transform shadow-lg shadow-brand-purple/25 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? 'Sending…' : 'Send message'}
          </button>
        </form>
      </div>
    </section>
  )
}
