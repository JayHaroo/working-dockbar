import React from "react";

function Adv() {
  const text =
    "The ADV160 is now equipped with a new generation 157cc, 4-Valve, Liquid-Cooled, eSP+ Engine, offering advanced technology with 4-valve mechanism and low friction technologies to provide excellent power output and environmental performance (Fuel Efficient). It delivers a maximum power of 11.8 kW @ 8,500 rpm and a top torque of 14.7 Nm @ 6,500 rpm, which proves more than enough for a reliable ride that takes you from daily commuting to leisure trips.";

  return (
    <>
      <div className="flex flex-col items-center overflow-hidden w-[330px] h-[460px] rounded-2xl bg-[#7c7c7c] bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 md:w-[400px] lg:w-[700px] lg:flex-row">
        <div className="text-white text-2xl mt-2 lg:mt-[-25rem] lg:mr-[-200px] lg:w-[90rem] lg:ml-[17.5rem]">
          Honda ADV 160
        </div>
        <img className="mt-1 lg:h-[300px] lg:ml-[-30rem]" src="public\adv.png" alt="adv" />
        <div className="text-wrap text-white overflow-x-hidden ml-[1rem] mr-[1rem] mb-[1rem] lg:h-[20rem] lg:w-[55rem] lg:ml-[-3rem]">
          {text}
        </div>
      </div>
    </>
  );
}

export default Adv;
