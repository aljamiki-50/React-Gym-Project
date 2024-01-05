import React from "react";
import Button from "./Button";
import vid from "../img/promo.mp4";
import Video from "./Video";
// import main from "../img/main-bg.png"

function HeroSec() {
  return (
    <div
      className="   overflow-y-auto scroll-smooth
      relative container flex flex-col items-center  scrollbar-hide   w-screen h-screen  text-center font-bold antialiased  Poppins mt-12 
     
       s:gap-y-10 s:mt-20 
       xs:gap-y-10 xs:mt-20 
       md:gap-y-10 md:mt-20 
       lg:gap-y-10 lg:mt-32  
       xl:gap-y-10 xl:mt-[120px] 
      
      "
    >
      {/* <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div> */}
      <div className="   w-screen container px-28  mt-2 mx-auto text-center
       gx:px-0  gx:w-screen gx:mx-0
       s:px-0  s:w-screen s:mx-0
       xs:px-0  xs:w-screen xs:mx-0
       md:px-0  md:w-screen md:mx-0x
       lg:px-0  lg:w-screen lg:mx-0x

       xl:px-0  xl:w-screen xl:mx-0x
">
        <Video />
      </div>
      <div className="  antialiased Poppins  flex flex-col text-center
       s:flex s:gap-y-20
       gx:flex gx:gap-y-4 gx:mt-6

       xs:flex xs:gap-y-20 xs:mt-8

       md:flex md:gap-y-20 md:mt-10

       lg:flex lg:gap-y-20 lg:mt-10
       xl:flex xl:gap-y-20 xl:mt-10




       ">
        <h1
          className=" flex text-5xl leading-[80px]
          gx:text-xl gx:justify-center gx:flex-col

         s:text-2xl s:justify-center s:flex-col
         xs:text-5xl xs:justify-center xs:flex-col
         md:text-5xl md:justify-center md:flex-col

         lg:text-4xl lg:justify-center 
         "
        >
          <span className=" text-red-600">Experience</span> the Ultimate{" "}
          <br className=" xl:hidden lg:hidden" /> Fitness Revolution
        </h1>
        <p
          className="   
        font-light text-white  hidden  justify-center 
        gx:flex gx:justify-center gx:w-[100%] gx:font-meduim

         s:flex s:justify-center s:w-[100%] s:font-semibold
         md:flex md:justify-center md:w-[100%] md:font-semibold
         lg:flex lg:justify-center lg:w-[100%] lg:font-semibold lg:tracking-wide lg:text-2xl
         xl:flex xl:justify-center xl:w-[100%] xl:font-semibold xl:tracking-wide xl:text-2xl

           "
        >
          Unleash your potential in our state-of-the-art facility, equipped with
          top-notch <br className=" s:hidden gx:hidden lg:hidden " /> equipment and expert trainers. Join us on a journey
          to a stronger, healthier you. <br className=" s:hidden  gx:hidden lg:hidden" />
          Get started today!
        </p>
        <div className=" 
         flex  justify-between gap-x-4 round
         
         
        ">
          <Button
            btnStyle="bg-[#C1272D]  animate-pulse   ring-black  text-white  bg-red-900  p-3 s:p-2 gx:text-sm  gx:p-1 rounded xl "
            children="Try a Free Trial"
          />
          <Button
            btnStyle=" bg-[#C1272D] text-white  bg-red-900 ring-white p-3  s:p-2 gx:p-1 gx:text-sm   rounded xl"
            children="Contact Us"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
