import React from "react";

function MemberShipsCard(
{ title ,
title2 ,
time1 ,
time2 ,
price,
tit
  }) {
  return (
    <div
      className="  antialiased   w-fit  h-fit  bg-gray-900  py-10 px-8    rounded-3xl Poppins 
  "
    >
      <div
        className=" flex justify-center text-4xl font-bold
     s:text-xl 
     "
      >
        <h1>{title}</h1>
        <span> / </span>
        <h1> {tit}</h1>
      </div>

      <ul className="  text-left  flex flex-col gap-y-10 mt-10 list-inside list-disc  ">
        <li
          className=" text-xl font-bold xl:flex
        
        "
        >
          <span>Subscription Period:</span>
          <span className=" text-center flex justify-center">
            {" "}
            Per {title2}
          </span>

        </li>
        <li className=" text-xl font-bold">
          <span>Time Availability:</span>
          <span>
            {time1} am to{time2} pm
          </span>
        </li>
        <li className=" text-xl font-bold">
          <span>Price: £{price}</span>
          <span> Per {title2}</span>
        </li>
        <li className=" text-xl font-bold">
          <span>Contract Type:</span> <span>Flexible</span>
        </li>
      </ul>
    </div>
  );
}

export default MemberShipsCard;
