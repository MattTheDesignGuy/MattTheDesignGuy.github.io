import Header from './components/Header'
import Hero from './components/Hero'
import Approach from './components/Approach'
import Process from './components/Process'
import Gallery from './components/Gallery'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <div className="bg-aurora__blob bg-aurora__blob--purple" />
        <div className="bg-aurora__blob bg-aurora__blob--blue" />
        <div className="bg-aurora__blob bg-aurora__blob--cyan" />
      </div>
      <Header />
      <main>
        <Hero />
        <Approach />
        <Process />
        <Gallery />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
