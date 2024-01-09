import React from "react";
import BarberPerson from "../img/BarberPerson.jpg";
import BarberPerson2 from "../img/BarberPerson2.jpg";
import barber1 from "../img/barber1.jpg";
import Button from "./Button";

function BarberCard({ Image, Name }) {
  return (
    <div
      className="w-[100%]
      mb-10
         xs:gap-y-10 
         md:gap-y-10 
         lg:gap-y-10 
         xl:flex  xl:flex-col xl:items-center xl:text-center  xl:gap-y-5 
          "
    >
      {" "}
      <div className=" xl:flex   xl:justify-evenly xl:items-center">
        {" "}
        <p className="w-[40%] hidden xl:flex ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          commodi hic, rerum beatae dolores consequuntur laboriosam molestias
          adipisci debitis nemo, accusamus sint magni delectus vero, sequi animi commodi hic, rerum beatae dolores consequuntur laboriosam molestias
          adipisci debitis nemo, accusamus sint magni delectus vero, sequi animi commodi hic, rerum beatae dolores consequuntur laboriosam molestias
          adipisci debitis nemo, accusamus sint magni delectus vero, sequi animi
          corporis eius unde.
        </p>
        <img src={Image} alt="" className="xl:w-[20%] w-[100%]rounded-xl" />
      </div>
      <h1 className=" text-2xl font-bold"> {Name}</h1>
      <Button
        btnStyle="bg-white hover:bg-slate-400 hover:text-white   text-cyan-700 ring-black font-bold   p-4 mt-2 
            md:rounded-lg
            lg:rounded-lg
            s:rounded-lg
            gx:rounded-lg "
        children="Book A Time"
      />
    </div>
  );
}

export default BarberCard;
