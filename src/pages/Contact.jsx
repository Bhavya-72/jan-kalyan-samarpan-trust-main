import { useState } from 'react'
import { Mail, MapPin, Phone, ArrowUpRight, Send, Info } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import { trust } from '../data/trustData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('')
  const update = e => { setForm({ ...form, [e.target.name]: e.target.value }); setStatus('') }

  const submit = e => {
    e.preventDefault()
    if (!trust.email) {
      setStatus('The trust’s official email address has not yet been added. Please contact the administrator to configure the form before publishing.')
      return
    }
    const subject = encodeURIComponent(form.subject || 'Website enquiry')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\n${form.message}`)
    window.location.href = `mailto:${trust.email}?subject=${subject}&body=${body}`
    setStatus('Your email application should open with your enquiry prepared. Please send it from there.')
  }

  return (
    <main>
      <PageIntro eyebrow="Contact the trust" title={<>We welcome<br/><span className="text-gold">your enquiry.</span></>} description="For information about Jan Kalyan Samarpan Trust and its charitable objectives, use the address below or send us a message." />
      <section className="container-shell grid gap-12 py-16 md:grid-cols-[.82fr_1.18fr] md:py-24">
        <div>
          <p className="eyebrow">Find us</p><h2 className="display-title mt-3 text-3xl md:text-4xl">Get in touch.</h2>
          <p className="mt-5 text-sm leading-7 text-muted">The registered office address below is taken from the trust . A public phone number and email address were not present in the supplied documents.</p>
          <div className="mt-9 space-y-5">
            <div className="flex gap-4 rounded-2xl border border-line bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-goldLight/45 text-navy"><MapPin size={20}/></span>
              <div><span className="block text-xs font-bold uppercase tracking-widest text-muted">Registered office</span><span className="mt-2 block text-sm font-semibold leading-6">{trust.address}</span><a href={`https://maps.google.com/?q=${encodeURIComponent(trust.address)}`} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-navy">View on Google Maps <ArrowUpRight size={13}/></a></div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-line bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-goldLight/45 text-navy"><Phone size={20}/></span>
              <div><span className="block text-xs font-bold uppercase tracking-widest text-muted">Phone</span>{trust.phone ? <a href={`tel:${trust.phone}`} className="mt-2 block text-sm font-semibold">{trust.phone}</a> : <span className="mt-2 block text-sm text-muted">Official number to be added</span>}</div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-line bg-card p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-goldLight/45 text-navy"><Mail size={20}/></span>
              <div><span className="block text-xs font-bold uppercase tracking-widest text-muted">Email</span>{trust.email ? <a href={`mailto:${trust.email}`} className="mt-2 block text-sm font-semibold">{trust.email}</a> : <span className="mt-2 block text-sm text-muted">Official email to be added</span>}</div>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-line bg-card p-6 shadow-soft sm:p-9">
          <p className="eyebrow">Send a message</p><h2 className="display-title mt-3 text-3xl">How can we help?</h2>
          <form onSubmit={submit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-bold text-ink">Full name<input required name="name" value={form.name} onChange={update} placeholder="Your name" className="form-field"/></label>
              <label className="block text-xs font-bold text-ink">Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" className="form-field"/></label>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-xs font-bold text-ink">Phone number <span className="font-normal text-muted">(optional)</span><input name="phone" value={form.phone} onChange={update} placeholder="Your phone number" className="form-field"/></label>
              <label className="block text-xs font-bold text-ink">Subject<input name="subject" value={form.subject} onChange={update} placeholder="Enquiry subject" className="form-field"/></label>
            </div>
            <label className="block text-xs font-bold text-ink">Message<textarea required rows="5" name="message" value={form.message} onChange={update} placeholder="Write your message..." className="form-field resize-y"/></label>
            <button type="submit" className="inline-flex items-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-bold text-paper transition hover:bg-blue">Prepare message <Send size={15}/></button>
            {status && <p role="status" className="rounded-xl border border-gold/30 bg-goldLight/20 p-4 text-xs leading-6 text-ink">{status}</p>}
            <p className="flex gap-2 text-xs leading-5 text-muted"><Info size={15} className="mt-0.5 shrink-0"/>The form is ready for email integration. </p>
          </form>
        </div>
      </section>
    </main>
  )
}
