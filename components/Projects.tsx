import React from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'
import bank from '../assets/bank.png'
import blog from '../assets/blog.png'
import comfy from '../assets/comfy.png'
import whatsup from '../assets/whatsup.png'
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {
    const projects = [1,2,3,4,5]
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 2.5}}
    className='h-[180vh] xl:h-[140vh] sm:h-[130vh]  relative flex flex-col max-w-[1280px] w-[100%]  mx-auto items-center z-0  overflow-hidden'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
        </h3>
        <div className='grid sm:grid-cols-2 gap-3 sm:gap-5 absolute top-40 p-5 z-20  max-w-[80%] '>
          <div className='pb-5  flex flex-col justify-center items-center text-center space-y-1 border border-[white]'>
            <Image src={blog} alt='blog' className='w-[100%] items-start'/>
            <p className='uppercase text-gray-500 tracking-[5px]'>blog</p>
            <p className='uppercase text-gray-500 tracking-[1px] flex-shrink-1'>React | Next.js | GraphQL | GraphCMS | TawilwindCSS</p>
            <Link href='https://graphcms-blog-one-dusky.vercel.app/'>
              <button type='button' className='border border-[#F7AB0A] text-[#F7AB0A] px-5 mt-[20px] py-1 hover:bg-[#242424] hover:text-[#F7AB0A] cursor-pointer'>LIVE</button>
            </Link>
          </div>

{/* whatsup */}
          <div className='pb-5  flex flex-col justify-center items-center text-center space-y-1 border border-[white]'>
            <div className='object-cover'>

            <Image src={whatsup} alt='blog' className='w-[100%] justify-start flex'/>
            </div>
            <p className='uppercase text-gray-500 tracking-[5px]'>whatsaap</p>
            <p className='uppercase text-gray-500 tracking-[1px] flex-shrink-1'>Next.js | Firebase | Styled-Components | 1- 1 Messsaging</p>
            <Link href='https://whatsapp-clone-five-rho.vercel.app/'>
              <button type='button' className='border  border-[#F7AB0A] text-[#F7AB0A] px-5 py-1 hover:bg-[#242424] hover:text-[#F7AB0A] cursor-pointer'>LIVE</button>
            </Link>
          </div>

{/* shop */}
          <div className='pb-5  flex flex-col justify-center items-center text-center space-y-1 border border-[white]'>
            <Image src={comfy} alt='blog' className='w-[100%] justify-start flex'/>
            <p className='uppercase text-gray-500 tracking-[5px]'>E-COMMERCE</p>
            <p className='uppercase text-gray-500 tracking-[1px] flex-shrink-1'>React | StyledComponent | ContextAPI | React Router</p>
            <Link href='https://capstone-7b6cb.web.app/'>
              <button type='button' className='border border-[#F7AB0A] text-[#F7AB0A] px-5 py-1 hover:bg-[#242424] hover:text-[#F7AB0A] cursor-pointer'>LIVE</button>
            </Link>
          </div>

{/* webstiiebank */}
          <div className='pb-5  flex flex-col justify-start items-center text-center space-y-1 border border-[white]'>
            <Image src={bank} alt='blog'  className='justify-start flex w-[100%]'/>
            <p className='uppercase text-gray-500 tracking-[5px]'>BANK </p>
            <p className='uppercase text-gray-500 tracking-[1px] flex-shrink-1'>React | Vite | TailwindCSS </p>
            <Link href='https://moder-website.netlify.app/'>
              <button type='button' className='border border-[#F7AB0A] text-[#F7AB0A] px-5 py-1 hover:bg-[#242424] hover:text-[#F7AB0A] cursor-pointer'>LIVE</button>
            </Link>
          </div>
        </div>
        


        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

        </div>

    </motion.div>
  )
}

export default Projects