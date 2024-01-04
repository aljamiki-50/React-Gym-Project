import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import location1 from "../img/location1.jpg";
import location2 from "../img/location2.jpg";
import location3 from "../img/location3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function OurlocationSwiper() {
  const imgsize = useRef(null);

  const current = imgsize.current ? imgsize.current.width : "100px";
  const currentheight = imgsize.current ? imgsize.current.height : "100px";

  // console.log(currentheight);

  return (
    <Swiper
      className=" text-center rounded-xl
       gx:w-screen
       xs:overflow-clip
      "
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
     
      <SwiperSlide
        style={{ width: `${current}px`, height: `${currentheight}` }}
      >
        <img src={location1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img ref={imgsize} src={location2} alt="" />
      </SwiperSlide>
      <SwiperSlide
        style={{ width: `${current}px`, height: `${currentheight}` }}
      >
        <img src={location3} alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default OurlocationSwiper;
