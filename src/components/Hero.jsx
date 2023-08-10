import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
 
const Hero = () => {
  return (
    <section className="w-full relative h-screen mx-auto">
      <div
        className={`sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-1 h-40 sm:h-80 rounded-full  violet-gradient " />
        </div>
        <div>
          <h1 className="text-white font-black lg:text-[60px] sm:text-[40px] xs:text[50px] text-[20px] lg:leading-[98px] mt-2 ">
            Hi, I'm <span className="text-[#915eff]">Mohit Mehra</span>
          </h1>
          <p className="text-[#dfd9ff]  font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100" >
      I am a Mern stack developer
          </p>
        </div>
      </div>
        <ComputersCanvas/>
    </section>
  );
};

export default Hero;
