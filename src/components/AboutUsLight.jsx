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
    <div className="">
      <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div>

      <div>
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto "
            h1Style="text-4xl mt-10  text-black poppins font-bold    tracking-wide"
            text1="ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            text2
            title="Happy Clients"
          />
        </div>
        {/* <div>

        <AboutUsCards />

            
        </div> */}
        <div className="    text-black">
          <h1>
            <AboutSwiper />
          </h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUsLight;
