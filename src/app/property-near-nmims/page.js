import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'
import NMIMSProperty from './NMIMSProperty'
import Head from 'next/head'

export const metadata = {
    title: "Best PG Near NMIMS Mumbai | Co- living Hostel options near Narsee Monjee Institute of Management Studies Students | Union Living",
    description: "Find the best PG near NMIMS Mumbai with fully furnished co-living spaces designed for students. Safe, modern & convenient Hostel PG in Mumbai near NMIMS. Book your stay today!",
    keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  
    openGraph: {
      title: 'Best PG Near NMIMS Mumbai | Co- living Hostel options near Narsee Monjee Institute of Management Studies Students | Union Living',
      description: 'Find the best PG near NMIMS Mumbai with fully furnished co-living spaces designed for students. Safe, modern & convenient Hostel PG in Mumbai near NMIMS. Book your stay today!',
      url: 'https://unionliving.in/property-near-nmims/',
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
      canonical: 'https://unionliving.in/property-near-nmims/',
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