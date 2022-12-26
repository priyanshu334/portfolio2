import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from 'framer-motion'
type Props = {}

const Header = (props: Props) => {
  return (
     <header className='sticky p-5 top-0 flex items-center justify-between  max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        transition={{
            duration:1.5,
        }}
        className='flex flex-row items-center'>
            <SocialIcon
            url='https://www.youtube.com/channel/UCmZ4cwwB-6YKOB4osuvx2lA'
             fgColor='gray'
             bgColor='transparent'
            />


              <SocialIcon
            url='https://www.youtube.com/channel/UCmZ4cwwB-6YKOB4osuvx2lA'
             fgColor='gray'
             bgColor='transparent'
            />

         <SocialIcon
            url='https://www.youtube.com/channel/UCmZ4cwwB-6YKOB4osuvx2lA'
             fgColor='gray'
             bgColor='transparent'
            />



        </motion.div>
        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{duration:1.5}}
        
        
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='red'
            bgColor='transparent'
            
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </motion.div>
     </header>
  )
}

export default Header