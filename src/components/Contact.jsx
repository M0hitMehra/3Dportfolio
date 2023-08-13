import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";

let direction = "";
const Contact = () => {
  direction = "left";
  let direction1 = "right";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const formRef = useRef();
  const [Loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value} =  e.target
    setForm({...form,[name]:[value]})
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
  .send(
    "service_pboh51t",
    "template_fyorqo9",
    {
      fullname:form.name,
      email :form.email,
      msg :form.message,
    },
    "SxjbDez0K89mKZo8r"
  ).then(()=>{
    setLoading(false)
    alert("Thanks for contacting me")
    setForm({
      name: "",
      email: "",
      message: "",
    }),(err)=>{
      setLoading(false)
      alert("Something went wrong")

    }
  })
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={{
          hidden: {
            x:
              direction === "left"
                ? "-100%"
                : direction === "right"
                ? "100%"
                : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
          },
          show: {
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        className="flex-[0.75] bg-[#0d1a3b] p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Get in touch
        </p>
        <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex  flex-col gap-8"
        >
          <label htmlFor="" className=" flex-col flex">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-[#395074a8] py-4 px-6 placeholder:text-slate-400  text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className=" flex-col flex">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-[#395074a8] py-4 px-6 placeholder:text-slate-400  text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label htmlFor="" className=" flex-col flex">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              className="bg-[#395074a8] py-4 px-6 placeholder:text-slate-400  text-white  rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-violet-900 py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-gray-600 rounded-xl"
          >
            {" "}
            {Loading ? "...Sending" : "Send"}{" "}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            x:
              direction1 === "left"
                ? "-100%"
                : direction1 === "right"
                ? "100%"
                : 0,
            y:
              direction1 === "up" ? "100%" : direction1 === "down" ? "100%" : 0,
          },
          show: {
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              delay: 0.2,
              duration: 1,
              ease: "easeOut",
            },
          },
        }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
