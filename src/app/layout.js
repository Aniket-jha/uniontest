import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Union Living - Live Easy, Live United",
  description: "Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.",
  keywords: ['Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://unionliving.in'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Home - Union Living',
    description: 'Experience a modern way of living in Mumbai, Pune, and Navi Mumbai with our coliving spaces! Fully furnished rooms and high-quality facilities designed for college students and office employees.',
    url: 'https://unionliving.in',
    siteName: 'Our Community - Union Living',
    images: [
      {
        url: 'https://unionliving.in/static/media/southsideCover.333f52fcee4f2a038e2e.webp', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://unionliving.in/static/media/southsideCover.333f52fcee4f2a038e2e.webp', // Must be an absolute URL
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
    icon: './favicon.png',
    shortcut: './favicon.png',
    apple: './favicon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: './favicon.png',
    },
  },
};

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
      
    </html>
  );
}
