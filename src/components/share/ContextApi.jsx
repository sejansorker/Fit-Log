"use client"
import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
const ProductApi = createContext()
const ContextApi = ({children}) => {
    const [info, setInfo ] = useState([])
    const getData = ()=>{
        axios.get("https://api.abcz.workers.dev/api/fitlog").then((response)=>{
          setInfo(response.data);
        })
    }
    useEffect(()=>{
         getData()
    },[])
  return (
    <ProductApi.Provider value={info}>{children}</ProductApi.Provider>
  )
}

export  {ContextApi,ProductApi}