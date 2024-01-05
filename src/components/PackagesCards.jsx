import React from "react";
import Button from "./Button";

function PackagesCards({ other, title, width, bg }) {
  const styles = [
    "336px",
    "btn-danger",
    "btn-Warning",
    "btn-success",
    "btn-info",
    "btn-light",
    "btn-dark",
    "btn-light",
    width,
    bg,
  ];

  const widthsize = styles.includes(width) ? width : styles[1];
  const divDec = styles.includes(bg) ? bg : styles[6];
  // console.log(widthsize);

  return (
    <div
      // style={{ width: widthsize }}
      className={` text-white  rounded-xl    w-[334px] ${divDec}     flex flex-col gap-y-7 bg-[#FFFFFF]

       xs:w-[100%] xs:flex-col    xs:align-top 
       md:w-[100%] md:flex-col    md:align-top 
       lg:w-[100%] lg:flex-col    lg:align-top 


      
      
     
      


       


       
    `}
    >
      <div
        className={`mt-20  flex flex-col gap-y-4 flex-end   text-left ml-10
         s:text-center  s:ml-0 
          xs:flex-row xs:align-center 
          md:flex-row md:align-center 

          lg:flex-row lg:align-center 

         
         
         `}
      >
        <div>
          <div className=" hidden">
            <h1 className=" text-4xl mb-3 text-black font-semibold
             s
            ">
              {title}{" "}
            </h1>
            <span>{other}</span>
          </div>{" "}
          <p className="   text-black text-3xl font-bold tracking-wide">
          Regular {title} :
          </p>
          <p className="  text-black font-bold ">Regular Membership :</p>
        </div>

        <ul className=" flex   flex-col text-xl text-black gap-4
         xs:flex-row
         md:flex-row
         lg:flex-row
        ">
          <li>Gym</li>
          <li>Gym & Cardio</li>
          <li>Gym</li>
        </ul>
      </div>
      <Button
        btnStyle="hover:bg-[#C1272D] hover:font-extrabold hover:text-cyan-400 bg-[#C1272D] text-[#C1272D]  px-10 py-4 
            rounded-xl font-bold  text-white ring-black        cursor-pointer
            s:mb-16 
            xs:py-3 xs:mb-10 xs:px-8
            md:py-3 md:mb-10 md:px-8
            lg:py-3 lg:mb-10 lg:px-8
          
           
             "
        children="Start a Free Trial"
      />{" "}
    </div>
  );
}

export default PackagesCards;
