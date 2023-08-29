"use client"

import { useSectioninview } from '@/lib/hooks'
import React, { useState } from 'react'
import SectionHeading from './generic/section-heading'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useThemeContext } from '@/context/theme-context';

export default function Experience() {

  const { ref } = useSectioninview('Experience')
  const { theme } = useThemeContext()
  const [showMore, setShowMore] = useState<number[]>([])

  const shortDescription = (text: string) => {
    const string150 = text.slice(0, 150)
    return string150.slice(0, string150.lastIndexOf(' '))
  }

  const handleShowMore = (index: number) => {
    return () => {
      if (!showMore.includes(index)) {
        setShowMore([...showMore, index])
      } else {
        setShowMore(prev => prev.filter(item => item !== index))
      }
    }
  }

  return (
    <section ref={ref} className='scroll-mt-28 sm:mb-40 mb-28' id='experience'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((item, i) => (
            <React.Fragment key={i}>
              <VerticalTimelineElement
                contentStyle={{
                  background: theme === 'light' ? "#f3f4f6" : 'rgba(255,255,255,0.05)',
                  boxShadow: "none",
                  borderRadius: '0.75rem',
                  border: `1px solid ${theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255,255,255,0.15)'}`,
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: `0.4rem solid ${theme === 'light' ? '#9ca3af' : 'rgba(255,255,255,0.25)'}`
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === 'light' ? "white" : 'black',
                  fontSize: "1.5rem",
                  color: `${item.iconColor}`
                }}
              >
                <h3 className='font-semibold capitalize text-2xl'>{item.title}</h3>
                <div className='flex justify-between items-center'>
                  <p className='font-normal !mt-0 text-xl'>{item.company}</p>
                  <p className='!text-xs !mt-0'>{item.location}</p>
                </div>
                <p
                  className='!mt-1 !font-normal text-gray-700 dark:text-white/60'
                >
                  {showMore.includes(i) ? item.description : shortDescription(item.description)}{' '}

                  <span
                    className='text-sm underline underline-offset-2 cursor-pointer'
                    onClick={handleShowMore(i)}
                  >
                    {showMore.includes(i) ? 'show less' : 'show more'}
                  </span>
                </p>
                <ul className='flex flex-wrap gap-2 !mt-2 sm:mt-auto'>
                  {item.skills.slice(0, 9).map((skill, i) => (
                    <li
                      key={i}
                      className='dark:bg-white/[0.1] bg-black text-white px-3 py-1 text-[0.65rem] uppercase 
                                tracking-wider rounded-lg dark:text-white/70'
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
