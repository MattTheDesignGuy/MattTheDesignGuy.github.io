const steps = [
  {
    number: '01',
    title: 'Brief',
    description: 'We talk through your business, audience, and what you need the site to do.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Concept, revisions, and sign-off before any code is written.',
  },
  {
    number: '03',
    title: 'Launch',
    description: 'Site goes live on your domain with hosting, performance, and SEO sorted.',
  },
]

export default function Process() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-navy/50 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-8 rounded-2xl border border-white/10 bg-brand-dark/50 hover:border-brand-purple/50 transition-colors"
            >
              <span className="text-5xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-brand-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
