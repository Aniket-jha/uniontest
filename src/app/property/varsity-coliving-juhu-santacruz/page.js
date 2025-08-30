import React from 'react'
import VarsityProperty from './VarsityProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Coliving PG in Santacruz & Luxury Coliving Spaces in Santacruz Mumbai | Varsity by Union Living",
  description: "Experience modern PG in Santacruz with vibrant coliving spaces. Ideal for students and working professionals looking for a cozy community. Book your Coliving PG today.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Coliving PG in Santacruz & Luxury Coliving Spaces in Santacruz Mumbai | Varsity by Union Living",
  description: "Experience modern PG in Santacruz with vibrant coliving spaces. Ideal for students and working professionals looking for a cozy community. Book your Coliving PG today.",
    url: 'https://unionliving.in/property/varsity-coliving-juhu-santacruz/',
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
        alt: 'Southside',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/varsity-coliving-juhu-santacruz/',
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
             <VarsityProperty />
             <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page