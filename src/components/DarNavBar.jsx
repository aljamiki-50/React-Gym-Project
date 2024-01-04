import React from "react";
import Logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function DarNavBar() {
  const navigate = useNavigate();

  // console.log(navigate);

  const goToFooter = () => {
    history.push("/fotter"); // Replace '/footer' with the actual path of your footer page
  };
  return (
    <div
      //   theme={pageTheme}
      className="  flex flex-row  items-center justify-between bg-[#1A1A1A] py-3  px-4   "
    >
      <div>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
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
          <li>
            {" "}
            <Link to="/OurLocation">Location</Link>
          </li>
          <li>
            {" "}
            <Link to="/NewsBlogLight"> News & Blogs</Link>
          </li>
          <li>
            {" "}
            <Link to="/AboutUsLight"> About Us</Link>
          </li>
          <li>
            <Link to="#Fotter" onClick={goToFooter}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DarNavBar;
