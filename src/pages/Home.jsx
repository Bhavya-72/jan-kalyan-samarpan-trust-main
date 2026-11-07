import { useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, HeartHandshake, Leaf, ShieldCheck, Sparkles } from 'lucide-react'
import logo from '../assets/jan-kalyan-samarpan.png'
import education from '../assets/education.png'
import healthcare from '../assets/healthcare.jpeg'
import community from '../assets/community.png'
import childWelfare from '../assets/child welfare.png'
import sanitation from '../assets/sanitation.png'
import water from '../assets/water.png'
import wallpaper from '../assets/wallpaper.png'
import skills from '../assets/skills.png'
import { trust, focusAreas } from '../data/trustData'

const highlights = [
  { icon: HeartHandshake, title: 'Care with dignity', text: 'Every person deserves support that is respectful, human and inclusive.' },
  { icon: Sparkles, title: 'Opportunity to grow', text: 'Education, skills and healthy communities can open the door to a better tomorrow.' },
  { icon: Leaf, title: 'A healthier future', text: 'We care about the people and the places that make communities thrive.' }
]

const galleryImages = [
  { image: education, alt: 'Education and learning' },
  { image: healthcare, alt: 'Healthcare and wellbeing' },
  { image: community, alt: 'Community support' },
  { image: sanitation, alt: 'Cleanliness and sanitation' },
  { image: water, alt: 'Water conservation' },
  { image: skills, alt: 'Skills and vocational learning' }
]

export default function Home() {
  const focusRail = useRef(null)
  const galleryRail = useRef(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [focusIndex, setFocusIndex] = useState(0)
  const updateFocusIndex = (event) => {
    const { scrollLeft, clientWidth } = event.currentTarget
    setFocusIndex(Math.min(3, Math.round(scrollLeft / (clientWidth * 0.88))))
  }
  const updateGalleryIndex = (event) => {
    const { scrollLeft, clientWidth } = event.currentTarget
    setGalleryIndex(Math.min(galleryImages.length - 1, Math.round(scrollLeft / (clientWidth * 0.88))))
  }

  return (
    <main>
      <section className="hero-section relative overflow-hidden" style={{ '--hero-image': `url("${wallpaper}")` }}>
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="container-shell relative grid min-h-[680px] items-center gap-14 py-20 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
          <div className="reveal relative z-10">
            <p className="eyebrow flex items-center gap-3"><span className="h-px w-8 bg-gold" /> A charitable trust</p>
            <h1 className="hero-heading display-title mt-7 max-w-3xl text-[3.55rem] text-navy sm:text-6xl lg:text-[5.75rem]">
              A little care can change a <span className="text-gold">whole future.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-muted md:text-lg">
              Jan Kalyan Samarpan Trust works towards public welfare through education, healthcare, community support and care for our shared environment.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#donate" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper transition hover:-translate-y-1 hover:bg-blue">Support the mission <ArrowUpRight size={17} /></a>
              <a href="#mission" className="rounded-full border border-line px-7 py-4 text-sm font-bold text-ink transition hover:border-gold hover:bg-cream">Discover our purpose</a>
            </div>
            <a href="#mission" className="mt-14 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[.18em] text-muted"><span className="grid h-9 w-9 place-items-center rounded-full border border-line"><ArrowDown size={15} /></span> Scroll to explore</a>
          </div>
          <div className="reveal relative mx-auto w-full max-w-[500px] [animation-delay:.15s] lg:hidden">
            <div className="hero-image-frame">
              <img src={childWelfare} alt="Children and community represented by the trust's work" />
            </div>
            <div className="hero-card absolute -bottom-7 -left-4 max-w-[245px] rounded-3xl border border-gold/25 bg-paper/95 p-5 shadow-soft backdrop-blur sm:-left-10">
              <img src={logo} alt={`${trust.name} emblem`} className="h-14 w-14 object-contain" />
              <p className="hindi mt-3 text-sm font-semibold leading-7 text-navy">{trust.tagline}</p>
            </div>
            <span className="absolute -right-4 -top-5 font-display text-8xl leading-none text-gold/25">“</span>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-cream/70 py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">Our mission</p><h2 className="display-title mt-4 text-4xl text-navy md:text-5xl">Hope begins with one caring action.</h2></div>
          <div>
            <p className="text-lg leading-9 text-muted">We believe strong communities are built when people come together with compassion, responsibility and a shared belief in possibility.</p>
            <p className="mt-5 leading-8 text-muted">Our charitable objectives span education, medical relief, sanitation, water conservation, environmental protection and assistance for people in need. The work is guided by dignity, inclusion and practical support.</p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-gold/20 bg-paper p-5"><ShieldCheck className="mt-0.5 shrink-0 text-gold" size={20} /><p className="text-sm leading-7 text-muted">We share our objectives honestly. Specific programmes and achievements will be added as they are confirmed by the trust.</p></div>
          </div>
        </div>
        <div className="container-shell mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-3xl border border-line bg-paper p-7"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-goldLight/45 text-navy"><Icon size={22} /></span><h3 className="mt-6 font-display text-2xl text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{text}</p></article>)}
        </div>
      </section>

      <section id="focus" className="container-shell py-20 md:py-28">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">How we help</p><h2 className="display-title mt-4 text-4xl text-navy md:text-5xl">Care that reaches further.</h2></div><p className="max-w-md leading-7 text-muted">Our focus areas reflect the trust's charitable objectives and the everyday foundations of a thriving community.</p></div>
        <div ref={focusRail} onScroll={updateFocusIndex} className="focus-grid hide-scrollbar mt-4 flex gap-5 overflow-x-auto pb-5 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4">
          {[focusAreas[0], focusAreas[1], focusAreas[5], focusAreas[8]].map(({ image, title, description }, index) => <article key={title} className="focus-card group min-w-[84vw] overflow-hidden rounded-3xl border border-line bg-card transition duration-300 hover:-translate-y-1 hover:shadow-soft sm:min-w-0"><div className="relative h-60 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /><span className="absolute right-4 top-4 font-display text-lg text-paper drop-shadow">{String(index + 1).padStart(2, '0')}</span></div><div className="p-7"><h3 className="font-display text-2xl text-navy">{title}</h3><p className="mt-3 text-sm leading-7 text-muted">{description}</p></div></article>)}
        </div>
        <div className="gallery-swipe-hint sm:hidden" aria-live="polite">
          {focusIndex === 0 && <span>Swipe →</span>}
          {focusIndex > 0 && focusIndex < 3 && <span>← {String(focusIndex + 1).padStart(2, '0')} →</span>}
          {focusIndex === 3 && <span>← 04 · Swipe left</span>}
        </div>
        <div className="mt-12 flex items-end justify-between gap-5">
          <div><p className="eyebrow">In the community</p><h3 className="display-title mt-3 text-3xl text-navy md:text-4xl">Small acts, lasting impact.</h3></div>
        </div>
        <div ref={galleryRail} onScroll={updateGalleryIndex} className="gallery-grid hide-scrollbar mt-7 flex gap-5 overflow-x-auto pb-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {galleryImages.map(({ image, alt }) => <img key={alt} src={image} alt={alt} className="gallery-item h-64 min-w-[84vw] rounded-3xl object-cover md:min-w-0" />)}
        </div>
        <div className="gallery-swipe-hint md:hidden" aria-live="polite">
          {galleryIndex === 0 && <span>Swipe →</span>}
          {galleryIndex > 0 && galleryIndex < galleryImages.length - 1 && <span>← {String(galleryIndex + 1).padStart(2, '0')} →</span>}
          {galleryIndex === galleryImages.length - 1 && <span>← {String(galleryImages.length).padStart(2, '0')} · Swipe left</span>}
        </div>
      </section>

      <section id="about" className="bg-navy py-20 text-paper md:py-24">
        <div className="container-shell grid gap-12 md:grid-cols-[1fr_.85fr] md:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.18em] text-goldLight">About the trust</p><h2 className="display-title mt-4 max-w-2xl text-4xl md:text-5xl">Service, commitment and a shared purpose.</h2><p className="mt-6 max-w-xl leading-8 text-paper/70">Established in 2026, Jan Kalyan Samarpan Trust is committed to contributing to public welfare across rural and urban communities.</p><a href="#donate" className="about-cta mt-8 inline-flex items-center gap-3 rounded-full bg-paper px-7 py-4 text-sm font-bold text-navy transition hover:bg-goldLight">Be part of the work <ArrowUpRight size={16} /></a></div>
          <div className="border-l border-paper/20 pl-7 md:pl-10"><p className="font-display text-5xl text-goldLight">“</p><p className="hindi text-xl leading-10 text-paper">सेवा से संस्कार और समर्पण से समाज निर्माण</p><p className="mt-6 text-sm leading-7 text-paper/60">Our name is a promise to serve with care and build with dedication.</p></div>
        </div>
      </section>

      <section id="donate" className="donate-section py-20 md:py-28">
        <div className="container-shell grid gap-12 md:grid-cols-[1fr_.85fr] md:items-center">
          <div><p className="eyebrow">Support the mission</p><h2 className="display-title mt-4 max-w-2xl text-4xl text-navy md:text-5xl">Your generosity can become someone’s next opportunity.</h2><p className="mt-6 max-w-xl leading-8 text-muted">Every contribution helps us move closer to a kinder, healthier and more hopeful future. Whether you support education, medical care or community welfare, your care matters.</p><a href={`mailto:${trust.email}?subject=Donation enquiry`} className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper transition hover:bg-blue">Donate or enquire <ArrowUpRight size={16} /></a></div>
          <div className="rounded-[32px] border border-gold/25 bg-paper p-7 shadow-soft md:p-9"><p className="text-xs font-bold uppercase tracking-[.18em] text-gold">Donation information</p><h3 className="mt-5 font-display text-3xl text-navy">Give with confidence.</h3><p className="mt-4 text-sm leading-7 text-muted">Official donation instructions and payment details are being finalized. Please contact the trust directly before making a contribution.</p><div className="mt-7 border-t border-line pt-5"><p className="text-xs font-bold uppercase tracking-widest text-muted">Donation enquiries</p><a href={`mailto:${trust.email}`} className="mt-2 block break-all font-semibold text-navy hover:text-blue">{trust.email}</a><a href={`tel:${trust.phone}`} className="mt-3 block font-semibold text-navy hover:text-blue">{trust.phone}</a></div></div>
        </div>
      </section>

      <section id="contact" className="container-shell py-20 text-center md:py-24"><p className="eyebrow">Together, we can help</p><h2 className="display-title mx-auto mt-4 max-w-2xl text-4xl text-navy md:text-5xl">Let’s build a better tomorrow.</h2><p className="mx-auto mt-5 max-w-xl leading-7 text-muted">Have a question, an idea or a wish to collaborate? We would love to hear from you.</p><a href={`mailto:${trust.email}`} className="mt-8 inline-flex items-center gap-3 rounded-full border border-navy px-7 py-4 text-sm font-bold text-navy hover:bg-navy hover:text-paper">Contact the trust <ArrowUpRight size={16} /></a></section>
    </main>
  )
}
