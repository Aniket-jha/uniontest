import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Union Living Mumbai | Luxuxy Coliving in Mumbai",
  description: "Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],

  openGraph: {
    title: 'Union Living Mumbai | Luxuxy Coliving in Mumbai',
    description: 'Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.',
    url: 'https://unionliving.in',
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <link rel="icon" href="./favicon.png" sizes="any" />
      <link
  rel="apple-touch-icon"
  href="./favicon.png"
  type="image/png"
  sizes="any"
    />
      <body className={inter.className}>{children}</body>
      <GoogleTagManager gtmId="G-RZN1HJ2RWE" />
    </html>
  );
}
