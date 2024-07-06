"use client"
import HomeBanner from '@/components/Home/HomeBanner.js'
import NavbarTwo  from '../../components/Layout/Navbar.js'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import { Suspense } from 'react'
import Featured from '@/components/Home/Featured.js'
import Amenities from '@/components/Home/Amenities.js'
import Unite from '@/components/Home/Unite.js'
import LeftAndRight from '@/components/Home/LeftAndRight.js'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import Footer from '@/components/Layout/Footer.js'
const Home = () => {
  return (
    <div>
       
        <NavbarTwo />
        <div>
    <Suspense fallback={<p>Loading video...</p>}>
       <HomeBanner/>
       </Suspense>
       <Featured />
       <Amenities />
       <Unite />
       <LeftAndRight />
       <TestimonialTwo />
       <Footer />
       </div>
    </div>
  )
}

export default Home