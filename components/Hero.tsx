import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import profile from '../assets/profile.png'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ['Hi, I am Patryk Panek', 'Guy-who-loves-coding', '<Know-Me-Better>'],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image width={128} height={128} className='relative rounded-full mx-auto object-cover' src={profile} alt="" />

        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Junior frontend developer</h2>
            <h1 className='text-5xl lg:tex-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='yellow'/>
            </h1>
            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                <Link href='#projects'> 
                    <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero