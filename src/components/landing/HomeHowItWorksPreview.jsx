import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Store, ShoppingBag, Bike } from 'lucide-react'

const steps = [
  {
    n: 1,
    icon: MapPin,
    title: 'Entrez votre adresse',
    text: 'Indiquez votre localisation en quelques secondes.',
  },
  {
    n: 2,
    icon: Store,
    title: 'Choisissez un restaurant',
    text: 'Parcourez les meilleurs restaurants autour de vous.',
  },
  {
    n: 3,
    icon: ShoppingBag,
    title: 'Commandez facilement',
    text: 'Ajoutez vos plats préférés et validez votre panier.',
  },
  {
    n: 4,
    icon: Bike,
    title: 'Suivez votre commande',
    text: 'Nous livrons à votre porte en un temps record.',
  },
]

export function HomeHowItWorksPreview() {
  return (
    <motion.section
      className="bg-ghila-cream py-16 sm:py-20 lg:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-center font-sans text-3xl font-extrabold tracking-tight text-ghila-dark sm:text-4xl">
          Comment <span className="text-ghila-lime">ça marche</span> ?
        </h2>

        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden border-t-2 border-dashed border-ghila-dark/15 md:block"
            aria-hidden
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ n, icon: Icon, title, text }, i) => (
              <motion.div
                key={n}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-gray-200/80 bg-white shadow-soft">
                  <Icon className="h-7 w-7 text-ghila-dark" strokeWidth={1.6} />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-ghila-lime text-xs font-bold text-ghila-dark shadow-sm">
                    {n}
                  </span>
                </div>
                <h3 className="mt-5 text-base font-bold text-ghila-dark">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ghila-muted">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="mt-12 text-center">
          <Link
            to="/comment-ca-marche"
            className="text-sm font-semibold text-ghila-dark underline-offset-4 transition hover:text-ghila-lime hover:underline"
          >
            Découvrir les interfaces client, restaurant et livreur →
          </Link>
        </p>
      </div>
    </motion.section>
  )
}
