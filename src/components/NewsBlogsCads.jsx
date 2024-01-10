import React from "react";

function NewsBlogsCads({ title, link, img, title2 }) {
  return (
    <div className=" w-[70%]  ">
      <div
        className=" flex flex-col text-left gap-y-3
         gx:text-center gx:pb-4
         s:text-center s:pb-4
          xl:gap-y-1

         
      "
      >
        <div>
          <img src={img} className=" rounded-3xl ring-1" alt="" />
        </div>
        <h1 className="  text-amber-900 font-bold text-2xl s:text-xl ">{title}</h1>
        <h1 className=" text-black font-bold text-2xl s:hidden ">{title2}</h1>
        <li className="  list-none  text-white font-bold tracking-wide ">{link}</li>
      </div>
    </div>
  );
}

export default NewsBlogsCads;
