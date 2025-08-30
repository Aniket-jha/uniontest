import React from 'react'
import HamletProperty from './HamletProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Best Coliving PG in Baner Pune | Premium Coliving Spaces for Male, Female and Couples",
  description: "Find the best coliving PG in Baner, Pune. Modern amenities, safe spaces for males and females. Ideal coliving spaces in Baner for students & working professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Best Coliving PG in Baner Pune | Premium Coliving Spaces for Male, Female and Couples",
  description: "Find the best coliving PG in Baner, Pune. Modern amenities, safe spaces for males and females. Ideal coliving spaces in Baner for students & working professionals.",
    url: 'https://unionliving.in/property/hamlet-coliving-baner-pune/',
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
        alt: 'hamlet',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/hamlet-coliving-baner-pune/',
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
        <HamletProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page