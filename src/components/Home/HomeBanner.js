import React from 'react'
import Video from 'next-video';
const HomeBanner = ({homeContent}) => {
  
  return (
    <div className='relative' >
    <div className=' overflow-hidden'>
    <video className=' z-[-1]  h-auto w-full' playsInline={true}   loop="true" autoplay="autoplay" muted>
            <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756540839/videoOne_qn57lg.webm" type="video/mp4" />
        </video>
        <h1 className="text-white z-[-1] opacity-5 text-center text-[.5rem]" >Top Luxurious Co-Living Spaces </h1>
        </div>
      
      
      
    </div>
  )
}

export default HomeBanner