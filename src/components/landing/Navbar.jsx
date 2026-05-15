import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Logo } from './Logo.jsx'

const links = [
  { to: '/', hash: '#accueil', label: 'Accueil' },
  { to: '/', hash: '#restaurants', label: 'Restaurants' },
  { to: '/', hash: '#offres', label: 'Offres' },
  { to: '/comment-ca-marche', label: 'Comment ça marche' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 py-4 pl-0 pr-5 sm:gap-6 sm:pl-0 sm:pr-6 lg:gap-8 lg:pl-1 lg:pr-8">
        <Logo className="-ml-2 shrink-0 sm:-ml-3 md:-ml-4 lg:-ml-5" size="nav" />

        <nav
          className={`absolute inset-x-0 top-full z-[100] flex-col gap-0.5 border-b border-gray-100 bg-white px-5 py-4 shadow-lg lg:static lg:z-auto lg:flex lg:flex-1 lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none ${
            open ? 'flex' : 'hidden lg:flex'
          }`}
        >
          {links.map(({ to, hash, label }) => {
            const href = hash ? `${to}${hash}` : to
            const isActive =
              label === 'Comment ça marche'
                ? pathname === '/comment-ca-marche'
                : label === 'À propos'
                  ? pathname === '/a-propos'
                  : label === 'Contact'
                    ? pathname === '/contact'
                    : label === 'Restaurants'
                      ? pathname === '/' && hash === '#restaurants'
                      : label === 'Offres'
                        ? pathname === '/' && hash === '#offres'
                        : pathname === '/' && (!hash || hash === '#accueil')

            return (
              <motion.div key={href} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={href}
                  className={`block rounded-lg px-3 py-2 text-center text-sm font-medium transition lg:py-1 ${
                    isActive
                      ? 'font-semibold text-ghila-accent'
                      : 'text-ghila-primary hover:text-ghila-accent'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </motion.div>
            )
          })}
          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4 lg:hidden">
            <button
              type="button"
              className="rounded-full border border-ghila-dark/15 bg-white py-2.5 text-sm font-semibold text-ghila-dark"
            >
              Se connecter
            </button>
            <button
              type="button"
              className="rounded-full bg-ghila-accent py-2.5 text-sm font-semibold text-white shadow-soft"
            >
              S&apos;inscrire
            </button>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            type="button"
            className="rounded-full border border-ghila-dark/15 bg-white px-5 py-2.5 text-sm font-semibold text-ghila-dark shadow-sm transition hover:border-ghila-accent/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Se connecter
          </motion.button>
          <motion.button
            type="button"
            className="rounded-full bg-ghila-accent px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:opacity-95"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            S&apos;inscrire
          </motion.button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-ghila-dark lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
