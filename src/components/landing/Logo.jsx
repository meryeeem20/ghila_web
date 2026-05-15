import { Link } from 'react-router-dom'
import ghilaLogo from '../../assets/ghila-logo.png'

/**
 * Logo officiel Ghila (fichier image).
 * @param {'dark' | 'light'} variant — `light` : léger encadrement clair sur fond sombre (footer).
 * @param {'default' | 'nav'} size — `nav` : logo plus grand (barre de navigation).
 */
export function Logo({ className = '', variant = 'dark', size = 'default' }) {
  const isLight = variant === 'light'
  const isNav = size === 'nav'

  const imgClass = isNav
    ? 'h-14 w-auto max-w-[min(440px,92vw)] object-contain object-left sm:h-16 md:h-[5rem] lg:h-[5.5rem] xl:h-24'
    : 'h-8 w-auto max-w-[min(220px,48vw)] object-contain object-left sm:h-9 md:h-10'

  const { w, h } = isNav ? { w: 400, h: 115 } : { w: 180, h: 52 }

  return (
    <Link
      to="/#accueil"
      className={`inline-flex shrink-0 items-center no-underline transition-opacity hover:opacity-90 ${className}`.trim()}
    >
      <img
        src={ghilaLogo}
        alt="Ghila"
        width={w}
        height={h}
        className={`${imgClass} ${
          isLight ? 'rounded-xl bg-white/95 px-3 py-2 shadow-md ring-1 ring-white/15' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
