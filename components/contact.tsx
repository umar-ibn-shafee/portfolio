'use client'

import React from 'react'
import SectionHeading from './generic/section-heading'
import { useSectioninview } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion";

export default function Contact() {

  const { ref } = useSectioninview('Contact')

  return (
    <motion.section
      ref={ref}
      className='scroll-mt-28 text-center mb-20 sm:mb-28 w-[min(100% ,38rem)]'
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contatc me directly at{" "}
        <a
          className='underline'
          href='mailto:me@ibnshafee.dev'
        >
          me@ibnshafee.dev
        </a> or through this form</p>
      <form className='mt-10 flex flex-col dark:text-black'>
        <input
          className='rounded-lg borderBlack h-14 p-4 dark:bg-white dark:bg-opacity-80 
          dark:focus:bg-opacity-100 transition-all outline-none'
          type='email'
          placeholder='Your email' />
        <textarea
          className='rounded-lg borderBlack h-52 my-3 p-4 dark:bg-white 
          dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all outline-none'
          placeholder='Your message' />
        <button
          className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
          bg-gray-900 text-white rounded-full transition-all outline-none
          hover:bg-black hover:scale-110 focus:scale-110 active:scale-105
          dark:bg-white dark:bg-opacity-10'
          type='submit'
        >
          Submit
          <FaPaperPlane className="text-xs opacity-70 transition 
          group-hover:translate-x-1 group-hover:-translate-y-1" />
          {" "}
        </button>
      </form>
    </motion.section>
  )
}
