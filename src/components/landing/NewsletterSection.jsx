import { Mail } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="border-t border-gray-200/80 bg-ghila-cream py-14 sm:py-16">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <div className="mx-auto inline-flex rounded-2xl bg-ghila-lime/15 p-3 text-ghila-dark">
          <Mail className="h-6 w-6" strokeWidth={1.75} aria-hidden />
        </div>
        <h2 className="mt-5 font-sans text-2xl font-extrabold tracking-tight text-ghila-dark sm:text-3xl">
          Restez informé
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ghila-muted sm:text-base">
          Recevez les nouveautés Ghila, les offres partenaires et les conseils pour profiter au mieux de la
          livraison à Agadir.
        </p>
        <form
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Adresse e-mail
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="votre@email.com"
            className="min-h-[48px] flex-1 rounded-xl border border-gray-200/90 bg-white px-4 text-sm text-ghila-dark shadow-soft outline-none ring-ghila-lime/40 placeholder:text-ghila-muted/70 focus:border-ghila-lime focus:ring-2"
          />
          <button
            type="submit"
            className="min-h-[48px] shrink-0 rounded-xl bg-ghila-lime px-6 text-sm font-bold text-ghila-dark shadow-soft transition hover:shadow-glow"
          >
            S&apos;inscrire
          </button>
        </form>
        <p className="mt-4 text-xs text-ghila-muted">
          En vous inscrivant, vous acceptez de recevoir des e-mails de Ghila. Désinscription possible à tout
          moment.
        </p>
      </div>
    </section>
  )
}
