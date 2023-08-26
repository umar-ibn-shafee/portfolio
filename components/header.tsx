'use client'

import React from 'react'
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from 'next/link';
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context/active-section-context';
import FlowText from './generic/flow-text';

export default function Header() {

    const { activeSection, setActiveSection } = useActiveSectionContext()

    return (
        <header className='z-[999] relative'>
            {activeSection === 'Home' ?
                (<motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        duration: 0.4
                    }}
                >
                    <nav
                        className='fixed top-10 h-[3.5rem] w-full bg-white bg-opacity-0 px-20 flex flex-row 
                justify-between items-center font-medium text-sm leading-4'
                    >
                        <div className='cursor-pointer'>
                            <FlowText text='Mohammed Umar' onHover={true} />
                        </div>
                        <ul className='flex flex-row items-center gap-10'>
                            {links.map(link => link.name !== 'Home' && (
                                <li
                                    key={link.hash}
                                    className={clsx(`hover:underline underline-offset-4`,
                                        {
                                            'hover:no-underline border border-black/10 bg-black text-white dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-[0.5rem] -ml-4 px-4 py-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition-all'
                                                : link.name === 'Contact'
                                        })}
                                >
                                    <Link href={link.hash}>
                                        {link.name === 'Contact' ? link.name : (
                                            <FlowText text={link.name} onHover={true} />
                                        )}
                                    </Link>
                                </li>))}
                        </ul>
                    </nav>
                </motion.div>) :
                (<div>
                    <motion.div
                        className='fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray-300/40 
                     bg-white bg-opacity-60 shadow-lg shadow-black/5 dark:shadow-white/5
                    backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full 
                    dark:bg-gray-950 dark:bg-opacity-60 dark:border-gray-700/40'
                        initial={{ y: -100, x: "-50%", opacity: 0 }}
                        animate={{ y: 0, x: "-50%", opacity: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            duration: 0.4
                        }}
                    ></motion.div>
                    <nav
                        className='flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] 
                    sm:h-[initial] sm:py-0'
                    >
                        <ul
                            className='flex w-[22rem] flex-wrap items-center justify-center gap-y-5 text-[0.9rem] 
                        font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'
                        >
                            {links.map(link => (
                                <motion.li
                                    className='h-3/4 flex items-center justify-center relative'
                                    key={link.hash}
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                >
                                    <Link
                                        className={clsx(`flex w-full items-center justify-center px-3 py-3 
                                hover:text-gray-950 transition dark:hover:text-gray-300`,
                                            { "text-gray-950 dark:text-gray-300": activeSection === link.name })}
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                        }}
                                    >
                                        {link.name}

                                        {link.name === activeSection && (
                                            <motion.span
                                                className='absolute rounded-full bg-gray-200 inset-0 -z-10 dark:bg-gray-700'
                                                layoutId='activeSection'
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 380,
                                                    damping: 30
                                                }}
                                            ></motion.span>
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </nav>
                </div>)}
        </header>
    )
}
