"use client"
import React, { useState, useEffect, useContext } from 'react';
import { User, context} from '../context/contextapi'

const movieRow = () => {
  const [movie,setMovies]=useState()
  const {fetchMovies}=useContext(context) as User
  useEffect( ()=>{
 fetchMovies(setMovies)
console.log(movie)
  },[])
  return (
    <div  style={{transition:'all ease 0.3s'}} className="w-full cat h-[50%] flex-col  px-10 py-3 flex  gap-3 overflow-x-scroll">
      <div className="nav">
        <h1 style={{textShadow:"0px 2px 12px #00000080"}} className='text-2xl font-medium uppercase drop-shadow-xl'>upcoming</h1>
      </div>
      <div className="flex items-center w-full h-full px-4 gap-3 mt-4">
            <div className="movieCard w-[12rem] h-full rounded-lg bg-zinc-900">

            </div>
        </div>
    </div>
  )
}

export default movieRow
