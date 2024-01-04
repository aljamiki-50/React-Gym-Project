import React from "react";
import Button from "./Button";
import vid from "../img/promo.mp4";
import Video from "./Video";
// import main from "../img/main-bg.png"

function HeroSec() {
  return (
    <div
      className=" relative container flex flex-col items-center   w-screen h-screen  text-center font-bold antialiased  Poppins     "
    >
      {/* <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div> */}
      <div className="   w-screen container px-28  mt-2 mx-auto text-center">
        <Video />
       
      </div>
      <div className="   flex flex-col text-centers ">
        <h1 className=" flex text-5xl leading-[80px] ">
          <span className=" text-red-600">Experience</span> the Ultimate <br className=" xl:hidden" />{" "}
          Fitness Revolution
        </h1>
        <p className="   font-light text-white  hidden  justify-center    ">
          Unleash your potential in our state-of-the-art facility, equipped with
          top-notch <br /> equipment and expert trainers. Join us on a journey
          to a stronger, healthier you. <br />
          Get started today!
        </p>
        <div className=" flex  justify-between gap-x-4">
          <Button
            btnStyle="bg-[#C1272D]   ring-black  text-white  bg-red-900  p-3 rounded xl "
            children="Try a Free Trial"
          />
          <Button
            btnStyle=" bg-transparent text-white  bg-red-900 ring-white p-3 rounded xl"
            children="Contact Us"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
