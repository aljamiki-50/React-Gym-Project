import React from "react";
import Cards from "./Cards";
import member from "../img/membership.png";
import trainer from "../img/trainers.png";
import certifcate from "../img/certifcate.png";
import Button from "./Button";
import { Link } from "react-router-dom";
import ExploreText from "./ExploreText";

function Services() {
  return (
    <div className=" w-screen h-screen bg-[#E5E5E5] absolute top-0 left-0 ">
      <ExploreText
        text1=" Unleash your potential in our state-of-the-art facility, equipped
      with"
        text2=" top-notch equipment and expert trainers. Join us on a journey to."
        title=" Explore Our Services"
        h1Style="text-4xl  text-black font-semibold   tracking-wide "
        p1Style="text-black"
      />
      <div className="  mt-10 p-20 grid  grid-cols-3  gap-x-3 align-center  ">
        <Cards
          img={member}
          title="Universal Membership"
          p="1 Membership 5 gyms, with a single membership you can train at all of our branches as your prefer."
        />
        <Cards
          img={trainer}
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
      <Link to="/Packages">
        <Button
          btnStyle="bg-[#C1272D] ring-1  text-white ring-black  p-3 rounded xl "
          children="Try a Free Trial"
        />
      </Link>
    </div>
  );
}

export default Services;
