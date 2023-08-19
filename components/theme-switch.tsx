'use client'

import { useThemeContext } from '@/context/theme-context'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

type Theme = 'light' | 'dark'

export default function ThemeSwitch() {

    const {theme, handleTheme} = useThemeContext()

    return (
        <button
            className='fixed bottom-6 right-6 h-12 w-12 bg-white flex items-center justify-center 
    rounded-full shadow-2xl backdrop-blur-[0.5rem] bg-opacity-60 border border-white border-opacity-40
    hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'
            onClick={handleTheme}
        >
            {theme === 'light' ? (<BsSun />) : (<BsMoon />)}
        </button>
    )
}
