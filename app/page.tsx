'use client'

import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Preloader from "@/components/preloader";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {

  return (
    <main className="flex flex-col items-center px-4">
      <Preloader />
      <Intro />
      <SectionDivider />
      <AboutMe />
      {/* <Projects /> */}
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
