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
    areaServed: "CA",
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@flyrinzo.com",
      contactType: "Customer Support"
    },
    sameAs: [
      "https://www.facebook.com/share/1DKmgQi8Rz/?mibextid=wwXIfr",
      "https://www.instagram.com/useflyrinzo",
      "https://www.tiktok.com/@getflyrinzo"
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
      priceCurrency: "CAD"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "10000"
    },
    description:
      "Flyrinzo is an all-in-one Canadian AI marketing platform that combines social media scheduling, AI content creation, ready-to-use templates, analytics, and a business community to help small businesses grow."
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
