import icon from '../assets/White-v2-icon.svg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Faded icon on the right — desktop: aligned to the same container as the header nav */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 pointer-events-none"
      >
        <img
          src={icon}
          alt=""
          className="absolute right-6 top-1/2 -translate-y-1/2 h-[75%] w-auto max-w-[45%] opacity-20"
        />
      </div>

      {/* Mobile icon — bleeds off the right edge */}
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="md:hidden pointer-events-none select-none absolute -right-[10%] top-1/2 -translate-y-1/2 h-[110%] w-auto opacity-15"
      />

      {/* Content left-aligned, same container as header */}
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Modern websites,
            <br />
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              built fast.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-brand-gray mb-10">
            Custom-built sites with a modern stack — better than a template, quicker than an agency.
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold rounded-full hover:scale-105 transition-transform shadow-lg shadow-brand-purple/25"
          >
            Get a quote
          </a>
        </div>
      </div>
    </section>
  )
}
