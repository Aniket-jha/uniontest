
import AboutPage from './AboutPage'

export const metadata = {
  title: "Our Story - Union Living",
  description: "Union is the first coliving approach based in the city of dreams, Mumbai. Coliving Spaces Located In Mumbai, Pune, Thane and Navi",
  keywords: ['Coliving in Mumbai', 'Coliving in Pune', 'Coliving in Thane','Coliving in Navi Mumbai', "Premium Co-living",'Best Coliving','Hostels in Mumbai','Hostels in Juhu','Hotels in Santacruz','Affordable Living','Community Living','Modern Coliving'],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://unionliving.in/ourstory'),
  verification: { google: "-Qqdvwt11OxvDUo_HJptghQFYevF1HJGQ8ggpmmNRE4" },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Our Story - Union Living',
    description: 'At Union, you stay with friends that stay for life. The Backbone of Our Coliving is Our Community and Community Events. We have the Best Community Living in Mumbai, Pune, Thane, and Navi Mumbai.',
    url: 'https://unionliving.in/ourstory',
    siteName: 'Our Story - Union Living',
    images: [
      {
        url: '../favicon.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: '../favicon.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '../favicon.png',
    shortcut: '../favicon.png',
    apple: '../favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '../favicon.png',
    },
  },
}
const About = () => {
  return (
    <div>
       
     
        <AboutPage />
      
    </div>
  )
}

export default About