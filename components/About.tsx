import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
  
     <h3 className='absolute top-24 uppercase teacking-[20px] text-gray-500 text-2xl'>
      About 
     </h3>

     <motion.img
     initial={{
      x:-200,
      opacity:0
     }}
     transition={{
      duration:1.2,
     }}
     whileInView={{
      opacity:1,x:0
     }}
     
     src='https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1670987023837%2FNmI2YBFN2.png%3Fw%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1080&q=75'
     
     
     className='-mb-20 md:mb-8 flex flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-96 xl:h-[600px] xl:w-[500px]  '
     />

   <div className='space-y-10 px-0 md:px-10'>
    <h4 className=' text-4xl font-semibold'>Here is a{" "}
     <span className='underline decoration-[#F7ABBA]/50 '>little</span>{""}
     background
     <p className=' text-base '></p>
    </h4>
   </div>
    </motion.div>
  )
}

export default About