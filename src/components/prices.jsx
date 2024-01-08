import React from "react";
import MemberShipsCard from "./MemberShipsCard";
import AdvancePaymentsCards from "./AdvancePaymentsCards";

function Prices() {
  return (
    <div
      className="   container min-h-screen w-screen flex flex-col items-center    mt-20   box-border  bg-[#1A1A1A]
     s:
      "
    >
      <div className=" box-border absolute  top-0 left-0  bg-[#1A1A1A] w-screen min-h-full -z-10" />
      {/*  */}
      <div
        className="  flex    gap-x-3 gap-y-3   justify-start mx-10 
       s:flex-col s:w-full  s:mx-auto  
        xl:mt-10 
       "
      >
        <MemberShipsCard
          title="Monthly"
          tit="All-day"
          title2="Month"
          time1=" 6:30 "
          time2=" 10:00"
          price="35"
        />

        <MemberShipsCard
          title="Monthly"
          tit="Off-Peak"
          title2="Month"
          time1=" 6:30 "
          time2=" 04:00"
          price="30"
        />
      </div>
      {/*  */}

      <div
        className=" flex    mt-10    gap-x-3 gap-y-3   justify-start mx-10    min-h-screen bg-[#1A1A1A]
       s:flex-col 
       xs:grid xs:grid-cols-2 xs:gap-x-10 xs:my-72 xs:mt-4 xs:mx-auto  xs:box-border
       md:grid md:grid-cols-2 md:gap-  md:my-72 md:mt-4 md:mx-auto  md:box-border
       lg:grid lg:grid-cols-2 lg:gap-x-10 lg:my-72 lg:mt-4  lg:mx-auto  lg:box-border
       xl:grid xl:grid-cols-3 xl:gap-x-10 xl:my-0 xl:mt-10  xl:mx-auto  xl:box-border

       "
      >
        <AdvancePaymentsCards
          title=" Advance Payment "
          title2=" All Day"
          time1="6:30"
          time2="10:00"
          price1="350"
          price2="185"
          price3="110"
          num1="12"
          num2="6"
          num3=" 3"
        />
        <AdvancePaymentsCards
          title=" Advance Payment "
          title2=" Off Peak"
          time1="6:00"
          time2="04:00"
          price1="300"
          price2="160"
          price3="100"
          num1="12"
          num2="6"
          num3=" 3"
        />

        <AdvancePaymentsCards
          title="  Students with Card "
          title2=" All Day"
          time1="6:00"
          time2="10:00"
          price1="285"
          price2="150"
          price3="90"
          num1="12"
          num2="6"
          num3=" 3"
        />
      </div>
      {/*  */}
    </div>
  );
}

export default Prices;
