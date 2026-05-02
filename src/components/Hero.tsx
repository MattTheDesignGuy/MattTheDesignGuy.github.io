export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-navy to-brand-purple opacity-90" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Modern websites,
          <br />
          <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
            built fast.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-brand-gray max-w-2xl mx-auto mb-10">
          Custom-built sites with a modern stack — better than a template, quicker than an agency.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-brand-purple/25"
        >
          Get a quote
        </a>
      </div>
    </section>
  )
}
