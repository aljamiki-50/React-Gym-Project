import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="    w-[1320px]       ">
      <div className="  flex flex-row  items-center justify-between   ">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul
            className="flex  justify-around gap-x-8 mr-20  text-2xl roboto  font-bold  text-white
          "
          >
            <li>
              {" "}
              <Link to="/Services">plans</Link>
            </li>
            <li>Location</li>
            <li>News & Blogs</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
