import React from 'react'
import Container from './share/Container'
import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div className='mt-12 mb-16'>
       <Container>
        <div className="flex items-center justify-between bg-[rgba(34,38,48,0.52)] p-14 rounded-[16px]">
          <div className="w-2/3">
          <div className="">
            <p className='font-bold text-[11px] text-[#C2F800]'>WORKOUT LIBRARY</p>
            <h1 className='font-extrabold lg:text-[60px] text-[30px] text-[#fff] py-5 leading-none'>TRAIN WITH INTENT. LOG
EVERY SET.</h1>
          <p className='text-[#9CA3AF] font-normal pr-75 lg:text-[16px] text-[10px]'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
into today's plan, and watch the week's work add up.</p>
<button className='py-3 px-4 mt-10 bg-[#C2F800] text-[12px] font-bold cursor-pointer rounded-[6px]'>BROWSE WORKOUTS</button>
          </div>
          </div>
          <div className="w-1/3 flex justify-end">
          <Image src="/banner.png" height={334} width={334} alt="Workout banner"  />
          </div>
        </div>
       </Container>
    </div>
  )
}

export default HomeBanner