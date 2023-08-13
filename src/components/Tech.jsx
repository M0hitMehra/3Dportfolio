import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10' >
      {
        technologies.map((technology ,i) =>(
          <div className='w-28 h-28' key={technology.name} >
              <BallCanvas icon={technology.icon} value={i %2===0 ? -(10.5+i) : i+10} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech,"")