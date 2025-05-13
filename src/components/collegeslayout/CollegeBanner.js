import React from 'react'
import "./college.css"
const CollegeBanner = () => {
  return (
    <div  className='collegeBannerBox flex items-center justify-start mx-4 my-3 lg:mx-12 lg:my-6 rounded-lg' >
        <div className='flex items-start px-6 py-4 justify-end  flex-col'>

       
        <p className='text-[#e3e3e3]  font-[NeueRegular] text-[1rem] lg:text-[2rem]' >Showing Properties Near</p>
        <h1 className='text-[#ffffff] font-[NeueBold] text-[2.5rem] lg:text-[3.5rem]'>NMIMS</h1>
        <p className='text-[#e3e3e3]  font-[NeueRegular] text-[.8rem] lg:text-[1.2rem]'>Explore the best properties near NMIMS— luxury co-living, student housing, <br className='hidden lg:block' /> and premium apartments, all in one place.</p>
        </div>
    </div>
  )
}

export default CollegeBanner