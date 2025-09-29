"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const TestimonialTwo = () => {
  return (
    <div className='lg:mx-16 mx-4 pt-12 pb-12  '>
        <div>
        <div className='flex items-center justify-between' >
        <h3 className='font-[NeueBold] text-[1.4rem] lg:text-[2.8rem]' >Reviews</h3>
       
        </div>
        <Swiper
          spaceBetween={0}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:4.4
        }
      }}
          autoplay={{
            delay: 2000,
            disableOnInteraction:true,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
         
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370971/reviewFive_fhkj2p.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370973/reviewThree_g9yayz.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370973/reviewTwo_vtkqzz.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370974/reviewOne_anycq7.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370978/reviewFour_nocowg.mov" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1759129346/WhatsApp_Video_2025-09-22_at_19.29.39_1_bduqbw.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              {/* <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1758370978/reviewFour_nocowg.mov" type="video/mp4" />
              </video>
              </SwiperSlide> */}
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/dbjtwrdxo/video/upload/v1759129373/WhatsApp_Video_2025-09-22_at_19.29.39_vmat6k.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
        </Swiper>
        </div>
        
    </div>
  )
}

export default TestimonialTwo