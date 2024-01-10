import React from "react";
import map1 from "../img/map.jpg";

function BshopFindus() {
  return (
    <div
      id="#FindUs"
      className=" min-h-full 
  s:h-auto
  xs:my-10
  md:my-40
  lg:my-40 
  xl:mb-[400px]

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
          className="  text-cyan-200
       s:text-center s:font-bold s:text-3xl  s:flex s:flex-col Poppins
       xs:text-center xs:font-bold xs:text-6xl  xs:flex xs:flex-col 
       md:text-center md:font-bold md:text-6xl  md:flex md:flex-col 
       lg:text-center lg:font-bold lg:text-6xl  lg:flex lg:flex-col 
       xl:text-left xl:font-bold xl:text-7xl  xl:flex xl:flex-col xl:mb-2  "
        >
          Find Us :
        </h1>

        <div
          className="rounded-xl
          gx:w-[80%] gx:mt-4 gx:flex gx:flex-col  gx:gap-y-12 gx:mb-4 gx:mx-auto gx:items-center
         s:w-[80%] s:mt-4 s:flex s:flex-col  s:gap-y-12 s:mb-4 s:mx-auto s:items-center
         xs:w-[80%] xs:mt-4 xs:flex xs:flex-col  xs:gap-y-12 xs:mb-4 xs:mx-auto xs:items-center
         md:w-[80%] md:mt-4 md:flex md:flex-col  md:gap-y-12 md:mb-4 md:mx-auto md:items-center
         lg:w-[80%] lg:mt-4 lg:flex lg:flex-col  lg:gap-y-12 lg:mb-4 lg:mx-auto lg:items-center
       xl:w-[40%] xl:mt-4 xl:flex  xl:gap-x-20 xl:items-center   "
        >
          <img src={map1} alt="" className=" rounded-xl" />
          <img src={map1} alt="" className="rounded-xl" />
        </div>
      </div>
    </div>
  );
}

export default BshopFindus;
