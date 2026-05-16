import { motion } from 'framer-motion'
import { Leaf } from 'lucide-react'
import heroBurger from '../../assets/hero-burger-main.png'
import appHome from '../../assets/ghila-app-home.png'
import appCart from '../../assets/ghila-app-cart.png'
import { PhoneFrame } from './PhoneFrame.jsx'

const saladImg =
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=85'

function AppStoreBtn() {
  return (
    <motion.a
      href="#app"
      className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-[0.65rem] leading-tight text-white shadow-lg transition hover:bg-neutral-800"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <svg width="20" height="24" viewBox="0 0 24 28" className="shrink-0" aria-hidden>
        <path
          fill="currentColor"
          d="M16.7 4.7c1.4 1.7 2.3 3.9 2.1 6.2-2.4-.2-4.7-1.4-6.2-3.2-1.3-1.6-2.4-4-2.1-6.2 2.5-.2 4.8 1.1 6.2 3.2zm2.8 15.1c-1.4 2.9-2.9 5.8-5.1 5.8-1.9 0-2.5-1.2-4.7-1.2-2.3 0-2.9 1.2-4.8 1.3-2.2.1-3.9-3.7-5.4-6.6C-1.2 15.4 1.4 8.6 5.6 8.5c1.8 0 3.1 1.2 4.7 1.2 1.7 0 2.7-1.2 4.8-1.2 1.7 0 3.5 1 4.8 2.8-4.2 2.3-3.5 8.3.6 9.5z"
        />
      </svg>
      <span>
        Télécharger sur le
        <span className="mt-0.5 block text-[0.95rem] font-semibold">App Store</span>
      </span>
    </motion.a>
  )
}

function PlayBtn() {
  return (
    <motion.a
      href="#app"
      className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-[0.65rem] leading-tight text-white shadow-lg transition hover:bg-neutral-800"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <svg width="20" height="22" viewBox="0 0 24 26" className="shrink-0" aria-hidden>
        <path
          fill="#3DDC84"
          d="M3 2.2v21.6L14.2 13 3 2.2zm15.6 11.1L19 11.4l-3.5 2 3.5 2 .6-.9zM14.9 9.5L4.5 1.1C4.1.8 3.6.9 3.3 1.3L14.2 13l.7-3.5zM3.3 24.7c.3.4.8.5 1.2.2l10.5-8.5-.7-3.4L3.3 24.7z"
        />
        <path fill="#FFE500" d="m19 11.4-4.3-2.5L14.2 13 19 14.7l.6-1.3z" />
        <path fill="#FF1744" d="M14.9 9.5 19 2.5c-.4-.3-1-.2-1.3.3l-3.8 6.7z" />
      </svg>
      <span>
        DISPONIBLE SUR
        <span className="mt-0.5 block text-[0.95rem] font-semibold">Google Play</span>
      </span>
    </motion.a>
  )
}

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative isolate overflow-x-clip bg-ghila-cream pb-20 pt-10 sm:pb-28 sm:pt-14 lg:min-h-[90vh] lg:pb-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-ghila-lime/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-ghila-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-32 left-1/3 h-48 w-48 rounded-[40%_60%_50%_50%] bg-ghila-lime/20 blur-2xl" />

      <div
        className="pointer-events-none absolute bottom-0 left-0 z-0 aspect-square w-[min(280px,42vw)] -translate-x-[22%] translate-y-[6%] overflow-hidden rounded-full border-4 border-white shadow-card sm:w-[min(300px,34vw)]"
        aria-hidden
      >
        <img src={saladImg} alt="" className="h-full w-full object-cover object-[58%_52%]" />
      </div>

      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 flex max-h-[min(480px,55vh)] w-[min(96vw,720px)] translate-x-[2%] translate-y-0 items-end justify-end sm:translate-x-[6%] lg:max-h-[min(520px,58vh)]"
        aria-hidden
      >
        <img
          src={heroBurger}
          alt=""
          width={900}
          height={700}
          className="h-auto max-h-[inherit] w-full max-w-none object-contain object-bottom object-right"
          loading="eager"
          decoding="async"
        />
      </div>

      <Leaf
        className="pointer-events-none absolute left-[8%] top-[18%] h-8 w-8 rotate-[-25deg] text-ghila-lime/35 lg:left-[12%]"
        strokeWidth={1.25}
        aria-hidden
      />
      <Leaf
        className="pointer-events-none absolute right-[35%] top-[22%] h-6 w-6 rotate-12 text-ghila-lime/30 max-lg:hidden"
        strokeWidth={1.25}
        aria-hidden
      />
      <Leaf
        className="pointer-events-none absolute bottom-[40%] right-[8%] h-7 w-7 -rotate-45 text-ghila-lime/25 max-md:hidden"
        strokeWidth={1.25}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:px-8">
        <motion.div
          className="relative z-20 max-w-xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-sans text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-ghila-dark">
            Vos repas préférés,
            <br />
            <span className="text-ghila-lime">livrés</span>
            <br />
            en un instant
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ghila-muted sm:text-lg">
            Ghila vous permet de commander facilement vos plats préférés parmi des centaines de
            restaurants et de vous faire livrer rapidement à domicile.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppStoreBtn />
            <PlayBtn />
          </div>
        </motion.div>

        <div className="relative z-20 mx-auto min-h-[380px] w-full max-w-lg lg:mx-0 lg:max-w-none lg:min-h-[440px]">
          <div className="relative flex items-center justify-center pt-6 lg:pr-8">
            <motion.div
              className="relative z-10 flex items-end justify-center gap-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <PhoneFrame
                  screenSrc={appCart}
                  label="Aperçu application Ghila — Panier"
                  className="relative z-10 w-[min(240px,52vw)] -rotate-6 translate-x-3 sm:w-[260px]"
                />
              </motion.div>
              <motion.div
                className="-translate-x-2 translate-y-2"
                animate={{ y: [0, -9, 0] }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.35,
                }}
              >
                <PhoneFrame
                  screenSrc={appHome}
                  label="Aperçu application Ghila — Accueil"
                  className="relative z-20 w-[min(252px,54vw)] rotate-[7deg] sm:w-[280px]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
