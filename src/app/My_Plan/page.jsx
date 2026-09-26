
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Clock, Flame, Star, Check, X } from 'lucide-react'
import Container from '@/components/share/Container'
import { usePlan } from '@/components/share/PlanContext'

const MyPlan = () => {
  const { plan, saved, doneIds, removeFromPlan, removeFromSaved, toggleDone } = usePlan()

  const [tab, setTab] = useState('plan')
  const [sortKey, setSortKey] = useState('duration')

  const activeList = tab === 'plan' ? plan : saved
  const sortedList = [...activeList].sort((a, b) => b[sortKey] - a[sortKey])

  const minutes = activeList.reduce((sum, w) => sum + w.duration, 0)
  const calories = activeList.reduce((sum, w) => sum + w.caloriesBurned, 0)

  return (
    <div className="">
      <Container>
        <div className="pt-17 pb-30 lg:px-0 px-2">
          <h1 className="text-white font-bold text-[30px] uppercase pb-2">My Plan</h1>
          <p className="text-[#9CA3AF] text-sm pt-1 pb-3">
            Cap of five lifts for today. Finish them, then load more.
          </p>
          <div className="grid grid-cols-3 w-full gap-4 mt-6 rounded-xl bg-[rgba(156,163,175,0.1)] p-6">
            <div>
              <p className="text-[#9CA3AF] text-xs uppercase">Exercises</p>
              <p className="text-[#C2F800] font-bold text-2xl pt-1">{activeList.length}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF] text-xs uppercase">Minutes</p>
              <p className="text-white font-bold text-2xl pt-1">{minutes}</p>
            </div>
            <div>
              <p className="text-[#9CA3AF] text-xs uppercase">Calories</p>
              <p className="text-white font-bold text-2xl pt-1">{calories}</p>
            </div>
          </div>

          {/* Tabs + Sort */}
          <div className="flex items-center justify-between mt-6">
            <div className="inline-flex rounded-lg border border-[rgba(156,163,175,0.2)] bg-[rgba(156,163,175,0.05)] p-1 gap-1">
              <button
                onClick={() => setTab('plan')}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                  tab === 'plan'
                    ? 'bg-[rgba(156,163,175,0.15)] text-white border border-[rgba(156,163,175,0.3)]'
                    : 'text-[#9CA3AF] border border-transparent'
                }`}
              >
                Today&apos;s Plan
              </button>
              <button
                onClick={() => setTab('saved')}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition ${
                  tab === 'saved'
                    ? 'bg-[rgba(156,163,175,0.15)] text-white border border-[rgba(156,163,175,0.3)]'
                    : 'text-[#9CA3AF] border border-transparent'
                }`}
              >
                Saved
              </button>
            </div>

            <div className="relative">
              <span className="text-[#9CA3AF] text-xs mr-2">Sort By</span>
              <select
                value={sortKey}
                onChange={(e) => setSortKey(e.target.value)}
                className="text-white border border-gray-300 text-xs rounded-md py-1.5 pl-3 pr-8 outline-none appearance-none bg-transparent"
              >
                <option value="duration" className="bg-[#1a1a1a] text-white">Duration</option>
                <option value="caloriesBurned" className="bg-[#1a1a1a] text-white">Calories</option>
                <option value="rating" className="bg-[#1a1a1a] text-white">Rating</option>
              </select>
            </div>
          </div>

          {/* List */}
          <div className="mt-5 flex flex-col gap-3">
            {sortedList.length === 0 ? (
              // Empty state
              <div className="text-center py-16 rounded-xl border border-[rgba(156,163,175,0.2)]">
                <h3 className="text-white font-bold uppercase">Nothing Here Yet</h3>
                <p className="text-[#9CA3AF] text-sm mt-2 max-w-xs mx-auto">
                  Browse the library and add a lift to get today moving.
                </p>
                <Link
                  href="/"
                  className="inline-block mt-4 bg-[#C2F800] text-black font-bold text-sm uppercase px-5 py-2.5 rounded-md"
                >
                  Go to workouts
                </Link>
              </div>
            ) : (
              sortedList.map((item) => {
                const isDone = doneIds.includes(item.id)
                return (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-xl bg-[rgba(156,163,175,0.1)] p-3"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-lg object-cover shrink-0"
                    />

                    {/* Name + stats */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold uppercase text-sm ${
                          isDone ? 'text-[#9CA3AF] line-through' : 'text-white'
                        }`}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[#9CA3AF] text-xs">{item.equipment}</p>
                      <div className="flex items-center gap-3 text-xs text-[#9CA3AF] mt-1">
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {item.duration} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame size={13} /> {item.caloriesBurned} kcal
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={13} className="fill-[#C2F800] text-[#C2F800]" /> {item.rating}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        href={`/workout/${item.id}`}
                        className="rounded-md border border-[rgba(156,163,175,0.3)] px-3 py-1.5 text-xs font-semibold text-white"
                      >
                        View Details
                      </Link>

                     {tab === 'plan' && (
  <button
    onClick={() => !isDone && toggleDone(item.id)}
    disabled={isDone}
    className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-semibold ${
      isDone
        ? 'bg-[#C2F800]/20 text-[#C2F800] cursor-not-allowed opacity-70'
        : 'bg-[#C2F800] text-black cursor-pointer'
    }`}
  >
    <Check size={13} />
    {isDone ? 'Done' : 'Mark as Done'}
  </button>
)}

                      <button
                        onClick={() =>
                          tab === 'plan' ? removeFromPlan(item.id) : removeFromSaved(item.id)
                        }
                        className="h-7 w-7 flex items-center justify-center rounded-md border border-[rgba(156,163,175,0.3)] text-[#9CA3AF]"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default MyPlan


