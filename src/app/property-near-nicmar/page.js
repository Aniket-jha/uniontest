import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import NMIMSProperty from './NicmrProperty'
import Head from 'next/head'

export const metadata = {
    title: "Best Coliving Spaces Near National Institute of Construction Management and Research | Comfortable PG Near NICMAR",
    description: "Find the best coliving spaces near NICMAR with fully-furnished rooms, high-speed Wi-Fi, housekeeping, and 24/7 security. Comfortable PG near the National Institute of Construction Management and Research.",
    keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  
    openGraph: {
      title: 'Best Coliving Spaces Near National Institute of Construction Management and Research | Comfortable PG Near NICMAR',
      description: 'Find the best coliving spaces near NICMAR with fully-furnished rooms, high-speed Wi-Fi, housekeeping, and 24/7 security. Comfortable PG near the National Institute of Construction Management and Research.',
      url: 'https://unionliving.in/property-near-nicmar/',
      siteName: 'Union Living',
      images: [
        {
          url: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
    
    },
    alternates: {
      canonical: 'https://unionliving.in/property-near-nicmar/',
    },
    
   
    icons: {
      icon: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png',
      shortcut: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png',
      apple: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png',
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://res.cloudinary.com/devjodpg7/image/upload/v1756578838/favicon_1_qv7l7r.png',
      },
    },
  }

const page = () => {
  return (
    <div>
         <Head>
    <meta name="robots" content="follow, index" />

    </Head>
        <NMIMSProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page