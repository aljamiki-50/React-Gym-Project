import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../img/logo.png";
import { BsClock } from "react-icons/bs";

function Footter() {
  return (
    <div
      id="Fotter"
      className=" box-border   bg-[#1A1A1A]  
        s:hidden gx:hidden
      xs:absolute xs:bottom-0  xs:left-0     xs:w-screen  xs:scale-[0.96]
      md:absolute md:bottom-0  md:left-0     md:w-screen md:text-center  md:scale-[0.96]  md:px-4
      lg:absolute lg:bottom-40  lg:left-0     lg:w-screen lg:text-center    lg:px-4 lg:scale-110
      absolute bottom-0  left-0     w-screen text-center    px-4

     "
    >
      <div
        className="
       grid grid-cols-3     w-[80%] mx-auto text-left pt-9  mt-10
        xs:mt-0 xs:h-[260px]   items-stretch
         xs:flex xs:justify-around xs:gap-x-10  xs:mx-auto  xs:scale-90 xs:text-lg  xs:pt-10
         md:flex md:justify-around md:gap-x-10  md:mt-14 md:mx-auto  md:scale-125 md:text-lg 
       
      "
      >
        {/* Start of th column  */}
        <div
          className=" flex flex-col text-left w-1/2 xs:gap-y-1
         md:gap-y-4 lg:gap-y-4 "
        >
          <h1 className=" text-3xl xs:text-meduim font-bold Poppins">Pages</h1>
          <ul
            className=" Poppins flex flex-col
           xs:grid xs:grid-cols-1 xs:items-start xs:gap-y-3 
           md:grid md:grid-cols-1 md:items-start md:gap-y-3
           lg:grid lg:grid-cols-1 lg:items-start lg:gap-y-3   
  

           "
          >
            <li>About Us</li>
            <li>Locations</li>
            <li>About Us</li>
            <li>Book a Free Trial</li>
            <li>Prices and Packages</li>
          </ul>
        </div>
        {/* end of th column  */}

        <div className=" flex flex-col gap-y-1  md:gap-y-4  lg:gap-y-4 text-left  w-1/2 ">
          <h1 className=" text-3xl xs:text-meduim font-bold Poppins">Pages</h1>
          <ul
            className=" Poppins flex flex-col
           xs:grid xs:grid-cols-1 xs:items-start   xs:gap-y-3 
           md:grid md:grid-cols-1 md:items-start md:gap-y-3   
           lg:grid lg:grid-cols-1 lg:items-start lg:gap-y-3   
           "
          >
            <li>About Us</li>
            <li>Locations</li>
            <li>About Us</li>
            <li>Book a Free Trial</li>
            <li>Prices and Packages</li>
          </ul>
        </div>

        <div className=" flex flex-col text-left gap-y-8">
          <h1 className=" md:flex  md:gap-x-5 
          xs:flex  xs:gap-x-5 
          items-center text-center  align-middle  text-3xl font-bold Poppins  xs:text-lg md:text-2xl">
           <span> Working </span>
            <span className="  text-red-500 animate-pulse">
              <BsClock />
            </span>
            
          </h1>
          <ul className=" Poppins flex flex-col gap-y-3 ">
            <li>Sunday - Friday (6 AM - 8 PM)</li>
            <li>Saturday - (6 AM - 2 PM)</li>
            <li className=" fill-transparent  flex gap-x-7">
                {" "}
                <FaInstagram />
              

                {" "}
                <FaFacebookF />
              

                {" "}
                <FaTwitter />
              
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex justify-between mx-auto  pb-4  w-[80%] mt-10 
      xs:mt-7  xs:container xs:px-2
      md:mt-20 
      "
      >
        <div>
          <img src={logo} alt="" />
        </div>
        <p>
          Copyright © 2020 by Physique Workshop Pvt.Ltd . All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footter;
