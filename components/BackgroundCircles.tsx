import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
     <motion.div 
     initial={{
      opacity:0,
     }}
     animate={{
      scale :[1,2,2,3,1],
      opacity:[0.1,0.2,0.4,0.1,1.0],

     }}
     transition={{
      duration:2.5,
     }}
     
     
     className=' relative flex justify-center items-center'>

        <div className='absolute border border-blue-500 rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
                <div className='absolute border border-blue-500 rounded-full h-[300px] w-[300px] mt-52 animate-ping'/>
                        <div className='absolute border border-blue-500 rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
        
                <div className='absolute border border-white rounded-full h-[500px] w-[500px] mt-52 animate-ping'/>
                        <div className='absolute border border-red-500 rounded-full h-[800px] w-[800px] mt-52 animate-pulse'/>

    </motion.div>
  )
}

export default BackgroundCircles