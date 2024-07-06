import React from 'react'
import Video from 'next-video';
const HomeBanner = ({homeContent}) => {
  
  return (
    <div className='relative' >
    <div className=' overflow-hidden'>
    <video className=' z-[-1]  h-auto w-full' playsInline={true}   loop="true" autoplay="autoplay" muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Funion.mp4?alt=media&token=34b90072-ae3f-4365-acc7-0486b65d532e" type="video/mp4" />
        </video>
      
        </div>
      
        <div className='absolute left-0 bottom-0 flex items-center justify-center flex-col right-0 m-auto w-full text-center z-[3] top-[10px] lg:top-[-205px]'>
            <h1 className='bg-[#ebe3d67d] my-2 font-[600]  xl:w-[30%] w-[60%] font-[Neue Haas Grotesk Display Pro] px-3 py-3 lg:py-6 lg:text-6xl' >Live <span className="italic" > Easy,</span> </h1>
            <h2 className='bg-[#ebe3d67d]   font-[600]   xl:w-[30%] w-[60%] px-3 py-3 lg:py-6 lg:text-6xl'>Live <span className="italic" > United </span></h2>
            </div>
      
    </div>
  )
}

export default HomeBanner