import React from 'react'
import {motion} from 'framer-motion'
import figma from '../assets/figma.svg'
import react from '../assets/react.svg'
import Image from 'next/image'
import apollo from '../assets/apollo.svg'
import css from '../assets/css.svg'
import firebase from '../assets/firebase.svg'
import git from '../assets/git.svg'
import graphql from '../assets/graphql.svg'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import nextjs from '../assets/nextjs.svg'
import node from '../assets/node.svg'
import redux from '../assets/redux.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import vite from '../assets/vite.svg'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0,
    }}
    whileInView={{opacity:1}}
    transition={{duration: 2}}
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px:10 xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Skills that i used in my projects</h3>

        <div className='grid grid-cols-4 gap-5 px-10'>
            <Image src={html} className='icon' alt="" />
            <Image src={css} className='icon' alt="" />
            <Image src={js} className='icon' alt="" />
            <Image src={react} className='icon' alt="" />
            <Image src={typescript} className='icon' alt="" />
            <Image src={redux} className='icon' alt="" />
            <Image src={node} className='icon' alt="" />
            <Image src={nextjs} className='icon' alt="" />
            <Image src={graphql} className='icon' alt="" />
            <Image src={apollo} className='icon' alt="" />
            <Image src={firebase} className='icon' alt="" />
            <Image src={vite} className='icon' alt="" />
            <Image src={tailwind} className='icon' alt="" />
            <Image src={git} className='icon' alt="" />
            <Image src={figma} className='icon' alt="" />
            
        </div>
    </motion.div>
  )
}

export default Skills