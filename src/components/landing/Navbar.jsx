import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Logo } from './Logo.jsx'

const joinOptions = [
  {
    to: '/contact?rejoindre=magasin',
    line1: 'Rejoindre en tant que',
    line2: 'Magasin',
  },
  {
    to: '/contact?rejoindre=livreur',
    line1: 'Rejoindre en tant que',
    line2: 'Livreur',
  },
]

function JoinUsMenu({ onNavigate, variant = 'desktop', parentNavOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (variant === 'mobile' && parentNavOpen === false) {
      setMenuOpen(false)
    }
  }, [variant, parentNavOpen])

  useEffect(() => {
    function handlePointerDown(e) {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [])

  const close = () => setMenuOpen(false)
  const itemClass =
    'block w-full rounded-lg px-4 py-3 text-left transition hover:bg-gray-50 focus-visible:outline focus-visible:ring-2 focus-visible:ring-ghila-lime/40'

  const panelClass =
    variant === 'desktop'
      ? 'absolute right-0 top-[calc(100%+6px)] z-[120] min-w-[220px] rounded-xl border border-gray-200/90 bg-white py-1 shadow-lg'
      : 'absolute right-0 top-[calc(100%+6px)] z-[130] mt-0 min-w-[220px] rounded-xl border border-gray-200/90 bg-white py-1 shadow-md'

  return (
    <div
      className={
        variant === 'desktop'
          ? 'relative shrink-0'
          : 'relative ml-auto w-max max-w-full shrink-0'
      }
      ref={wrapRef}
    >
      <motion.button
        type="button"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ghila-lime px-5 py-2.5 text-sm font-bold text-ghila-dark shadow-soft transition hover:brightness-95"
        aria-expanded={menuOpen}
        aria-haspopup="menu"
        onClick={() => setMenuOpen((v) => !v)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Rejoignez-nous
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${menuOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </motion.button>
      {menuOpen ? (
        <div className={panelClass} role="menu">
          {joinOptions.map(({ to, line1, line2 }) => (
            <Link
              key={to}
              to={to}
              role="menuitem"
              className={itemClass}
              onClick={() => {
                close()
                onNavigate?.()
              }}
            >
              <span className="block text-[0.7rem] font-medium leading-tight text-gray-600">
                {line1}
              </span>
              <span className="mt-0.5 block text-sm font-semibold text-gray-900">{line2}</span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  )
}

const links = [
  { to: '/', hash: '#accueil', label: 'Accueil' },
  { to: '/comment-ca-marche', label: 'Comment ça marche' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
  { to: '/politique-confidentialite', label: 'Politique de confidentialité' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    if (!open) return
    const onResize = () => {
      if (typeof window !== 'undefined' && window.matchMedia('(min-width: 1024px)').matches) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

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
                    : label === 'Politique de confidentialité'
                      ? pathname === '/politique-confidentialite'
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
          <div className="mt-4 border-t border-gray-100 pt-4 lg:hidden">
            <JoinUsMenu
              variant="mobile"
              parentNavOpen={open}
              onNavigate={() => setOpen(false)}
            />
          </div>
        </nav>

        <div className="hidden shrink-0 lg:flex">
          <JoinUsMenu variant="desktop" />
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
