export default function Services() {
  const items = [ 'SEO Services', 'Google Ads Management', 'Social Media Marketing', 'PPC Advertising', 'Lead Generation Services' ]
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Digital Marketing Services</h2>
        <div className="grid">
          {items.map((it) => (
            <div key={it} className="card">
              <h3>{it}</h3>
              <p>Professional {it} tailored for Chennai businesses.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
