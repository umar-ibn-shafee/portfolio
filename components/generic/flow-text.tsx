import { motion } from 'framer-motion'
import React, { useState } from 'react'

type Props = {
    text: string
    onHover: boolean
}

export default function FlowText({ text, onHover }: Props) {

    const sentance = {
        initial: { opacity: 1 },
        animateTo:
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
        initial: { opacity: 1 },
        animateTo: {
            opacity: [1, 0.7, 0.5, 1],
            transition: {
                repeat: Infinity,
                repeatDelay: onHover ? 0.5 : 1.5
            }
        }
    }

    return (
        <motion.p variants={sentance} initial='initial' animate={onHover ? {} : 'animateTo'} whileHover={onHover ? 'animateTo' : {}}>
            {text.split('').map((char, i) => (
                <motion.span
                    key={char + '-' + i}
                    variants={letters}
                >{char}</motion.span>
            ))}
        </motion.p>
    )
}
