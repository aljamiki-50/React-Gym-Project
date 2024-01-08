import React from "react";
import ExploreText from "./ExploreText";

import trainer4 from "../img/trainer4.jpg";
import trainer2 from "../img/trainer2.jpg";
import trainer3 from "../img/trainer3.jpg";
import TrainersCards from "./TrainersCards";

function Trainer({ practions }) {
  //  const [Email, setEmail] = useState(null);
  //  const [Number, setnumber] = useState(null);

  const Topic = practions ? practions : "Our Staff";

  return (
    <div
      className="     container min-h-screen w-screen
      xs:my-40
      md:my-40
      lg:my-40
      xl:my-80
     "
    >
      <div className=" box-border absolute  top-0 left-0  bg-[#1A1A1A] w-screen   min-h-full  -z-10 " />
      {/* Sart of the section or Staff */}
      <div
        className=" -mt-40
        gx:gap-y-72 gx:mt-10
        s:gap-y-72 s:mt-10
        xs:gap-y-0 
        md:gap-y-0 
        lg:gap-y-0  lg:mt-5
        xl:gap-y-72 -xl:mt-50
       "
      >
        <ExploreText
          p1Style="  text-center  mx-auto
           xl:w-[70%] xl:font-bold
           gx:w-[100%] gx:font-bold gx:justify-center gx:text-left
           s:w-[100%] s:font-bold s:justify-center s:text-left
           xs:w-[100%] xs:font-bold xs:justify-center xs:text-left
           md:w-[100%] md:font-bold md:justify-center md:text-left
           lg:w-[100%] lg:font-bold lg:justify-center lg:text-left


          "
          h1Style=" text-3xl  uppercase font-bold Poppins 
          gx:text-5xl gx:tracking-wide
          xs:text-5xl xs:tracking-wide
          md:text-5xl md:tracking-wide
          lg:text-5xl lg:tracking-wide
           xl:text-5xl xl:tracking-wide
           
           "
          text1="Each client undergoes
           personalized training sessions 
           conducted by our experienced and enthusiastic
            instructors. At scheduled intervals, every member 
            receives a private consultation with Paul, Simon, Ria, Mitch, Richard, or another
           fully qualified instructor. During these sessions, tailored training programs are developed to suit individual needs and goals."
          text2=""
          title={Topic}
        />

        <TrainersCards
          img={trainer4}
          name="Paul Slythe"
          role="Gym Manager / Director"
          Qualification="Trained in B.A.W.L.A, Lifefit 
          2000, and Advanced Exercise Performance Level 3.
           Additionally certified in UKA Track and Field,
            YMCA Level 3, Health and Safety, and holds 
            the designation of an Appointed Person."
          about="I had the privilege of representing England and Great Britain in our Athletic Teams from 1993 to 2003. My athletic journey provided numerous opportunities, allowing me to connect with people from around the world. I trained and competed in locations I had never imagined, spanning from L.A to Kuala Lumpur.
           Throughout my athletic career, I participated 
           in and secured medals at prestigious events such 
           as the World Championships, Commonwealth Games,
            and the Europeans. Since concluding my athletic
             pursuits, I have transitioned into the role of a partner 
             at Bob Prowse Health Club, where I had dedicated over 10 years 
             of service. Our focus is on individualized training, catering 
             to the unique needs of each person. Whether you are new to the 
             gym environment or a seasoned athlete, we specialize in assisting with weight 
             loss, core stability, functional training, athletic development, or overall fitness and toning."
          Email=""
          Number=""
        />

        {/* Here we Go ...... */}

        <TrainersCards
          img={trainer2}
          name="

          Simon Mercer"
          role="Gym Manager / Director"
          Qualification="- 10+ years of gym experience
          - BSc Sports Science
          - Gym Instruction
          - Personal Training
          - Crossfit Level 2
          - Kettlebellsolds 
            the designation of an Appointed Person."
          about="During my time studying Sports Science at university in 2010, I had the valuable opportunity to gain work experience alongside Paul and Ian. Several years later, I've progressed to the position of Senior Gym Instructor and established myself as a successful Personal Trainer.
          With a wealth of experience, I've assisted individuals in various aspects of fitness, be it for aesthetic purposes, strength and conditioning, or general fitness. My training philosophy emphasizes not only working hard but also training intelligently. While I can cater to diverse fitness goals, my expertise particularly lies in strength and hypertrophy training, influenced by my background as a competitive rugby player and powerlifter
          Drawing from years of involvement in powerlifting and coaching, I proudly founded the Bob Prowse Powerlifting Team, actively participating in competitions. Alongside Personal Training, I provide tailored online coaching for different objectives, including powerlifting, aesthetics, and strength and conditioning.  
          Collaborating with me, I'm confident in achieving swift results for you, all while making the journey enjoyable.."
          Email="@simonmercercoaching."
          Number="+499904-4499"
        />

        {/* Here we Go ...... */}

        <TrainersCards
          img={trainer3}
          name="

          Ria"
          role="Gym Trainer "
          Qualification="
         - Level 2 Gym Instructor
         -Level 3 Personal Trainer
       -  6 years instructor experience
        - Competitive bodybuilder
          ."
          about="In my extensive experience within the fitness industry, I've discovered my passion lies in empowering women to gain confidence in the gym. My approach diverges from quick fixes and pyramid schemes, aiming to cultivate a love for the process and emphasize its long-term sustainability. By doing so, the effort invested becomes more of a fulfilling journey than a tedious task.

          Even if you currently believe the gym isn't your place, I am confident that you've yet to discover the activity that truly excites you. Along this path, I can assist you in achieving your goals, whether it's attaining a defined and toned physique or focusing on building both physical and mental strength.
          
          My primary focus is on weight training, as I appreciate how it can transform the body through hard work and consistency. Personally, I am a competitive bodybuilder at the British level in the bikini category. With six years of personal training experience, I've collaborated with various women who aspire to feel strong and look powerful while ensuring practical and sustainable fitness, regardless of their experience level.
          
          Tailoring programs with specific goals that adapt to your lifestyle is a strength of mine. As a mother, I understand the importance of creating a balanced approach to make your goals achievable and shape the physique you desire.
          
          Witnessing my clients' progress is the driving force behind my passion. Building a strong rapport is crucial for success, and I want you to feel comfortable and confident in my commitment to achieving your goals.
          
          I offer individual personal training sessions, block bookings, and online coaching to keep you motivated and accountable throughout your fitness journey. You'll find me in the gym from Monday to Saturday, either working with clients or pushing myself through workouts. If you're interested in discussing your fitness journey, feel free to drop by, and we can develop a plan of action together."
          Email="@siIaRtrainer.com."
          Number="+499904-4499"
        />

        {/* Here we Go ...... */}

        <TrainersCards
          img={trainer2}
          name="

          Ria"
          role="Gym Trainer "
          Qualification="
         - Level 2 Gym Instructor
         -Level 3 Personal Trainer
       -  6 years instructor experience
        - Competitive bodybuilder
          ."
          about="In my extensive experience within the fitness industry, I've discovered my passion lies in empowering women to gain confidence in the gym. My approach diverges from quick fixes and pyramid schemes, aiming to cultivate a love for the process and emphasize its long-term sustainability. By doing so, the effort invested becomes more of a fulfilling journey than a tedious task.

          Even if you currently believe the gym isn't your place, I am confident that you've yet to discover the activity that truly excites you. Along this path, I can assist you in achieving your goals, whether it's attaining a defined and toned physique or focusing on building both physical and mental strength.
          
          My primary focus is on weight training, as I appreciate how it can transform the body through hard work and consistency. Personally, I am a competitive bodybuilder at the British level in the bikini category. With six years of personal training experience, I've collaborated with various women who aspire to feel strong and look powerful while ensuring practical and sustainable fitness, regardless of their experience level.
          
          Tailoring programs with specific goals that adapt to your lifestyle is a strength of mine. As a mother, I understand the importance of creating a balanced approach to make your goals achievable and shape the physique you desire.
          
          Witnessing my clients' progress is the driving force behind my passion. Building a strong rapport is crucial for success, and I want you to feel comfortable and confident in my commitment to achieving your goals.
          
          I offer individual personal training sessions, block bookings, and online coaching to keep you motivated and accountable throughout your fitness journey. You'll find me in the gym from Monday to Saturday, either working with clients or pushing myself through workouts. If you're interested in discussing your fitness journey, feel free to drop by, and we can develop a plan of action together."
          Email="@siIaRtrainer.com."
          Number="+499904-4499"
        />

        {/* Here we Go ...... */}

        <TrainersCards
          img={trainer4}
          name="

          Ria"
          role="Gym Trainer "
          Qualification="
         - Level 2 Gym Instructor
         -Level 3 Personal Trainer
       -  6 years instructor experience
        - Competitive bodybuilder
          ."
          about="In my extensive experience within the fitness industry, I've discovered my passion lies in empowering women to gain confidence in the gym. My approach diverges from quick fixes and pyramid schemes, aiming to cultivate a love for the process and emphasize its long-term sustainability. By doing so, the effort invested becomes more of a fulfilling journey than a tedious task.

          Even if you currently believe the gym isn't your place, I am confident that you've yet to discover the activity that truly excites you. Along this path, I can assist you in achieving your goals, whether it's attaining a defined and toned physique or focusing on building both physical and mental strength.
          
          My primary focus is on weight training, as I appreciate how it can transform the body through hard work and consistency. Personally, I am a competitive bodybuilder at the British level in the bikini category. With six years of personal training experience, I've collaborated with various women who aspire to feel strong and look powerful while ensuring practical and sustainable fitness, regardless of their experience level.
          
          Tailoring programs with specific goals that adapt to your lifestyle is a strength of mine. As a mother, I understand the importance of creating a balanced approach to make your goals achievable and shape the physique you desire.
          
          Witnessing my clients' progress is the driving force behind my passion. Building a strong rapport is crucial for success, and I want you to feel comfortable and confident in my commitment to achieving your goals.
          
          I offer individual personal training sessions, block bookings, and online coaching to keep you motivated and accountable throughout your fitness journey. You'll find me in the gym from Monday to Saturday, either working with clients or pushing myself through workouts. If you're interested in discussing your fitness journey, feel free to drop by, and we can develop a plan of action together."
          Email="@siIaRtrainer.com."
          Number="+499904-4499"
        />
      </div>

      <div></div>
    </div>
  );
}

export default Trainer;
