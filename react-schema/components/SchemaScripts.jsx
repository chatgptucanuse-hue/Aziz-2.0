import Head from 'next/head'
import PropTypes from 'prop-types'

// SchemaScripts.jsx
// Reusable React/Next.js components that insert JSON-LD schema into the <head>.
// Usage: Place <SchemaScripts {...props} /> inside your Next.js page component (inside <Head> or near top-level).
// The components accept dynamic props so you can reuse them across pages.

function JsonLd({ data }) {
  return (
    <Head>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  )
}

JsonLd.propTypes = {
  data: PropTypes.object.isRequired,
}

export function OrganizationSchema({ name, url, logo, sameAs, email }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo,
    sameAs: sameAs || [],
    email,
  }
  return <JsonLd data={data} />
}

export function LocalBusinessSchema({
  name,
  url,
  telephone,
  email,
  address,
  geo,
  openingHoursSpecification,
  areaServed,
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    url,
    telephone,
    email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress || undefined,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode || undefined,
      addressCountry: address.addressCountry || 'IN',
    },
    geo: geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: geo.latitude,
          longitude: geo.longitude,
        }
      : undefined,
    openingHoursSpecification: openingHoursSpecification || undefined,
    areaServed: areaServed || undefined,
  }
  return <JsonLd data={data} />
}

export function WebSiteSchema({ name, url, searchUrl }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${searchUrl}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
  return <JsonLd data={data} />
}

export function WebPageSchema({ name, description, url, isPartOf }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: isPartOf || undefined,
  }
  return <JsonLd data={data} />
}

export function ServiceSchema({ id, name, description, provider, areaServed }) {
  // A single Service entity. Create multiple instances for multiple services.
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': id || undefined,
    name,
    description,
    provider: provider || undefined,
    areaServed: areaServed || undefined,
  }
  return <JsonLd data={data} />
}

export function FAQSchema({ faqs = [] }) {
  // faqs: [{ question: '', answer: '' }, ...]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
  return <JsonLd data={data} />
}

export function BreadcrumbSchema({ items = [] }) {
  // items: [{ position: 1, name: 'Home', item: 'https://example.com' }, ...]
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it) => ({
      '@type': 'ListItem',
      position: it.position,
      name: it.name,
      item: it.item,
    })),
  }
  return <JsonLd data={data} />
}

export function ContactPointSchema({ telephone, contactType = 'customer support', email, availableLanguage = ['en'] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ContactPoint',
    telephone,
    contactType,
    email,
    availableLanguage,
  }
  return <JsonLd data={data} />
}

export default function SchemaScripts(props) {
  // Compose common schemas for the homepage. Place <SchemaScripts {...} /> inside your page component.
  const {
    business,
    website,
    page,
    services,
    faqs,
    breadcrumbItems,
  } = props

  return (
    <>
      <OrganizationSchema name={business.name} url={website.url} logo={business.logo} sameAs={business.sameAs} email={business.email} />
      <LocalBusinessSchema
        name={business.name}
        url={website.url}
        telephone={business.telephone}
        email={business.email}
        address={business.address}
        geo={business.geo}
        openingHoursSpecification={business.openingHoursSpecification}
        areaServed={business.areaServed}
      />
      <WebSiteSchema name={website.name} url={website.url} searchUrl={website.url + '/search'} />
      <WebPageSchema name={page.title} description={page.description} url={page.url} isPartOf={{ '@type': 'WebSite', name: website.name, url: website.url }} />
      {services.map((s) => (
        <ServiceSchema key={s.name} id={s.id} name={s.name} description={s.description} provider={{ '@type': 'LocalBusiness', name: business.name }} areaServed={s.areaServed} />
      ))}
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />
      <ContactPointSchema telephone={business.telephone} email={business.email} contactType="customer support" availableLanguage={[ 'English' ]} />
    </>
  )
}

SchemaScripts.propTypes = {
  business: PropTypes.object.isRequired,
  website: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  services: PropTypes.array,
  faqs: PropTypes.array,
  breadcrumbItems: PropTypes.array,
}

SchemaScripts.defaultProps = {
  services: [],
  faqs: [],
  breadcrumbItems: [],
}
