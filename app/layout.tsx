import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/screens/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umar Ibn Shafee | Personal Portfolio',
  description: 'Umar is a Forntend Engineer with 6 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36
      dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}>
        <div
          className='bg-[#f79c9f] animate-reverse-blob mix-blend-multiply absolute -z-10 top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] dark:mix-blend-normal'></div>
        <div
          className='bg-[#a89efa] animate-blob mix-blend-multiply .animation-delay-4000 absolute -z-10 
        top-[-1rem] left-[-33rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:left-[-45rem] 
        md:left-[-36rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:mix-blend-normal'></div>
        <div
          className='bg-[#f89dd0] animate-reverse-blob animation-delay-2000 mix-blend-multiply absolute 
        -z-10 top-[-15rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        sm:left-[-45rem] md:left-[-36rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946263] dark:mix-blend-normal'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>

      </body>
    </html>
  )
}
