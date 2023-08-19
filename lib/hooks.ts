import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectioninview(sectionName: SectionName, threshold = 0.5) {
    const { ref, inView } = useInView({
        threshold
    });

    const { activeSection, setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
            setActiveSection(sectionName)
            console.log('ActiveSection change to:', sectionName)
        }
        // console.log('Activesection on inView:', activeSection, sectionName)
    }, [inView, sectionName, activeSection, setActiveSection])

    return {
        ref
    }
}