import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?:boolean;
}

const Skill = ({directionLeft}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>

        <motion.img
        
        initial={{
            x:directionLeft?-200:200,
            opacity:0,
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,
            x:0,

        }}
        src='https://o.remove.bg/downloads/dc5adace-c22d-4365-b899-baae89fc762f/80-803527_html5-css3-and-javascript-logos-html5-logo-png-removebg-preview.png'

        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
            <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
        </div>
    </div>
  )
}

export default Skill