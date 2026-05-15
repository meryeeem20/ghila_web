import { motion } from 'framer-motion'
import { Bike, BadgePercent, ShieldCheck } from 'lucide-react'

const items = [
  {
    icon: Bike,
    title: 'Livraison rapide',
    text: 'Vos repas livrés en moins de 30 minutes.',
  },
  {
    icon: BadgePercent,
    title: 'Offres exclusives',
    text: 'Profitez chaque jour de promotions incroyables.',
  },
  {
    icon: ShieldCheck,
    title: 'Paiement sécurisé',
    text: 'Paiement en ligne ou à la livraison, 100% sécurisé.',
  },
]

export function FeaturesSection() {
  return (
    <motion.section
      className="relative overflow-hidden bg-gradient-to-br from-[#063B2D] via-[#052a22] to-[#063B2D] py-14 sm:py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(198,216,0,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-3 lg:gap-8 lg:px-8">
        {items.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_0_40px_-10px_rgba(198,216,0,0.15)] backdrop-blur-md sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            whileHover={{ y: -4, boxShadow: '0 0 32px rgba(198,216,0,0.2)' }}
          >
            <div className="mb-4 inline-flex rounded-xl bg-ghila-lime/15 p-3 text-ghila-lime">
              <Icon className="h-7 w-7" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
