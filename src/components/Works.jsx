import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
let direction = "";

const ProjecCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  direction = "up";
  return (
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
            duration: index * 0.5,
            delay: 0.75,
          },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-slate-900 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-slate-400 text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2" >
          {
            tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color} `}  >
                #{tag.name}
              </p>
            ))
          }

        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
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
              delay: 0.25,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Work{" "}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          className="mt-3 text-slate-400 text-[17px] max-w-3xl leading-[30px]"
          variants={{
            hidden: {
              x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
              y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
              opacity: 0,
            },
            show: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 0.1,
                duration: 1,
                ease: "easeOut",
              },
            },
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          consequatur error nobis aut perspiciatis, omnis modi mollitia iste
          explicabo delectus labore. Quisquam officia itaque ratione expedita,
          repellat vel et ab.lorem50 Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Nulla laboriosam magni at, blanditiis itaque in
          nobis libero porro dicta est, recusandae temporibus architecto aperiam
          accusantium incidunt? Quidem iure, sed officiis magni minus minima
          labore fugiat amet natus ipsum aliquid neque earum quia. Natus
          perspiciatis quam perferendis, repellat nesciunt corrupti repudiandae.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjecCard key={`project-${i}`} {...project} index={i} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
