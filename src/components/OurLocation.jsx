import React, { useEffect, useState } from "react";
import Button from "./Button";
import AboutSwiper from "./AboutSwiper";
import OurlocationSwiper from "./OurlocationSwiper";
import { GrLocation } from "react-icons/gr";

function OurLocation() {
  return (
    <div
      className=" overflow-hidden box-border container mx-auto
     s:mt-[20%]
      "
    >
      <style>
        {`
          body, html {
            margin: 0 auto;
            padding: 0;
            height: 100%;
          }
        `}
      </style>
      <div className=" box-border absolute  top-0 left-0  bg-[#1A1A1A] w-screen min-h-screen -z-10"></div>

      <div
        className={`

        flex   justify-center text-center align-middle mt-[5%] poppins  antialiased  items-center    gap-x-10
         gx:flex gx:flex-col  gx:gap-x-0 mx-auto gx:gap-y-10 gx:mt-0
         s:flex s:flex-col s:mt-0  
         xs:flex xs:flex-col  xs:gap-x-0  xs:gap-y-0 xs:mt-[0%] 
         md:flex md:flex-col  md:gap-x-0  md:gap-y-0 md:mt-[0%]
           lg:items-center lg:gap-x-10 lg:mt-0 lg:scale-90
          
        
        `}
      >
        <div
          className="
         flex flex-col    text-left  xscale-100   w-full gap-y-0 mt-2  poppins
          gx:scale-100    gx:w-full 
          s:scale-100  s:w-full  s:mt-0 s:gap-y-4
          xs:xscale100 xs:w-full xs:gap-y-0
          md:xscale-100   md:w-full md:gap-y-0 md:mt-2 
        



        "
        >
          <h1
            className=" font-bold flex gap-x-3 text-6xl text-centers items-center mx-auto tracking-wider 

            gx:text-3xl
            s:text-3xl  s:text-center s:tracking-wider
            xs:text-6xl xs:text-center xs:tracking-wider
            md:text-6xl md:text-center md:tracking-wider
             lg:flex lg:gap-x-3 lg:text-6xl lg:text-center lg:items-center lg:mx-auto lg:tracking-wider

            
           "
          >
            Our <span className=" xs:hidden lg:hidden"> location </span>
            <span className=" hidden     gx:flex s:flex  lg:flex justify-center mt-5 gx:mb-2  text-cyan-400 items-center ">
              <GrLocation />
            </span>
          </h1>
          <p
            className=" w-[70%] antialiased poppins  font-bold text-left leading-6 mt-6 mb-4 mx-auto

           gx:w-[100%] gx:font-base  gx:text-left  gx:leading-0 gx:mb-2
           s:w-[100%]
           xs:w-[80%] xs:mx-auto xs:font-bold xs:text-center xs:leading-0 xs:py-4
           md:w-[70%] md:font-bold md:text-center md:leading-6 md:mt-6 md:mb-4 md:mx-auto
           lg:w-[70%] lg:font-bold lg:text-left lg:leading-6 lg:mt-6 lg:mb-4 lg:mx-auto

             "
          >
            We are currently at 5 different locations. perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventores
          </p>
          <div className=" text-center ">
            <Button
              path="/Packages"
              btnStyle="
         hover:bg-[#C1272D] hover:scale-[1.10] 
         hover:text-white poppins bg-[#C1272D] 
         font-bold   py-3 px-5    text-white ring-black   rounded-lg     cursor-pointer "
              children="Try a Free Trial"
            />
          </div>
        </div>
        <div
          className="  text-center    w-[40%]  poppins
         gx:flex  gx:w-[100%]
         s:flex  s:w-[100%] s:mt-10
         xs:flex  xs:w-[100%] xs:scale-[0.75] 
          md:flex  md:w-[100%] md:mt-0 md:scale-[0.80] md:mb-10 z-10  g



        "
        >
          <OurlocationSwiper />
        </div>
      </div>
    </div>
  );
}

export default OurLocation;
