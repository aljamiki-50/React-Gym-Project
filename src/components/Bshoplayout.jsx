import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Test from "../test";
import Nbar from "./Nbar";
import Footter from "./Footter";
import DarNavBar from "./DarNavBar";
import Shopnbar from "./Shopnbar";

function Bshoplayout() {
  return (
    <>
      <Shopnbar />
      <div>
        <Outlet />
      </div>
      <Footter />
    </>
  );
}

export default Bshoplayout;
