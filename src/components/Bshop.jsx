import React from "react";
import product1 from "../img/product1.jpg";
import product2 from "../img/product2.jpg";
import product3 from "../img/product3.jpg";
import Button from "./Button";

function Bshop() {
  return (
    <div
      className=" min-h-full  bg-cyan-600/10
       s:h-auto s:mt-10 s:flex s:flex-col s:gap-y-7
       xs:my-10
       md:my-40
       lg:my-40
       xl:my-40 xl:mb-[410px] xl:flex xl:flex-col xl:gap-y-10
       "
    >
      <div className=" absolute top-0 left-0 bg-[#1A1A1A] w-screen min-h-full -z-10" />

      <h1
        className=" 
            s:text-center s:font-bold s:text-5xl  s:flex s:flex-col Poppins
            xs:text-center xs:font-bold xs:text-6xl  xs:flex xs:flex-col 
            md:text-center md:font-bold md:text-6xl  md:flex md:flex-col 
            lg:text-center lg:font-bold lg:text-6xl  lg:flex lg:flex-col 
            xl:text-left xl:font-bold xl:text-7xl xl:text-white  xl:flex xl:flex-col  "
      >
        Explore our shop :
      </h1>
      <div
        className=" 
            xl:grid xl:grid-cols-3 xl:items-center "
      >
        <div className=" xl:flex xl:flex-col xl:gap-y-2 xl:items-center
           s:gap-y-10
        ">
          <img src={product1} alt="" className=" xl:rounded-xl xl:w-[60%] " />
          <h1 className=" xl:font-bold xl:text-3xl  text-cyan-500/80 
           s:text-3xl 
          ">
            Lout name Paste
          </h1>
          <p className="xl:font-semibold xl:text-xl xl:w-[50%] xl:text-justify  text-white/80">
            One of our nice Product here - to provide you with the best outburst
            look
          </p>
          <h3 className=" text-4xl font-bold text-green-500">17 £</h3>
          <Button
            btnStyle="
             bg-[#4e524f]   text-white hover:text-slate-400  font-bold   p-4 mt-2  
            s:rounded-lg
            gx:rounded-lg
            md:rounded-lg
            lg:rounded-lg
            xl:text-bold xl:text-wide xl:text-3xl
             "
            children="More Details "
          />
        </div>
        {/* 2nd card for the other one   */}
        <div className=" xl:flex xl:flex-col xl:gap-y-2 xl:items-center">
          <img src={product2} alt="" className=" xl:rounded-xl xl:w-[60%] " />
          <h1 className=" xl:font-bold xl:text-3xl  text-cyan-500/80 ">
            Lout name Paste
          </h1>
          <p className="xl:font-semibold xl:text-xl xl:w-[50%] xl:text-justify  text-white/80">
            One of our nice Product here - to provide you with the best outburst
            look
          </p>
          <h3 className=" text-4xl font-bold text-green-500">17 £</h3>
          <Button
            btnStyle="
             bg-[#4e524f]   text-white hover:text-slate-400  font-bold   p-4 mt-2  
            s:rounded-lg
            gx:rounded-lg
            md:rounded-lg
            lg:rounded-lg
            xl:text-bold xl:text-wide xl:text-3xl
             "
            children="More Details "
          />
        </div>
        {/*  */}

        <div className=" xl:flex xl:flex-col xl:gap-y-2 xl:items-center">
          <img src={product3} alt="" className=" xl:rounded-xl xl:w-[60%] " />
          <h1 className=" xl:font-bold xl:text-3xl  text-cyan-500/80 ">
            Lout name Paste
          </h1>
          <p className="xl:font-semibold xl:text-xl xl:w-[50%] xl:text-justify  text-white/80">
            One of our nice Product here - to provide you with the best outburst
            look
          </p>
          <h3 className=" text-4xl font-bold text-green-500">17 £</h3>
          <Button
            btnStyle="
             bg-[#4e524f]   text-white hover:text-slate-400  font-bold   p-4 mt-2  
            s:rounded-lg
            gx:rounded-lg
            md:rounded-lg
            lg:rounded-lg
            xl:text-bold xl:text-wide xl:text-3xl
             "
            children="More Details "
          />
        </div>
      </div>
    </div>
  );
}

export default Bshop;
