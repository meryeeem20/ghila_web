/**
 * Mockup iPhone 15 Pro Max — page « Comment ça marche » uniquement.
 * Dimensionné par largeur : hauteur = ratio officiel 1290×2796 (non rogné).
 */
export function PhoneFrame15ProMax({
  screenSrc,
  label,
  children,
  className = '',
  imageClassName = 'object-contain object-center',
  titanium = 'natural',
  size = 'compact',
}) {
  const widths = { compact: 'w-[min(100%,260px)] sm:w-[260px]', medium: 'w-[min(100%,320px)] sm:w-[320px]' }
  const frameGradient = {
    natural: 'from-[#9a9894] via-[#6e6c68] to-[#454340]',
    black: 'from-[#3d3d3d] via-[#1a1a1a] to-[#0a0a0a]',
    white: 'from-[#f2f1ed] via-[#d4d2cc] to-[#a8a6a0]',
  }[titanium]

  return (
    <div
      className={`relative mx-auto select-none ${widths[size] ?? widths.compact} ${className}`.trim()}
      style={{ filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.4))' }}
    >
      {/* Châssis titane — hauteur auto via ratio écran */}
      <div
        className={`relative rounded-[3.15rem] bg-gradient-to-b ${frameGradient} p-[4px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),inset_0_-1px_0_rgba(0,0,0,0.25)]`}
      >
        <div className="rounded-[2.9rem] bg-[#1c1c1e] p-[2px]">
          <div
            className="relative w-full overflow-hidden rounded-[2.75rem] bg-[#f4f4f5]"
            style={{ aspectRatio: '1290 / 2796' }}
          >
            {children ?? (
              <img
                src={screenSrc}
                alt={label}
                className={`absolute inset-0 h-full w-full p-[2px] ${imageClassName}`}
                loading="lazy"
                decoding="async"
              />
            )}

            <div
              className="pointer-events-none absolute left-1/2 top-[1.2%] z-30 flex -translate-x-1/2 items-center justify-center rounded-full bg-black"
              style={{
                width: '28%',
                minWidth: '90px',
                maxWidth: '126px',
                height: '3.6%',
                minHeight: '28px',
                maxHeight: '36px',
                boxShadow:
                  'inset 0 1px 1px rgba(255,255,255,0.12), inset 0 -1px 2px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.5)',
              }}
              aria-hidden
            >
              <div className="h-[42%] w-[18%] min-w-[6px] rounded-full bg-[#1a1a2e]/80" />
            </div>

            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[10%] bg-gradient-to-b from-white/[0.07] to-transparent"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute bottom-[1%] left-1/2 z-20 h-[5px] w-[34%] min-w-[110px] max-w-[150px] -translate-x-1/2 rounded-full bg-white/90"
              aria-hidden
            />
          </div>
        </div>
      </div>

      {/* Bouton Action */}
      <div
        className="pointer-events-none absolute -left-[3px] top-[18%] h-[2.4rem] w-[3.5px] rounded-l-sm bg-gradient-to-r from-[#7a7874] to-[#5a5854]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[3px] top-[26%] h-[3.5rem] w-[3.5px] rounded-l-sm bg-gradient-to-r from-[#7a7874] to-[#5a5854]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-[3px] top-[34.5%] h-[3.5rem] w-[3.5px] rounded-l-sm bg-gradient-to-r from-[#7a7874] to-[#5a5854]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[3px] top-[28%] h-[5rem] w-[3.5px] rounded-r-sm bg-gradient-to-l from-[#7a7874] to-[#5a5854]"
        aria-hidden
      />
    </div>
  )
}
