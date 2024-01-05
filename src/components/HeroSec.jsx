import React from "react";
import Button from "./Button";
import vid from "../img/promo.mp4";
import Video from "./Video";
// import main from "../img/main-bg.png"

function HeroSec() {
  return (
    <div
      className="  
        flex flex-col items-center  scrollbar-hide   overflow-y-auto scroll-smooth   w-screen min-h-screen   text-center font-bold antialiased  Poppins mt-12 
        gx:gap-y-10 gx:mt-20 gx:w-full  gx:flex-grow-1  gx:mx-auto gx:container
        s:gap-y-10 s:mt-20 s:w-full  s:flex-grow-1  s:mx-auto s:container
       xs:gap-y-10 xs:mt-20 xs:w-full  xs:flex-grow-1  xs:mx-auto xs:container
       md:gap-y-10 md:mt-20 md:w-full  md:flex-grow-1  md:mx-auto md:container
       lg:gap-y-10 lg:mt-20 lg:w-full  lg:flex-grow-1  lg:mx-auto lg:container 
       xl:gap-y-10  xl:my-40 xl:mt-2 xl:min-h-screen-auto xl:min-h-0
      
      "
    >
      <div className=" hidden   xl:flex min-h-screen w-screen  absolute top-0 left-0 xl:flex-col ">
        {" "}
        <Video />
       <div
        className=" 
         antialiased Poppins  flex flex-col text-center z-10
       s:flex s:gap-y-20
       gx:flex gx:gap-y-4 gx:mt-6

       xs:flex xs:gap-y-20 xs:mt-8

       md:flex md:gap-y-20 md:mt-10

       lg:flex lg:gap-y-20 lg:mt-10
       xl:flex xl:gap-y-0 xl:mt-2  xl:mb-3

       



       "
      >
        <h1
          className=" flex text-5xl leading-[80px]
          gx:text-xl gx:justify-center gx:flex-col
         s:text-2xl s:justify-center s:flex-col
         xs:text-5xl xs:justify-center xs:flex-col
         md:text-5xl md:justify-center md:flex-col
         lg:text-4xl lg:justify-center 
         xl:text-4xl xl:justify-center 

         "
        >
          <span className=" text-red-600">Experience</span> the Ultimate{" "}
          <br className=" xl:hidden lg:hidden" /> Fitness Revolution
        </h1>
        <p
          className="   
        font-light text-white  hidden  justify-center 
        gx:flex gx:justify-center gx:w-[140%] gx:font-sm

         s:flex s:justify-center s:w-[100%] s:font-semibold
         md:flex md:justify-center md:w-[100%] md:font-semibold
         lg:flex lg:justify-center lg:w-[100%] lg:font-semibold lg:tracking-wide lg:text-2xl
         xl:flex xl:justify-center xl:w-[80%] xl:font-semibold xl:tracking-wide xl:text-2xl xl:mx-auto

           "
        >
          Unleash your potential in our state-of-the-art facility, equipped with
          top-notch <br className=" s:hidden gx:hidden lg:hidden " /> equipment
          and expert trainers. Join us on a journey to a stronger, healthier
          you. <br className=" s:hidden  gx:hidden lg:hidden" />
          Get started today!
        </p>
        <div
          className=" 
         flex  justify-between gap-x-4 
         xl:justify-around xl:gap-x-0

         
         
        "
        >
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
      {/* <h1 className=" p-10 bg-red-700"> </h1> */}
     
      <div
        className="   w-screen xl:container px-28  mt-2 mx-auto text-center
       gx:px-0  gx:w-screen gx:mx-0
       s:px-0  s:w-screen s:mx-0
       xs:px-0  xs:w-screen xs:mx-0  xs:container
       md:px-0  md:w-screen md:mx-0 
       lg:px-0  lg:w-screen lg:mx-0x  lg:container
       xl:hidden 

       xl:px-0  xl:w-screen xl:mx-0 
"
      >
        <Video />
      </div>
      <div
        className=" 
         antialiased Poppins  flex flex-col  text-center z-10
       s:flex s:gap-y-20
        gx:items-center gx:mx-auto
       gx:flex gx:w-[100%] gx:gap-y-4 gx:mt-6

       xs:flex xs:gap-y-20 xs:mt-8

       md:flex md:gap-y-20 md:mt-10 

       lg:flex lg:gap-y-20 lg:mt-10
        xl:gap-y-20 xl:mt-10 xl:hidden 




       "
      >
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
          top-notch <br className=" s:hidden gx:hidden lg:hidden " /> equipment
          and expert trainers. Join us on a journey to a stronger, healthier
          you. <br className=" s:hidden  gx:hidden lg:hidden" />
          Get started today!
        </p>
        <div
          className=" 
         flex  justify-between gap-x-4 round
          gx:flex-col gx:gap-y-3
          s:flex-col s:gap-y-3

           md:gap-y-3

         
         
        "
        >
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
