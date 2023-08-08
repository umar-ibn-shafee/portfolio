import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] animate-reverse-blob mix-blend-multiply absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#dbd7fb] animate-blob mix-blend-multiply absolute -z-10 top-[-1rem] left-[-33rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] sm:left-[-45rem] md:left-[-36rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        {children}</body>
    </html>
  )
}
