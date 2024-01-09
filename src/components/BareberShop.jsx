import React from "react";
import barber1 from "../img/barber1.jpg";
import AboutSwiper from "./AboutSwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import AboutUsCards from "./AboutUsCards";
import BarberPerson from "../img/BarberPerson.jpg";
import BarberPerson2 from "../img/BarberPerson2.jpg";
import price1 from "../img/price1.jpg";
import price2 from "../img/price2.jpg";
import price4 from "../img/price4.jpeg";

import map1 from "../img/map.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BarberCard from "./BarberCard";
import Button from "./Button";

function BareberShop() {
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
      className="container min-h-screen w-screen
        xs:my-10
        md:my-40
        lg:my-40 
    
    "
    >
      <div className=" box-border absolute  top-0 left-0  bg-[#1A1A1A]  mx-auto w-screen   min-h-full  -z-10 " />
      {/* barbber Team Cards */}
      <div
        className=" min-h-screen  Poppins
            s:my-16 s:flex s:flex-col s:gap-y-3
            xs:my-16 xs:flex xs:flex-col xs:gap-y-10
            md:my-16 md:flex md:flex-col md:gap-y-10
            lg:my-16 lg:flex lg:flex-col lg:gap-y-10
          xl:my-28
"
      >
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
            
              xs:mt-4
              xl:mt-4"
        >
          <Swiper
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
      {/*  End  of barbber Team Cards */}
      <div className=" min-h-screen Poppins bg-cyan-800 ">
        <div
          className=" 
          gx:grid gx:grid-cols-1 gx:items-center gx:gap-y-4 gx:my-10 gx:mx-auto 
          s:grid s:grid-cols-1 s:items-center s:gap-y-4 s:my-10 s:mx-auto 
          xs:grid xs:grid-cols-1 xs:items-center xs:gap-y-4 xs:my-10 xs:mx-auto
          md:grid md:grid-cols-1 md:items-center md:gap-y-4 md:my-10 md:mx-auto 

          lg:grid lg:grid-cols-1 lg:items-center lg:gap-y-4 lg:my-10 lg:mx-auto 

         xl:grid xl:grid-cols-2 xl:items-center  xl:my-10
        "
        >
          <div
            className="
            gx:flex gx:flex-col gx:items-center  gx:gap-y-14 
            s:flex s:flex-col s:items-center  s:gap-y-14 
            xs:flex xs:flex-col xs:items-center  xs:gap-y-14 
            md:flex md:flex-col md:items-center  md:gap-y-14 
            lg:flex lg:flex-col lg:items-center  lg:gap-y-14 
           xl:flex xl:flex-col xl:items-center  xl:gap-y-14 
           "
          >
            <h1
              className=" text-5xl font-bold
             gx:text-4xl gx:font-semibold
             s:text-3xl
             xs:text-5xl
             md:text-5xl
              "
            >
              BarBer's Shop
            </h1>
            <p
              className=" w-[70%] text-left
             gx:w-[100%]
             s:w-[100%]
             xs:w-[100%] xs:text-center
             md:w-[100%] md:text-center  
             lg:w-[100%] lg:text-center  
            "
            >
              {" "}
              Our expert barbers are dedicated to crafting the perfect look
              tailored just for you. Experience a blend of timeless traditions
              and modern trends in a welcoming atmosphere. From classic cuts to
              contemporary styles, we're here to elevate your grooming
              experience. Walk out with confidence, walk in as you are. [Barber
              Shop Name]—Where Your Style Matters.
            </p>

            <Button
              btnStyle="
             bg-[#4e524f]  text-white hover:text-slate-400  font-bold   p-4 mt-2  
            s:rounded-lg
            gx:rounded-lg
            md:rounded-lg
            lg:rounded-lg

             "
              children="Book Now"
            />
          </div>
          <div
            className=" w-[80%] ring-[1px] ring-black  col-span-1  rounded-xl
            gx:w-[100%] gx:ring-[1px] 
             s:w-[100%] s:ring-[1px]
             xs:w-[100%] xs:ring-[1px]
             md:w-[100%] md:ring-[1px]
             lg:w-[100%] lg:ring-[1px]
          "
          >
            <img src={barber1} className="w-[100%]" alt="" />
          </div>
        </div>
      </div>
      <div
        className=" min-h-screen 
       s:h-auto
       xs:my-10
       md:my-40
       lg:my-40 
   
       "
      >
        <div
          className="min-h-screen  Poppins
            s:my-0 s:flex s:flex-col s:gap-y-3  s:justify-center
            xs:my-16 xs:flex xs:flex-col xs:gap-y-10
            md:my-16 md:flex md:flex-col md:gap-y-10
            lg:my-16 lg:flex lg:flex-col lg:gap-y-10
          xl:my-28 xl:gap-y-10   "
        >
          <h1
            className=" 
            s:text-center s:font-bold s:text-3xl  s:flex s:flex-col Poppins
            xs:text-center xs:font-bold xs:text-6xl  xs:flex xs:flex-col 
            md:text-center md:font-bold md:text-6xl  md:flex md:flex-col 
            lg:text-center lg:font-bold lg:text-6xl  lg:flex lg:flex-col 
            xl:text-left xl:font-bold xl:text-7xl  xl:flex xl:flex-col  "
          >
            Meet Our Service :
          </h1>

          <div
            className="
         xl:flex  xl:justify-between items-center   
        "
          >
            <div className="xl:w-[50%] xl:flex hidden rounded-xl">
              <img src={price1} alt="" className=" rounded-xl" />
            </div>
            <div className=" xl:w-[70%] w-full   flex  xl:justify-end    ">
              <img src={price4} alt="" className="rounded-xl " />
            </div>
          </div>
        </div>
      </div>
      {/* Find us section */}
      <div
        className=" min-h-screen 
       s:h-auto
       xs:my-10
       md:my-40
       lg:my-40 
   
       "
      >
        <div
          className="min-h-screen  Poppins
            s:my-0 s:flex s:flex-col s:gap-y-3  s:justify-center
            xs:my-16 xs:flex xs:flex-col xs:gap-y-10
            md:my-16 md:flex md:flex-col md:gap-y-10
            lg:my-16 lg:flex lg:flex-col lg:gap-y-10
          xl:my-32 xl:gap-y-16  "
        >
          <h1
            className=" 
            s:text-center s:font-bold s:text-3xl  s:flex s:flex-col Poppins
            xs:text-center xs:font-bold xs:text-6xl  xs:flex xs:flex-col 
            md:text-center md:font-bold md:text-6xl  md:flex md:flex-col 
            lg:text-center lg:font-bold lg:text-6xl  lg:flex lg:flex-col 
            xl:text-left xl:font-bold xl:text-7xl  xl:flex xl:flex-col  "
          >
            Find Us :
          </h1>

          
          
            <div className="rounded-xl
               gx:w-[80%] gx:mt-4 gx:flex gx:flex-col  gx:gap-y-12 gx:mb-4 gx:mx-auto gx:items-center
              s:w-[80%] s:mt-4 s:flex s:flex-col  s:gap-y-12 s:mb-4 s:mx-auto s:items-center
              xs:w-[80%] xs:mt-4 xs:flex xs:flex-col  xs:gap-y-12 xs:mb-4 xs:mx-auto xs:items-center
              md:w-[80%] md:mt-4 md:flex md:flex-col  md:gap-y-12 md:mb-4 md:mx-auto md:items-center
              lg:w-[80%] lg:mt-4 lg:flex lg:flex-col  lg:gap-y-12 lg:mb-4 lg:mx-auto lg:items-center



            xl:w-[45%] xl:mt-4 xl:flex  xl:gap-x-12 xl:items-center   ">
              <img src={map1} alt="" className=" rounded-xl" />
              <img src={map1} alt="" className="rounded-xl" />

            
          </div>
        </div>
      </div>{" "}
       {/* End of Find us section */}

      <div className=" min-h-screen bg-cyan-400 "></div>
      Our Barber shop
    </div>
  );
}

export default BareberShop;
