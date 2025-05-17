"use client"
import CollegeBanner from '@/components/collegeslayout/CollegeBanner'
import CollegePropertyList from '@/components/collegeslayout/CollegePropertyList'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import HamletCoverImage from "../../asset/propertyCover/hamletCover.webp"
import HamletMainImage from "../../asset/hamletImages/mainBanner-min.webp"
import HamletOneImage from "../../asset/hamletImages/canteen-min.webp"
import HamletTwoImage from "../../asset/hamletImages/gym-min.webp"
import HamletThreeImage from "../../asset/hamletImages/terraceImage-min.webp"
import HamletFourImage from "../../asset/hamletImages/terraceImage2-min.webp"
import HamletFiveImage from "../../asset/hamletImages/comImage1.webp"
import HamletSixImage from "../../asset/hamletImages/comImage2-min.webp"
import HamletPrivate from "../../asset/hamletImages/private.webp"
import HamletTwin from "../../asset/hamletImages/twin-min.webp"
import HouseofBalewadiCover from "../../asset/houseofbalewadi/cover.webp"
import CollegeForm from '@/components/collegeslayout/CollegeForm'
import TestimonialTwo from '@/components/Home/Testimonial'

const NMIMSProperty = () => {
  const properties = [
    {
      name:"Hamlet",
      coverImage:HamletCoverImage,
      propertyDescriptionTitle:"https://www.unionliving.in/#/form",
      link:"/property/hamlet-coliving-baner-pune",
      price:"Rs. 39,999",
      images:[
          HamletMainImage,HamletOneImage,HamletTwoImage,HamletThreeImage,HamletFourImage,HamletFiveImage,HamletSixImage
      ],
      location:"Baner, Pune",
      content:"Hamlet is an exclusive concept driven home situated in the bustling and hilly area of Baner. This fully furnished space is Pune’s finest built to suit property that hosts professionals working in employment hubs like Panchshil Business Park (Phase 1 & 2) and many others at a short distance. At Hamlet, the architecture of every corner is unmatched. Along with the generous sized bedrooms and a fitness studio, the grand terrace organises activities, workshops, and other events. A luxurious experience that comforts you after a long day at work, that’s Hamlet.",
      map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15129.867506521172!2d73.7784034!3d18.5529787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff4afa8145f%3A0x6d7da05eef0c7ce1!2sHamlet%20by%20Union%20Co-%20Living!5e0!3m2!1sen!2sin!4v1685953729979!5m2!1sen!2sin",
      youtubeId:"NDidnxhwT0M",
      rooms:[
          {
              title:"Private",
              content:"Modern twin-sharing rooms in a vibrant co-living space, fostering community connections.",
              image:HamletPrivate
          },
          {
              title:"Twin",
              content:"Modern twin-sharing rooms in a vibrant co-living space, fostering community connections.",
              image:HamletTwin
          },
         
      ]
  },
  {
      name:"House of Balewadi",
      coverImage:HouseofBalewadiCover,
      link:"/property/house-of-balewadi-coliving/",
      propertyDescriptionTitle:"https://www.unionliving.in/#/form",
     
      price:"20000",
      location:"Balewadi",
      content:"A dynamic coliving space blending community, innovation, and comfort with shared amenities and modern workspaces.",
      map:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15077.883075003392!2d72.8629156!3d19.1308596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c8a38409d307a53!2sCASA%20by%20Union%20Co-Living!5e0!3m2!1sen!2sin!4v1673692237980!5m2!1sen!2sin",
      youtubeId:"sP_tmYSOWPE",
      
  },
  ]
  return (
    <ThemeProvider>
    <NavbarTwo />
    <div className='lg:pt-[150px] pt-[80px]'>
   <CollegeBanner title="NICMAR" collegeBannerBox="nicmarBannerBox" description="Explore the best properties near NICMAR— luxury co-living, student housing, and premium apartments, all in one place." />
    <CollegePropertyList properties={properties} />
    <CollegeForm />
    <TestimonialTwo />
    <Footer />
    </div>
    </ThemeProvider>
  )
}

export default NMIMSProperty