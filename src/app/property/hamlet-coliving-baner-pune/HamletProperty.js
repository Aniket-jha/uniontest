"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense, useEffect } from 'react'
import SouthsideMainImage from "../../../asset/hamletImages/newImages/firstimage.webp"
import SouthsideOneImage from "../../../asset/casa/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/hamletImages/newImages/gym.webp"
import SouthsideThreeImage from "../../../asset/hamletImages/newImages/terrace.webp"
import SouthsideFourImage from "../../../asset/hamletImages/newImages/eating.webp"
import SouthsideTwinImage from "../../../asset/hamletImages/newImages/twin.webp"
import SouthsidePrivateImage from "../../../asset/hamletImages/newImages/private.webp"
import Details from '@/components/property/Details'
import Featured from '@/components/property/Featured'
import Rooms from '@/components/property/Rooms'
import WhatSection from '@/components/property/WhatSection'
import Location from '@/components/property/Location'
import Event from '@/components/property/Event'
import TestimonialTwo from '@/components/Home/Testimonial.js'
import BottomNavConstant from '@/components/property/BottomFixed'
import MainPropertyCTA from '@/components/property/MainPropertyCTA'

const HamletProperty = () => {
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
          title:"Double Sharing",
          description:"Discover the perfect balance of privacy and camaraderie in our double sharing rooms, designed for professionals looking for a welcoming and convenient living experience.",
          image:SouthsideTwinImage
        },
        {
          title:"Private Sharing",
          description:"Escape to your own private haven in our private rooms, designed for individuals who value their personal space and tranquility",
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
       <Banner galleryImages={galleryImages} name="Hamlet: Premier Coliving PG Coliving in Baner, Pune" location="Baner, Pune" images={images} />
     <Details subtitle="Where Modern Living Meets Vibrant Community Life" title="Discover Comfort and Community at Pune's Premier Coliving Space" description="Experience the perfect blend of comfort and community at Pune's premier coliving spaces in Baner. Enjoy modern amenities, vibrant social events, and a convenient location, all designed to enhance your living experience. Join us today!" />
       <Featured />
       <Rooms rooms={rooms}   />
       <WhatSection youtube="https://www.youtube.com/watch?v=NDidnxhwT0M" />
       <MainPropertyCTA propertyName="Hamlet, Baner (Pune)" />
       <Location map="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.867506521172!2d73.7784034!3d18.5529787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4afa8145f%3A0x6d7da05eef0c7ce1!2sUnion%20Hamlet!5e0!3m2!1sen!2sin!4v1712824758554!5m2!1sen!2sin" youtube="https://www.youtube.com/embed/NDidnxhwT0M" />
       <Event />
      <TestimonialTwo />
      <BottomNavConstant name="Hamlet"  price="Rs. 39,999" youtube="https://www.youtube.com/watch?v=NDidnxhwT0M&t=10s" brochure="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2FHamlet%20by%20Union%202025pdf_20250311_143325_0000.pdf?alt=media&token=b7278f35-f8ba-49d4-828b-7624fe377d50"  />
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default HamletProperty