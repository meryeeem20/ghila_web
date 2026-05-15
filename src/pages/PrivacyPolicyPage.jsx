import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Responsable du traitement',
    paragraphs: [
      'La présente politique de confidentialité s’applique au site et à l’application Ghila, édités par Ghila.',
      'Pour toute question relative à vos données personnelles, vous pouvez nous contacter via la section Contact du site.',
    ],
  },
  {
    title: '2. Données collectées',
    paragraphs: [
      'Nous pouvons collecter les catégories de données suivantes : identité et coordonnées (nom, e-mail, téléphone), adresse de livraison, historique de commandes, données de paiement (traitées par nos prestataires sécurisés), données de navigation et d’utilisation du service, ainsi que les échanges avec notre service client.',
    ],
  },
  {
    title: '3. Finalités du traitement',
    paragraphs: [
      'Vos données sont utilisées pour : traiter et livrer vos commandes, gérer votre compte, assurer le support client, améliorer nos services, vous informer d’offres pertinentes (avec votre consentement lorsque requis), prévenir la fraude et respecter nos obligations légales.',
    ],
  },
  {
    title: '4. Base légale',
    paragraphs: [
      'Le traitement repose sur l’exécution du contrat (commande et livraison), notre intérêt légitime (sécurité, amélioration du service), le respect d’obligations légales et, le cas échéant, votre consentement (newsletters, cookies non essentiels).',
    ],
  },
  {
    title: '5. Destinataires et sous-traitants',
    paragraphs: [
      'Vos données peuvent être communiquées aux restaurants partenaires, aux livreurs, aux prestataires de paiement, d’hébergement et d’analyse, dans la stricte mesure nécessaire à la fourniture du service. Ces partenaires sont tenus à des obligations de confidentialité et de sécurité.',
    ],
  },
  {
    title: '6. Durée de conservation',
    paragraphs: [
      'Les données liées au compte et aux commandes sont conservées pendant la durée de la relation contractuelle, puis archivées conformément aux délais légaux applicables. Les données de prospection sont conservées jusqu’à retrait de votre consentement ou après une période d’inactivité définie par la réglementation.',
    ],
  },
  {
    title: '7. Vos droits',
    paragraphs: [
      'Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, d’opposition et de portabilité de vos données. Vous pouvez également retirer votre consentement à tout moment et introduire une réclamation auprès de l’autorité de protection des données compétente.',
    ],
  },
  {
    title: '8. Sécurité',
    paragraphs: [
      'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l’accès non autorisé, la perte ou l’altération.',
    ],
  },
  {
    title: '9. Cookies',
    paragraphs: [
      'Le site peut utiliser des cookies nécessaires au fonctionnement du service et, avec votre accord, des cookies de mesure d’audience. Vous pouvez gérer vos préférences via les paramètres de votre navigateur.',
    ],
  },
  {
    title: '10. Modifications',
    paragraphs: [
      'Nous pouvons mettre à jour cette politique pour refléter l’évolution de nos pratiques ou de la réglementation. La date de dernière mise à jour est indiquée ci-dessous.',
    ],
  },
]

export function PrivacyPolicyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
      <p className="text-sm font-medium text-ghila-lime">Légal</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ghila-dark sm:text-4xl">
        Politique de confidentialité
      </h1>
      <p className="mt-3 text-sm text-ghila-muted">Dernière mise à jour : mai 2026</p>

      <p className="mt-8 text-base leading-relaxed text-ghila-dark/90">
        Ghila s’engage à protéger la vie privée des utilisateurs de son site et de son application. Cette
        politique décrit comment nous collectons, utilisons et protégeons vos données personnelles.
      </p>

      <div className="mt-10 space-y-10">
        {sections.map(({ title, paragraphs }) => (
          <section key={title}>
            <h2 className="text-lg font-semibold text-ghila-dark">{title}</h2>
            {paragraphs.map((text) => (
              <p key={text.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-ghila-muted">
                {text}
              </p>
            ))}
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-ghila-muted">
        <Link to="/" className="font-medium text-ghila-dark underline-offset-2 hover:text-ghila-lime hover:underline">
          ← Retour à l&apos;accueil
        </Link>
      </p>
    </article>
  )
}
