import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MapPin,
  ShoppingBag,
  Bike,
  Store,
  ClipboardList,
  ChefHat,
  Bell,
  Navigation,
  PackageCheck,
  Smartphone,
  UtensilsCrossed,
  TrendingUp,
} from 'lucide-react'
import appHome from '../../assets/ghila-app-home.png'
import appCart from '../../assets/ghila-app-cart.png'
import { PhoneFrame } from './PhoneFrame.jsx'
import { RestaurantAppScreen, DriverAppScreen } from './InterfaceScreens.jsx'

const roles = [
  {
    id: 'client',
    label: 'Client',
    tagline: 'Commandez et suivez vos repas en quelques clics',
    icon: Smartphone,
    accent: 'from-ghila-lime/20 to-transparent',
    steps: [
      {
        icon: MapPin,
        title: 'Choisissez votre adresse',
        text: 'Saisissez votre localisation pour découvrir les restaurants disponibles autour de vous.',
      },
      {
        icon: UtensilsCrossed,
        title: 'Parcourez les menus',
        text: 'Comparez les établissements, les avis et les plats avant d’ajouter au panier.',
      },
      {
        icon: ShoppingBag,
        title: 'Validez votre commande',
        text: 'Personnalisez votre panier, payez en ligne ou à la livraison en toute sécurité.',
      },
      {
        icon: Bike,
        title: 'Suivez la livraison',
        text: 'Recevez des notifications en temps réel jusqu’à l’arrivée du livreur.',
      },
    ],
    screen: 'client',
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    tagline: 'Gérez vos commandes et votre carte depuis un tableau de bord unique',
    icon: Store,
    accent: 'from-emerald-400/15 to-transparent',
    steps: [
      {
        icon: ClipboardList,
        title: 'Recevez les commandes',
        text: 'Chaque nouvelle commande apparaît instantanément avec le détail des articles et l’heure souhaitée.',
      },
      {
        icon: ChefHat,
        title: 'Préparez et mettez à jour',
        text: 'Indiquez le statut de préparation pour informer le client et le livreur en temps réel.',
      },
      {
        icon: Bell,
        title: 'Coordonnez la livraison',
        text: 'Dès que la commande est prête, un livreur Ghila est notifié pour la prise en charge.',
      },
      {
        icon: TrendingUp,
        title: 'Analysez vos performances',
        text: 'Consultez vos statistiques, notes clients et temps de préparation moyen.',
      },
    ],
    screen: 'restaurant',
  },
  {
    id: 'livreur',
    label: 'Livreur',
    tagline: 'Acceptez des courses, naviguez et livrez avec efficacité',
    icon: Bike,
    accent: 'from-sky-400/10 to-transparent',
    steps: [
      {
        icon: Navigation,
        title: 'Activez votre disponibilité',
        text: 'Passez en ligne pour recevoir les courses disponibles près de votre position.',
      },
      {
        icon: PackageCheck,
        title: 'Acceptez une livraison',
        text: 'Visualisez la distance, le restaurant et l’adresse client avant de confirmer.',
      },
      {
        icon: MapPin,
        title: 'Suivez l’itinéraire',
        text: 'Navigation intégrée avec estimation d’arrivée et suivi GPS en direct.',
      },
      {
        icon: Bike,
        title: 'Confirmez la livraison',
        text: 'Validez la remise au client et consultez vos gains sur votre historique.',
      },
    ],
    screen: 'livreur',
  },
]

function RoleScreen({ screen, stepIndex }) {
  if (screen === 'client') {
    const src = stepIndex >= 2 ? appCart : appHome
    const label =
      stepIndex >= 2
        ? 'Application Ghila — Panier client'
        : 'Application Ghila — Accueil client'
    return <PhoneFrame screenSrc={src} label={label} compact className="mx-auto w-[min(260px,72vw)]" />
  }

  if (screen === 'restaurant') {
    return (
      <PhoneFrame label="Interface restaurant Ghila" compact className="mx-auto w-[min(260px,72vw)]">
        <RestaurantAppScreen />
      </PhoneFrame>
    )
  }

  return (
    <PhoneFrame label="Interface livreur Ghila" compact className="mx-auto w-[min(260px,72vw)]">
      <DriverAppScreen />
    </PhoneFrame>
  )
}

export function HowItWorksSection() {
  const [activeId, setActiveId] = useState('client')
  const [activeStep, setActiveStep] = useState(0)
  const active = roles.find((r) => r.id === activeId) ?? roles[0]
  const ActiveIcon = active.icon

  const selectRole = (id) => {
    setActiveId(id)
    setActiveStep(0)
  }

  return (
    <motion.section
      className="relative isolate overflow-hidden bg-gradient-to-b from-ghila-cream via-white to-ghila-cream py-16 sm:py-20 lg:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-ghila-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-ghila-dark/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-ghila-lime">
            Écosystème Ghila
          </p>
          <h2 className="mt-3 font-sans text-3xl font-extrabold tracking-tight text-ghila-dark sm:text-4xl lg:text-[2.75rem]">
            Comment <span className="text-ghila-lime">ça marche</span> ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ghila-muted sm:text-lg">
            Trois interfaces pensées pour chaque acteur : commandez en tant que client, gérez votre
            restaurant ou livrez avec l’app livreur Ghila.
          </p>
        </div>

        {/* Sélecteur de rôle */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row sm:gap-4">
          {roles.map(({ id, label, icon: Icon }) => {
            const isActive = id === activeId
            return (
              <button
                key={id}
                type="button"
                onClick={() => selectRole(id)}
                className={`group relative flex flex-1 items-center justify-center gap-2.5 rounded-2xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-ghila-dark/10 bg-ghila-dark text-white shadow-card'
                    : 'border-gray-200/80 bg-white text-ghila-dark hover:border-ghila-lime/40 hover:shadow-soft'
                }`}
              >
                <Icon
                  className={`h-5 w-5 shrink-0 ${isActive ? 'text-ghila-lime' : 'text-ghila-muted group-hover:text-ghila-lime'}`}
                  strokeWidth={1.75}
                />
                {label}
                {isActive && (
                  <motion.span
                    layoutId="role-indicator"
                    className="absolute inset-0 -z-10 rounded-2xl bg-ghila-dark"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Panneau actif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 lg:mt-16"
          >
            <div className="mb-8 flex flex-col items-center gap-3 text-center lg:mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-ghila-lime/30 bg-ghila-lime/10 px-4 py-1.5">
                <ActiveIcon className="h-4 w-4 text-ghila-dark" strokeWidth={2} />
                <span className="text-xs font-bold uppercase tracking-wide text-ghila-dark">
                  Interface {active.label}
                </span>
              </div>
              <p className="max-w-xl text-lg font-medium text-ghila-dark">{active.tagline}</p>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Étapes */}
              <div className="order-2 lg:order-1">
                <ol className="space-y-3">
                  {active.steps.map(({ icon: StepIcon, title, text }, i) => {
                    const isStepActive = i === activeStep
                    return (
                      <li key={title}>
                        <button
                          type="button"
                          onClick={() => setActiveStep(i)}
                          className={`flex w-full gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                            isStepActive
                              ? 'border-ghila-lime/50 bg-white shadow-card ring-1 ring-ghila-lime/20'
                              : 'border-transparent bg-white/60 hover:border-gray-200 hover:bg-white hover:shadow-soft'
                          }`}
                        >
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                              isStepActive
                                ? 'bg-ghila-lime text-ghila-dark'
                                : 'bg-ghila-dark/5 text-ghila-dark'
                            }`}
                          >
                            <StepIcon className="h-5 w-5" strokeWidth={1.75} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className={`text-xs font-bold tabular-nums ${
                                  isStepActive ? 'text-ghila-lime' : 'text-ghila-muted'
                                }`}
                              >
                                {String(i + 1).padStart(2, '0')}
                              </span>
                              <h3 className="text-base font-bold text-ghila-dark">{title}</h3>
                            </div>
                            <p
                              className={`mt-1.5 text-sm leading-relaxed ${
                                isStepActive ? 'text-ghila-dark/80' : 'text-ghila-muted'
                              }`}
                            >
                              {text}
                            </p>
                          </div>
                        </button>
                      </li>
                    )
                  })}
                </ol>
              </div>

              {/* Visuel téléphone */}
              <div className="order-1 flex justify-center lg:order-2">
                <div className="relative">
                  <motion.div
                    className={`pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br ${active.accent} opacity-80 blur-2xl`}
                    aria-hidden
                  />
                  <div className="relative rounded-[3rem] border border-white/60 bg-gradient-to-br from-white to-ghila-cream/80 p-6 shadow-[0_24px_80px_-20px_rgba(6,59,45,0.2)] sm:p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${active.id}-${activeStep}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.35 }}
                      >
                        <RoleScreen screen={active.screen} stepIndex={activeStep} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  {/* Indicateurs d’étape */}
                  <div className="mt-6 flex justify-center gap-2">
                    {active.steps.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Étape ${i + 1}`}
                        onClick={() => setActiveStep(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          i === activeStep ? 'w-8 bg-ghila-lime' : 'w-2 bg-ghila-dark/15 hover:bg-ghila-dark/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
