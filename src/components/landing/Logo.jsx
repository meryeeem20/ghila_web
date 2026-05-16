import { Link } from 'react-router-dom'
import ghilaLogoNav from '../../assets/ghila-logo-nav.png'
import ghilaLogoFooter from '../../assets/ghila-logo-footer.png'

/**
 * Logo Ghila : version « nav » (fond clair) et version « footer » (logo plein sur fond vert).
 * @param {'dark' | 'light'} variant — `light` : logo officiel plein pour le pied de page.
 * @param {'default' | 'nav'} size — `nav` : logo plus grand (barre de navigation).
 */
export function Logo({ className = '', variant = 'dark', size = 'default' }) {
  const isLight = variant === 'light'
  const isNav = size === 'nav'

  const src = isLight ? ghilaLogoFooter : ghilaLogoNav

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
        src={src}
        alt="Ghila"
        width={w}
        height={h}
        className={`${imgClass} ${
          isLight ? 'rounded-xl shadow-lg ring-1 ring-white/15' : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </Link>
  )
}
