// "use client"
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useContext } from 'react'
// import Container from './share/Container'
// import Image from "next/image";
// const NavBar = () => {
    
    
//     const pathname = usePathname()
//   return (
//     <div className="">
   
//     <Container>
//    <div className="navbar ">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <Image
//   src="/logo.png"
//   alt="Logo"
//   width={40}
//   height={40}
// />
//       </div>
//       <ul
//         tabIndex={-1}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            
//         <li>Workouts</li>
//         <li>My Plan</li>
//       </ul>
//     </div>
//     <div className="flex items-center gap-x-2.5 ">
//     <Image
//   src="/logo.png"
//   alt="Logo"
//   width={30}
//   height={30}
// />
// <h3 className='text-white text-[18px]'>FITLOG</h3>
//     </div>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className=" flex gap-x-7">
//         <li><Link className={` ${pathname === '/' ? 'text-[#C2F800] bg-[rgba(194,248,0,0.16)] py-1.5 px-4 rounded-[10px]' : 'text-[#9CA3AF]'}`} href="/">
//         Workouts
//       </Link></li>
//        <li> <Link className={` ${pathname === '/My_Plan' ? 'text-[#C2F800] bg-[rgba(194,248,0,0.16)] py-1.5 px-4 rounded-[10px]' : 'text-[#9CA3AF]'}`} href="/My_Plan">
//         My Plan
//       </Link></li>
//     </ul>
//   </div>
//   <div className="navbar-end flex items-center gap-x-6">
//     <button className='text-[#D1D5DB] text-[12px] flex items-center gap-x-2'>Plan <span className='h-5 w-5 flex justify-center items-center bg-[#C2F800] rounded-full text-black '>0</span></button>
//     <button className='text-[#D1D5DB] text-[12px] flex items-center gap-x-2'>Saved <span className='h-5 w-5 flex justify-center items-center bg-[#C2F800] rounded-full text-black '>0</span></button>
//   </div>
// </div>
//     </Container>
//     </div>
//   )
// }

// export default NavBar

"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Container from './share/Container'
import Image from "next/image"
import { usePlan } from './share/PlanContext'

const NavBar = () => {
  const pathname = usePathname()
  const { plan, saved } = usePlan()

  return (
    <div className="">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <Image src="/logo.png" alt="Logo" width={40} height={40} />
              </div>
              <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><Link href="/">Workouts</Link></li>
                <li><Link href="/My_Plan">My Plan</Link></li>
              </ul>
            </div>
            <div className="flex items-center gap-x-2.5">
              <Image src="/logo.png" alt="Logo" width={30} height={30} />
              <h3 className='text-white text-[18px]'>FITLOG</h3>
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

          <div className="navbar-end flex items-center gap-x-6">
            <Link href="/My_Plan" className='text-[#D1D5DB] text-[12px] flex items-center gap-x-2'>
              Plan
              <span className='h-5 w-5 flex justify-center items-center bg-[#C2F800] rounded-full text-black text-[11px] font-bold'>
                {plan.length}
              </span>
            </Link>
            <Link href="/My_Plan" className='text-[#D1D5DB] text-[12px] flex items-center gap-x-2'>
              Saved
              <span className='h-5 w-5 flex justify-center items-center border border-[#C2F800] rounded-full text-[#C2F800] text-[11px] font-bold'>
                {saved.length}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NavBar