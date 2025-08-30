
import React from 'react'
import FormPage from './FormPage'

export const metadata = {
  title: "Contact Us – Union Living | Book Your Coliving Stay Today",
  description: "Need help with bookings or inquiries? Use our contact form to connect with Union Living’s team for PG and coliving options across Mumbai  and Pune. Fully furnished PGs for students and working professionals.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Contact Us – Union Living | Book Your Coliving Stay Today',
    description: 'Need help with bookings or inquiries? Use our contact form to connect with Union Living’s team for PG and coliving options across Mumbai  and Pune. Fully furnished PGs for students and working professionals.',
    url: 'https://unionliving.in',
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
        alt: 'Luxury Coliving Spaces in Mumbai, Pune & Navi Mumbai | Best PG -  Union Living',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/',
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

const FormMain = () => {
  
  return (
    <div>
       <FormPage />
    </div>
  )
}

export default FormMain