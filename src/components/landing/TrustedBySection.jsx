import { motion } from 'framer-motion'

const brands = [
  "Little' Mama",
  'Vitamix',
  'Burger House',
  'Sushi Time',
  'Green Eat',
  'Pizza Palace',
]

export function TrustedBySection() {
  return (
    <motion.section
      className="border-t border-gray-200/60 bg-white py-12 sm:py-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-ghila-dark">Ils nous font confiance</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
          {brands.map((name) => (
            <span
              key={name}
              className="text-base font-semibold text-gray-400 opacity-80 grayscale sm:text-lg"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
