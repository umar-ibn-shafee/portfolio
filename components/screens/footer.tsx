import { socials } from '@/lib/data'
import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-6 px-12 text-gray-500 dark:text-white flex justify-between items-center'>
      <div className='flex flex-col items-start gap-2 text-xs pr-4'>
        <div className='uppercase font-thin'>Version</div>
        <small className='block text-xs'>
          2023 &copy; Mohammed Umar.
          {/* <br /> All rights reserved */}
        </small>
      </div>
      <div className='flex flex-col items-start gap-2 text-xs pr-4'>
        <div className='uppercase font-thin'>Socials</div>
        <div className='w-full flex flex-row gap-4 font-medium'>
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target='_blank'
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
