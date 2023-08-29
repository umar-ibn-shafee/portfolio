'use client'

import React from 'react'
import SectionHeading from './generic/section-heading'
import { useSectioninview } from '@/lib/hooks'
import { skillsData } from '@/lib/data'
import { motion } from "framer-motion";

const fadeInAnimationVarient = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {
  const { ref } = useSectioninview('Skills')
  return (
    <section ref={ref} className='mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28' id='skills'>
      {/* <SectionHeading>
        My Skills
      </SectionHeading> */}

      <h2 className='text-6xl font-bold capitalize text-center mb-12'>
        My Skills
      </h2>

      <ul className='flex  flex-wrap gap-2 justify-center text-lg text-gray-800'>
        {skillsData.map((skill, i) => (
          <motion.li
            key={i}
            className='border border-black/[0.1] rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80'
            initial='initial'
            variants={fadeInAnimationVarient}
            whileInView='animate'
            viewport={{
              once: true
            }}
            custom={i}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
