import React from "react";
import AboutSwiper from "./AboutSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import BarberCard from "./BarberCard";
import BarberPerson from "../img/BarberPerson.jpg";
import BarberPerson2 from "../img/BarberPerson2.jpg";
import product1 from "../img/product1.jpg"
import product2 from "../img/product2.jpg"
import product3 from "../img/product3.jpg"

function BshopAboutUs() {
  const images = [BarberPerson, BarberPerson2];

  const barbers = [
    {
      name: "John Barber",
      pic: images[0], // Assuming images[0] corresponds to the picture of John Barber
      brief:
        "With over a decade of experience, John is a skilled barber known for his precision cuts and attention to detail. He takes pride in providing a personalized experience for each client, ensuring they leave the barbershop looking and feeling their best.",
    },
    {
      name: "Emma Styler",
      pic: images[1], // Assuming images[1] corresponds to the picture of Emma Styler
      brief:
        "Emma is not just a barber; she's an artist. Her creativity shines through in every haircut and style she creates. Clients love her friendly demeanor and her ability to stay on top of the latest trends, making each visit to the barbershop a unique and enjoyable experience.",
    },
    {
      name: "John Barber",
      pic: images[0], // Assuming images[0] corresponds to the picture of John Barber
      brief:
        "With over a decade of experience, John is a skilled barber known for his precision cuts and attention to detail. He takes pride in providing a personalized experience for each client, ensuring they leave the barbershop looking and feeling their best.",
    },
    {
      name: "Emma Styler",
      pic: images[1], // Assuming images[1] corresponds to the picture of Emma Styler
      brief:
        "Emma is not just a barber; she's an artist. Her creativity shines through in every haircut and style she creates. Clients love her friendly demeanor and her ability to stay on top of the latest trends, making each visit to the barbershop a unique and enjoyable experience.",
    },
    // Add more barber objects as needed
  ];
  return (
    <div
      className=" min-h-screen  Poppins   my-24  -z-10
        s:my-16 s:flex s:flex-col s:gap-y-3
        xs:my-16 xs:flex xs:flex-col xs:gap-y-10
        md:my-16 md:flex md:flex-col md:gap-y-10
        lg:my-16 lg:flex lg:flex-col lg:gap-y-10
        xl:mb-[200px] xl:mt-[10%]
"
    >
        <div className=" w-screen min-h-full bg-[#1A1A1A]  absolute top-0  left-0 "/>
      <h1
        className=" 
        s:text-center s:font-bold s:text-4xl  s:flex s:flex-col Poppins
        xs:text-center xs:font-bold xs:text-6xl  xs:flex xs:flex-col 
        md:text-center md:font-bold md:text-6xl  md:flex md:flex-col 
        lg:text-center lg:font-bold lg:text-6xl  lg:flex lg:flex-col 
        xl:text-left xl:font-bold xl:text-7xl  xl:flex xl:flex-col "
      >
        Meet Our Team :
      </h1>

      <div
        className="

         
         
         hidden
          xs:mt-4
           xl:flex xl:mt-4"
      >
        <Swiper className=" "
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // className="s:slides-per-view-1"
          // scrollbar={{ draggable: false }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          {barbers.map((barber, index) => (
            <SwiperSlide>
              <BarberCard Name={barber.name} Image={barber.pic} />
            </SwiperSlide>
          ))}
          {/* <SwiperSlide><AboutUsCards /></SwiperSlide>
  <SwiperSlide><AboutUsCards /></SwiperSlide>
  <SwiperSlide><AboutUsCards /></SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default BshopAboutUs;
