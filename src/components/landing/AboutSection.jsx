import { Link } from 'react-router-dom'
import {
  MapPin,
  Bike,
  Wallet,
  Gift,
  Users,
  Leaf,
  Zap,
  ArrowRight,
} from 'lucide-react'
import appHome from '../../assets/ghila-app-home.png'
import { PhoneFrame } from './PhoneFrame.jsx'
import { NewsletterSection } from './NewsletterSection.jsx'

const stats = [
  { value: 'Agadir', label: 'Ville de lancement' },
  { value: '30 min', label: 'Livraison moyenne' },
  { value: '3 apps', label: 'Client · Resto · Livreur' },
  { value: '24/7', label: 'Support disponible' },
]

const services = [
  {
    icon: MapPin,
    title: 'Restaurants locaux',
    text: 'Les meilleurs établissements d’Agadir et alentours, à portée de main.',
  },
  {
    icon: Bike,
    title: 'Suivi en direct',
    text: 'Suivez votre livreur en temps réel, de la cuisine à votre porte.',
  },
  {
    icon: Wallet,
    title: 'Paiement flexible',
    text: 'Payez en espèces à la livraison ou en ligne, en toute sécurité.',
  },
  {
    icon: Gift,
    title: 'Fidélité & parrainage',
    text: 'Gagnez des récompenses à chaque commande et parrainez vos proches.',
  },
]

const pillars = [
  {
    icon: Users,
    title: 'Communauté',
    text: 'Nous soutenons les commerces locaux et créons des emplois pour les livreurs à Agadir.',
  },
  {
    icon: Zap,
    title: 'Rapidité',
    text: 'Commande fluide, préparation optimisée et livraison dans les meilleurs délais.',
  },
  {
    icon: Leaf,
    title: 'Impact local',
    text: 'Une livraison responsable, au service des habitants et visiteurs de la région.',
  },
]

export function AboutSection() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate bg-ghila-cream pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-ghila-lime/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-ghila-lime/40 bg-ghila-lime/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ghila-dark">
              <MapPin className="h-3.5 w-3.5 text-ghila-lime" />
              Agadir, Maroc
            </span>
            <h1 className="mt-6 font-sans text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-ghila-dark">
              La livraison locale,{' '}
              <span className="text-ghila-lime">réinventée</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ghila-muted sm:text-lg">
              Ghila connecte les habitants et visiteurs d&apos;Agadir aux restaurants partenaires.
              Commandez, suivez, savourez — simplement.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-gray-200/80 bg-white p-4 text-center shadow-soft sm:p-5"
              >
                <p className="text-lg font-extrabold text-ghila-dark sm:text-xl">{value}</p>
                <p className="mt-1 text-[0.7rem] font-medium text-ghila-muted sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-ghila-lime">
                Qui sommes-nous
              </p>
              <h2 className="mt-3 text-2xl font-extrabold text-ghila-dark sm:text-3xl">
                L&apos;app de livraison faite pour Agadir
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ghila-muted">
                Ghila est l&apos;application de livraison à Agadir et alentours. Nous rapprochons
                les meilleurs restaurants de votre quotidien avec une expérience pensée pour la
                région Souss-Massa.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ghila-muted">
                Notre mission : rendre la livraison locale{' '}
                <strong className="font-semibold text-ghila-dark">simple, rapide et fiable</strong>{' '}
                pour les habitants et visiteurs d&apos;Agadir.
              </p>
              <Link
                to="/comment-ca-marche"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ghila-lime px-6 py-3 text-sm font-bold text-ghila-dark shadow-soft transition hover:shadow-glow"
              >
                Comment ça marche
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhoneFrame
                screenSrc={appHome}
                label="Application Ghila"
                compact
                className="w-[min(260px,72vw)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ghila-cream py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-ghila-lime">
              Nos services
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-ghila-dark sm:text-3xl">
              Tout ce dont vous avez besoin
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {services.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-soft"
              >
                <div className="mb-4 inline-flex rounded-xl bg-ghila-lime/15 p-3 text-ghila-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-ghila-dark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ghila-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#063B2D] via-[#052a22] to-[#063B2D] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Plus qu&apos;une app, un <span className="text-ghila-lime">écosystème</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
              Client, restaurant ou livreur — Ghila offre une interface dédiée à chaque acteur.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md sm:p-8"
              >
                <Icon className="h-7 w-7 text-ghila-lime" strokeWidth={1.75} />
                <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 text-center">
        <Link
          to="/contact"
          className="text-sm font-semibold text-ghila-dark hover:text-ghila-lime hover:underline"
        >
          Nous contacter →
        </Link>
        <p className="mt-6">
          <Link to="/" className="text-sm text-ghila-muted hover:text-ghila-dark hover:underline">
            ← Retour à l&apos;accueil
          </Link>
        </p>
      </section>

      <NewsletterSection />
    </div>
  )
}
