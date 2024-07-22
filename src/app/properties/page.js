
import PropertiesPage from './Properties'

export const metadata = {
  title: "Properties - Union Living",
  description: "The Only Premium Coliving Space in Mumbai, Pune, Thane and Navi Mumbai. World Class Amenities, Community, Location and Pricing.",
  keywords: ['Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community','Coliving Space in Juhu','Coliving Space in Bandra','Coliving Space in Santacruz', 'Coliving in Baner', 'Coliving in Andheri', 'Coliving in Belapur', 'Coliving in Seawoods',],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://unionliving.in/properties'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Properties - Union Living',
    description: 'The Only Premium Coliving Space in Mumbai, Pune, Thane and Navi Mumbai. World Class Amenities, Community, Location and Pricing.',
    url: 'https://unionliving.in/properties',
    siteName: 'Properties - Union Living',
    images: [
      {
        url: 'https://unionliving.in/static/media/varsityCover.042e8f3478085bfaad6f.webp', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://unionliving.in/static/media/varsityCover.042e8f3478085bfaad6f.webp', // Must be an absolute URL
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

const Properties = () => {
  return (
   
    <PropertiesPage />
   
  )
}

export default Properties