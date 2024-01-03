import React from "react";
import ExploreText from "./ExploreText";
import PackagesCards from "./PackagesCards";
import Button from "./Button";

function Packages() {
  return (
    <div className=" w-screen h-screen bg-[#1A1A1A] absolute top-0 left-0">
      <div>
        <ExploreText
          p1Style=" roboto text-xl font-bold pb-4 "
          h1Style="text-4xl  text-white font-semibold   tracking-wide"
          text1="Pricing built for people just like you."
          text2
          title="Packages and Pricing"
        />
      </div>
      <div>
        <div className=" flex gap-10 justify-center  ">
          <PackagesCards />
          <div
            // style=
            className=" text-white  rounded-xl poppins    h-[434px]  w-[703px]      flex flex-col gap-y-7 bg-[#303030] 
      "
          >
            <div
              className={`mt-20  flex flex-col gap-y-8 flex-end  w-[70%] text-left ml-10 `}
            >
              <div> 
                <div className=" flex  justify-between  w-[120%]  ">
                  <h1 className=" text-2xl mb-3 text-white font-semibold">
                    Day Time Membership :
                  </h1>
                  <span>
                    {" "}
                    <Button
                      btnStyle="
                      hover:bg-[#C1272D] hover:text-white poppins bg-white text-[#C1272D] text-red-500  py-2 px-10  ring-1  text-white ring-black   rounded-3xl     cursor-pointer "
                      children="RECOMMENDED"
                    />
                   
                  </span>
                </div>{" "}
                {/* <p className=" text-xl text-white font-semibold"></p> */}
              </div>

              <ul className=" grid grid-cols-2 text-xl text-white gap-y-5 ">
                <li>Gym</li>
                <li>Gym & Cardio</li>
                <li>Gym</li>
                <li>Gym & Cardio</li>
                <li>Gym</li>
                <li>Gym & Cardio</li>
              </ul>
            </div>
            <Button
              btnStyle="hover:bg-[#C1272D] hover:text-white  grid grid-start ml-10 poppins bg-white text-[#C1272D] text-red-500 px-14 py-2 ring-1  text-white ring-black   rounded     cursor-pointer "
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
