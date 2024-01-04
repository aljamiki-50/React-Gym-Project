import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Test from "../test";
import Nbar from "./Nbar";
import Footter from "./Footter";
import DarNavBar from "./DarNavBar";

function Layout() {
  const location = useLocation();
  const isTestPage = location.pathname.toLowerCase().includes("light");
  //   const isTestPage = location.pathname.toLowerCase().includes("light");

  const PageTheme = isTestPage ? <DarNavBar /> : <Nbar />;

  console.log(isTestPage);

  return (
    <>
      {isTestPage ? <DarNavBar /> : <Nbar />}

      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
      <Footter />
    </>
  );
}

export default Layout;
