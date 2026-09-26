"use client"
import React, { useContext } from 'react'
import Container from '../share/Container'
import { ProductApi } from '../share/ContextApi'
import Image from 'next/image'
import { Clock, ThumbsUp, Star } from 'lucide-react'
import Link from 'next/link'
const Library = () => {
    const data = useContext(ProductApi)

  return (
    <div className='mb-16'>
        <Container>
            <h3 className='font-bold text-[30px] text-white pb-1'>THE LIBRARY</h3>
            <p className='text-[#9CA3AF] text-[14px] font-normal'>Twelve lifts covering every major muscle group.</p>
            <div className="pt-8">
             <div className="flex flex-wrap lg:gap-y-10 justify-between">
              
              {data.map((item)=>(
    <Link 
      href={`/workout/${item.id}`}
      key={item.id}
      className="w-[32%] bg-[rgba(156,163,175,0.15)] rounded-lg pb-6 block hover:opacity-90 transition"
    >
       <div className="relative w-full lg:h-[222px]">
         <Image 
           src={item.image} 
           fill 
           className='object-cover rounded-t-lg' 
           alt={item.name || "workout"} 
         />
       </div>

       <div className="px-6">
          <div className="pt-6 flex items-center gap-x-2">
            {item.muscleGroups?.map((tag) => (
              <p 
                key={tag}
                className='py-0.5 px-2.5 rounded-full bg-[#C2F800] text-black font-bold text-[11px] uppercase'
              >
                {tag}
              </p>
            ))}
          </div>

          <h1 className='text-white font-bold text-[20px] uppercase pt-4'>
            {item.name}
          </h1>
          <p className='text-[#9CA3AF] text-[13px] pt-1'>
            {item.equipment}
          </p>

          <div className="border-t border-[rgba(156,163,175,0.2)] mt-4 pt-4 flex items-center gap-x-4 text-[#9CA3AF] text-[13px]">
            <span className='flex items-center gap-x-1'>
              <Clock size={14} /> {item.duration} min
            </span>
            <span className='flex items-center gap-x-1'>
              <ThumbsUp size={14} /> {item.caloriesBurned} kcal
            </span>
            <span className='flex items-center gap-x-1'>
              <Star size={14} className='fill-[#C2F800] text-[#C2F800]' /> {item.rating}
            </span>
          </div>
       </div>
    </Link>
))}
              
             </div>
            </div>
        </Container>
    </div>
  )
}

export default Library