import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck,
  Landmark,
  Handshake,
  Users,
  HeartHandshake
} from 'lucide-react'

const certifications = [
  {
    number: '01',
    title: '80G Approved',
    subtitle: 'Tax Exemption',
    description:
      'The trust holds approval under Section 80G of the Income Tax Act, allowing eligible donors to claim tax deductions on qualifying donations, subject to applicable conditions.',
    icon: ShieldCheck,
  },
  {
    number: '02',
    title: 'CSR Registered',
    subtitle: 'Corporate Social Responsibility',
    description:
      'Our CSR registration supports opportunities to collaborate with corporate organisations and contribute towards meaningful social welfare and development initiatives.',
    icon: FileCheck,
  },
  {
    number: '03',
    title: 'NITI Aayog',
    subtitle: 'Government of India',
    description:
      'The trust is associated with the NITI Aayog NGO Darpan framework, supporting institutional recognition and engagement with relevant government initiatives.',
    icon: Landmark,
  },
]

const commitments = [
  {
    icon: Users,
    title: 'Public Welfare',
    description:
      'Working towards the welfare and development of individuals and communities.',
  },
  {
    icon: Handshake,
    title: 'Government & Institutional Collaboration',
    description:
      'Supporting cooperation with relevant government bodies, institutions and organisations.',
  },
  {
    icon: HeartHandshake,
    title: 'Social Development',
    description:
      'Promoting education, healthcare, environmental awareness and inclusive growth.',
  },
]

export default function Certifications() {
  return (
    <main>
      <section id="certifications" className="container-shell scroll-mt-24 py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow">Recognition & registrations</p>

          <h2 className="display-title mt-4 text-4xl text-navy md:text-5xl">
            Recognised for our purpose.
            <br />
            <span className="text-gold">Committed to society.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
            Jan Kalyan Samarpan Trust believes in transparency,
            accountability and working towards the betterment of society.
            Our registrations and approvals support our commitment to
            charitable activities and public welfare.
          </p>
        </div>

        {/* Certification cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map(({ number, title, subtitle, description, icon: Icon }) => (
            <article
              key={number}
              className="group rounded-3xl border border-line bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft md:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-goldLight/50 text-navy">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <span className="font-display text-xl text-gold/70">
                  {number}
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl text-navy">
                {title}
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-[.15em] text-gold">
                {subtitle}
              </p>

              <p className="mt-5 text-sm leading-7 text-muted">
                {description}
              </p>

              <div className="mt-7 h-px w-full bg-line transition group-hover:bg-gold" />

              <div className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy">
                <ShieldCheck size={16} className="text-gold" />
                Trust credentials
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Government and social welfare */}
      <section className="bg-navy py-20 text-paper md:py-24">
        <div className="container-shell grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold">Our commitment to India</p>

            <h2 className="display-title mt-4 text-4xl md:text-5xl">
              Working together for a better tomorrow.
            </h2>

            <p className="mt-6 leading-8 text-paper/70">
              We believe that lasting social change is possible through
              collective efforts. Our trust aims to contribute towards
              national development priorities by supporting charitable
              initiatives and engaging with relevant government
              institutions, organisations and communities.
            </p>

            <p className="mt-5 leading-8 text-paper/70">
              From education and healthcare to environmental protection
              and community welfare, our purpose is to help create a
              more inclusive and empowered society.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-sm font-bold text-navy transition hover:bg-paper"
            >
              Connect with us
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-gold">
              Our guiding principle
            </p>

            <h3 className="mt-5 font-display text-3xl leading-snug md:text-4xl">
              सेवा से संस्कार और समर्पण से समाज निर्माण
            </h3>

            <p className="mt-6 text-sm leading-8 text-paper/65">
              Service with values. Dedication towards building a better
              society. Together, we can make a meaningful difference.
            </p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="font-display text-2xl text-goldLight">
                Jan Kalyan Samarpan Trust
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-paper/50">
                Service · Dedication · Development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our commitments */}
      <section className="container-shell py-20 md:py-24">
        <div className="mb-12 text-center">
          <p className="eyebrow">Beyond registrations</p>

          <h2 className="display-title mt-4 text-4xl text-navy md:text-5xl">
            Our purpose is bigger.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-muted">
            Our real commitment lies in creating opportunities and
            contributing towards the betterment of society.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {commitments.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-line bg-card p-7"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-goldLight/50 text-navy">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 font-display text-xl text-navy">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Membership */}
      <section className="bg-cream/70 py-20 md:py-24">
        <div className="container-shell">
          <div className="rounded-3xl border border-line bg-paper px-7 py-14 text-center shadow-soft md:px-16">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-goldLight/50 text-gold">
              <HeartHandshake size={28} />
            </div>

            <p className="eyebrow mt-7">Become a member</p>

            <h2 className="display-title mx-auto mt-4 max-w-2xl text-4xl text-navy md:text-5xl">
              Be a part of the change.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-muted">
              Join Jan Kalyan Samarpan Trust and become a part of our
              mission to support communities, promote social welfare
              and build a better future.
            </p>

            <a
              href="YOUR_MEMBERSHIP_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-navy px-8 py-4 text-sm font-bold text-paper transition hover:bg-blue"
            >
              Apply for Membership
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}