'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Props = {
    children: React.ReactNode
}

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({ children }: Props) {

    const [theme, setTheme] = useState<Theme>('dark')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider >
    )
}

export function useThemeContext() {

    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error('useThemeContext must only be used within the useThemeContextProvider')
    }

    const {theme, setTheme} = context

    const handleTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme)
            if(localTheme === 'dark') {
                document.documentElement.classList.add('dark')
            }
        } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark')
            document.documentElement.classList.add('dark')
        }
    }, [])

    return {theme, handleTheme}
}
