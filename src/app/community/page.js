
import CommunityPage from './CommunityPage'

export const metadata = {
  title: "Our Community - Union Living",
  description: "At Union, you stay with friends that stay for life. The Backbone of Our Coliving is Our Community and Community Events. We have the Best Community Living in Mumbai, Pune, Thane, and Navi Mumbai.",
  keywords: ['Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://unionliving.in/community'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Our Community - Union Living',
    description: 'At Union, you stay with friends that stay for life. The Backbone of Our Coliving is Our Community and Community Events. We have the Best Community Living in Mumbai, Pune, Thane, and Navi Mumbai.',
    url: 'https://unionliving.in/community',
    siteName: 'Our Community - Union Living',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FUntitled%20design%20-%202024-05-05T200534.051.png?alt=media&token=d183a637-d266-429b-b1e8-97103d46d61d', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FUntitled%20design%20-%202024-05-05T200534.051.png?alt=media&token=d183a637-d266-429b-b1e8-97103d46d61d', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '../favicon.png',
    shortcut: '../favicon.png',
    apple: '../favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '../favicon.png',
    },
  },
}

const Community= () => {
  return (
    <div>
       
            <CommunityPage />
      
    </div>
  )
}

export default Community