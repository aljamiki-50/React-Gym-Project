import React from "react";
import NewsBlogsCads from "./components/NewsBlogsCads";
import ExploreText from "./components/ExploreText";
import care1 from "./img/care1.jpg";
import care2 from "./img/care2.jpg";
import care3 from "./img/care3.jpg";
import care4 from "./img/care4.jpg";
import care5 from "./img/care5.jpg";

function BshopBlog() {
  const barberBlogTopics = [
    {
      name: "Popular Hairstyles for 2024",
      image: care1,
    },
    {
      name: "Beard Grooming Tips",
      image: care2,
    },
    {
      name: "Vintage Barbering Techniques",
      image: care3,
    },
    {
      name: "Product Reviews: Best Clippers in the Market",
      image: care4,
    },
    {
      name: "Barber Shop Interior Design Ideas",
      image: care5,
    },
    {
        name: "Barber Shop Interior Design Ideas",
        image: care2,
      },
  ];

  return (
    <div
      className="  box-border container mx-auto min-h-full w-screen
      
      
    s:mt-[20%]
    
    xs:my-32  
     md:my-32 
    lg:my-40 lg:mb-[450px]   
    xl:mb-[600px]  xl:mt-[8%]      "
    >
      <div className=" absolute top-0 left-0 bg-green-200/50 w-screen h-full -z-10" />

      <div className="  flex flex-col items-center  ">
        <div>
          <ExploreText
            p1Style=" roboto text-lg font-bold pb-4 text-[#426666] w-[50%] grid  mx-auto text-white/80
            gx:w-[100%]  gx:font-semibold gx:text-base  gx:text-left xl:w-[100%] xl:font-bold xl:text-4xl xl:roboto
            s:w-[100%]  
            "
            h1Style="xl:text-6xl text-4xl  text-black poppins font-bold mt-3    tracking-wide"
            text1="Barber's Corner: Navigating Trends and Traditions in Our Cozy Hub"
            text2
            title="News & Blogs"
          />
        </div>
        <div
          className=" grid grid-cols-3 ml-28 items-center
          gx:grid-cols-1 gx:ml-0 
         s:grid-cols-1 s:ml-0
         xs:ml-0  xs:grid-cols-2
         md:ml-0  md:grid-cols-2
         lg:grid-cols-2  lg:ml-0 lg:gap-x-4 lg:gap-y-4
          xl:ml-0  xl:gap-x-0

       

         "
        >
          {barberBlogTopics.map((blog, index) => (
            <div>
              <NewsBlogsCads
                title={blog.name}
                link="Read More"
                img={blog.image}
              />
              
            </div>
          ))}
{/* 
          <div>
            <NewsBlogsCads
              title="How to bulk properly?"
              link="Read More"
              img={care2}
            />
          </div>
          <div>
            <NewsBlogsCads
              title="How to bulk properly?"
              link="Read More"
              img={care2}
            />
          </div> */}

         

         
        </div>
      </div>
    </div>
  );
}

export default BshopBlog;
