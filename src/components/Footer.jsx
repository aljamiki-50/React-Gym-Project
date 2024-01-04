import React from "react";
import logo from "../img/logo.png";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";

function Footer() {
  return (
    <div
      id="Footer"
      className=" bg-[#1A1A1A] absolute bottom-0 w-screen left-0   "
    >
      <div className=" grid grid-cols-3    w-[80%] mx-auto text-left  mt-10">
        <div className=" flex flex-col ring-4 ">
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
          <ul className=" Poppins flex flex-col ">
            <li>Sunday - Friday (6 AM - 8 PM)</li>
            <li>Saturday - (6 AM - 2 PM)</li>
            <li className=" fill-transparent  flex gap-x-7">
              {/* <span> */} <FaInstagram />
              {/* </span> */}
              {/* <span> */} <FaFacebookF />
              {/* </span> */}
              {/* <span> */} <FaTwitter />
              {/* </span> */}
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between mx-auto   w-[80%] mt-10">
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

export default Footer;
