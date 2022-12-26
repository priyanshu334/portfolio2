import React from 'react'
import {motion} from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
    const projects = [1,2,3,4,5]
  return (
    <motion.div 
     initial={{
        opacity:0
     }}
     whileInView={{
        opacity:1
     }}
     transition={{
        duration:1.5
     }}
    
    className='h-screen relative flex  flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0 scrollbar scrollbar-track-black scrollbar-thumb-orange-500'>
        <h3 className='absolute top-24 uppercase tracking-[240px[ text-gray-500 text-2xl'>
         Projects
        </h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {
                projects.map((project,i)=>(
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-x-5 items-center justify-center p-20 md:p-44 h-screen'>
                     <motion.img 
                     initial={{
                        y:-300,
                        opacity:0
                        
                        
                     }}
                     transition={{
                        duration:1.2
                     }}
                     whileInView={{
                        opacity:1,y:0
                     }}
                     viewport={{
                        once:true
                     }}
                     
                     src='https://www.appdupe.com/img/spotify/sec23.png'/>

                     <div className='space-y-10 px-0 md:px-10 max-w-full'>
                        
                        <h4 className='text-4xl font-semibold text-center'>Case Study {i+1} of {projects.length}:UPS CLONE</h4>
                        
                        <p className='text-lg text-center md:text-left'>
                            Netlify 2.0 app that has a Log in and Log out Authentication with Google . It is a beautiful Home Screen with all the movies looking just like Netflix . There is also a subscription paege where you can see your active monthly subcripption . We also 
                            use Stripe Payments for the montly Netflix Subscription 
                        </p>
                        </div>
                    </div>
                ))
            }
        </div>
        <div
        className='w-full absolute top-[30px] bg-[#F7ABBA]/10 -skew-y-12'
        ></div>
   
    </motion.div>
  )
}

export default Projects