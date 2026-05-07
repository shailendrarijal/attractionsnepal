import { Helmet } from 'react-helmet-async'

const SITE = import.meta.env.VITE_SITE_URL ?? 'https://attractionsnepal.com'
const SITE_NAME = 'AttractionsNepal'

export default function PageSeo({ title, description, image, canonicalPath }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Discover Nepal's Best Places`
  const canonical = canonicalPath ? `${SITE}${canonicalPath}` : SITE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
