import React from 'react'
import { motion } from 'framer-motion'

const SectionWrapper = (Component , idName) => {
  const staggerChildren = null
 return function HOC(){
    return (
        <motion.section
        variants={{
          hidden:{},
          show:{
            staggerChildren:"",
            delayChildren:   0
          }
        }}
        initial="hidden"
        animate="show"
        whileInView={"show"}
        viewport={{once:true,amount:0.25}}
        className='max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10'
        >
          <span id={idName} className='mt-[-100px] pb-[100px] block' >
            &nbsp;
          </span>
            <Component/>
        </motion.section>
    )
  }
}

export default SectionWrapper