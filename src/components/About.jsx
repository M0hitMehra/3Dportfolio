import React from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

let direction = "";

const ServiceCard = ({ index, title, icon }) => {
  direction = "right";
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={{
          hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              delay: 0.5 * index,
              duration: 0.75,
              ease: "easeOut",
            },
          },
        }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        initial="hidden"
        animate="visible"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-gray-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {" "}
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            y: -50,
            opacity: 0,
          },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1.25,
              delay: 0.2,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <p className="text-md text-slate-300">Introduction</p>
        <h2 className="text-5xl font-bold text-white">Overview</h2>
      </motion.div>
      <motion.p
        variants={{
          hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
          },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              // type: type,
              delay: 0.5,
              duration: 1.25,
              ease: "easeOut",
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="mt-4 text-slate-400 text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        dolorum praesentium magni voluptates vitae mollitia laborum possimus
        fugiat expedita neque ad in enim error facere, labore, similique
        provident ratione corporis doloremque reiciendis nam nulla sint! Rerum
        deleniti provident numquam est eius assumenda, possimus non enim
        laborum, libero modi minima quod?
      </motion.p>
      <div className=" mt-20 flex  flex-col md:flex-row gap-10 px-10 justify-center ">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
