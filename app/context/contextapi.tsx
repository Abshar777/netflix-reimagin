"use client";

import React, { FC, createContext, useState,RefObject } from "react";
import axios from 'axios';
export type User={
    user:string,
    category:category,
    fetchMovies:PromiseFn
}
type category={name:string,icon:string}[]
const category:category=[{name:"trends",icon:"ri-fire-fill"},{name:"action",icon:"ri-sword-fill"},{name:"romance",icon:"ri-heart-2-fill"},{name:"fiction",icon:"ri-bear-smile-fill"},{name:"Horror",icon:"ri-ghost-2-fill"},{name:"special",icon:"ri-magic-fill"},{name:"darker",icon:"ri-moon-fill"},]

export const context=createContext<User | undefined>(undefined)

export type PromiseFn=(setMovies:any)=>Promise<void>


export type prop={
    children:React.ReactNode
}

export const handleWheel=(cat:RefObject<HTMLDivElement>)=>(evenet:WheelEvent)=>{
    if(cat.current) {
      console.log(evenet);
      
      evenet.preventDefault()
      evenet.deltaY>0? cat.current.style.marginLeft=((evenet.deltaY/100)*-1)*10+"rem":cat.current.style.marginLeft=0+'rem';
    }
}

export const fetchMovies:PromiseFn = async (setMovies) => {
  try {
    const apiKey = '592a230699ace7cdf1f687f294a893ce';
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: apiKey,
        with_genres: 16, 
        language: 'en-US',
      }
    });
    console.log(response.data)
    setMovies(response.data.results);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

const dashbord:FC<prop>= ({children}) => {
    const [user,setUser]=useState<string>("name")
  return (
    <context.Provider value={{user,category,fetchMovies}}>
        {children}
    </context.Provider>
  )
}

export default dashbord



