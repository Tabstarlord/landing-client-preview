export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Flyrinzo",
    legalName: "Brainleads Group Inc.",
    url: "https://www.flyrinzo.com",
    logo: "https://www.flyrinzo.com/logo.png",
    foundingDate: "2025",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressCountry: "Canada"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@flyrinzo.com",
      contactType: "Customer Support"
    },
    sameAs: [
      "https://facebook.com/flyrinzo",
      "https://linkedin.com/company/flyrinzo",
      "https://twitter.com/flyrinzo",
      "https://instagram.com/flyrinzo"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Flyrinzo AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "10000"
    },
    description:
      "AI-powered social media management for small businesses. Schedule posts, analyze performance, and grow your audience — all in one place."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Flyrinzo",
    url: "https://www.flyrinzo.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.flyrinzo.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
