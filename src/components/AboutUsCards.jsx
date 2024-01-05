import React from "react";
import Logo from "../img/logo.png";
import trainer from "../img/trainer.png";

function AboutUsCards() {
  return (
    <div
      className=" flex  justify-center ring-1/50   ring-black mx-24  gap-x-3  align-middle  text-center  
     s:flex-col-reverse s:mx-0 s:gap-x-0
    xs:flex-row-reverse  xs:mx-0 xs:gap-x-0
    md:flex-row-reverse  md:mx-0 md:gap-x-0 md:items-center md:mb-4
    lg:flex-row-reverse  lg:mx-0 lg:gap-x-0 lg:items-center lg:mb-4


      "
    >
      <div
        className="  text-left pl-10 flex flex-col gap-y-10 w-[30%]
       s:w-[100%] s:items-center s:gap-y-5
       xs:w-[100%] xs:items-center xs:gap-y-5 xs:flex-col-reverse
       md:w-[100%] md:items-center md:gap-y-0  md:flex-col-reverse   md:grid   md:grid-cols-1  
       lg:w-[100%] lg:items-center lg:gap-y-0  lg:flex-col-reverse   lg:grid   lg:grid-cols-1  



       "
      >
        {/* <div className="   "> */}
        <img
          src={Logo}
          className="  bg-black  w-20 h-20 object-contain  rounded-[1000%]  mt-10 ring-1 
          md:order-3
          lg:order-3

           "
          alt=""
        />

        {/* </div> */}
        <p
          className=" w-[80%] text-[#6D6D6D]
        s:w-full s:text-lg s:font-bold s:tracking-wide
        xs:w-full xs:text-lg xs:font-bold xs:tracking-wide
        md:order-2
        lg:order-2

         "
        >
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis no.
        </p>
        <div
          className="
        gx:mb-10
         s:mb-10    s:grid grid-cols-1 s:self-start
         xs:mb-10    xs:grid grid-colxs-1 xs:self-start
         md:mb-10    md:grid grid-colxs-1 md:self-start md:order-1
         lg:mb-10    lg:grid grid-colxs-1 lg:self-start lg:order-1


         


        "
        >
          <h1 className=" text-black poppins font-bold text-2xl  ">
            Sara Thompson
          </h1>
          <p className=" poppins font-bold text-xl text-[#6D6D6D]">
            Athletics, Trainer
          </p>
        </div>
      </div>
      <div className=" s:w-full xs:w-full md:w-full lg:w-full">
        <img src={trainer} className=" s:w-full xs:w-full  md:w-full  lg:w-full" alt="" />
      </div>
    </div>
  );
}

export default AboutUsCards;
