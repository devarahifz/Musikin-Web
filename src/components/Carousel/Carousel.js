import React from 'react'
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import testimoni1 from "../../assets/images/testimoni1.png"
import testimoni2 from "../../assets/images/testimoni2.png"
import testimoni3 from "../../assets/images/testimoni3.png"

import './Carousel.css'

const Carousel = () => {
  const imageCss= {
     width:"285.33px",
     height:"254px",
  };
  return (
    <div className='container'>
      <Swiper
      slidesPerView={2}
      centeredSlides={true}
      spaceBetween={-250}
      grabCursor={true}
      loop={true}
      autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: -30,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
      >
        <SwiperSlide><img src={testimoni1} style={imageCss} alt="imgbanner1" border="0"/></SwiperSlide>
        <SwiperSlide><img src={testimoni2} style={imageCss} alt="imgbanner1" border="0"/></SwiperSlide>
        <SwiperSlide><img src={testimoni3} style={imageCss} alt="imgbanner1" border="0"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel