import React from 'react'
import {motion} from 'framer-motion'


type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.2,
    }}
    viewport={{once: true}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-grow md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            about
        </h3>

        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        transition={{
            duration: 1.2,
        }}
        viewport={{once: true}}
        src='https://iv.pl/images/9d88d3856a9ca96d71c5fada71810bef.png'
        className='mt-24 s:mt-6 sm:mt-0 mb-4 md:mb-0 md:sm-0 flex-shrink-0 w-[150px] h-[150px] rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] xl:w-[500px] xl:h-[600px] sm:w-[300px] sm:h-[400px] sm:rounded-xl s:w-[300px] s:h-[340px] s:rounded-xl'
        />


        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span>  background</h4>
            <p className='text-base '>
                I'm Patryk. I have 27 years old and graduated from University of Technologies in Opole in the field of computer science. I've been interested in programming since I started my studies. I've been programming more intensivly for over a year. In the future i want to be a full stack develeoper which is my dream. I still learn new technologies and when I making new project i try to put some new stuff to improve myself. Currently looking for a new job, opportunity and place that I could learn and maybe in nearly future teach that would be awesome! Trekking, kickboxing, traveling and exploring that are my passions!
            </p>
        </div>
    </motion.div>
  )
}

export default About