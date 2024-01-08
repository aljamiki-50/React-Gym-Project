import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import AboutUsCards from "./AboutUsCards";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import trainer4 from "../img/trainer4.jpg"

function AboutSwiper() {
  const Reviews = [
    {
      name: "Alice Smith",
      review:
        "Fantastic gym with a friendly atmosphere. The trainers are knowledgeable and always ready to help. I've seen great results since joining!",
      rating: 5,
      image: "alice_profile.jpg",
    },
    {
      name: "Bob Johnson",
      review:
        "Clean and well-maintained facilities. The classes are diverse, and the trainers are motivating. Overall, a great place for fitness enthusiasts!",
      rating: 4,
      image: "bob_profile.jpg",
    },
    {
      name: "Charlie Davis",
      review:
        "Love the variety of equipment and workout options. The staff is approachable, and I appreciate the emphasis on a healthy lifestyle. Highly recommended!",
      rating: 5,
      image: "charlie_profile.jpg",
    },
    {
      name: "Diana White",
      review:
        "Attended a few group classes, and they were challenging but fun. The gym has a positive vibe, and the trainers are supportive. I'm enjoying my fitness journey here.",
      rating: 4,
      image: "diana_profile.jpg",
    },
    {
      name: "Ethan Miller",
      review:
        "Great value for the membership fee. The gym is never too crowded, and there's a good selection of equipment. The personal trainers are attentive and helpful.",
      rating: 4,
      image: "ethan_profile.jpg",
    },
  ];
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
      {Reviews.map((Rev, index) => (
        <SwiperSlide>
          <AboutUsCards
          name = {Rev.name}
          review = {Rev.review}
          rating ={Rev.rating}
          image ={Rev.image}

           />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide><AboutUsCards /></SwiperSlide>
      <SwiperSlide><AboutUsCards /></SwiperSlide>
      <SwiperSlide><AboutUsCards /></SwiperSlide> */}
    </Swiper>
  );
}

export default AboutSwiper;
