import React, { useContext } from 'react'
import Image from 'next/image';
import bgImg from '../../public/images/9434619.jpg'
import Logo from '../../public/images/New Project 132 [147BB24] (1).png'
import { User, context } from '../context/contextapi';

type prop={}

const nav:React.FC = ({}:prop) => {
  const {user}=useContext(context) as User
  return (
    <div className='w-full h-[5rem] backdrop-blur-sm sticky top-0 z-[999999999] overflow-hidden px-7 py-6 flex items-center justify-between '>
     <div style={{filter: "drop-shadow(2px 4px 4px #00000038)"}} className="div w-[15rem] md:w-[13rem] h-[5rem] overflow-hidden ">
     <Image src={Logo} className='object-cover w-full h-full ' alt=""/>
     </div>
     <div className="w-full h-full flex md:absolute  fixed md:items-start items-end md:py-5 py-5 justify-center  bottom-[1rem] md:bottom-0  md:left-0">
      <div style={{filter: "drop-shadow(2px 4px 4px #00000038)"}} className="rounded-full flex  md:flex text-sm h-[2.5rem] capitalize md:w-[23%] sm:w-[50%] w-[80%] md:ms-[0] ms-[-2.5rem]  md:relative  bg-[#010F1D] px-3 py-2 items-center justify-between">
        <h1>home</h1>
        <h1 className="opacity-75">movie</h1>
        <h1 className="opacity-75">series</h1>
        <div className="w-[1.8rem] flex items-center justify-center h-[1.8rem] bg-[#1B2733] text-white rounded-full">
        <i className="ri-search-line"></i>
        </div>
      </div>
      </div>
      <div className="profile gap-4 flex items-center justify-center h-full">
        <div className="notification hidden rounded-full sm:flex items-center justify-center bg-[#ffffff52] backdrop-blur-xl w-[2.5rem] h-[2.5rem]">
            <i className="ri-notification-4-fill"></i>
        </div>
      <div className="flex gap-2 items-center justify-center h-full">
      <div className="notification rounded-full drop-shadow-md overflow-hidden flex items-center justify-center bg-[#ffffff52] backdrop-blur-xl w-[2.5rem] h-[2.5rem]">
            <Image src={bgImg} alt="" className='w-full h-full object-cover'/>
        
        </div>
        <div className="flex flex-col ">
           <h1 className='text-md'>{user}</h1>
           <p className='text-[.7rem] opacity-75'>premium</p>
           </div>
      </div>
      </div>
    </div>
  )
}

export default nav
