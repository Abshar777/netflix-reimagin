import React from 'react'
import Image from 'next/image';
import banner1 from '../../public/images/download.jpeg'
import banner2 from '../../public/images/download (2).jpeg'
type prop={}

const banner = ({}:prop) => {
  
  return (
    <div className='w-full relative sm:h-[50%] h-[45%] px-7 py-7 gap-5 flex items-center justify-around'>
        <div style={{transition:"all ease 0.5s"}} className="card cursor-pointer w-[40%] hidden shadow-[3px_2px_8px_0_#00000073] hover:translate-y-[-.3rem] hover:translate-x-[-.2em] hover:shadow-[6px_5px_8px_0_#00000073] transition-all ease-linear duration-[.3s] overflow-hidden flex-col gap-3 bg-red-700  justify-start relative h-full md:flex rounded-xl  text-white ">
      
        <div className="overlay absolute flex items-center justify-end  w-full h-full z-[0]">
            <div className="cardimg relative
             w-[50%]  rounded-md h-full">
              <div className="bg-red-700 w-[20%] h-[120%] absolute blur-md left-[-1rem] "></div>
               <Image className='object-cover w-full h-full ' src={banner1} alt=""/>
            </div>
              <div style={{background: "linear-gradient(45deg, #000000bd, transparent)"}}className="overlay absolute w-full h-full "></div>
           </div>
           <div className="py-12 px-5 w-full h-full flex-col gap-2   justify-start relative flex">

           <h1 className='text-[1.7rem] w-[40%] px-2 font-semibold space-x-3 uppercase '>THE <br />ADVENTURS OF HEROS</h1>
           <div className="flex px-2">
            <p><i className="ri-play-mini-fill bg-zinc-900 p-1 rounded-full"></i> play big hero six</p>
           </div>
           </div>
          
        </div>
        <div style={{transition:"all ease 0.5s"}} className="card md:w-[55%] shadow-[3px_2px_8px_0_#00000073] hover:translate-y-[-.3rem] hover:translate-x-[-.2em] hover:shadow-[6px_5px_8px_0_#00000073] transition-all ease-linear duration-[.3s] w-[100%] overflow-hidden relative h-full flex bg-[#06a675] rounded-xl  text-white ">
        <div className="overlay absolute flex items-center justify-end  w-full h-full z-[0]">
            <div className="cardimg relative
             w-[60%]  rounded-md h-full">
              <div className="bg-[#06a675] w-[20%] h-[120%] absolute blur-md left-[-2rem] "></div>
               <Image className='object-cover w-full h-full ' src={banner2} alt=""/>
            </div>
              <div style={{background: "linear-gradient(45deg, #000000bd, transparent)"}} className="overlay absolute w-full h-full "></div>
           </div>
           <div className="py-12 px-5 w-full h-full flex-col gap-2   justify-start relative flex">

           <h1 className='text-[1.7rem] w-[40%] px-2 font-semibold space-x-3 uppercase '>THE <br />RAYA AND LAST DRAGONE</h1>
           <div className="flex px-2">
            <p><i className="ri-play-mini-fill bg-zinc-900 p-1 rounded-full"></i> play big hero six</p>
           </div>
           </div>
        </div>
    </div>
  )
}

export default banner
