import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OurLocation" element={<OurLocation />} />
        <Route path="/NewsBlogs" element={<NewsBlogs />} />
        <Route path="/Footer" element={<Footer />} />

        
      </Routes>
    </Router>
  </React.StrictMode>
);
