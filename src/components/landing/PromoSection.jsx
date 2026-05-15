import { motion } from 'framer-motion'

const salad =
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=85'

export function PromoSection() {
  return (
    <motion.section
      id="offres"
      className="bg-ghila-cream px-5 pb-16 pt-2 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white p-8 shadow-card sm:p-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 lg:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-ghila-lime/10 blur-3xl" />
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="font-sans text-2xl font-extrabold leading-tight tracking-tight text-ghila-dark sm:text-3xl lg:text-4xl">
              Jusqu&apos;à <span className="text-ghila-lime">-30%</span>
              <br />
              sur vos plats préférés
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ghila-muted lg:mx-0 sm:text-base">
              Découvrez nos offres exclusives et économisez sur chaque commande.
            </p>
            <motion.button
              type="button"
              className="mt-8 rounded-full bg-ghila-lime px-8 py-3 text-sm font-bold text-ghila-dark shadow-soft transition hover:shadow-glow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Voir les offres
            </motion.button>
          </div>
          <div className="relative z-10 mx-auto mt-10 max-w-sm lg:mx-0 lg:mt-0 lg:max-w-md">
            <div className="relative">
              <img
                src={salad}
                alt=""
                className="mx-auto aspect-square max-h-72 rounded-full object-cover shadow-card sm:max-h-80"
                width={640}
                height={640}
              />
              <div className="absolute bottom-[8%] left-[6%] flex h-20 w-20 items-center justify-center rounded-full bg-ghila-dark text-lg font-extrabold text-ghila-lime shadow-lg sm:h-24 sm:w-24 sm:text-xl">
                -30%
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
