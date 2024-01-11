import React from "react";
import member from "./img/membership.png";
import trainers from "./img/trainers.png";
import certifcate from "./img/certifcate.png";
import { Link, useLocation } from "react-router-dom";
import Cards from "./components/Cards";
import Button from "./components/Button";
import ExploreText from "./components/ExploreText";

function ServicesLight() {
  // console.log(useLocation().pathname);

  return (
    <div
      className=" box-border container mx-auto  w-screen
    gx:grid gx:grid-cols-1 gx:gap-y-3 
     s:grid s:grid-cols-1 s:gap-y-3  
    lg:mb-[400px] lg:mt-[12%]
    xl:my-40 xl:mb-[400px]

      "
    >
      <div className=" absolute top-0 left-0 bg-slate-200 w-screen   -z-10" />
      <ExploreText
        text1=" Unleash your potential in our state-of-the-art facility, equipped
    with"
        text2=" top-notch equipment and expert trainers. Join us on a journey to."
        title=" Explore Our Services"
        h1Style="text-4xl  text-black font-semibold   tracking-wide "
        p1Style="text-black"
      />
     
      <div
        className=" grid  grid-cols-3  gap-x-3 align-center mt-5  

        gx:grid-cols-1 gx:gap-y-3 
       s:grid-cols-1 s:gap-y-3 

        "
      >
        <Cards
          img={member}
          title="Universal Membership"
          p="1 Membership 5 gyms, with a single membership you can train at all of our branches as your prefer."
          link="/price"
        />
        <Cards
          img={trainers}
          title="Specialist Practitioner"
          p="We provide a fully customized nutrition and training program according to your personal goals."
          link="/Practioners"
        />
        <Cards
          img={certifcate}
          title=" Certified Trainers"
          p="Bring to the table win survival
       strategies ensure proactive
       new domination.."
          link="/Trainer"
        />
      </div>
      <Link className=" " to="/Packages">
        <Button
          btnStyle="bg-[#C1272D]  text-white ring-black font-bold   p-4 mt-2 
          s:rounded-lg
           gx:rounded-lg "
          children="Try a Free Trial"
        />
      </Link>
       <div className=" s:hidden gx:hidden rounded-xl w-full p-[30%] m-10 mx-auto bg-cyan-800/50 hidden ">
        <h1 className=" text-4xl font-bold">An offer or  a Promo sec here </h1>
       </div>
    </div>
  );
}

export default ServicesLight;
