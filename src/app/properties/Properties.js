import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import PropertiesList from '@/components/Properties/PropertiesList'
import React, { Suspense } from 'react'

const PropertiesPage = () => {
  return (
    <div>
        <NavbarTwo />
        <div className='lg:pt-[120px] pt-[60px]'>
        <div className='lg:px-12 px-4 lg:pb-12 pb-4' >
        <div className='lg:grid grid-cols-4 items-center grid-flow-col' >
            <div className='col-span-3' >
                <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Our Homes</h3>
               
            </div>
                
        </div>
    </div>
        <PropertiesList />
       
        <Footer />
        </div>
    </div>
  )
}

export default PropertiesPage