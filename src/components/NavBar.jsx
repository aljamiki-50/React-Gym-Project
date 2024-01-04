import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

// w-[1320px]

function NavBar() {
  return (
    <div className=" absolute top-0 left-0   pt-10 px-4  w-screen      ">
      <div className="  flex flex-row  items-center justify-between   ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul
            className="flex  justify-around gap-x-8 text-2xl roboto  font-bold  text-white
          "
          >
            <li>
              {" "}
              <Link to="/ServicesLight">plans</Link>
            </li>
            <li>Location</li> 
            <li>  <Link to="/NewsBlogLight"> News & Blogs</Link></li>
            <li>  <Link to="/AboutUsLight"> About Us</Link></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
