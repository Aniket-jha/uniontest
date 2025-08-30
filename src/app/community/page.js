
import Head from 'next/head'
import CommunityPage from './CommunityPage'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata = {
  title: "Union Living Community, Social Events & More",
  description: "Experience a vibrant co-living community with luxury co-living spaces. Enjoy weekly events, artistic sessions, fitness activities, and much more. Live easy, live united at Union Living.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Union Living Community, Social Events & More',
    description: 'Experience a vibrant co-living community with luxury co-living spaces. Enjoy weekly events, artistic sessions, fitness activities, and much more. Live easy, live united at Union Living.',
    url: 'https://unionliving.in/community/',
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
    canonical: 'https://unionliving.in/community/',
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

const Community= () => {
  return (
    <div>
      <Head>
      <meta name="robots" content="follow, index" />
      </Head>
       
            <CommunityPage />
            <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default Community