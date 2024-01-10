import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../img/logo.png";
import bob from "../img/bob.jpg";

import { BsClock } from "react-icons/bs";

function Footter() {
  return (
    <div
      id="Fotter"
      className=" box-border   bg-[#1A1A1A]        absolute bottom-0  left-0     w-screen text-center    px-4
 
        s:hidden gx:hidden
    
      xs:absolute xs:bottom-0  xs:left-0     xs:w-screen   
      md:absolute md:bottom-0  md:left-0     md:w-screen md:text-center    md:px-10
      lg:absolute lg:bottom-0  lg:left-0     lg:w-screen lg:text-center    lg:px-4 lg:scale-100

     "
    >
      <div
        className="
       grid grid-cols-3     w-[80%] mx-auto text-left pt-9  mt-10 
        xs:mt-0 xs:h-[260px]   items-stretch
         xs:flex xs:justify-around xs:gap-x-10  xs:mx-auto  xs:scale-90 xs:text-lg  xs:pt-10
         md:flex md:justify-around md:gap-x-10  md:mt-0 md:mx-auto  md:scale-100 md:text-lg 
       
      "
      >
        {/* Start of th column  */}
        <div
          className=" flex flex-col text-left w-1/2 xs:gap-y-1
         md:gap-y-4 lg:gap-y-4 "
        >
          <h1 className=" xl:text-5xl text-cyan-500/60 text-3xl xs:text-meduim font-bold Poppins">Fitnees</h1>
          <ul
            className=" Poppins flex flex-col   font-bold
           xs:grid xs:grid-cols-1 xs:items-start xs:gap-y-3 
           md:grid md:grid-cols-1 md:items-start md:gap-y-3
           lg:grid lg:grid-cols-1 lg:items-start lg:gap-y-3   
           xl:gap-y-4 xl:mt-2 xl:texl-xl

           "
          >
            <li>Our staff</li>
            <li>Locations</li>
            <li>Give us A calls</li>
            <li>Book a Free Trial</li>
            <li>Prices and Packages</li>
          </ul>
        </div>
        {/* end of th column  */}

        <div className=" flex flex-col gap-y-1  md:gap-y-4  lg:gap-y-4 text-left  w-1/2 ">
          <h1 className="xl:text-5xl text-cyan-500/60 text-3xl xs:text-meduim font-bold Poppins">Barber </h1>
          <ul
            className=" Poppins  flex flex-col   font-bold
           xs:grid xs:grid-cols-1 xs:items-start   xs:gap-y-3 
           md:grid md:grid-cols-1 md:items-start md:gap-y-3   
           lg:grid lg:grid-cols-1 lg:items-start lg:gap-y-3 
           xl:gap-y-4 xl:mt-2 xl:texl-xl 
           "
          >
            <li>About Us</li>
            <li>Locations</li>
            <li>Services</li>
            <li>Book a Free Trial</li>
            <li>Prices and Packages</li>
          </ul>
        </div>

        <div className=" flex flex-col text-left gap-y-8">
          <h1
            className="  flex gap-x-2   text-3xls   items-center text-center  align-middle   font-bold Poppins 
        
          xs:flex  xs:gap-x-5   xs:text-lg   xs:text-meduim 
          md:text-2xl  md:flex  md:gap-x-5 
          xl:text-4xl text-cyan-500/60  Poppins

          "
          >
            <span> Working </span>
            <span className="  text-red-500 animate-pulse">
              <BsClock />
            </span>
            :
          </h1>
          <ul
            className=" Poppins flex flex-col align-middle   font-bold Poppins 
             xs:gap-y-2
             md:gap-y-2

           lg:gap-y-3 
           xl:gap-y-4 xl:mt-2 xl:texl-xl  "
          >
            <li>Sunday - Friday (6 AM - 8 PM)</li>
            <li>Saturday - (6 AM - 2 PM)</li>
            <li className=" fill-transparent  flex gap-x-7">
              {" "}
              <FaInstagram /> <FaFacebookF /> <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex justify-between mx-auto  pb-4  w-[80%] mt-10  items-center
      xs:mt-7  xs:container xs:px-2
      md:mt-20 
      "
      >
        <div  className="" >
          <img src={bob} alt="" className="  w-[80px] h-[80px]  rounded-full ring-[1px] ring-cyan-300 " />
        </div>
        <p className=" xl:text-xl xl:font-bold Poppins text-cyan-100/60" >
          Copyright © 2020 by Physique Workshop Pvt.Ltd . All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footter;
