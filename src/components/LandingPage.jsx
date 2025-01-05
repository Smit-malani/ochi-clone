import React from 'react'
import { GoArrowUpRight } from "react-icons/go"
import { easeInOut, motion, useAnimate, useAnimation} from 'framer-motion'



function LandingPage() {

  const button = useAnimation()

  function handleHover(){
    button.start({backgroundColor: "#212121", color: "white"})
 }

 function handleHoverEnd(){
  button.start({backgroundColor: "transparent", color: "#212121"})
 }
  
  return (
    <div data-scroll data-scroll-speed="-.4" className='w-full h-screen pt-1 '>
        <div className='textstructure mt-36 pl-12'>
            {["we create","Eye-opening","presentations"].map((item,index)=>{
                return <div key={index} className='masker'>
                  <div className='w-fit flex items-center overflow-hidden'>
                    {index === 1 && (<motion.div initial={{width:0}} animate={{width: "11vw"}} transition={{ease: [0.76, 0, 0.24, 1],duration:1}} className='w-[11vw] rounded-md overflow-hidden mr-2 h-[67px] mt-3'>
                      <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" className='w-full h-full object-cover' alt="" />
                    </motion.div>)}
                    <h1 key={index} className='uppercase text-8xl leading-[85px] tracking-tighter font-bold opacity-85'>{item}</h1>
                  </div>
            </div>
            })}
        </div>
        <div className='border-t-[1px] border-zinc-400 mt-28 flex justify-between items-center px-12 py-4'>
            {["For public and private companies", "From the first pitch to IPO"].map((item,index)=><p key={index} className='opacity-80 tracking-tight'>{item}</p>)}
            <motion.div onHoverStart={handleHover} onHoverEnd={handleHoverEnd} className='start uppercase flex items-center gap-1 '>
              <motion.div initial={{ backgroundColor: "transparent", color: "#212121" }} animate={button} transition={{ease: easeInOut, duration: 1}} className='text-[14px] border-2 cursor-pointer rounded-full border-[#212121] px-4 py-[3px] opacity-80 tracking-tight'>Start the project</motion.div>
              <motion.div initial={{ backgroundColor: "transparent", color: "#212121" }} animate={button} transition={{ease: easeInOut, duration: 1}} className='w-8 h-8 rounded-full border-[1px] border-[#212121] flex items-center justify-center text-lg'><GoArrowUpRight />
              </motion.div>
          </motion.div>
        </div> 
    </div>
  )
}

export default LandingPage