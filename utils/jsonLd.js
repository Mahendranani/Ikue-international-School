
export const jsonLDSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  "name": "IKUE International School & PU College",
  "alternateName": "IKUE International",
  "url": "https://ikeuinternational.in",
  "logo": "https://ikeuinternational.in/School images/Logo.webp",
  "description": "IKUE International School & PU College in Sindhanur offers ICSE education and integrated PU Science with NEET and JEE coaching. Over 15 years of academic excellence and holistic development.",
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gangavathi Road, Hosalli",
    "addressLocality": "Sindhanur",
    "addressRegion": "Karnataka",
    "postalCode": "584128",
    "addressCountry": "IN"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "15.7361462",
    "longitude": "76.7558282"
  },

  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-95132 87861",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Kannada", "Telugu", "Hindi"]
  },

  "sameAs": [
    "https://www.facebook.com/ikueInternational/",
    "https://www.instagram.com/ikue_international_school/"
  ],

  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Courses",
    "itemListElement": [
      {
        "@type": "Course",
        "name": "ICSE Primary Education"
      },
      {
        "@type": "Course",
        "name": "High School (Grade 9 & 10)"
      },
      {
        "@type": "Course",
        "name": "PU Science (PCMB & PCMC)"
      },
      {
        "@type": "Course",
        "name": "NEET Coaching"
      },
      {
        "@type": "Course",
        "name": "JEE Coaching"
      }
    ]
  }
}
