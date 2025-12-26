export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EngineeringFirm",
        "name": "Losos4 Consultants Ltd",
        "alternateName": "Losos4",
        "url": "https://losos4.com",
        "logo": "https://losos4.com/images/Logo.gif",
        "description": "Leading Engineering Consulting Firm in Abuja, Nigeria. Specializing in Mechanical, Electrical, Fire Engineering, and Quantity Surveying.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Suite 302, 3rd Floor, yobe Investment House, Plot 1009, Central Business District",
            "addressLocality": "Abuja",
            "addressRegion": "FCT",
            "postalCode": "900211",
            "addressCountry": "NG"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+234-803-314-4166",
            "contactType": "customer service",
            "areaServed": "NG",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://www.facebook.com/losos4",
            "https://twitter.com/losos4",
            "https://www.linkedin.com/company/losos4-consultants-ltd"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
