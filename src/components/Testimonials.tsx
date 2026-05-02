const testimonials = [
  {
    quote: 'Testimonial coming soon.',
    name: 'Client Name',
    business: 'Business Name',
  },
  {
    quote: 'Testimonial coming soon.',
    name: 'Client Name',
    business: 'Business Name',
  },
  {
    quote: 'Testimonial coming soon.',
    name: 'Client Name',
    business: 'Business Name',
  },
]

const SHOW_TESTIMONIALS = false

export default function Testimonials() {
  if (!SHOW_TESTIMONIALS) return null

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What clients say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-white/10 bg-brand-dark/50"
            >
              <p className="text-brand-gray italic mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-brand-gray text-sm">{t.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
