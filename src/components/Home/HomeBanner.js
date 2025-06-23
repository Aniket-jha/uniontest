import React from 'react'
import Video from 'next-video';
const HomeBanner = ({homeContent}) => {
  
  return (
    <div className='relative' >
    <div className=' overflow-hidden'>
    <video className=' z-[-1]  h-auto w-full' playsInline={true}   loop="true" autoplay="autoplay" muted>
            <source src="https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2F1750514789850241.webm?alt=media&token=9a98b028-b001-4fd4-80d8-1a51dd9b12d4" type="video/mp4" />
        </video>
        <h1 className="text-white z-[-1] opacity-5 text-center text-[.5rem]" >Top Luxurious Co-Living Spaces </h1>
        </div>
      
      
      
    </div>
  )
}

export default HomeBanner