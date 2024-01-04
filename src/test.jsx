import React from "react";
import member from "./img/membership.png";
import trainers from "./img/trainers.png";
import certifcate from "./img/certifcate.png";
import { Link, useLocation } from "react-router-dom";
import Cards from "./components/Cards";
import Button from "./components/Button";
import ExploreText from "./components/ExploreText";

function Test() {

    // console.log(useLocation().pathname);

  return (
    <div className=" w-screen container mt-10  ">
        <di className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></di>
      <ExploreText
        text1=" Unleash your potential in our state-of-the-art facility, equipped
    with"
        text2=" top-notch equipment and expert trainers. Join us on a journey to."
        title=" Explore Our Services"
        h1Style="text-4xl  text-black font-semibold   tracking-wide "
        p1Style="text-black"
      />
      <div className=" grid  grid-cols-3  gap-x-3 align-center mt-5   ">
        <Cards
          img={member}
          title="Universal Membership"
          p="1 Membership 5 gyms, with a single membership you can train at all of our branches as your prefer."
        />
        <Cards
          img={trainers}
          title="Customized Training"
          p="We provide a fully customized nutrition and training program according to your personal goals."
        />
        <Cards
          img={certifcate}
          title=" Certified Trainers"
          p="Bring to the table win survival
       strategies ensure proactive
       new domination.."
        />
      </div>
      <Link className=" " to="/Packages">
        <Button
          btnStyle="bg-[#C1272D] ring-1  text-white ring-black  p-3 rounded xl "
          children="Try a Free Trial"
        />
      </Link>

      
    </div>
  );
}

export default Test;
