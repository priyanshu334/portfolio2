import Link from 'next/link';
import React from 'react'
import {Cursor , useTypewriter} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

const Hero = (props: Props) => {
    const [text ,count] = useTypewriter({
        words:[
            "Hi , The names Priyanshu shrivastava",
            "The guy who loves coffee",
            "<ButoLovesToCodeMore/>"
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (

    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
        <BackgroundCircles/>
        <img className='relative rounded-full h-48 w-52 mx-auto object-cover' src='https://hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1670987023837%2FNmI2YBFN2.png%3Fw%3D500%26h%3D500%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1080&q=75'/>
        <div className='z-20'>
            <h2 className='text-sm text-gray-500 pb-2 tracking-[12px]'>Software Engennier </h2>
               <h1 className='text-5xl lg:text-6xl scroll-px-10'>
        <span className='font-bold  from-neutral-600 '>{text}</span>
        <Cursor cursorColor='#F7ABBA'/>
      </h1>
      <div className=' pt-5 space-x-6 font-bold'>
        <Link href='#about '>
        <button className='border-[1px] rounded-lg p-1 border-gray-400 hover:shadow-lg hover:shadow-red-700'>About</button>
        </Link>
        
        <Link href='#experience'>
          <button className='border-[1px] rounded-lg p-1 border-gray-400  hover:shadow-lg hover:shadow-blue-600'>Experience</button>
            </Link>
      
        <Link href='#experience'>
          <button className='border-[1px] rounded-lg p-1 border-gray-400'>Skills</button>
            </Link>

        <Link href='#experience'>
          <button className='border-[1px] rounded-lg p-1 border-gray-400'>Projects</button>
            </Link>
      </div>

        </div>
   
    
    </div>
  )
}

export default Hero