import harkMedical from '../assets/clients/hark-medical.png'
import wrenTales from '../assets/clients/wren-tales-publishing.png'
import mcdonaldUpton from '../assets/clients/mcdonald-upton.png'
import physioAdvance from '../assets/clients/physio-advance.png'
import sandz from '../assets/clients/sz-aus.png'
import aberfeldie from '../assets/clients/aberfeldie.png'
import acLandmark from '../assets/clients/a&c-landmark.png'
import afterhours from '../assets/clients/afterhours-camp.png'
import btbCapital from '../assets/clients/btb-capital.png'

type Project = {
  name: string
  description: string
  url: string
  image?: string
}

const projects: Project[] = [
  {
    name: 'A&C Landmark',
    description: 'Law firm',
    url: '#',
    image: acLandmark,
  },
  {
    name: 'Aberfeldie Sports Club',
    description: 'Community sports club',
    url: 'https://www.aberfeldiesportsclub.com.au',
    image: aberfeldie,
  },
  {
    name: 'Afterhours',
    description: 'Retreats & events',
    url: '#',
    image: afterhours,
  },
  {
    name: 'BtB Capital',
    description: 'Capital & investment',
    url: '#',
    image: btbCapital,
  },
  {
    name: 'Hark Medical',
    description: 'Medical device company website',
    url: 'https://www.harkmedical.com',
    image: harkMedical,
  },
  {
    name: 'McDonald Upton',
    description: 'Real estate agency',
    url: 'https://www.mcdonaldupton.com.au',
    image: mcdonaldUpton,
  },
  {
    name: 'Physio Advance',
    description: 'Physiotherapy practice',
    url: 'https://www.physioadvance.com.au',
    image: physioAdvance,
  },
  {
    name: 'S&Z Australia',
    description: 'Drilling & tunneling contractor',
    url: 'https://www.sandz.com.au',
    image: sandz,
  },
  {
    name: 'Wren Tales Publishing',
    description: 'Independent book publisher',
    url: 'https://www.wrentalespublishing.com.au',
    image: wrenTales,
  },
]

export default function Gallery() {
  return (
    <section id="portfolio" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Recent work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-purple/50 transition-all hover:scale-[1.02] bg-brand-dark/40"
            >
              <div className="aspect-video bg-brand-navy/60 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} website screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-brand-gray text-sm">Screenshot coming soon</span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{project.name}</h3>
                <p className="text-brand-gray text-sm mt-1">{project.description}</p>
              </div>
              <div className="absolute inset-0 bg-brand-purple/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
