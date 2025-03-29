"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense } from 'react'
import MainChannelPartnerForm from './MainChannelPartnerForm'


const ChannelPartnerMain = () => {
  return (
    <div>
    <ThemeProvider>
      <NavbarTwo />
      <div className='lg:pt-[120px] pt-[60px]'>
     <MainChannelPartnerForm />
      <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default ChannelPartnerMain