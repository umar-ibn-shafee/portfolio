"use client";

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { useSectioninview } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

    const { ref } = useSectioninview('Home')
    const { setActiveSection } = useActiveSectionContext()

    const animateText = 'Scroll for more'

    const sentance = {
        hidden: { opacity: 1 },
        visible:
        {
            opacity: 1,
            transition: {
                delay: 0.5,
                staggerChildren: 0.05,
                staggerDirection: 1,
            }
        }
    }

    const letters = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [1, 0.7, 0.5, 1],
            transition: {
                repeat: Infinity,
                repeatDelay: 1.5
            }
        }
    }

    return (
        <section
            ref={ref}
            className='mb-28 py-16 h-[95vh] border border-black/5 overflow-hidden hide-border-overflow rounded-xl relative 
            text-center sm:mb-0 scroll-mt-[100rem]'
            id='home'
        >
            <div
                className='bg-[#614cf9] animate-corners transition-all mix-blend-multiply .animation-delay-4000 
                absolute -z-10 -bottom-[25rem] left-[5rem] h-[25rem] blur-[8rem] w-[25rem] 
                rounded-full dark:bg-[#a89efa] dark:mix-blend-normal'></div>
            <div
                className='bg-[#f63b6d] animate-go-rounds animation-delay-2000 transition-all mix-blend-multiply 
                .animation-delay-4000 absolute -z-10 -bottom-[25rem] right-[5rem] h-[25rem] blur-[8rem] 
                w-[25rem] rounded-full dark:bg-[#f63b6d] dark:mix-blend-normal'></div>
            <div className='absolute bottom-8 right-16'>
                <Link
                    href={'#about'}
                    className='flex gap-2 justify-center items-center text-sm leading-4 hover:underline underline-offset-4'
                >
                    <motion.p variants={sentance} initial='hidden' animate='visible'>
                        {animateText.split('').map((char, i) => (
                            <motion.span
                                key={char + '-' + i}
                                variants={letters}
                            >{char}</motion.span>
                        ))}
                    </motion.p>
                    <HiArrowDown className="animate-bounce transition-all" />
                </Link>
            </div>
            {/* <div className='flex items-center justify-center'> */}
            {/* <div className='relative'> */}
            {/* <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.25
                        }}
                    >
                        <Image
                            src="/DP.png"
                            alt='Umar Ibn Shafee'
                            width={500}
                            height={500}
                            quality={95}
                            priority={true}
                            className='h-40 w-40 rounded-3xl object-cover border-[0.35rem] border-black shadow-xl' />
                    </motion.div> */}
            {/* <motion.span className='text-6xl absolute bottom-0 -right-5'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            delay: 0.3,
                            stiffness: 250,
                            duration: 0.7
                        }}
                    >
                        👋
                    </motion.span> */}
            {/* </div> */}
            {/* </div> */}

            {/* max-w-[50rem] */}

            <div className='flex flex-col items-start justify-center h-[90vh] sm:px-44 px-12'>
                <motion.h1
                    className='mb-10 px-4 text-left text-2xl font-normal !leading-[1.5] sm:text-4xl'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Hello, I&apos;m <span className="font-bold">Umar Ibn Shafee</span> a{" "}
                    <span className="font-bold font-mono">Full-stack developer</span><br /> with{" "}
                    <span className="font-bold">6 years</span> of experience. I enjoy
                    building <span className="italic">websites, SPA&apos;s & PWA&apos;s</span>. My focus is{" "}
                    <span className="underline">Frontend (React/Next.js, Angular, Vue)</span>.
                </motion.h1>

                <motion.div
                    className='flex gap-3 px-4 flex-col sm:flex-row items-center justify-center text-lg font-medium'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2
                    }}
                >
                    <Link
                        href={"#contact"}
                        className='group bg-gray-900 text-white px-7 py-3 flex justify-center items-center gap-2 
                    rounded-full outline-none hover:bg-gray-950 focus:scale-110 hover:scale-110 active:scale-105 
                    transition-all'
                        onClick={() => setActiveSection('Contact')}
                    >
                        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                        className='group bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full 
                    outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all border 
                    border-black/10 dark:bg-white/10'
                        href='/Umar-CV.pdf'
                        download={true}
                    >
                        Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                    </a>

                    <a
                        className='bg-white p-4 text-gray-600 hover:text-gray-950 flex justify-center items-center 
                    gap-2 rounded-full outline-none focus:scale-25 hover:scale-125 active:scale-105 transition-all 
                    border border-black/10 dark:bg-white/10 dark:text-white/70'
                        href='https://www.linkedin.com/in/umar-ibn-shafee/'
                        target='_blank'
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className='bg-white p-4 text-gray-600 hover:text-gray-950 flex justify-center items-center 
                    gap-2 rounded-full outline-none focus:scale-125 hover:scale-125 active:scale-105 transition-all
                    border border-black/10 dark:bg-white/10 dark:text-white/70'
                        href='https://github.com/umar-ibn-shafee'
                        target='_blank'
                    >
                        <BsGithub />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
