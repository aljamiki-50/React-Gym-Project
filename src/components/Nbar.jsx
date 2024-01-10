import React, { useEffect, useState } from "react";
import Logo from "../img/logo.png";
import bob from "../img/bob.jpg"
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
      // console.log(window.innerWidth);
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
    { name: "Barber Shop", path: "/BareberShop" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "News & Blogs", path: "Products" },
    // { name: "User", path: "/User" },
  ];

  return (
    <div className="   container w-screen  lg:fixed xl:fixed   lg:mt-6    xl:z-20 top-0  
      xl:mt-6
       ">
      <div
        className="    flex flex-row  items-center justify-between   text-center
         "
      >
        <div>
          <Link to="/">
          <img src={Logo} className="  w-[80px] h-[80px] ring-2 ring-white  rounded-[100%] object-fit text-center "   alt="" />
          </Link>
        </div>

        <div className="">
          <ul className={` flex items-center  gap-x-3   font-roboto      `}>
            {List.map((li) => (
              <Link to={li.path}>
                {buttonStatus && (
                  <LinksNbar
                    children={li.name}
                    path={li.path}
                    btnStyle="bg-white p-4 rounded-xl font-bold Poppins hover:text-slate-300"
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
           s:right-10 s:translate-x-0  s:scale-125 
        
           xs:right-20  xs:scale-150
           md:right-36   md:scale-[1.8]
            "
            onClick={swap}
          >
            {click ? <FaTimes /> : <FaBarsStaggered />}
          </li>
        )}
        <ul
          className={`${
            click ? "slide-in  " : "slide-out "
          } absolute  mt-[68px] right-0 top-0 w-[100%] z-20    flex flex-col   gap-y-24 pt-10 bg-[#1A1A1A] hover:bg-black hover:text-white text-center`}
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
