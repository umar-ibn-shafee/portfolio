"use client"

import { useSectioninview } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './generic/section-heading'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useThemeContext } from '@/context/theme-context';

export default function Experience() {

  const { ref } = useSectioninview('Experience')
  const {theme} = useThemeContext()

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
                  border: `1px solid ${theme === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255,255,255,0.15)'}`,
                  textAlign: "left",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: `0.4rem solid ${theme === 'light' ? '#9ca3af' : 'rgba(255,255,255,0.05)'}`
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === 'light' ? "white" : 'rgba(255,255,255,0.15)',
                  fontSize: "1.5rem",
                  color: 'rgba(255,255,255,0.75)'
                }}
              >
                <h3 className='font-semibold capitalize'>{item.title}</h3>
                <p className='font-normal !mt-0'>{item.location}</p>
                <p className='!mt-1 !font-normal text-gray-700 dark:text-white/60'>{item.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </section>
  )
}
