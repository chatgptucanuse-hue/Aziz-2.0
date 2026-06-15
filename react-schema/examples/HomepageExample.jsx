import Head from 'next/head'
import SchemaScripts from '../components/SchemaScripts'

// Example Next.js page demonstrating usage of SchemaScripts components.
// Place the <SchemaScripts ... /> component near the top of your page component
// so the JSON-LD scripts are rendered inside the <head> by Next.js.

export default function HomepageExample() {
  const business = {
    name: 'Thaza Digital Services',
    logo: 'https://example.com/img/logo.png',
    telephone: '+91995266673',
    email: 'chatgptucanuse@gmail.com',
    address: {
      streetAddress: 'KK Nagar',
      addressLocality: 'Chennai',
      addressRegion: 'TN',
      postalCode: '600078',
      addressCountry: 'IN',
    },
    geo: { latitude: 13.0100, longitude: 80.2090 },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '12:00' },
    ],
    areaServed: [ { '@type': 'AdministrativeArea', name: 'Chennai' }, { '@type': 'AdministrativeArea', name: 'Tamil Nadu' } ],
    sameAs: [ 'https://www.facebook.com/yourprofile', 'https://www.linkedin.com/company/yourprofile' ],
  }

  const website = {
    name: 'Thaza Digital Services',
    url: 'https://example.com',
  }

  const page = {
    title: 'Digital Marketing Agency in Chennai',
    description: 'Thaza Digital Services offers SEO, Google Ads, Social Media Marketing, PPC and Lead Generation services in Chennai.',
    url: website.url,
  }

  const services = [
    { id: `${website.url}#service-seo`, name: 'SEO Services', description: 'Technical and local SEO to improve organic rankings', areaServed: 'Chennai' },
    { id: `${website.url}#service-ads`, name: 'Google Ads Services', description: 'Search and display advertising management', areaServed: 'Chennai' },
    { id: `${website.url}#service-social`, name: 'Social Media Marketing', description: 'Paid and organic social campaigns', areaServed: 'Chennai' },
    { id: `${website.url}#service-ppc`, name: 'PPC Advertising', description: 'Pay-per-click campaign setup and management', areaServed: 'Chennai' },
    { id: `${website.url}#service-leads`, name: 'Lead Generation Services', description: 'Performance-driven lead generation', areaServed: 'Chennai' },
  ]

  const faqs = [
    { question: 'What is SEO?', answer: "SEO improves your website's visibility in search engines to increase organic traffic." },
    { question: 'How does Google Ads work?', answer: 'Google Ads places bid-based ads in search results and across the web; you pay on clicks.' },
    { question: 'How long does SEO take?', answer: 'SEO typically takes 3–6 months to show meaningful results depending on competition.' },
  ]

  const breadcrumbItems = [
    { position: 1, name: 'Home', item: website.url },
    { position: 2, name: 'Services', item: `${website.url}/services` },
    { position: 3, name: 'Contact', item: `${website.url}/contact` },
  ]

  return (
    <>
      <Head>
        <title>{page.title} — Thaza Digital Services</title>
        <meta name="description" content={page.description} />
      </Head>

      {/* Insert schema scripts in the head via the SchemaScripts component */}
      <SchemaScripts business={business} website={website} page={page} services={services} faqs={faqs} breadcrumbItems={breadcrumbItems} />

      <main>
        <h1>Digital Marketing Agency in Chennai</h1>
        <p>Example homepage content goes here.</p>
      </main>
    </>
  )
}
