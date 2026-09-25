import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='container mx-auto flex items-center justify-between py-5 bg-teal-500'>
        <div className="">
            <h1>logo</h1>
        </div>
        <div className="">
            <ul className='flex items-center gap-x-10'>
            <Link href={"/"}>
            
            <li>Home</li>
            </Link>
            <Link href={"/About"}>
            
             <li>About</li>
            </Link>
          
            <li>Contact</li>
            </ul>
        </div>
        <div className="">
            <button>Button</button>
        </div>
    </div>
  )
}

export default NavBar