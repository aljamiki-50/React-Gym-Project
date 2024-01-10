import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import bob from "../img/bob.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LinksNbar from "./LinksNbar";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

function Shopnbar() {
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
      console.log("it's been set to true");
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
    { name: "Service", path: "/BshopServices" },
    { name: "Shop", path: "/Bshop" },
    { name: " Blogs", path: "/BshopBlog" },
    { name: " About Us", path: "/BshopAboutUs" },
    { name: "Fitness", path: "/" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "User", path: "/User" },
  ];
  return (
    <div
      className="   container w-screen top-0   left-[5%] right-[5%]     grid items-center
       lg:mt-6  lg:fixed
      xl:mt-6   xl:z-20 xl:fixed  
       "
    >
      <div
        className="   z-10   flex flex-row  items-center justify-between   text-center
         "
      >
        <div>
          <Link to="/BareberShop">
            <img
              src={bob}
              className=" w-[80px] h-[80px] ring-2 ring-white  rounded-[100%] object-fit text-center "
              alt=""
            />
          </Link>
        </div>

        <div className="">
          <ul className={` flex items-center  gap-x-3   font-roboto      `}>
            {List.map((li, index) => (
              <Link key={index} to={li.path}>
                {buttonStatus && (
                  <LinksNbar
                    key={index}
                    children={li.name}
                    path={li.path}
                    btnStyle="bg-black text-white tracking-wide  p-4 rounded-xl font-bold Poppins hover:text-slate-300"
                    onClick={closeMobileMenue}
                  />
                )}
              </Link>
            ))}
          </ul>
        </div>
        {!buttonStatus && (
          <li
            className=" list-none absolute right-2
           gx:right-20 gx:translate-x-12 gx:scale-150 
           s:right-10 s:translate-x-0  s:scale-125  p-10 
        
           xs:right-20  xs:scale-150
           md:right-36   md:scale-[1.8] z-10
            "
            onClick={swap}
          >
            {click ? <FaTimes /> : <FaBarsStaggered />}
          </li>
        )}
        <ul
          className={`${
            click ? "slide-in  " : "slide-out "
          } absolute  mt-[100px] right-0 top-0 w-[100%]  z-20    flex flex-col   gap-y-24 pt-10 bg-[#1A1A1A] hover:bg-black hover:text-white text-center`}
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
        </ul>
      </div>
    </div>
  );
}

export default Shopnbar;
