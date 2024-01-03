import React from "react";
import ExploreText from "./ExploreText";
import Logo from "../img/Logo.png";
import trainer from "../img/trainer.png";

function AboutUs() {
  return (
    <div className=" absolute bg-[#E5E5E5] top-0 left-0 w-screen h-screen">
      <div>
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto "
            h1Style="text-4xl  text-black poppins font-bold    tracking-wide"
            text1="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text2
            title="Happy Clients"
          />
        </div>
        <div className=" flex  justify-center gap-x-3  align-middle  text-center   ">
          <div className="  text-left pl-10 flex flex-col gap-y-10 w-[30%] ">
            {/* <div className="   "> */}
            <img src={Logo} className="  bg-black  w-20 h-20 object-contain  rounded-[1000%]  mt-10 ring-1 "   alt="" />

            {/* </div> */}
            <p className=" w-[80%] text-[#6D6D6D] ">
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis no.
            </p>
            <div>
              <h1 className=" text-black poppins font-bold text-2xl">Sara Thompson</h1>
              <p className=" poppins font-bold text-xl text-[#6D6D6D]">Athletics, Trainer</p>
            </div>
          </div>
          <div >
            <img src={trainer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
