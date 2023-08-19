"use client"

import React, { ElementRef, useRef } from 'react'
import { projectsData } from "@/lib/data";
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";

type Props = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: Props) {
    const ref = useRef<ElementRef<'div'>>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 1', '1.33 1']
    })

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section
                className='my-4 p-4 max-w-2xl relative overflow-hidden bg-gray-100 border border-black/5 
                rounded-lg sm:pr-8 sm:h-[20rem] sm:mb-8 last:mb-0 even:ml-[18rem] hover:bg-gray-200 transition
                dark:bg-white/10 dark:hover:bg-white/20 dark:text-white'
            >
                <div className='flex flex-col h-full pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]'>
                    <h3 className='font-semibold text-2xl'>{title}</h3>
                    <p className='mt-2 leading-relaxed text-gray-600 text-sm dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
                        {tags.map((tag, i) => (
                            <li
                                key={i}
                                className='bg-black/[0.9] px-3 py-1 text-white text-[0.7rem] uppercase 
                                tracking-wider rounded-full dark:text-white/70'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt='Project I worked on'
                    quality={95}
                    className='absolute hidden sm:block w-[28.25rem] top-8 -right-40 rounded-t-lg shadow-2xl transition
                group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
                group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
                group-even:right-[initial] group-even:-left-40'
                />
            </section>
        </motion.div>
    )
}
