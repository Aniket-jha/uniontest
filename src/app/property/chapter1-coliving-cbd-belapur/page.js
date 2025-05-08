import React, { useEffect } from 'react'
import Chapter1Property from './Chapter1Property'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Prime CoLiving Spaces in CBD, Navi Mumbai | Luxury Coliving in Navi Mumbai | Chapter 1 By Union Living",
  description: "Discover luxury coliving spaces at Chapter 1 by Union Living in CBD, Navi Mumbai. Fully furnished rooms with top-notch amenities, perfect for college students and working professionals. Experience a vibrant community today!",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: "Prime CoLiving Spaces in CBD, Navi Mumbai | Luxury Coliving in Navi Mumbai | Chapter 1 By Union Living",
    description: "Discover luxury coliving spaces at Chapter 1 by Union Living in CBD, Navi Mumbai. Fully furnished rooms with top-notch amenities, perfect for college students and working professionals. Experience a vibrant community today!",
    url: 'https://unionliving.in/property/chapter1-coliving-cbd-belapur/',
    siteName: 'Union Living',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://unionliving.in/property/chapter1-coliving-cbd-belapur/',
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    apple: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    },
  },
}
useEffect(() => {
  const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?95542';
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  script.onload = () => {
    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: '#00e785',
        ctaText: 'Book Visit',
        borderRadius: '25',
        marginLeft: '0',
        marginRight: '20',
        marginBottom: '20',
        ctaIconWATI: false,
        position: 'right',
      },
      brandSetting: {
        brandName: 'Wati',
        brandSubTitle: 'undefined',
        brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
        welcomeText: 'Hi there!\nHow can I help you?',
        messageText: 'Book Visit',
        backgroundColor: '#00e785',
        ctaText: 'Book Visit',
        borderRadius: '25',
        autoShow: true,
        phoneNumber: '919137915406',
      },
    };

    window.CreateWhatsappChatWidget(options);
  };

  document.body.appendChild(script);
}, []);

const page = () => {
  return (
    <div>
      <Head>
      <meta name="robots" content="follow, index" />
      </Head>
        <Chapter1Property />
        <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page