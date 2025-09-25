import React from 'react'
import BalewadiProperty from './HouseofKpProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Luxury PG in Koregoan Park Pune for Male & Female | Premium Coliving PG near Koregoan Park",
  description: "Find the best PG in Koregoan Park Pune for male & female. Explore fully furnished coliving spaces with modern amenities. Ideal PG near Koregoan Park Pune for students & professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Luxury PG in Koregoan Park Pune for Male & Female | Premium Coliving PG near Koregoan Park",
  description: "Find the best PG in Koregoan Park Pune for male & female. Explore fully furnished coliving spaces with modern amenities. Ideal PG near Koregoan Park Pune for students & professionals.",
    url: 'https://unionliving.in/property/house-of-kp-koregoan-park/',
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
    canonical: 'https://unionliving.in/property/house-of-kp-koregoan-park/',
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
        <BalewadiProperty />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page