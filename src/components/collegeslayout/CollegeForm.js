import React from 'react'

const CollegeForm = () => {
  return (
    <div className='bg-[#ebe3d654] shadow-lg mx-4 mt-12 lg:mx-12 lg:mt-16 mb-6 items-center gap-12 grid grid-cols-1 lg:grid-cols-3 grid-flow-row py-6 px-4 lg:px-12 lg:py-12 rounded-lg' >
        <div className='col-span-2'>
            <h3 className='lg:text-[2.5rem] text-[1.5rem] font-[NeueMedium]' >
            Find the Perfect Space Near <br /> NMIMS
            </h3>
            <p className='font-[NeueRegular] text-[.8rem] lg:text-[1rem]'>Discover premium properties near NMIMS—co-living spaces, <br className='hidden lg:block' /> student housing, and luxury apartments, all in one place.</p>
        </div>
        <div className='flex col-span-1  w-full lg:items-center flex-col gap-6 lg:justify-center'>
            <div className='relative w-[85vw] lg:w-full'>
            <p className='absolute left-[3%] top-[20%] bg-gray-200 rounded-full px-3 py-2 text-[.8rem] text-gray-600 z-[999]' >+91</p>
            <input className='py-4 relative pl-16 rounded-lg border-[1px] border-[#dfdfdf] w-full' placeholder='Enter Your Phone Number' />
            </div>
            <button className='bg-[#D64C27] rounded-full w-[85vw] lg:w-full text-white py-3 lg:py-4 px-6 text-center'>GET A CALL BACK</button>
        </div>
    </div>
  )
}

export default CollegeForm