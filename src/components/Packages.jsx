import React from "react";
import ExploreText from "./ExploreText";
import PackagesCards from "./PackagesCards";
import Button from "./Button";

function Packages() {
  return (
    <div
      className=" container w-screen  min-h-screen mt-24
    xs:mt-0
    md:mt-0
    xs:mb-32 
     xl:mb-32 
     
     "
    >
      {/* <div className=" absolute top-0 left-0  bg-[#1A1A1A] w-screen h-screen -z-10" /> */}

      <div>
        <ExploreText
          p1Style=" roboto text-xl font-bold pb-4 "
          h1Style="text-4xl  text-white font-semibold   tracking-wide"
          text1="Pricing built for people just like you."
          text2
          title="Packages and Pricing"
        />
      </div>

      

      <div className=" ">
        <div
          className=" flex gap-10 justify-center
           s:flex-col s:mx-auto s:items-center
           xs:flex-col-reverse xs:mx-auto xs:items-center xs:gap-y-3
           md:flex-col-reverse md:mx-auto md:items-center md:gap-y-3 
 
           lg:flex-col-reverse lg:mx-auto lg:items-center lg:gap-y-3 


          "
        >
          
          <PackagesCards />
          
          <div
            // style=
            className=" text-white    rounded-xl poppins    h-[434px]  w-[703px]      flex flex-col gap-y-7 bg-[#303030] 
                       s:w-[334px]   s:justify-center s:text-center s:h-[534px] s:mx-auto  s:container 
      "
          >
            <div
              className={`mt-20  flex flex-col gap-y-8 flex-end  w-[70%] text-left ml-10
               s:mt-0 s:gap-y-10 
              
               `}
            >
              <div>
                <div
                  className=" flex  justify-between  w-[120%]
                s:flex-col s:w-full  s:text-center  "
                >
                  <h1
                    className=" text-2xl mb-3 text-white font-semibold
                   s:text-xl s:font-bold
                  "
                  >
                    Day Time Membership :
                  </h1>
                  <span>
                    {" "}
                    <Button
                      btnStyle="
                      hover:bg-[#C1272D] hover:text-cyan-400 poppins bg-[#C1272D] text-[#C1272D] text-red-500  py-3   px-10 s:px-6    text-white ring-black   rounded-3xl     cursor-pointer "
                      children="RECOMMENDED"
                    />
                  </span>
                </div>{" "}
                {/* <p className=" text-xl text-white font-semibold"></p> */}
              </div>

              <ul
                className=" grid grid-cols-2 text-xl text-white gap-y-5
               s:gap-y-3 s:text-pretty s:text-lg s:gap-x-0
               "
              >
                <li>Gym</li>
                <li>Gym & Cardio</li>
                <li>Gym</li>
                <li>Gym & Cardio</li>
                <li>Gym</li>
                <li>Gym & Cardio</li>
              </ul>
            </div>
            <Button
              btnStyle="hover:bg-[#C1272D] bg-[#C1272D] hover:text-cyan-400 hover:text-extrabold  grid grid-start ml-10
               poppins  text-[#C1272D] text-red-500 px-14 py-2  rounded-xl text-center font-bold  text-white ring-black   rounded     cursor-pointer
               s:ml-0  s:px-6 s:py-2 s:inline-flex  s:mx-auto  s:mx-auto  s:items-baseline
               xs:ml-0  xs:px-6 xs:py-2 xs:inline-flex  xs:mx-auto  xs:mx-auto  xs:items-baseline
               md:ml-0  md:px-6 md:py-2 md:inline-flex  md:mx-auto  md:mx-auto  md:items-baseline

               lg:ml-0  lg:px-6 lg:py-2 lg:inline-flex  lg:mx-auto  lg:mx-auto  lg:items-baseline


                "
              children="Choose plan ($200)"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Packages;
