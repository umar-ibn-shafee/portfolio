"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { projectsData } from "@/lib/data";
import Project from './project';

export default function Projects() {
    return (
        <motion.section className='mb-28 scroll-mt-28'>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </motion.section>
    )
}
