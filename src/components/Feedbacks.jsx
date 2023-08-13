import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  let direction = "";
  return (
    <motion.div
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
            delay: 0.5 * index,
            duration: 0.75,
            ease: "easeOut",
          },
        },
      }}
      className="bg-[#382e5a] p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-center items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-slate-400 text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-slate-800 rounded-2xl min-h-[300px] sm:px-16 px-6 sm:py-16 py-10`}
      >
        <motion.div
          variants={{
            hidden: {
              y: -50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                duration: 1.25,
                delay: 1.05,
              },
            },
          }}
        >
          <p className="text-xl font-bold text-slate-400">What others say</p>
          <h2 className="text-3xl font-bold">Testimonials.</h2>
        </motion.div>
      </div>
      <div className=" -mt-20 sm:px-16 px-6 pb-14 flex  flex-col md:flex-row gap-7">
        {testimonials.map((testimonial, i) => (
          <FeedbackCard key={testimonial.name} {...testimonial} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
