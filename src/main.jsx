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
import AboutUs from "./components/AboutUs.jsx";
import OurLocation from "./components/OurLocation.jsx";
import NewsBlogs from "./components/NewsBlogs.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";
import Test from "./test.jsx";
import testlight from "./testlight.jsx";
import TestLight from "./testlight.jsx";
import ServicesLight from "./ServicesLight.jsx";
import NewsBlogLight from "./NewsBlogLight.jsx";
import AboutUsLight from "./components/AboutUsLight.jsx";
import Prices from "./components/prices.jsx";
import Trainer from "./components/Trainer.jsx";
import Practioners from "./Practioners.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="/Services" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/AboutUs" element={<AboutUs />} /> */}
        {/* <Route path="/OurLocation" element={<OurLocation />} /> */}
        {/* <Route path="/NewsBlogs" element={<NewsBlogs />} /> */}
        {/* <Route path="/Footer" element={<Footer />} /> */}

        <Route path="/" element={<App />} />

        <Route element={<Layout />}>
          {/* <Route path=":test" element={<Test/>}/> */}
          <Route path="/price" element={<Prices />} />
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
  </React.StrictMode>
);
