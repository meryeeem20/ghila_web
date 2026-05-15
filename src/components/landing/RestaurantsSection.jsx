import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'

const restaurants = [
  {
    name: 'Livraison 77',
    category: 'Multi-restaurants · Express',
    rating: '4.6',
    time: '15–25 min',
    distance: '1,0 km',
    img: 'https://images.unsplash.com/photo-1504674900240-90387a235d88?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Vitamix',
    category: 'Healthy · Bowls',
    rating: '4.5',
    time: '15–20 min',
    distance: '1,2 km',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Burger House',
    category: 'Burgers · Street food',
    rating: '4.7',
    time: '20–30 min',
    distance: '2,1 km',
    img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85',
  },
  {
    name: 'Sushi Time',
    category: 'Japonais · Sashimi',
    rating: '4.6',
    time: '25–35 min',
    distance: '3 km',
    img: 'https://images.unsplash.com/photo-1579871494447-7f965a91fe22?auto=format&fit=crop&w=900&q=85',
  },
]

export function RestaurantsSection() {
  return (
    <motion.section
      id="restaurants"
      className="bg-ghila-cream pb-16 pt-4 sm:pb-20 lg:pb-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="font-sans text-3xl font-extrabold tracking-tight text-ghila-dark sm:text-4xl">
            Restaurants <span className="text-ghila-lime">populaires</span>
          </h2>
          <motion.a
            href="#restaurants"
            className="text-sm font-semibold text-ghila-dark underline-offset-4 hover:text-ghila-lime hover:underline"
            whileHover={{ x: 3 }}
          >
            Voir tous les restaurants →
          </motion.a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {restaurants.map((r, i) => (
            <motion.article
              key={r.name}
              className="group overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-soft"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(6,59,45,0.15)' }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${r.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-lg bg-white/95 px-2.5 py-1 text-xs font-semibold text-ghila-dark shadow-sm">
                  Livraison
                </span>
                <button
                  type="button"
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-ghila-dark shadow-sm transition hover:scale-110 hover:text-red-500"
                  aria-label="Favori"
                >
                  <Heart className="h-4 w-4" strokeWidth={2} />
                </button>
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-bold text-ghila-dark">{r.name}</h3>
                <p className="mt-0.5 text-sm text-ghila-muted">{r.category}</p>
                <div className="mt-3 flex items-center justify-between text-sm font-medium text-ghila-dark">
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-ghila-lime text-ghila-lime" aria-hidden />
                    {r.rating}
                  </span>
                  <span className="text-ghila-muted">
                    {r.time} · {r.distance}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
