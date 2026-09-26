"use client"
import React, { useContext } from 'react'
import Container from '../share/Container'
import { ProductApi, LoadingApi } from '../share/ContextApi'
import Image from 'next/image'
import { Clock, Flame, Star } from 'lucide-react'
import Link from 'next/link'

const Library = () => {
  const data = useContext(ProductApi)
  const loading = useContext(LoadingApi)

  return (
    <div className='mb-16 lg:px-0 px-2' id="library">
      <Container>
        <h3 className='font-bold text-[22px] sm:text-[26px] lg:text-[30px] text-white pb-1'>THE LIBRARY</h3>
        <p className='text-[#9CA3AF] text-[13px] sm:text-[14px] font-normal'>Twelve lifts covering every major muscle group.</p>

        <div className="pt-8">
          {loading ? (
            <p className="text-white text-center py-10">Loading workouts…</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data.map((item) => (
                <Link
                  href={`/workout/${item.id}`}
                  key={item.id}
                  className="bg-[rgba(156,163,175,0.15)] rounded-lg pb-6 block hover:opacity-90 transition"
                >
                  <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[222px]">
                    <Image
                      src={item.image}
                      fill
                      className='object-cover rounded-t-lg'
                      alt={item.name || "workout"}
                    />
                  </div>

                  <div className="px-4 sm:px-6">
                    <div className="pt-5 sm:pt-6 flex items-center gap-x-2 flex-wrap gap-y-1">
                      {item.muscleGroups?.map((tag) => (
                        <p
                          key={tag}
                          className='py-0.5 px-2.5 rounded-full bg-[#C2F800] text-black font-bold text-[10px] sm:text-[11px] uppercase'
                        >
                          {tag}
                        </p>
                      ))}
                    </div>

                    <h1 className='text-white font-bold text-[17px] sm:text-[20px] uppercase pt-3 sm:pt-4'>
                      {item.name}
                    </h1>
                    <p className='text-[#9CA3AF] text-[12px] sm:text-[13px] pt-1'>
                      {item.equipment}
                    </p>

                    <div className="border-t border-[rgba(156,163,175,0.2)] mt-3 sm:mt-4 pt-3 sm:pt-4 flex items-center gap-x-3 sm:gap-x-4 flex-wrap text-[#9CA3AF] text-[12px] sm:text-[13px]">
                      <span className='flex items-center gap-x-1'>
                        <Clock size={13} /> {item.duration} min
                      </span>
                      <span className='flex items-center gap-x-1'>
                        <Flame size={13} /> {item.caloriesBurned} kcal
                      </span>
                      <span className='flex items-center gap-x-1'>
                        <Star size={13} className=' text-[#C2F800]' /> {item.rating}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Library