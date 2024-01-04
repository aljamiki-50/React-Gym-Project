import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import logo from "../img/logo.png";

function Footter() {
  return (
    <div id="Fotter" className=" box-border   bg-[#1A1A1A]  w-full  ">
      <div className=" grid grid-cols-3     w-[80%] mx-auto text-left pt-9  mt-10">
        <div className=" flex flex-col ">
          <h1 className=" text-3xl font-bold Poppins">Pages</h1>
          <ul className=" Poppins flex flex-col ">
            <li>About Us</li>
            <li>Locations</li>
            <li>About Us</li>
            <li>Book a Free Trial</li>
            <li>Prices and Packages</li>
          </ul>
        </div>
        <div className=" flex flex-col text-left  gap-y-4">
          <h1 className=" text-3xl font-bold Poppins">Branches</h1>
          <ul className=" Poppins flex flex-col ">
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className=" flex flex-col text-left gap-y-8">
          <h1 className=" text-3xl font-bold Poppins">Openinnig Times</h1>
          <ul className=" Poppins flex flex-col gap-y-3 ">
            <li>Sunday - Friday (6 AM - 8 PM)</li>
            <li>Saturday - (6 AM - 2 PM)</li>
            <li className=" fill-transparent  flex gap-x-7">
              {/* <span> */}
              <a href="#">
                {" "}
                <FaInstagram />
              </a>
              {/* </span> */}
              {/* <span> */}
              <a href="#">
                {" "}
                <FaFacebookF />
              </a>
              {/* </span> */}

              {/* <span> */}
              <a href="#">
                {" "}
                <FaTwitter />
              </a>
              {/* </span> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mx-auto  pb-4  w-[80%] mt-10">
        <div>
          <img src={logo} alt="" />
        </div>
        <p>
          Copyright © 2020 by Physique Workshop Pvt.Ltd . All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footter;
