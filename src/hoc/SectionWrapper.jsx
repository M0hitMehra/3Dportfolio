import React from 'react'
import { motion } from 'framer-motion'

const SectionWrapper = (Component , idName) => {
 return function HOC(){
    return (
        <motion.section>
            <Component/>
        </motion.section>
    )
  }
}

export default SectionWrapper