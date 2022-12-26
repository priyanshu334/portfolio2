import React, { useState } from 'react'
import {PhoneIcon , MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import {useForm, SubmitHandler} from 'react-hook-form'

type Inputs={
      name:string,
      email:string,
      subject:string,
      message:string,
}
type Props = {};

const ContactMe = ({}: Props) => {
    const {register,handleSubmit} =useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData)=>{
        window.location.href =`mailto:99priyanshu33@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    }
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>


            Contact
        </h3>
        <div className='flex flex-col space-y-10'> 
        <h4 className='text-4xl font-semibold text-center'>
            I have got just what you need.&apos
        </h4>
        <span className='decoration-[#F7ABBA]/50 underline text-center'>
            Let's Talk
        </span>
        <div className='space-y-2'>
              <div className='flex items-center space-x-5 justify-center'>
                 <PhoneIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
                 <p className='text-2xl'>+91 7020754395</p>
              </div>
              <div className='flex items-center space-x-5 justify-center'>
                 <EnvelopeIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
                 <p>99priyanshu33@gmail.com</p>
              </div>

              <div className='flex items-center space-x-5 justify-center'>
                 <MapPinIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
                 <p className='text-2xl'>123 Developer Lane</p>
              </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto' action="">
            <div className='flex space-x-2'>
                <input {...register('name')}className='contactInput' type="text" placeholder="Name" id="" />
                <input {...register('email')} className='contactInput' type="text" placeholder='Email' />

            </div>
            <input {...register('subject')} placeholder='subject' className='contactInput' type="text" />
            <textarea  {...register('message')}placeholder='Message' className='contactInput'/>
            <button className='bg-[#F7ABBA] py-5 px-10 rounded-md text-black font-bold text-lg hover:shadow-md hover:shadow-white' >Submit</button>
        </form>
        </div>
        
        
    </div>


  )
}

export default ContactMe