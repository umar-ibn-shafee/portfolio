"use client"

import React from 'react'
import SectionHeading from './generic/section-heading'
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from './generic/project';
import { useSectioninview } from '@/lib/hooks';

export default function Projects() {

    const { ref } = useSectioninview('Projects')

    return (
        <motion.section ref={ref} className='mb-28 scroll-mt-28' id='projects'>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            {/* <Project {...project} /> */}
                            {project.title}
                        </React.Fragment>
                    ))
                }
            </div>
        </motion.section>
    )
}
