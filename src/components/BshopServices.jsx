import React from "react";
import price1 from "../img/price1.jpg";
import price2 from "../img/price2.jpg";
import price4 from "../img/price4.jpeg";

function BshopServices() {
  return (
    <div
      className=" min-h-screen  bg-red-500 mx-auto
   s:h-auto
   xs:my-10
   md:my-40
   lg:my-40 
    mb-[300px]

   "
    >
        <div className=" absolute top-0 left-0 bg-[#1A1A1A] w-screen min-h-full -z-10"/>
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
     xl:flex  xl:justify-between items-center  xl:gap-x-10  
    "
        >
          <div className="xl:w-[40%] xl:flex hidden rounded-xl">
            <img src={price1} alt="" className=" rounded-xl" />
          </div>
          <div className=" xl:w-[45%] w-full   flex  xl:justify-end    ">
            <img src={price4} alt="" className="rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BshopServices;
