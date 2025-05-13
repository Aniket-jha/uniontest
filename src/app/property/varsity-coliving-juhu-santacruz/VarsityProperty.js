"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/varsityImages/newImages/mainBanner.webp"
import SouthsideOneImage from "../../../asset/varsityImages/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/varsityImages/newImages/gym-min.webp"
import SouthsideThreeImage from "../../../asset/varsityImages/newImages/Untitled design - 2024-05-31T015132.055.webp"
import SouthsideFourImage from "../../../asset/varsityImages/newImages/room.webp"
import SouthsideTwinImage from "../../../asset/varsityImages/newImages/t2.webp"
import SouthsidePrivateImage from "../../../asset/varsityImages/newImages/private-min.webp"
import Details from '@/components/property/Details'
import Featured from '@/components/property/Featured'
import Rooms from '@/components/property/Rooms'
import WhatSection from '@/components/property/WhatSection'
import Location from '@/components/property/Location'
import Event from '@/components/property/Event'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import BottomNavConstant from '@/components/property/BottomFixed'
import MainPropertyCTA from '@/components/property/MainPropertyCTA'

const VarsityProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage]
    const galleryImages=[
            
        {
            src: SouthsideMainImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideOneImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideTwoImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideThreeImage,
            width: "100%",
            height: "100%",
          },
          {
            src: SouthsideFourImage,
            width: "100%",
            height: "100%",
          },
         
]
      const rooms = [
        {
          title:"Twin",
          description:"Cozy twin room with modern amenities, perfect for sharing and fostering community connections.",
          image:SouthsideTwinImage
        },
        {
          title:"Private",
          description:"Private room with en-suite bathroom, fully furnished, high-speed Wi-Fi, and regular housekeeping.",
          image:SouthsidePrivateImage
        },
      ]
      useEffect(() => {
        const url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?95542';
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = url;
    
        script.onload = () => {
          const options = {
            enabled: true,
            chatButtonSetting: {
              backgroundColor: '#00e785',
              ctaText: 'Chat with us now',
              borderRadius: '25',
              marginLeft: '0',
              marginRight: '20',
              marginBottom: '20',
              ctaIconWATI: false,
              position: 'right',
            },
            brandSetting: {
              brandName: 'Wati',
              brandSubTitle: 'undefined',
              brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
              welcomeText: 'Hi there!\nHow can I help you?',
              messageText: 'Chat with us now',
              backgroundColor: '#00e785',
              ctaText: 'Chat with us now',
              borderRadius: '25',
              autoShow: true,
              phoneNumber: '919137915406',
            },
          };
    
          window.CreateWhatsappChatWidget(options);
        };
    
        document.body.appendChild(script);
      }, []);
      
  return (
    <div>
    <ThemeProvider>
      <NavbarTwo />
      <div className='lg:pt-[150px] pt-[80px]'>
     <Banner galleryImages={galleryImages} name="Varsity: Best Coliving PG in Santacruz, Mumbai" location="Juhu / Santacruz" images={images} />
   <Details  subtitle="The Student Social Club" title="At the Junction of Bandra and Juhu, live the Best of Both Worlds." description="Varsity is located in the heart of Mumbai’s most demanding and posh area. Varsity is the perfect solution for students and also for those looking for a co-living space in Mumbai that combines comfort, convenience, and a sense of community. Located in the bustling city of Mumbai, Varsity offers a variety of shared and private spaces that cater to all your needs." />
     <Featured />
     <Rooms rooms={rooms} brochure="https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/Varsity%20by%20Union%202025%20(1).pdf?alt=media&token=80771480-c68f-40fe-8379-48179411cb8d" />
     <WhatSection youtube="https://www.youtube.com/watch?v=3euMGmLNcIc&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title"  />
     <MainPropertyCTA propertyName="Varsity, Juhu (Mumbai)" />
     <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15081.696760186362!2d72.8341302!3d19.0890381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e0!3m2!1sen!2sin!4v1709842768484!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/3euMGmLNcIc?si=M9WkQOg-IuWIyGVS" />
     <Event />
    <TestimonialTwo />
    <BottomNavConstant name="Varsity"  price="Rs. 45,000" youtube="https://www.youtube.com/watch?v=3euMGmLNcIc&embeds_referring_euri=http%3A%2F%2Flocalhost%3A3000%2F&source_ve_path=MjM4NTE&feature=emb_title" brochure="https://firebasestorage.googleapis.com/v0/b/grc-logistics.appspot.com/o/Varsity%20by%20Union%202025%20(1).pdf?alt=media&token=80771480-c68f-40fe-8379-48179411cb8d"  />
      <Footer />
      </div>
      </ThemeProvider>
  </div>
  )
}

export default VarsityProperty