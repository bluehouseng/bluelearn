import { Montserrat } from 'next/font/google'
import React from 'react'
import ElipseIcon from './icons/ElipseIcon'
import YellowElipse from './icons/YellowElipse'
import ShareIcon from './icons/ShareIcon'


const monsterat = Montserrat({
    subsets: ['latin']
})

const Nav = () => {
    return (
        <nav className='w-full bg-white h-[90px] flex items-center'>
            <div className="container mx-auto flex items-center justify-between">
                <div className='relative flex pr-4'>
                    <h2 className={`${monsterat.className} text-[28px] font-bold text-primary `}>Blulearn
                    </h2>
                    <span className='absolute bottom-2.5 right-1'><ElipseIcon /></span>
                </div>

                <div className='flex items-center gap-20'>

                    <ul className='flex text-primary gap-10 relative py-2'>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>ACADEMY</li>
                        <li className='flex gap-2'>
                            BLOG
                            <ShareIcon />
                        </li>

                        <span className='absolute bottom-0 left-0'>
                            <YellowElipse />
                        </span>
                    </ul>

                    <div className="flex gap-6">
                        <button className='w-[126px] h-[50px] flex items-center justify-center text-primary border border-primary rounded-md'>Login</button>
                        <button className='w-[126px] h-[50px] flex items-center justify-center bg-primary text-white rounded-md'>Sign Up</button>

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Nav