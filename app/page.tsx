import Home from "@/components/Home"

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chea Ilong',
    jobTitle: 'Software Engineer',
    description: 'Software Engineer specializing in full-stack development, React, Next.js, and modern web technologies.',
    url: 'https://chea-ilong.vercel.app',
    email: 'cheadara133@gmail.com',
    telephone: '085602418',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Phnom Penh',
      addressCountry: 'Cambodia'
    },
    sameAs: [
      'https://github.com/Chea-Ilong',
      'https://www.linkedin.com/in/chea-ilong-88bb83333/',
      'https://www.facebook.com/chea.elong.9'
    ],
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Full Stack Development',
      'Web Development'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  )
}
