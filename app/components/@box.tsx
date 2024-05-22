"use client"
import React, { useContext, useEffect, useRef } from 'react'
import { User, context, handleWheel } from '../context/contextapi'
type prop={}

const box:React.FC = ({}:prop) => {
    const cat=useRef<HTMLDivElement>(null)
    const weel=useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const whellHandle=handleWheel(weel)
        cat.current?.addEventListener('wheel',whellHandle)
        return ()=>{
            if(cat.current) cat.current.removeEventListener('wheel',whellHandle); 
        }
    },[])
    const {category}=useContext(context) as User
  return (
  <div ref={cat} style={{transition:'all ease 0.3s'}} className="w-full cat h-[20%] px-10 py-3 flex items-center gap-5 overflow-x-scroll  ">
    {category.map((e,i)=>(
         <div ref={i==0?weel:null}  key={i} style={{transition:"all ease 0.4s", scrollSnapAlign:'start'}}  className="box cursor-pointer shadow-[1px_1px_1px_0_#0000001f] hover:translate-x-[-.2rem] hover:translate-y-[-.3rem] hover:shadow-[3px_3px_1px_0_#0000001f] flex min-w-[12rem] w-[12rem] h-full bg-[#ffffff2e] items-center justify-center  border-[#ffffff4d] border-1  backdrop-blur-2xl rounded-2xl ">
         <h1 className='text-xl drop-shadow-lg'><i className={`${e.icon}`}></i>{e.name}</h1>
     </div>  
    ))
    }
   
  </div>
  )
}

export default box
