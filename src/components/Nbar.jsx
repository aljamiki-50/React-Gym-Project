import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LinksNbar from "./LinksNbar";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

//

function Nbar() {
  const navigate = useNavigate();

  const closeMobileMenue = () => setClick(false);

  const swap = () => setClick(!click);
  const [click, setClick] = useState(false);

  const [height, setHeight] = useState(window.innerHeight);

  // import my links navbar here as a navbar to
  const [buttonStatus, setButtonStatus] = useState(true);
  function btnOff() {
    if (window.innerWidth <= 960) {
      setButtonStatus(false);
      console.log(window.innerWidth);
    } else {
      setButtonStatus(true);
      // console.log("it's been set to true");
    }
  }
  useEffect(() => {
    // Call btnOff initially
    btnOff();
    // Add event listener for window resizing
    window.addEventListener("resize", btnOff);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", btnOff);
    };
  }, []);

  const goToFooter = () => {
    history.push("/fotter"); // Replace '/footer' with the actual path of your footer page
  };

  // my list for the menu :
  const List = [
    { name: "plans", path: "/ServicesLight" },
    { name: "Location", path: "/OurLocation" },
    { name: "News & Blogs", path: "/NewsBlogLight" },
    { name: " About Us", path: "/AboutUsLight" },
    { name: "Contact Us", path: "Contact Us" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "User", path: "/User" },
  ];

  return (
    <div className=" container w-screen   ">
      <div className="   flex flex-row  items-center justify-between    ">
        <div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        {/* <div  className="ring-4">
          <ul
            className="flex    justify-around gap-x-8 text-2xl roboto  font-bold  text-white
          "
          >
            <li>
              {" "}
              <Link to="/ServicesLight">plans</Link>
            </li>
            <li>
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
            <li onClick={goToFooter}> Contact Us</li>
          </ul>
        </div> */}
        <div className="">
          <ul className={` flex items-center  gap-x-3   font-roboto      `}>
            {List.map((li) => (
              <Link to={li.path}>
                {buttonStatus && (
                  <LinksNbar
                    children={li.name}
                    path={li.path}
                    btnStyle="btn-dark"
                    onClick={closeMobileMenue}
                  />
                )}
              </Link>
            ))}
            {/* {button && (
              <Button
                btnStyle="btn btn-light    hover:text-white  hover:bg-black font-roboto fs-3 fw-meduim"
                children="Sign-Up"
              />
            )} */}
          </ul>
        </div>
        {!buttonStatus && (
          <li className=" absolute right-2  " onClick={swap}>
            {click ? <FaTimes /> : <FaBarsStaggered />}
          </li>
        )}
        <ul
          className={`${
            click ? "slide-in  " : "slide-out "
          } absolute  mt-[68px] right-0 top-0 w-[100%] z-20    flex flex-col   gap-y-24 pt-10 bg-black hover:bg-black hover:text-white text-center`}
          style={{ height: `${height}px` }}
        >
          {List.map((li) => (
            <Link to={li.path}>
              <LinksNbar
                path={li.path}
                children={li.name}
                btnStyle="  bg-transparent  btn btn-light text-light "
                onClick={closeMobileMenue}
              />
            </Link>
          ))}
          {/* <li>
            <Button
              btnStyle="btn btn-light  hover:text-white  hover:bg-black font-roboto fs-3 fw-meduim"
              children="Sign-Up"
              onClick={closeMobileMenue}
            />
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Nbar;
