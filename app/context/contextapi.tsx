"use client";

import React, { FC, createContext, useState,RefObject } from "react";

export type User={
    user:string,
    category:category
}
type category={name:string,icon:string}[]
const category:category=[{name:"trends",icon:"ri-fire-fill"},{name:"action",icon:"ri-sword-fill"},{name:"romance",icon:"ri-heart-2-fill"},{name:"fiction",icon:"ri-bear-smile-fill"},{name:"Horror",icon:"ri-ghost-2-fill"},{name:"special",icon:"ri-magic-fill"},{name:"darker",icon:"ri-moon-fill"}]

export const context=createContext<User | undefined>(undefined)

export type prop={
    children:React.ReactNode
}

export const handleWheel=(cat:RefObject<HTMLDivElement>)=>(evenet:WheelEvent)=>{
    if(cat.current) {
      evenet.preventDefault()
      evenet.deltaY>0? cat.current.style.marginLeft=((evenet.deltaY/100)*-1)*10+"rem":cat.current.style.marginLeft=0+'rem';
    }
}

const dashbord:FC<prop>= ({children}) => {
    const [user,setUser]=useState<string>("name")
  return (
    <context.Provider value={{user,category}}>
        {children}
    </context.Provider>
  )
}

export default dashbord



