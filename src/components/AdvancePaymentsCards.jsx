import React from "react";

function AdvancePaymentsCards({ title, title2, time1, time2, price1, price2,price3,num1,num2,num3 }) {
  return (
    <div className="  antialiased   w-fit  h-fit  bg-gray-900  py-10 px-8    rounded-3xl Poppins ">
      <div
        className=" flex justify-center text-4xl font-bold

          s:font-normal
        xl:justify-start xl:text-xl xl:gap-x-2 xl:font-extrabold  
       "
      >
        <h1 className=""> {title}</h1>
        <span> / </span>
        <h1 className=" xl:font-extrabold">{title2}</h1>
      </div>

      <ul className="  text-left  flex flex-col gap-y-10 mt-10 list-inside list-disc  ">
        <li
          className=" text-xl font-bold
       xl:flex xl:text-center xl:items-start xl:justify-between  xl:gap-x-2
      "
        >
          <span className=" font-bold">Subscription :</span>
          <ul
            className="  text-center 
             xl:gap-y-10
        "
          >
            <p>{num1} Months: £{price1} </p>
            <p>{num2} Months: £{price2} </p>
            <p>{num3} Months: £{price3} </p>
          </ul>
        </li>
        <li
          className=" text-xl font-bold s:text-center
         xl:flex xl:text-lg xl:items-center xl:gap-x-3
        "
        >
          <span> Availability:</span>
          <span>
            {" "}
            {time1} am to{time2} pm
          </span>
        </li>

        <li className=" text-xl font-bold   ">
          <span>Contract Type:</span>{" "}
          <span className=" s:grid  s:mx-auto s:text-center">Flexible</span>
        </li>
      </ul>
    </div>
  );
}

export default AdvancePaymentsCards;
