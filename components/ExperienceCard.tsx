import React from 'react'
import {motion} from 'framer-motion';
type Props = {}
import Image from 'next/image';

const ExperienceCard = (props: Props) => {
  return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden border-[4px] hover:shadow-lg hover:shadow-blue-300'>
      <motion.img
      initial={{
           y:-100,
           opacity:0
      }}
      transition={{
        duration:1.2
      }}whileInView={{
              opacity:1,
              y:0
      }}viewport={{
        once:true
      }}

      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      
      
      src="https://c4.wallpaperflare.com/wallpaper/670/231/738/anime-face-mask-scars-wallpaper-thumb.jpg" alt="" />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light '>CEO of PAPAFAM</h4>
        <p className='font-bold text-2xl mt-1'> PAPAFAM</p>
        <div className='flex space-x-2 my-2'>
          <Image
      
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="" />

             <Image
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="" />

             <Image
          className='h-10 w-10 rounded-full'
          src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png" alt="" />
        </div>
        <p className=' uppercase py-5 text-gray-300'>Started Work ... Ended ....</p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
          <li>summary points</li>
        </ul>
      </div>

    </article>
  )
}

export default ExperienceCard