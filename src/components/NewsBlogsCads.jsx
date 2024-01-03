import React from "react";

function NewsBlogsCads({title,link,img,title2}) {
  return (
    <div>
      <div className=" flex flex-col    text-left gap-y-3">
        <div>
          <img src={img} className=" rounded-3xl" alt="" />
        </div>
        <h1 className=" text-black font-bold text-2xl">
         {title}
        </h1>
        <h1 className=" text-black font-bold text-2xl">
         {title2}
        </h1>
        <li className="  list-none ">
          <a className="text-red-600" href="">
          {link}
          </a>
        </li>
      </div>
    </div>
  );
}

export default NewsBlogsCads;
