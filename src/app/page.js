
import LeadSquaredTracker from "@/components/Layout/LeadSquareTracker";
import Home from "./pages/Home";
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
export const metadata = {
  title: "Luxury Coliving Spaces in Mumbai | Best PG -  Union Living",
  description: "Experience the best coliving spaces in Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Luxury Coliving Spaces in Mumbai | Best PG -  Union Living',
    description: 'Experience the best coliving spaces in Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).',
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
        alt: 'Luxury Coliving Spaces in Mumbai | Best PG -  Union Living',
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
export default function Main() {


     
  
  return (
    <main className="">
       
     <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    <Home />
   
    </main>
  );
}
