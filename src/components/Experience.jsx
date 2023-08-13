import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "fff" }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {/* <img src={experience.icon} alt={experience.company_name} /> */}
        </div>
      }
    >
      <div>
        <h3 className="text-white font-bold text-[24px] ">
          {experience.title}
        </h3>
        <p
          className="font-semibold text-slate-400 text-[16px] "
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>
      <ul className="mt-5 ml-5 space-y-2 list-disc	">
        {experience.points.map((point, index) => {
       return   <li
            key={`experience-point-${index}`}
            className="text-white-100 text-14px pl-1 tracking-wider"
          >
            {point}
          </li>;
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
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
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
