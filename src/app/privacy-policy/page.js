import React from 'react'
import PrivacyPolicyMain from './PrivacyPolicyMain'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Privacy Policy - Union Living | Protecting Your Data & Privacy",
  description: "Learn how Union Living values your privacy. Our policy outlines how we collect, use, and protect your personal data.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Privacy Policy - Union Living | Protecting Your Data & Privacy',
    description: 'Learn how Union Living values your privacy. Our policy outlines how we collect, use, and protect your personal data.',
    url: 'https://unionliving.in/privacy-policy/',
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
        alt: '',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/privacy-policy/',
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

const PrivacyPolicy = () => {
  return (
    <div>

       <PrivacyPolicyMain />
       <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default PrivacyPolicy