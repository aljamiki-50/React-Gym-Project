import React from "react";
import Button from "./Button";

function HeroSec() {
  return (
    <div className=" relative bg   mt-[200px] text-left font-bold antialiased  Poppins   flex flex-col ">
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
