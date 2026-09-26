
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const PlanContext = createContext()
export const usePlan = () => useContext(PlanContext)

const PLAN_CAP = 5

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState([])
  const [saved, setSaved] = useState([])
  const [doneIds, setDoneIds] = useState([])

  useEffect(() => {
    const savedPlan = localStorage.getItem('fitlog_plan')
    const savedSaved = localStorage.getItem('fitlog_saved')
    const savedDone = localStorage.getItem('fitlog_done')
    if (savedPlan) setPlan(JSON.parse(savedPlan))
    if (savedSaved) setSaved(JSON.parse(savedSaved))
    if (savedDone) setDoneIds(JSON.parse(savedDone))
  }, [])

  useEffect(() => {
    localStorage.setItem('fitlog_plan', JSON.stringify(plan))
  }, [plan])

  useEffect(() => {
    localStorage.setItem('fitlog_saved', JSON.stringify(saved))
  }, [saved])

  useEffect(() => {
    localStorage.setItem('fitlog_done', JSON.stringify(doneIds))
  }, [doneIds])

  const addToPlan = (item) => {
    const alreadyExists = plan.some((w) => w.id === item.id)
    if (alreadyExists) {
      toast.error("Already in today's plan")
      return
    }
    if (plan.length >= PLAN_CAP) {
      toast.error("Today's plan is full (5 max)")
      return
    }
    setPlan([...plan, item])
    toast.success("Added to today's plan")
  }

  const addToSaved = (item) => {
    const alreadyExists = saved.some((w) => w.id === item.id)
    if (alreadyExists) {
      toast.error("Already saved")
      return
    }
    setSaved([...saved, item])
    toast.success("Saved for later")
  }

  const removeFromPlan = (id) => {
    setPlan(plan.filter((w) => w.id !== id))
    setDoneIds(doneIds.filter((d) => d !== id))
    toast.success("Removed from plan")
  }

  const removeFromSaved = (id) => {
    setSaved(saved.filter((w) => w.id !== id))
    toast.success("Removed from saved")
  }

  const toggleDone = (id) => {
    if (doneIds.includes(id)) {
      setDoneIds(doneIds.filter((d) => d !== id))
      toast.success("Marked as not done")
    } else {
      setDoneIds([...doneIds, id])
      toast.success("Marked as done")
    }
  }

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        doneIds,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
        toggleDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  )
}