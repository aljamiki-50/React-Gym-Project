import React from "react";
import news1 from "./img/news1.png";
import news2 from "./img/news2.png";
import news3 from "./img/news3.png";
import ExploreText from "./components/ExploreText";
import NewsBlogsCads from "./components/NewsBlogsCads";
function NewsBlogLight() {
  return (
    <div
      className="  box-border container mx-auto min-h-screen w-screen
      
      
    s:mt-[20%]
    xs:my-32  
     md:my-32 
    lg:my-28   
    xl:mb-96  xl:mt-[8%]      "
    >
      <div className=" absolute top-0 left-0 bg-slate-200 w-screen h-full -z-10"></div>

      <div className="  flex flex-col items-center  ">
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto
            gx:w-[100%]  gx:font-semibold gx:text-base  gx:text-left
            s:w-[100%]  
            "
            h1Style="text-4xl  text-black poppins font-bold mt-3    tracking-wide"
            text1="perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore"
            text2
            title="News & Blogs"
          />
        </div>
        <div className=" grid grid-cols-3 ml-28 items-center
          gx:grid-cols-1 gx:ml-0 
         s:grid-cols-1 s:ml-0
         xs:ml-0  xs:grid-cols-2
         md:ml-0  md:grid-cols-2
         lg:grid-cols-2  lg:ml-0 lg:gap-x-4 lg:gap-y-4
          xl:ml-0

       

         ">
          <div>
            <NewsBlogsCads
              title="How to bulk properly?"
              link="Read More"
              img={news1}
            />
          </div>
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
