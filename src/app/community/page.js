
import CommunityPage from './CommunityPage'

export const metadata = {
  title: "Union Living",
  description: "Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.",
  keywords: ['Union Coliving','Union Living','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  

 
  openGraph: {
    title: 'Union Living',
    description: 'Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.',
    url: 'https://unionliving.in',
    siteName: 'Union Living',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Union Living',
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Union Living',
      },
    ],
  
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    shortcut: './favicon.png',
    apple: './favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
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