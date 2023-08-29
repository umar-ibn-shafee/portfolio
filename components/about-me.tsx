"use client"

import React from 'react'
import Image from "next/image";
import SectionHeading from './generic/section-heading'
import { motion } from "framer-motion";
import { useSectioninview } from "@/lib/hooks";

export default function AboutMe() {

    const { ref } = useSectioninview('About', 0.75)

    return (
        <motion.section
            ref={ref}
            className='mb-28 w-full leading-8 sm:mb-40 scroll-mt-28 px-12'
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.275 }}
            id='about'
        >
            {/* <SectionHeading>About me</SectionHeading> */}
            <h2 className='text-6xl font-bold capitalize text-center lg:text-start mb-12'>
                About me
            </h2>
            {/* <p className='mb-3'>
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science Engineering</span>, I decided to pursue my
                passion for programming. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Prisma. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>
            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy playing
                video games, watching movies, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and philosophy</span>. I&apos;m also
                learning how to play the guitar.
            </p> */}
            <div className='flex flex-col-reverse gap-20 text-center lg:text-left lg:flex-row justify-center lg:justify-between items-center'>
                <p className='mb-3 max-w-[45rem] lg:pr-24'>
                    I am a JavaScript Frontend Developer with 6 years of experience.<br /><br />
                    I&apos;ve experience developing high quality, well tested web applications with TypeScript and
                    all the major frontend frameworks like React, Vue, Angular and server rendered applications with
                    meta frameworks like NextJS, NuxtJS for improved SEO, initial load time and performance of
                    web applications. I can even build RESTful API backends with Node, Express, NestJS, Prisma,
                    Mongoose, Mongo and Postgres. And I&apos;ve deployment experience with AWS and Vercel.<br />
                    I&apos;m very proficient with TypeScript & JavaScript and it&apos;s modern ES6+ syntax and features.
                    I&apos;ve good knowledge of JavaScript compiler like Babel and bundlers like Webpack, Vite and esbuild.
                    I&apos;ve experience writing unit tests and end to end tests using Jest & Cypress and
                    implementing CI/CD pipelines. And I&apos;m well versed with Git.<br /><br />
                    I&apos;ve build well tested, high quality, large-scale web applications in past like PizzaHut,
                    Fabindia, KFC, CatchThatBus, Little Caesar, inseego Connect, Blokbot.
                </p>
                <div className='relative h-96 w-96 flex-none'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'tween',
                            duration: 0.25
                        }}
                        className='relative h-88 w-88 bg-black rounded-xl before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:from-[#614cf9] before:to-[#f63b6d] before:blur-[1.5rem]'
                    >
                        <Image
                            src="/DP.png"
                            alt='Umar Ibn Shafee'
                            width={500}
                            height={500}
                            quality={95}
                            priority={true}
                            className='h-90 w-90 rounded-xl object-cover border-[0.35rem] border-black shadow-xl' />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}
