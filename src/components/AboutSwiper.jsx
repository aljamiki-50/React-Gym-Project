import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import AboutUsCards from "./AboutUsCards";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function AboutSwiper() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    // scrollbar={{ draggable: false }}
    // onSwiper={(swiper) => console.log(swiper)}
    // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><AboutUsCards /></SwiperSlide>
      <SwiperSlide><AboutUsCards /></SwiperSlide>
      <SwiperSlide><AboutUsCards /></SwiperSlide>
      <SwiperSlide><AboutUsCards /></SwiperSlide>
     
      
    </Swiper>
  );
}

export default AboutSwiper;
