import Category from '@/components/Community/Category'
import CommunityBanner from '@/components/Community/CommunityBanner'
import UpcomingEvents from '@/components/Community/UpcomingEvents'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'

const CommunityPage = () => {
  return (
    <div>
        <NavbarTwo />
        <div className='lg:pt-[120px] pt-[60px]'>
        <CommunityBanner />
      <UpcomingEvents />
       <Category />
       
        <Footer />
        </div>
    </div>
  )
}

export default CommunityPage