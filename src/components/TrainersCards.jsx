import React from "react";
import trainer2 from "../img/trainer2.jpg";
import { FaInstagram } from "react-icons/fa";

function TrainersCards({
  img,
  name,
  role,
  Qualification,
  about,
  Email,
  Number,
  Instgram,
}) {
  return (
    <div className=" mt-4">
      <div
        className=" 
      gx:grid gx:grid-cols-1  gx:justify-center gx:mx-auto  gx:gap-y-10
    s:grid s:grid-cols-1  s:justify-center s:mx-auto  s:gap-y-10
    xs:grid xs:grid-cols-1  xs:justify-center xs:mx-auto  xs:gap-y-10 xs:mb-80
    md:grid md:grid-cols-1  md:justify-center md:mx-auto  md:gap-y-10 md:mb-[450px]
    lg:grid lg:grid-cols-1  lg:justify-center lg:mx-auto  lg:gap-y-10 lg:mb-[400px]
    xl:grid xl:grid-cols-2  xl:mt-10 
     "
      >
        {" "}
        <div
          className=" w-[80%] h-[40%]
       s:w-full
        xs:w-full
       md:w-full
       lg:w-full
        
      
      "
        >
          <img src={img} className="  rounded-xl  " alt="" />
        </div>
        <div className="  Poppins text-left flex  flex-col gap-y-2   ">
          <h1
            className=" roboto 
       gx:font-extrabold  gx:text-3xl
       s:font-extrabold  s:text-5xl
       xs:font-extrabold  xs:text-5xl
       md:font-extrabold  md:text-5xl
       lg:font-extrabold  lg:text-5xl
        xl:font-extrabold  xl:text-5xl xl:text-slate-300
        "
          >
            {name}
          </h1>
          <h1
            className="
          gx:font-bold  gx:text-base
          s:font-bold  s:text-xl
          xs:font-bold  xs:text-xl
          md:font-bold  md:text-xl
          lg:font-bold  lg:text-xl
        xl:font-bold  xl:text-3xl xl:text-slate-300

        "
          >
            {role}
          </h1>

          <h2
            className=" 
          gx:font-bold  gx:text-2xl
          s:font-bold  s:text-3xl
          xs:font-bold  xs:text-3xl
          md:font-bold  md:text-3xl
          lg:font-bold  lg:text-3xl
         xl:font-bold  xl:text-3xl xl:text-slate-300
         "
          >
            Qualifications :
          </h2>
          <ul>
            <li className="  text-justify">{Qualification}</li>
            {Email ||
              (Number && (
                <>
                  <li
                    className="  
                  gx:font-bold  gx:text-3xl    
                  xs:font-bold  xs:text-3xl 
                  lg:font-bold  lg:text-3xl

                    xl:font-bold  xl:text-3xl xl:flex xl:gap-x-2  xl:items-center
"
                  >
                    <span> Email:</span> <span className="   "> {Email}</span>
                  </li>
                  <li
                    className="       
                  gx:font-bold  gx:text-3xl 
                  xs:font-bold  xs:text-3xl    
                  md:font-bold  md:text-3xl    
                  lg:font-bold  lg:text-3xl    
                     xl:font-bold  xl:text-3xl xl:text-slate-300 xl:flex xl:gap-x-2 xl:items-center
"
                  >
                    <span> Phone numeber:</span> <span> {Number}</span>
                  </li>
                </>
              ))}
          </ul>
          <h2
            className="
          gx:font-bold  gx:text-3xl
            s:font-bold  s:text-3xl
            xs:font-bold  xs:text-3xl
            md:font-bold  md:text-3xl
            lg:font-bold  lg:text-3xl
         xl:font-bold  xl:text-3xl xl:text-slate-300
        "
          >
            About Me :
          </h2>
          <p className=" text-justify">{about}</p>
        </div>
      </div>
    </div>
  );
}

export default TrainersCards;
