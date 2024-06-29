import React, { useState } from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section id='hero' className='flex items-center justify-center mt-24 px-[6vw]'>
      <div className="hero_wrapper flex max-[760px]:flex-col">
      <div id='heroContentWrapper' className="text-white flex flex-col items-start justify-center max-[760px]:items-center max-[760px]:mb-6 max-[760px]:gap-[10px]">
        <h1 className='text-4xl  font-bold pb-4 max-[760px]:text-[26px]  max-[760px]:p-0 max-[760px]:leading-none max-[760px]:text-center'>Blockchain & DeFi Experts & Consultants
        </h1>
        <p className='text-white max-[760px]:text-center max-[760px]:opacity-[0.7] max-[760px]:text-[14px]'>Delivering AI and Blockchain solutions to drive business outcomes for startups and enterprises</p>
        <button id='heroBtn' className='px-3 py-2 bg-white text-black rounded-xl font-bold mt-6 max-[760px]:mt-[10px]'>Get in touch</button>
      </div>
      <div id="heroImgWrapper">
        <img src="src\assets\components\HeroSection\img\banner.png" alt="banner image" />
      </div>
      </div>
    </section>
  )
}

export default Hero
