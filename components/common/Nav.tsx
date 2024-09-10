import { Montserrat } from 'next/font/google'
import React from 'react'
import ElipseIcon from './icons/ElipseIcon'

type Props = {}

const monsterat = Montserrat({
    subsets: ['latin']
})
const Nav = (props: Props) => {
  return (
    <nav className='w-full bg-white h-[90px] flex items-center'>
        <div className="container mx-auto flex justify-between">
            <div className='relative flex pr-4'>
                <h2 className={`${monsterat.className} text-[28px] font-bold text-primary `}>Blulearn
                </h2>
                <span className='absolute bottom-2.5 right-1'><ElipseIcon /></span>
            </div>
        </div>
    </nav>
  )
}

export default Nav