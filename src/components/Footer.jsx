import React from 'react'
import Container from './share/Container'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='lg:py-10 py-4 border-t-1 border-[rgba(107,114,128,0.48)]'>
      <Container>
        <div className="lg:flex justify-between items-center">
          <div className="">
            <Image src="/footer.png" height={20} width={71} alt="footer logo"></Image>
          </div>
          <div className="">
            <p className='font-normal lg:text-[12px] text-[10px] lg:pt-0 pt-3 text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer