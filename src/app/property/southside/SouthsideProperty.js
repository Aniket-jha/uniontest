"use client"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import Banner from '@/components/property/Banner'
import { ThemeProvider } from '@material-tailwind/react'
import React, { Suspense } from 'react'
import SouthsideMainImage from "../../../asset/southsideImage/newImages/mainImage.png"
import SouthsideOneImage from "../../../asset/southsideImage/newImages/canteen.webp"
import SouthsideTwoImage from "../../../asset/southsideImage/newImages/gym-min.webp"
import SouthsideThreeImage from "../../../asset/southsideImage/newImages/Untitled design - 2024-06-07T221841.049.webp"
import SouthsideFourImage from "../../../asset/southsideImage/newImages/forth.webp"

const SouthsideProperty = () => {
    const images = [SouthsideMainImage,SouthsideOneImage,SouthsideTwoImage,SouthsideThreeImage,SouthsideFourImage]
  return (
    <div>
      <ThemeProvider>
        <NavbarTwo />
        <div className='lg:pt-[120px] pt-[60px]'>
       
       <Banner images={images} name="Southside" location="Mahalaxmi" />
       
        <Footer />
        </div>
        </ThemeProvider>
    </div>
  )
}

export default SouthsideProperty