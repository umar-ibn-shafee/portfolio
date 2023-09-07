'use client'
import { AnimatePresence, easeIn, easeOut, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true)

    // const range = [...Array(11).keys()].map(n => n / 10)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000);
    }, [])
    const anime = {
        i: {
            opacity: 0
        },
        a: (delay: number) => ({
            opacity: 1,
            transition: {
                delay: delay,
                ease: easeIn
            }
        }),
        e: (delay: number) => ({
            opacity: 0,
            transition: {
                delay: delay,
                ease: easeOut
            }
        })
    }
    return (
        <AnimatePresence mode='wait'>
            {isLoading &&
                <motion.div
                    className='z-[999] h-[100vh] w-[100vw] fixed top-0 left-0 bg-white dark:bg-black flex items-center 
                    justify-center'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 1, delay: 1 } }}
                >
                    <p
                        className='font-bold text-4xl'
                    >
                        <motion.span
                            variants={anime}
                            initial='i'
                            animate='a'
                            exit='e'
                            custom={0.6}
                        >
                            Mohammed Umar
                        </motion.span>
                        <motion.span
                            className='font-thin'
                            variants={anime}
                            initial='i'
                            animate='a'
                            exit='e'
                            custom={0.8}
                        >
                            {' '}Portfolio
                        </motion.span>
                    </p>
                </motion.div>
            }
        </AnimatePresence>
    )
}
