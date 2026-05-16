import { useEffect } from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import heroBurger from '../assets/hero-burger-main.png'
import partnerIllustration from '../assets/partner-cta-illustration.png'

const contactItems = [
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Technopark Agadir, quartier Tilila, 80000 Agadir, Maroc',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+212 6 12 34 56 78',
    href: 'tel:+212612345678',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@ghila.ma',
    href: 'mailto:contact@ghila.ma',
  },
  {
    icon: Clock,
    label: 'Horaires',
    value: 'Lundi - Dimanche : 09:00 - 22:00',
  },
]

const sujetOptions = [
  { value: 'commande', label: 'Commande et livraison' },
  { value: 'partenariat', label: 'Partenariat restaurant' },
  { value: 'support', label: 'Support technique' },
  { value: 'autre', label: 'Autre' },
]

const labelClass = 'text-xs font-medium text-gray-500'
const inputClass =
  'mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-ghila-dark outline-none transition placeholder:text-gray-400 focus:border-ghila-lime focus:ring-2 focus:ring-ghila-lime/20'

function IconCircle({ children }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ghila-dark text-white">
      {children}
    </span>
  )
}

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-white">
      {/* Bloc hero + contact : chevauchement carte formulaire comme sur la maquette */}
      <div className="relative bg-ghila-cream">
        <section className="relative isolate overflow-x-clip border-b border-gray-200/50 bg-ghila-cream">
          <div className="relative mx-auto min-h-[300px] w-full pb-10 pt-10 sm:min-h-[320px] sm:pb-12 sm:pt-12 lg:min-h-[min(460px,56vh)] lg:pb-16 lg:pt-14">
            {/* Texte : centre du viewport (milieu de la page) */}
            <div className="relative z-30 mx-auto max-w-xl px-5 text-center sm:px-6 lg:absolute lg:left-1/2 lg:top-1/2 lg:mx-0 lg:w-[min(100%,36rem)] lg:-translate-y-1/2 lg:translate-x-[calc(-50%-2cm)] lg:px-8">
              <div className="rounded-2xl bg-ghila-cream/90 px-4 py-3 shadow-sm ring-1 ring-ghila-dark/5 backdrop-blur-[2px] sm:px-5 sm:py-4 lg:bg-ghila-cream/85">
                <h1 className="font-sans text-[clamp(2.1rem,5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-ghila-dark">
                  Contactez-
                  <span className="text-ghila-lime">nous</span>
                </h1>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ghila-muted sm:mt-5 sm:text-lg">
                  Une question, une suggestion ou un besoin d&apos;aide ? Notre équipe est là pour vous accompagner.
                </p>
              </div>
            </div>

            {/* Burger : bord droit de la page */}
            <div className="relative z-10 mt-10 flex justify-end pr-0 sm:mt-12 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:items-center lg:pl-8">
              <img
                src={heroBurger}
                alt=""
                className="h-auto max-h-[min(340px,48vh)] w-auto max-w-[min(100%,320px)] object-contain object-right object-bottom drop-shadow-[0_16px_40px_rgba(6,59,45,0.12)] sm:max-h-[min(400px,52vh)] sm:max-w-[min(100%,400px)] lg:max-h-[min(520px,58vh)] lg:max-w-[min(92vw,720px)]"
                width={800}
                height={800}
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Fond blanc ; carte formulaire remonte sous le hero */}
        <section className="relative z-20 bg-white pb-14 pt-2 sm:pb-16 sm:pt-0 lg:pb-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
              <div className="space-y-8 pt-4 sm:pt-6 lg:max-w-md lg:pt-2">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <IconCircle>
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </IconCircle>
                    <div>
                      <p className="text-base font-bold text-ghila-dark">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block text-sm leading-relaxed text-ghila-muted transition hover:text-ghila-dark"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-relaxed text-ghila-muted">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative lg:-mt-[7.5rem] xl:-mt-[8.5rem]">
                <div className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-[0_24px_70px_-20px_rgba(6,59,45,0.14)] sm:p-8 lg:p-9">
                  <h2 className="text-xl font-extrabold tracking-tight text-ghila-dark sm:text-2xl">
                    Envoyez-nous un message
                  </h2>
                  <form
                    className="mt-7 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contact-name" className={labelClass}>
                          Nom complet
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Votre nom"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="Votre email"
                          autoComplete="email"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className={labelClass}>
                        Sujet
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        defaultValue=""
                        className={`${inputClass} cursor-pointer appearance-none`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                        }}
                      >
                        <option value="" disabled hidden>
                          Choisissez un sujet
                        </option>
                        {sujetOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        placeholder="Votre message"
                        className={inputClass}
                      />
                    </div>
                    <button
                      type="submit"
                      className="mt-1 w-full rounded-xl bg-ghila-lime py-3.5 text-sm font-bold text-white shadow-lg transition hover:brightness-95"
                    >
                      Envoyer le message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Carte */}
      <section className="relative w-full bg-white">
        <div className="relative mx-auto h-[300px] w-full max-w-[1920px] sm:h-[360px] lg:h-[420px]">
          <iframe
            title="Carte — Technopark Agadir"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-9.54%2C30.39%2C-9.51%2C30.41&amp;layer=mapnik&amp;marker=30.403174%2C-9.5285335"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/35 via-transparent to-transparent" />

          <div className="pointer-events-none absolute left-4 top-1/2 z-10 w-[calc(100%-2rem)] max-w-[280px] -translate-y-1/2 sm:left-8 sm:w-auto lg:left-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))] lg:max-w-[300px]">
            <div className="pointer-events-auto rounded-2xl border border-gray-200/90 bg-white p-5 shadow-card sm:p-6">
              <h3 className="text-base font-extrabold text-ghila-dark sm:text-lg">Notre emplacement</h3>
              <p className="mt-2 text-sm leading-relaxed text-ghila-muted">
                Retrouvez-nous au Technopark Agadir (Tilila). Nous sommes ravis de vous accueillir !
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Technopark+Agadir%2C+Agadir%2C+Maroc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-full bg-ghila-lime px-5 py-2.5 text-xs font-bold text-white shadow-md transition hover:brightness-95 sm:text-sm"
              >
                Voir sur la carte
              </a>
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2">
            <MapPin
              className="h-14 w-14 text-ghila-lime drop-shadow-[0_4px_12px_rgba(0,0,0,0.22)] sm:h-16 sm:w-16"
              strokeWidth={2.25}
              aria-hidden
            />
          </div>
        </div>
      </section>

      {/* CTA partenaires — bannière type maquette : fond vert profond, texte à gauche, illustration à droite */}
      <section className="bg-ghila-cream px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0a281f] shadow-[0_24px_70px_-20px_rgba(0,0,0,0.35)] ring-1 ring-black/10">
          <div className="grid items-center gap-10 p-8 sm:p-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:items-center lg:gap-12 lg:p-12 lg:pl-14 lg:pr-10 xl:gap-16 xl:p-14 xl:pl-16">
            <div className="max-w-xl text-left">
              <h2 className="font-sans text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                Rejoignez l&apos;aventure Ghila
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white sm:text-base">
                Vous êtes un restaurant et souhaitez rejoindre notre plateforme ? Contactez-nous dès maintenant.
              </p>
              <a
                href="mailto:contact@ghila.ma?subject=Partenariat%20restaurant"
                className="mt-8 inline-flex rounded-xl bg-ghila-lime px-7 py-3 text-sm font-bold text-white shadow-md transition hover:brightness-95 sm:px-8 sm:py-3.5"
              >
                Devenir partenaire
              </a>
            </div>
            <div className="flex min-h-[200px] items-center justify-center lg:min-h-0 lg:justify-end">
              <img
                src={partnerIllustration}
                alt="Livreur Ghila — devenir partenaire restaurant"
                className="h-auto w-full max-w-[min(100%,340px)] object-contain object-center mix-blend-multiply sm:max-w-[min(100%,400px)] lg:max-h-[min(360px,44vh)] lg:max-w-[min(100%,520px)] lg:object-right"
                width={900}
                height={500}
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
