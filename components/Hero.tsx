import React from 'react'
import UnderlineElipse from './common/icons/UnderlineElipse'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='container mx-auto flex gap-10 items-center py-16'>
      <div className="w-1/2 flex flex-col gap-6">
        <h1 className='relative text-[55px] font-bold leading-[75px]'>Learn a New Skill
          Everyday, Anytime, and Anywhere.
          <span className='absolute top-16 right-40'> <UnderlineElipse />  </span>
        </h1>

        <p className='text-xl w-[90%] text-gray-700'> <span className='font-semibold text-black'>1000+</span>  Courses covering all tech domains for you to learn and explore new oppurtunities. Learn from Industry Experts and land your Dream Job.</p>

        <div className="flex gap-6">
          <button className='w-[200px] h-[60px] text-xl flex items-center justify-center bg-primary text-white rounded-md'>Start Trial</button>
          <button className='w-[200px] h-[60px] text-xl  flex items-center justify-center text-primary border border-primary rounded-md'>How it Works</button>

        </div>
      </div>
      <div className=' w-1/2 flex justify-center'>
          {/* <img src="/Group 3.png" className='absolute top-52' alt="" />
          <img src="/rocket.png" className='absolute top-0 right-72' alt="" />
          <img src="/cup.png" className='absolute bottom-0 right-0' alt="" />
 */}


      </div>
    </div>
  )
}

export default Hero