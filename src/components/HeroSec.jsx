import React from "react";
import Button from "./Button";
// import main from "../img/main-bg.png"


function HeroSec() {
  return (
    <div 
    // style={{ backgroundImage:URL("./") }}
     className=" relative    mt-[200px] text-left font-bold antialiased  Poppins   flex flex-col ">
      {/* <img src={main} alt="" /> */}
      {/* <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div> */}
      <div className="  flex flex-col gap-y-8 text-left ">
        <h1 className=" text-6xl leading-[80px] ">
          <span className=" text-red-600">Experience</span> the Ultimate <br />{" "}
          Fitness Revolution
        </h1>
        <p className="  font-light text-white     ">
          Unleash your potential in our state-of-the-art facility, equipped with
          top-notch <br /> equipment and expert trainers. Join us on a journey
          to a stronger, healthier you. <br />
          Get started today!
        </p>
        <div className=" flex gap-x-4">
          <Button
            btnStyle="bg-[#C1272D] ring-1  ring-black  p-3 rounded xl "
            children="Try a Free Trial"
          />
          <Button
            btnStyle=" bg-transparent ring-1 ring-white p-3 rounded xl"
            children="Contact Us"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
