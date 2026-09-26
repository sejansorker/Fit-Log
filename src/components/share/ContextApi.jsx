"use client"
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const ProductApi = createContext()
const LoadingApi = createContext()   

const ContextApi = ({ children }) => {
  const [info, setInfo] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    axios.get("https://api.api-store.workers.dev/api/fitlog")
      .then((response) => {
        setInfo(response.data)
      })
      .catch((error) => {
        console.error("Failed to fetch workouts:", error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ProductApi.Provider value={info}>
      <LoadingApi.Provider value={loading}>
        {children}
      </LoadingApi.Provider>
    </ProductApi.Provider>
  )
}

export { ContextApi, ProductApi, LoadingApi }

