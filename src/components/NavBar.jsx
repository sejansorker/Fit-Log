"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Container from './share/Container'
import Image from "next/image"
import { usePlan } from './share/PlanContext'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const pathname = usePathname()
  const { plan, saved } = usePlan()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            {/* Mobile toggle button — এখন Link এর ভিতরে না, নিজেই button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="btn btn-ghost lg:hidden"
            >
              {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>

            <div className="flex items-center gap-x-2.5 hidden lg:block">
              <Link href="/" className="flex items-center gap-x-2.5">
                <Image src="/logo.png" alt="Logo" width={30} height={30} />
                <h3 className='text-white text-[18px]'>FITLOG</h3>
              </Link>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-x-7">
              <li>
                <Link className={`${pathname === '/' ? 'text-[#C2F800] bg-[rgba(194,248,0,0.16)] py-1.5 px-4 rounded-[10px]' : 'text-[#9CA3AF]'}`} href="/">
                  Workouts
                </Link>
              </li>
              <li>
                <Link className={`${pathname === '/My_Plan' ? 'text-[#C2F800] bg-[rgba(194,248,0,0.16)] py-1.5 px-4 rounded-[10px]' : 'text-[#9CA3AF]'}`} href="/My_Plan">
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end flex items-center gap-x-3 sm:gap-x-6">
            <Link href="/My_Plan" className='text-[#D1D5DB] text-[11px] sm:text-[12px] flex items-center gap-x-2'>
              <span className="hidden sm:inline">Plan</span>
              <span className='h-5 w-5 flex justify-center items-center bg-[#C2F800] rounded-full text-black text-[11px] font-bold'>
                {plan.length}
              </span>
            </Link>
            <Link href="/My_Plan" className='text-[#D1D5DB] text-[11px] sm:text-[12px] flex items-center gap-x-2'>
              <span className="hidden sm:inline">Saved</span>
              <span className='h-5 w-5 flex justify-center items-center border border-[#C2F800] rounded-full text-[#C2F800] text-[11px] font-bold'>
                {saved.length}
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile dropdown menu — এখন state দিয়ে control হচ্ছে */}
        {menuOpen && (
          <ul className="lg:hidden flex flex-col gap-2 bg-[#111] rounded-lg p-4 mb-4">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="text-white block py-1">
                Workouts
              </Link>
            </li>
            <li>
              <Link href="/My_Plan" onClick={() => setMenuOpen(false)} className="text-white block py-1">
                My Plan
              </Link>
            </li>
          </ul>
        )}
      </Container>
    </div>
  )
}

export default NavBar