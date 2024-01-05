import React from "react";
import ExploreText from "./ExploreText";
import AboutSwiper from "./AboutSwiper";
// import ExploreText from "./ExploreText";
// import Logo from "../img/Logo.png";
// import trainer from "../img/trainer.png";
// import AboutSwiper from "./AboutSwiper";
// import AboutUsCards from "./AboutUsCards";

function AboutUsLight() {
  return (
    <div
      className="container w-screen  min-h-screen my-24
      lg:mb-96  lg:mt-[4%] 
    xl:mb-96  xl:mt-[4%] 
        "
    >
      <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div>
      {/* <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div> */}

      <div>
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto
             s:w-full s:text-left s:text-wrap s:font-semibold
              xs:text-wrap xs:font-semibold
             "
            h1Style="text-4xl mt-10  text-black poppins font-bold    tracking-wide
            s:w-full s:text-left s:text-wrap 
            xs:w-full xs:text-wrap 
            "
            text1="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text2
            title="Happy Clients :"
          />
        </div>
        {/* <div>

        <AboutUsCards />

            
        </div> */}
        <div className="    text-black

        
       
        ">
          <h1>
            <AboutSwiper />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUsLight;
