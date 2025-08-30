import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import NMIMSProperty from './MithibaiProperty'
import Head from 'next/head'

export const metadata = {
    title: "Best PG Near Mithibai College | Modern Co-Living Spaces Near Mithibai",
    description: "Find top co-living spaces and the best PG near Mithibai College with fully furnished rooms, Wi-Fi, housekeeping, and 24/7 security. Live comfortably today!",
    keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  
    openGraph: {
      title: 'Best PG Near Mithibai College | Modern Co-Living Spaces Near Mithibai',
      description: 'Find top co-living spaces and the best PG near Mithibai College with fully furnished rooms, Wi-Fi, housekeeping, and 24/7 security. Live comfortably today!',
      url: 'https://unionliving.in/property-near-mithibai/',
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
      canonical: 'https://unionliving.in/property-near-mithibai/',
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