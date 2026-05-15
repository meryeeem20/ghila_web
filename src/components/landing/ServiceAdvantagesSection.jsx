import { motion } from 'framer-motion'
import { Store, Headphones, Award } from 'lucide-react'

const cards = [
  { icon: Store, title: 'Large choix', text: 'Des centaines de restaurants et cuisines variées.' },
  { icon: Headphones, title: 'Support 24/7', text: 'Une équipe à votre écoute à tout moment.' },
  { icon: Award, title: 'Qualité garantie', text: 'Des partenaires sélectionnés pour votre plaisir.' },
]

export function ServiceAdvantagesSection() {
  return (
    <motion.section
      className="border-t border-gray-200/60 bg-white py-14 sm:py-16 lg:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-6 md:grid-cols-3 lg:gap-6 lg:px-8">
        {cards.map(({ icon: Icon, title, text }, i) => (
          <motion.div
            key={title}
            className="rounded-2xl border border-gray-200/90 bg-white p-6 shadow-soft sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: '0 16px 40px -12px rgba(6,59,45,0.12)' }}
          >
            <div className="mb-4 inline-flex rounded-xl bg-ghila-cream p-3 text-ghila-dark">
              <Icon className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold text-ghila-dark">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ghila-muted">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
