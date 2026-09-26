
"use client";

import React, { useContext } from "react";
import { useParams } from "next/navigation";
import { ProductApi, LoadingApi } from "@/components/share/ContextApi";
import { usePlan } from "@/components/share/PlanContext";
import Image from "next/image";
import Container from "@/components/share/Container";
import { Plus, Bookmark } from "lucide-react";

const WorkoutDetails = () => {
  const { id } = useParams();
  const data = useContext(ProductApi);
  const loading = useContext(LoadingApi);
  const { addToPlan, addToSaved } = usePlan();

  if (loading) {
    return (
      <Container>
        <p className="text-white pt-20 text-center">Loading workout…</p>
      </Container>
    );
  }

  const item = data?.find((w) => String(w.id) === String(id));

  if (!item) {
    return (
      <Container>
        <p className="text-white pt-20 text-center">Workout not found.</p>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 pb-16">

        <div className="relative w-full h-[350px] lg:h-[735px] bg-[#0c0c0d] rounded-xl overflow-hidden">
          <Image
            src={item.image}
            fill
            className="object-cover"
            alt={item.name}
          />
        </div>
        <div>
          <h1 className="text-white font-bold text-[32px] uppercase">
            {item.name}
          </h1>

          <p className="text-[#9CA3AF] text-[14px] pt-3 max-w-md">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {item.muscleGroups?.map((tag) => (
              <span
                key={tag}
                className="py-0.5 px-2.5 rounded-full bg-[#C2F800] text-black font-bold text-[11px] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6 rounded-xl bg-[rgba(156,163,175,0.1)]">
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Equipment</span>
              <span className="text-white">{item.equipment}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Difficulty</span>
              <span className="text-white">{item.difficulty}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Sets</span>
              <span className="text-white">{item.sets}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Reps</span>
              <span className="text-white">{item.reps}</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Duration</span>
              <span className="text-white">{item.duration} min</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm border-b border-gray-700">
              <span className="text-[#9CA3AF]">Calories</span>
              <span className="text-white">{item.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between px-4 py-3 text-sm">
              <span className="text-[#9CA3AF]">Rating</span>
              <span className="text-white">{item.rating}</span>
            </div>
          </div>

          <h2 className="text-white font-bold uppercase pt-8 pb-3">
            Instructions
          </h2>
          <ol className="space-y-3">
            {item.instructions?.map((step, i) => (
              <li key={i} className="flex gap-3 text-[#9CA3AF] text-sm">
                <span className="shrink-0 h-6 w-6 rounded-full bg-[#C2F800] text-black text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => addToPlan(item)}
              className="flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#C2F800] hover:text-black cursor-pointer"
            >
              <Plus size={16} />
              Add to today's plan
            </button>

            <button
              onClick={() => addToSaved(item)}
              className="flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-bold uppercase text-white transition hover:bg-[#C2F800] hover:text-black cursor-pointer"
            >
              <Bookmark size={16} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default WorkoutDetails;

