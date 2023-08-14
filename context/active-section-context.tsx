"use client"

import React, { createContext, useContext, useState } from 'react'
import { SectionName } from "@/lib/types";


type Props = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    lastClickTime: number,
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: Props) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    const [lastClickTime, setLastClickTime] = useState<number>(0)

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection, lastClickTime, setLastClickTime }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error('useActiveSectionContext must only be used within the ActiveSectionContextProvider')
    }

    return context;
}
