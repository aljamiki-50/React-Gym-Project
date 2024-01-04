import React from "react";
import news1 from "./img/news1.png";
import news2 from "./img/news2.png";
import news3 from "./img/news3.png";
import ExploreText from "./components/ExploreText";
import NewsBlogsCads from "./components/NewsBlogsCads";
function NewsBlogLight() {
  return (
    <div className="     ">
      <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div>

      <div className=" h-[10%] flex flex-col ">
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto "
            h1Style="text-4xl  text-black poppins font-bold mt-3    tracking-wide"
            text1="perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
            text2
            title="News & Blogs"
          />
        </div>
        <div className=" grid grid-cols-3 ml-28 items-center  ">
          <div>
            <NewsBlogsCads
              title="How to bulk properly?"
              link="Read More"
              img={news1}
            />
          </div>

          <NewsBlogsCads
            title="Intermittent fasting:
           "
            title2=" Here’s what you need to know"
            link="Read More"
            img={news2}
          />

          <NewsBlogsCads
            title="8 ways to burn more fat?"
            link="Read More"
            img={news3}
          />
        </div>
      </div>
    </div>
  );
}

export default NewsBlogLight;
