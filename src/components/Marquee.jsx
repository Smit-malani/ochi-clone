import React from 'react'
import {motion} from 'framer-motion'

function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full mt-10 py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text border-t-2 border-b-2 border-[#3E7870] text-white flex items-center whitespace-nowrap pb-9 overflow-hidden'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] font-bold uppercase leading-[14rem] tracking-tighter'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[24vw] font-bold uppercase leading-[14rem] tracking-tighter'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee