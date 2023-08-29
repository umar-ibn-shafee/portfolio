'use client'

import React from 'react'
import SectionHeading from './generic/section-heading'
import { useSectioninview } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from "framer-motion";
import FlowText from './generic/flow-text'
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

export default function Contact() {

  const { ref } = useSectioninview('Contact')

  return (
    <motion.section
      ref={ref}
      className='scroll-mt-28 text-center mb-20 sm:mb-28 w-[100%] pr-28'
      id='contact'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* <SectionHeading>Let&apos;s work together</SectionHeading> */}

      <h2 className='text-6xl font-bold capitalize text-start mb-16'>
        Let&apos;s work <br />together
      </h2>
      {/* <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contatc me directly at{" "}
        <a
          className='underline'
          href='mailto:me@ibnshafee.dev'
        >
          me@ibnshafee.dev
        </a> or through this form</p> */}
      <div className='flex flex-col sm:flex-row items-start gap-20'>
        <form className='flex flex-col dark:text-black flex-auto'>
          <input
            className='rounded-lg borderBlack h-14 p-4 dark:bg-slate-50 transition-all outline-none'
            type='email'
            placeholder='Your Email' />
          <textarea
            className='rounded-lg borderBlack h-52 my-3 p-4 dark:bg-slate-50 transition-all outline-none'
            placeholder='Your Message' />
          <button
            className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
          bg-gray-900 text-white rounded-xl transition-all outline-none
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
        <div className='flex flex-col gap-8 items-start justify-start flex-none'>
          <div className='flex flex-col gap-2 items-start justify-start'>
            <div className='uppercase font-thin text-xs'>Contact details</div>
            <div className='text-left'>
              <a href='' className='hover:underline underline-offset-4'>
                <FlowText text={'hello@iamumar.dev'} onHover={true} />
              </a>
              <a href='' className='hover:underline underline-offset-4'>
                <FlowText text={'+91 8008582113'} onHover={true} />
              </a>
            </div>
          </div>
        <div className='flex flex-col gap-2 items-start justify-start'>
          <div className='uppercase font-thin text-xs'>Socials</div>
          <div className='text-left flex flex-row gap-2'>
            <a
              className='hover:underline underline-offset-4'
              href='https://www.linkedin.com/in/umar-ibn-shafee/'
              target='_blank'
            >
              <BsLinkedin />
            </a>
            <a
              className='hover:underline underline-offset-4'
              href='https://www.linkedin.com/in/umar-ibn-shafee/'
              target='_blank'
            >
              <BsGithub />
            </a>
            <a
              className='hover:underline underline-offset-4'
              href='https://www.linkedin.com/in/umar-ibn-shafee/'
              target='_blank'
            >
              <BsTwitter />
            </a>
            <a
              className='hover:underline underline-offset-4'
              href='https://www.linkedin.com/in/umar-ibn-shafee/'
              target='_blank'
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
    </motion.section >
  )
}
