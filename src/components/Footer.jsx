import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/jan-kalyan-samarpan.png'
import { trust } from '../data/trustData'

export default function Footer() {
  return (
    <footer className="bg-navy text-paper">
      <div className="container-shell grid gap-12 py-14 md:grid-cols-[1.3fr_.7fr_1fr] md:py-16">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full "><img src={logo} alt="" className="h-full w-full object-contain"/></span>
            <span className="font-display text-xl font-semibold">Jan Kalyan<br/>Samarpan Trust</span>
          </div>
          <p className="hindi max-w-sm text-sm leading-7 text-paper/70">{trust.tagline}</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-paper/65">Working towards public welfare through the charitable objectives set out in our trust.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.17em] text-goldLight">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-paper/75">
            <a className="hover:text-paper" href="#mission">Our mission</a>
            <a className="hover:text-paper" href="#focus">How we help</a>
            <a className="hover:text-paper" href="#donate">Donate</a>
            <a className="hover:text-paper" href="#contact">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[.17em] text-goldLight">Contact details</p>
          <div className="mt-5 flex flex-col gap-4 text-sm text-paper/75">
            <p className="flex gap-3"><MapPin className="mt-0.5 shrink-0" size={16}/>{trust.address}</p>
            {trust.phone ? <a className="flex gap-3 hover:text-paper" href={`tel:${trust.phone}`}><Phone size={16}/>{trust.phone}</a> : <p className="flex gap-3"><Phone size={16}/>Phone number to be added</p>}
            {trust.email ? <a className="flex gap-3 hover:text-paper" href={`mailto:${trust.email}`}><Mail size={16}/>{trust.email}</a> : <p className="flex gap-3"><Mail size={16}/>Email address to be added</p>}
            <a className="inline-flex items-center gap-2 text-xs font-bold text-goldLight hover:text-paper" href={`https://maps.google.com/?q=${encodeURIComponent(trust.address)}`} target="_blank" rel="noreferrer">Open location in Maps <ArrowUpRight size={13}/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-paper/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Jan Kalyan Samarpan Trust. All rights reserved.</span>
          <span className="hindi">{trust.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
