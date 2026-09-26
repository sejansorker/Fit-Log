import React from 'react'
import Container from './share/Container'
import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div className='mt-8 mb-16'>
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 bg-[rgba(34,38,48,0.52)] p-6 sm:p-10 lg:p-14 rounded-[16px]">
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <p className='font-bold text-[11px] text-[#C2F800]'>WORKOUT LIBRARY</p>
            <h1 className='font-extrabold text-[28px] sm:text-[40px] lg:text-[60px] text-white py-5 leading-tight lg:leading-none'>
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className='text-[#9CA3AF] font-normal text-[13px] sm:text-[15px] lg:text-[16px] lg:pr-20 max-w-md mx-auto lg:mx-0'>
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
            </p>
            <button className='py-3 px-4 mt-8 bg-[#C2F800] text-[12px] font-bold cursor-pointer rounded-[6px]'>
              BROWSE WORKOUTS
            </button>
          </div>

          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <Image
              src="/banner.png"
              height={334}
              width={334}
              alt="Workout banner"
              className="w-[180px] h-auto sm:w-[240px] lg:w-[334px]"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HomeBanner