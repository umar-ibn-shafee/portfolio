import Header from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import localFont from "next/font/local";
import ActiveSectionContextProvider from '@/context/active-section-context'
import Footer from '@/components/screens/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const robotoMono = Roboto_Mono({subsets: ['latin'], variable: '--font-roboto-mono'})

const neuefontAll = localFont({variable: '--font-neue-montreal', src: [
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Book.otf',
    weight: '400',
    style: 'normal'
  },
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Bold.otf',
    weight: '800',
    style: 'normal'
  },
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Medium.otf',
    weight: '530',
    style: 'normal'
  },
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Italic.otf',
    weight: '450',
    style: 'italic'
  },
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-SemiBolditalic.otf',
    weight: '700',
    style: 'italic'
  },
  {
    path: '../public/fonts/Neue-Montreal/OTF/PPNeueMontreal-Thin.otf',
    weight: '200',
    style: 'normal'
  }
]})

export const metadata: Metadata = {
  title: 'Mohammed Umar · Full-stack developer',
  description: 'Mohammed Umar is a forntend focused Full-stack Engineer with 6 years of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${neuefontAll.variable} ${robotoMono.variable} font-sans bg-white text-gray-950 relative 
        pt-4 dark:bg-black dark:text-gray-50 dark:text-opacity-90`}>
        {/* <div
          className='bg-[#f79c9f] animate-reverse-blob mix-blend-multiply absolute -z-10 top-[-6rem] right-[11rem] 
        h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263] dark:mix-blend-normal'></div>
        <div
          className='bg-[#a89efa] animate-blob mix-blend-multiply .animation-delay-4000 absolute -z-10 
        top-[-1rem] left-[-33rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:left-[-45rem] 
        md:left-[-36rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394] dark:mix-blend-normal'></div>
        <div
          className='bg-[#f89dd0] animate-reverse-blob animation-delay-2000 mix-blend-multiply absolute 
        -z-10 top-[-15rem] right-[11rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        sm:left-[-45rem] md:left-[-36rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946263] dark:mix-blend-normal'></div> */}

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
