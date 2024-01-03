import React from "react";
import Button from "./Button";
import AboutSwiper from "./AboutSwiper";
import OurlocationSwiper from "./OurlocationSwiper";

function OurLocation() {
  return (
    <div className="w-screen h-screen  bg-[#1A1A1A] absolute top-0 left-0 ">
      <div className="  flex   justify-center text-center align-middle mt-[20%] poppins  antialiased  gap-x-4">
        <div className=" flex flex-col  scale-125   text-left mt-6     w-[40%]  gap-y-10 poppins">
          <h1 className=" font-bold text-4xl ">Our location</h1>
          <p className=" w-[70%]">
            We are currently at 5 different locations. perspiciatis unde omnis
            iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventores
          </p>
          <Button
            btnStyle="
         hover:bg-[#C1272D] hover:scale-[1.10] hover:text-white poppins bg-[#C1272D] font-bold text-red-500  py-3 px-5    text-white ring-black   rounded-lg     cursor-pointer "
            children="Try a Free Trial"
          />
        </div>
        <div className="  text-center       w-[40%]  gap-y-10 poppins">
            <OurlocationSwiper /> 
        </div>
      </div>
    </div>
  );
}

export default OurLocation;
