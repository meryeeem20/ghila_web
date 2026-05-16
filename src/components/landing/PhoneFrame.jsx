/** Mockup iPhone léger — page d'accueil (hero) */
export function PhoneFrame({
  screenSrc,
  label,
  children,
  className = '',
  imageClassName = 'object-cover object-top',
  /** Limite de hauteur optionnelle ; par défaut la hauteur suit l’aspect du téléphone (pas de rognage). */
  screenMaxClassName = '',
}) {
  return (
    <div
      className={`relative rounded-[2.85rem] bg-gradient-to-b from-[#8e8c89] via-[#5c5a57] to-[#3f3d3b] p-[3px] shadow-[0_2px_0_rgba(255,255,255,0.18)_inset,0_-2px_6px_rgba(0,0,0,0.35)_inset,0_32px_64px_-12px_rgba(0,0,0,0.42)] ${className}`.trim()}
    >
      <div className="overflow-hidden rounded-[2.62rem] bg-[#0a0a0a] p-[2px] ring-1 ring-black/60">
        <div
          className={`relative aspect-[1290/2796] w-full overflow-hidden rounded-[2.48rem] bg-black ${screenMaxClassName}`.trim()}
        >
          {children ?? (
            <img
              src={screenSrc}
              alt={label}
              className={`h-full w-full ${imageClassName}`}
              loading="eager"
              decoding="async"
            />
          )}
          <div
            className="pointer-events-none absolute left-1/2 top-[11px] z-20 h-[29px] w-[min(118px,31%)] min-w-[76px] -translate-x-1/2 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.14),inset_0_-1px_2px_rgba(0,0,0,0.8),0_4px_12px_rgba(0,0,0,0.45)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-white/10 to-transparent"
            aria-hidden
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute left-[2px] top-[22%] h-10 w-[2px] rounded-full bg-gradient-to-b from-white/25 to-white/5 opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[2px] top-[32%] h-14 w-[2px] rounded-full bg-gradient-to-b from-white/20 to-white/5 opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[2px] top-[28%] h-20 w-[2px] rounded-full bg-gradient-to-b from-white/15 to-white/5 opacity-50"
        aria-hidden
      />
    </div>
  )
}
