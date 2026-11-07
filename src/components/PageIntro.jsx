export default function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="bg-cream/70 py-16 md:py-24">
      <div className="container-shell reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-4 max-w-4xl text-5xl md:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">{description}</p>
      </div>
    </section>
  )
}
