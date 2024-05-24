"use client";
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import bgImg from '../public/images/Up (Pete Docter 2009 _ Pixar).jpeg'
import Nav from './components/@nav';
import Banner from './components/@banner';
import Box from './components/@box';
import MovieRow from './components/movieRow';

const page: React.FC = () => {
   
  return (
    <div  className="main text-white text-medium relative w-full h-lvh  bg-[#7A8E99]">
      <Image src={bgImg} alt="" objectFit='cover' className='w-full h-full absolute object-cover opacity-75' />
      <div  className="glass w-full overflow-x-hidden relative h-full backdrop-blur-3xl bg-[#7a8e9947]">
        <Nav />
        <Banner />
        <Box/>
        <MovieRow/>
      </div>
    </div>
  )
}

export default page
