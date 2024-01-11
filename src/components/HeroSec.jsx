import React from "react";
import Button from "./Button";
import vid from "../img/promo.mp4";
import Video from "./Video";
// import main from "../img/main-bg.png"

function HeroSec() {
  return (
    <div
      className="  absolute top-0 left-0   min-h-full
       gx:flex gx:flex-col  gx:justify-center gx:top-[140px] gx:min-h-dvh  gx:-z-10
       s:flex s:flex-col  s:justify-center s:top-[140px] s:min-h-dvh  s:-z-10
       xs:flex xs:flex-col  xs:justify-center xs:top-[140px] xs:min-h-dvh  xs:-z-10
       md:flex md:flex-col  md:justify-center md:top-[100px] md:min-h-dvh  md:-z-10
       lg:flex lg:flex-col  lg:justify-center lg:top-[0px] lg:min-h-dvh  lg:-z-10




     
    "
    >
      <div className="
        flex  flex-col
         gx:flex-col -gx:gap-y-[-70px]
         s:flex-col s:gap-y-[-100px] 
         xs:flex-col xs:gap-y-[-100px] 
         md:flemdcol md:gap-y-[-100px] 
         lg:flemdcol lg:gap-y-[-100px] 
      
          ">
        <div
          className="  
           gx:w-[90%]     gx:mx-auto
           s:w-[90%]     s:mx-auto
           xs:w-[90%]     xs:mx-auto
           md:w-[90%]     md:mx-auto
           lg:w-[90%]     lg:mx-auto
          xl:w-screen    
          "
        >
          <Video />
        </div>
        {/* Start of the pitch sec below the video */}
        <div
          className=" 
            antialiased Poppins  flex flex-col  text-center z-10 mt-16 
            gx:flex gx:gap-y-10 gx:mt-10   gx:items-center gx:mx-auto
            s:flex s:gap-y-10 s:mt-10
            xs:flex xs:gap-y-10 xs:mt-10
            md:flex md:gap-y-10 md:mt-10
            lg:flex lg:gap-y-10 lg:mt-10
            xl:gap-y-1 xl:mt-4 xl:flex xl:flex-col xl:items-center

        "
        >
          <h1
            className=" flex text-5xl leading-[80px] Poppins
          gx:text-xl gx:justify-center gx:flex-col
         s:text-2xl s:justify-center s:flex-col
         xs:text-5xl xs:justify-center xs:flex-col
         md:text-5xl md:justify-center md:flex-col
         lg:text-7xl lg:justify-center lg:flex-col lg:font-bold 
          xl:gap-x-2 xl:font-bold
         "
          >
            <span className=" text-red-600">Experience </span> the Ultimate{" "}
            <br className=" xl:hidden lg:hidden" /> Fitness Revolution
          </h1>
          <p
            className="   
        font-light text-white  hidden  justify-center 
        gx:flex gx:justify-center gx:w-[100%] gx:font-meduim 
         s:flex  s:w-[90%] s:px-1 s:text-justify s:font-semibold s:text-xl  s:m-auto
         xs:flex  xs:w-[100%] xs:px-4 xs:text-justify  xs:font-semibold xs:text-2xl  xs:mx-auto
         md:flex  md:w-[100%] md:px-6 md:text-justify  md:font-semibold md:text-2xl  md:mx-auto
         lg:flex  lg:w-[100%] lg:px-10 lg:text-justify  lg:font-semibold lg:text-2xl  lg:mx-auto
         xl:flex xl:justify-center xl:w-[100%] xl:font-semibold xl:tracking-wide xl:text-2xl 

           "
          >
            Unleash your potential in our state-of-the-art facility, equipped
            with top-notch <br className=" s:hidden gx:hidden lg:hidden xs:hidden  md:hidden" />{" "}
            equipment and expert trainers. Join us on a journey to a stronger,
            healthier you. <br className=" s:hidden  gx:hidden lg:hidden xs:hidden md:hidden" />
            Get started today!
          </p>
          <div
            className=" 
         flex  justify-between gap-x-4 round
          gx:flex-col gx:gap-y-3
          s:flex-col s:gap-y-3
          xs:flex-row xs:gap-x-0 xs:justify-evenly
          md:flex-row md:gap-x-0 md:justify-evenly
          lg:flex-row lg:gap-x-0 lg:justify-evenly

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
    </div>
  );
}

export default HeroSec;
