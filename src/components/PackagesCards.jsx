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
      className={` text-white  rounded-xl   w-[334px] ${divDec}      flex flex-col gap-y-7 bg-[#FFFFFF]
    `}
    >
      <div
        className={`mt-20  flex flex-col gap-y-4 flex-end   text-left ml-10 `}
      >
        <div>
          <div className="">
            <h1 className=" text-4xl mb-3 text-black font-semibold">
              {title}{" "}
            </h1>
            <span>{other}</span>
          </div>{" "}
          <p className="   text-black text-3xl font-bold tracking-wide">
            Regular :
          </p>
          <p className="  text-black font-bold ">Regular Membership :</p>
        </div>

        <ul className=" flex   flex-col text-xl text-black gap-4">
          <li>Gym</li>
          <li>Gym & Cardio</li>
          <li>Gym</li>
        </ul>
      </div>
      <Button
        btnStyle="hover:bg-[#C1272D] hover:text-white bg-[#C1272D]/10 text-[#C1272D] text-red-500 px-14 py-2 ring-1  text-white ring-black   rounded     cursor-pointer "
        children="Start a Free Trial"
      />{" "}
    </div>
  );
}

export default PackagesCards;
