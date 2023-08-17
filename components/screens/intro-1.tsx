"use client";

import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from 'react-icons/hi'
import { useSectioninview } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

    const { ref } = useSectioninview('Home')
    const { setActiveSection } = useActiveSectionContext()

    return (
        <section
            ref={ref}
            className='flex flex-row justify-between mb-28 max-w-[50rem] text-left sm:mb-0 scroll-mt-[100rem]'
            id='home'
        >
            <div className='flex-1 flex flex-col items-center justify-center'>
                <motion.h1
                    className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-xl'
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-bold">Hello, I'm Umar.</span> I'm a{" "}
                    <span className="font-bold">full-stack developer</span> with{" "}
                    <span className="font-bold">6 years</span> of experience. I enjoy
                    building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React (Next.js)</span>.
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
                        className='group bg-gray-900 text-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none 
                    focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
                        onClick={() => setActiveSection('Contact')}
                    >
                        Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                    </Link>

                    <a
                        className='group bg-white px-7 py-3 flex justify-center items-center gap-2 rounded-full outline-none 
                    focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10'
                        href='/Umar-CV.pdf'
                        download={true}
                    >
                        Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
                    </a>

                    <a
                        className='bg-white p-4 text-gray-600 hover:text-gray-950 flex justify-center items-center gap-2 rounded-full
                    outline-none focus:scale-25 hover:scale-125 active:scale-105 transition border border-black/10'
                        href='https://www.linkedin.com/in/umar-ibn-shafee/'
                        target='_blank'
                    >
                        <BsLinkedin />
                    </a>

                    <a
                        className='bg-white p-4 text-gray-600 hover:text-gray-950 flex justify-center items-center gap-2 rounded-full
                    outline-none focus:scale-125 hover:scale-125 active:scale-105 transition border border-black/10'
                        href='https://github.com/umar-ibn-shafee'
                        target='_blank'
                    >
                        <BsGithub />
                    </a>
                </motion.div>
            </div>

            <div className='flex-1 flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
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
                            className='h-80 w-72 object-cover border-[0.35rem] border-black shadow-xl' />
                    </motion.div>
                    <motion.div className='h-80 w-72 absolute -right-2 -bottom-2 bg-black -z-10'></motion.div>
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
                </div>
            </div>
        </section>
    )
}
