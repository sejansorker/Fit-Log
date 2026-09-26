"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

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
      alert("This is already in today's plan")
      return
    }
    if (plan.length >= PLAN_CAP) {
      alert("Today's plan is full (5 max)")
      return
    }
    setPlan([...plan, item])
  }

  const addToSaved = (item) => {
    const alreadyExists = saved.some((w) => w.id === item.id)
    if (alreadyExists) {
      alert("This is already saved")
      return
    }
    setSaved([...saved, item])
  }

  const removeFromPlan = (id) => {
    setPlan(plan.filter((w) => w.id !== id))
    setDoneIds(doneIds.filter((d) => d !== id)) 
  }

  const removeFromSaved = (id) => {
    setSaved(saved.filter((w) => w.id !== id))
  }

  const toggleDone = (id) => {
    if (doneIds.includes(id)) {
      setDoneIds(doneIds.filter((d) => d !== id))
    } else {
      setDoneIds([...doneIds, id])
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