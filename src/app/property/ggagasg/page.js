import React from 'react'
import BaysideProperty from './BaysideProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Comfortable Coliving Spaces for Male & Female in Navi Mumbai | PG in Seawoods - Bayside by Union Living",
  description: "Explore modern coliving spaces at Bayside by Union Living in Seawoods, Navi Mumbai. Fully furnished rooms and premium amenities for students and professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Comfortable Coliving Spaces for Male & Female in Navi Mumbai | PG in Seawoods - Bayside by Union Living",
  description: "Explore modern coliving spaces at Bayside by Union Living in Seawoods, Navi Mumbai. Fully furnished rooms and premium amenities for students and professionals.",
    url: 'https://unionliving.in/property/bayside-coliving-seawoods-navi-mumbai/',
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
    canonical: 'https://unionliving.in/property/bayside-coliving-seawoods-navi-mumbai/',
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
        <BaysideProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page