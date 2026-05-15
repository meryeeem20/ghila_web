const restaurantHero =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=85'
const driverHero =
  'https://images.unsplash.com/photo-1607083206869-4c7d2a23f0c1?auto=format&fit=crop&w=900&q=85'

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-10 pb-2 text-[9px] font-medium text-white/90">
      <span>9:41</span>
      <div className="flex gap-1">
        <span className="h-2 w-2.5 rounded-sm bg-white/80" />
        <span className="h-2 w-3 rounded-sm bg-white/80" />
        <span className="h-2 w-4 rounded-sm bg-white/80" />
      </div>
    </div>
  )
}

export function RestaurantAppScreen() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#052a22] to-[#063B2D] text-white">
      <StatusBar />
      <div className="relative mx-3 h-24 overflow-hidden rounded-2xl">
        <img src={restaurantHero} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#063B2D] via-[#063B2D]/40 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[10px] font-medium text-ghila-lime">Espace Pro</p>
          <p className="text-sm font-bold">Le Jardin Gourmand</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 px-3">
        {[
          ['12', 'Commandes'],
          ['4.9', 'Note'],
          ['28 min', 'Prépa moy.'],
        ].map(([val, label]) => (
          <div
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 px-2 py-2 text-center backdrop-blur-sm"
          >
            <p className="text-sm font-bold text-ghila-lime">{val}</p>
            <p className="text-[8px] text-white/65">{label}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 px-4 text-[10px] font-semibold uppercase tracking-wider text-white/50">
        En attente
      </p>
      <div className="mt-2 flex-1 space-y-2 overflow-hidden px-3 pb-4">
        {[
          { id: '#2847', items: '2× Burger · 1× Frites', time: 'À l’instant', urgent: true },
          { id: '#2846', items: 'Salade César · Jus', time: 'Il y a 3 min', urgent: false },
        ].map((order) => (
          <div
            key={order.id}
            className={`rounded-2xl border p-3 ${
              order.urgent
                ? 'border-ghila-lime/40 bg-ghila-lime/10 shadow-[0_0_24px_-6px_rgba(198,216,0,0.35)]'
                : 'border-white/10 bg-white/5'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-bold">{order.id}</p>
                <p className="mt-0.5 text-[10px] text-white/70">{order.items}</p>
                <p className="mt-1 text-[9px] text-ghila-lime">{order.time}</p>
              </div>
              {order.urgent && (
                <span className="shrink-0 rounded-full bg-ghila-lime px-2 py-0.5 text-[8px] font-bold text-ghila-dark">
                  Nouveau
                </span>
              )}
            </div>
            <div className="mt-2.5 flex gap-2">
              <button
                type="button"
                className="flex-1 rounded-lg bg-ghila-lime py-1.5 text-[10px] font-bold text-ghila-dark"
              >
                Accepter
              </button>
              <button
                type="button"
                className="rounded-lg border border-white/20 px-3 py-1.5 text-[10px] text-white/80"
              >
                Détails
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-around border-t border-white/10 bg-[#04241c]/90 px-2 py-2.5 backdrop-blur-md">
        {['Commandes', 'Menu', 'Stats', 'Profil'].map((tab, i) => (
          <span
            key={tab}
            className={`text-[9px] font-medium ${i === 0 ? 'text-ghila-lime' : 'text-white/45'}`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  )
}

export function DriverAppScreen() {
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-[#0d1110] text-white">
      <StatusBar />
      <div className="relative mx-3 mt-1 flex-1 overflow-hidden rounded-2xl border border-white/10">
        <img src={driverHero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,216,0,0.25),transparent_50%),linear-gradient(180deg,rgba(6,59,45,0.3),rgba(6,59,45,0.92))]" />
        {/* Carte stylisée */}
        <div className="absolute inset-0 opacity-30">
          <svg className="h-full w-full" aria-hidden>
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="white" strokeWidth="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute left-[22%] top-[38%] h-3 w-3 rounded-full border-2 border-white bg-ghila-lime shadow-glow" />
        <div className="absolute right-[28%] top-[52%] h-3 w-3 rounded-full border-2 border-white bg-white" />
        <svg className="absolute inset-0 h-full w-full" aria-hidden>
          <path
            d="M 70 120 Q 120 90 160 150"
            fill="none"
            stroke="#C6D800"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            opacity="0.9"
          />
        </svg>
        <div className="absolute left-3 top-3 rounded-full bg-ghila-dark/80 px-2.5 py-1 text-[9px] font-semibold text-ghila-lime backdrop-blur-sm">
          En ligne
        </div>
      </div>

      <div className="mx-3 -mt-6 relative z-10 rounded-2xl border border-ghila-lime/30 bg-[#063B2D] p-3 shadow-card">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold">Livraison #2847</p>
          <span className="rounded-full bg-ghila-lime/20 px-2 py-0.5 text-[9px] font-semibold text-ghila-lime">
            2,4 km
          </span>
        </div>
        <p className="mt-1 text-[10px] text-white/70">Le Jardin Gourmand → 12 rue des Lilas</p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-ghila-lime text-ghila-dark">
            <span className="text-[10px] font-bold">→</span>
          </div>
          <div className="flex-1">
            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[65%] rounded-full bg-ghila-lime" />
            </div>
            <p className="mt-1 text-[9px] text-white/55">Arrivée estimée · 14 min</p>
          </div>
        </div>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-ghila-lime py-2 text-[11px] font-bold text-ghila-dark"
        >
          Confirmer la prise en charge
        </button>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-1 px-3 pb-4">
        {['Disponible', 'Course', 'Historique', 'Gains'].map((tab, i) => (
          <span
            key={tab}
            className={`text-center text-[8px] font-medium ${i === 1 ? 'text-ghila-lime' : 'text-white/40'}`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  )
}
