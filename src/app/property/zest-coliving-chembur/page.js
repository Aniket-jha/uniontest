import React from 'react'
import ZestProperty from './ZestProperty'
import Head from 'next/head'
import { GoogleAnalytics } from '@next/third-parties/google'
const page = () => {
  return (
    <div>
       <Head>
      <meta name="robots" content="follow, index" />
      </Head>
             <ZestProperty />
             <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    </div>
  )
}

export default page