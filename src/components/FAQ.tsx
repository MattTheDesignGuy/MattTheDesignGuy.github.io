import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Most sites launch within 3–6 weeks depending on scope and content readiness.',
  },
  {
    question: 'Do you handle hosting?',
    answer: "Yes — I'll set you up on a host that suits your needs and budget, or work with your existing setup.",
  },
  {
    question: 'Can I make changes after launch?',
    answer: 'Yes. I offer ongoing support packages, or one-off updates as needed.',
  },
  {
    question: 'What happens if I need a feature added later?',
    answer: 'Sites are built to grow with you. Most additions can be quoted and turned around quickly.',
  },
  {
    question: 'Do I own the website?',
    answer: 'Yes — code, content, and domain are all yours.',
  },
]

function AccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 text-brand-gray transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}
      >
        <p className="text-brand-gray">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 bg-brand-navy/50 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
