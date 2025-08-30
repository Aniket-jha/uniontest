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
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576579/reviewFive_lnkvuo.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576579/reviewThree_qzpwt6.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576579/reviewTwo_ubhpm7.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576580/reviewOne_qse9au.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576582/Testimonial_Sparsh_1_fpdyet.webm" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756576602/varsity_testimonial__1_1_snnyan.mp4" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756577039/WhatsApp_Video_2025-04-25_at_16.41.38_3c504295_1_bhgl06.webm" type="video/mp4" />
              </video>
              </SwiperSlide>
              <SwiperSlide >
              <video className='   h-[500px] rounded-lg shadow-lg px-2 lg:px-0 lg:mr-0 mb-6   '  controls>
          <source src="https://res.cloudinary.com/devjodpg7/video/upload/v1756577907/varsity_testimonial__2_thkie9.webm" type="video/mp4" />
              </video>
              </SwiperSlide>
        </Swiper>
        </div>
        
    </div>
  )
}

export default TestimonialTwo