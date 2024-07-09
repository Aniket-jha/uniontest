import AboutBanner from '@/components/About/AboutBanner'
import Design from '@/components/About/Design'
import OurVision from '@/components/About/OurVision'
import Tech from '@/components/About/Tech'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'
import Portfolio from '@/components/About/Portfolio'
import Community from '@/components/About/Community'
import TestimonialTwo from '@/components/Home/Testimonial'
import Footer from '@/components/Layout/Footer'

const AboutPage = () => {
  return (
    <div>
      <NavbarTwo />
      <div className='lg:pt-[120px] pt-[60px]'>
        <AboutBanner />
        <OurVision />
        <Tech />
        <Design />
        <Community />
        <Portfolio />
        <TestimonialTwo />
        <Footer />
      </div>
    </div>
  )
}

export default AboutPage