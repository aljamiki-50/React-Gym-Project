import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

// import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HeroSec from "./components/HeroSec.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Services from "./components/Services.jsx";
import Packages from "./components/Packages.jsx";
import OurLocation from "./components/OurLocation.jsx";
import NewsBlogs from "./components/NewsBlogs.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";
import Test from "./test.jsx";

import ServicesLight from "./ServicesLight.jsx";
import NewsBlogLight from "./NewsBlogLight.jsx";
import AboutUsLight from "./components/AboutUsLight.jsx";
import Prices from "./components/prices.jsx";
import Trainer from "./components/Trainer.jsx";
import Practioners from "./Practioners.jsx";
import BareberShop from "./components/BareberShop.jsx";
import Bshoplayout from "./components/Bshoplayout.jsx";
import BshopFindus from "./components/BshopFindus.jsx";
import BshopServices from "./components/BshopServices.jsx";
import BshopAboutUs from "./components/BshopAboutUs.jsx";
import Bshop from "./components/Bshop.jsx";
import BshopBlog from "./BshopBlog.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/BareberShop" element={<BareberShop />} />
        <Route element={<Bshoplayout />}>
          <Route path="/BareberShop" element={<BareberShop />} />
          <Route path="/BshopFindus" element={<BshopFindus />} />
          <Route path="/BshopServices" element={<BshopServices />} />
          <Route path="/BshopAboutUs" element={<BshopAboutUs />} />
          <Route path="/Bshop" element={<Bshop />} />
          <Route path="/BshopBlog" element={<BshopBlog />} />
        </Route>
        <Route element={<Layout />}>
          {/* <Route path=":test" element={<Test/>}/> */}
          <Route path="/price" element={<Prices />} />
          {/* <Route path="/BareberShop" element={<BareberShop />} /> */}
          <Route path="/Trainer" element={<Trainer />} />
          <Route path="/Practioners" element={<Practioners />} />
          <Route path="/ServicesLight" element={<ServicesLight />} />
          <Route path="/NewsBlogLight" element={<NewsBlogLight />} />
          <Route path="/AboutUsLight" element={<AboutUsLight />} />
          <Route path="/OurLocation" element={<OurLocation />} />
          <Route path="/Packages" element={<Packages />} />
        </Route>
      </Routes>
    </Router>
  </>
);
