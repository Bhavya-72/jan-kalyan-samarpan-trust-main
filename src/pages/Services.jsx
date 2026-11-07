import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { focusAreas } from '../data/trustData'

export default function Services() {
  const [activeArea, setActiveArea] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  const showPreviousArea = () => setActiveArea((current) => Math.max(0, current - 1))
  const showNextArea = () => setActiveArea((current) => Math.min(focusAreas.length - 1, current + 1))

  return (
    <main>
      <PageIntro eyebrow="Our charitable objectives" title={<>Areas of work.<br/><span className="text-gold">A shared purpose.</span></>} description="The trust  sets out a range of charitable objectives focused on education, medical relief, public health, community welfare and the environment. The focus areas below are a plain-language summary of those stated objectives." />
      <section className="container-shell py-16 md:py-24">
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div><p className="eyebrow">What the trust provides for</p><h2 className="display-title mt-3 text-4xl md:text-5xl">Our focus areas.</h2></div>
          <p className="max-w-md text-sm leading-7 text-muted">These are the trust’s stated areas of charitable purpose, not a claim that each activity is currently operating.</p>
        </div>
        <div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStart === null) return
            const distance = event.changedTouches[0].clientX - touchStart
            if (Math.abs(distance) > 40) distance < 0 ? showNextArea() : showPreviousArea()
            setTouchStart(null)
          }}
        >
          {focusAreas.map(({image, title, description}, index) => (
            <article key={title} className={`${index === activeArea ? 'block' : 'hidden'} group rounded-3xl border border-line bg-card p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft sm:block md:p-7`}>
              <div className="relative h-44 overflow-hidden rounded-2xl bg-goldLight/45"><img src={image} alt={title} className="h-full w-full object-cover"/><span className="absolute right-4 top-4 font-display text-lg text-gold/80">{String(index + 1).padStart(2, '0')}</span></div>
              <h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p>
              <div className="mt-7 h-px w-full bg-line transition group-hover:bg-gold"/>
              <span className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-navy">Trust  objective</span>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-between sm:hidden">
          <button type="button" onClick={showPreviousArea} disabled={activeArea === 0} aria-label="Previous focus area" className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy disabled:opacity-30"><ArrowLeft size={17}/></button>
          <span className="text-xs font-bold tracking-[.16em] text-muted">{String(activeArea + 1).padStart(2, '0')} / {String(focusAreas.length).padStart(2, '0')}</span>
          <button type="button" onClick={showNextArea} disabled={activeArea === focusAreas.length - 1} aria-label="Next focus area" className="grid h-11 w-11 place-items-center rounded-full border border-line text-navy disabled:opacity-30"><ArrowRight size={17}/></button>
        </div>
      </section>
      <section className="bg-cream/70 py-16 md:py-20">
        <div className="container-shell grid gap-10 md:grid-cols-2 md:items-center">
          <div><p className="eyebrow">Our approach</p><h2 className="display-title mt-4 text-4xl md:text-5xl">Purpose-led and community-focused.</h2><p className="mt-5 leading-8 text-muted">The trust describes work intended to benefit people without distinction of caste, creed or colour, and includes collaboration with institutions working towards similar charitable aims.</p></div>
          <div className="space-y-5">
            {['Understand the needs of communities and the people they serve.','Support charitable initiatives and institutions aligned with the trust’s stated objectives.','Encourage access to education, health information and essential support.','Promote cleanliness, water efficiency and care for the environment.'].map((item, i) => <div key={item} className="flex gap-4 rounded-2xl border border-line bg-paper p-5"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-paper">{i+1}</span><p className="pt-1 text-sm leading-7 text-muted">{item}</p></div>)}
          </div>
        </div>
      </section>
      <section className="container-shell py-20 text-center md:py-24">
        <p className="eyebrow">Enquiries & collaboration</p><h2 className="display-title mx-auto mt-4 max-w-2xl text-4xl md:text-5xl">Would you like to know more?</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-muted">Contact the trust for information about its objectives, planned activities or possible collaboration.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper hover:bg-blue">Contact the trust <ArrowUpRight size={16}/></Link>
      </section>
    </main>
  )
}
